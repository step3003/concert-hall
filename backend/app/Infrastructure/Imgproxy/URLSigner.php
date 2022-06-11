<?php

namespace App\Infrastructure\Imgproxy;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Config;

class URLSigner
{
    protected string $key;
    protected string $url;
    protected string $salt;

    public function __construct()
    {
        $this->key = pack("H*", Config::get('imgproxy.key'));
        $this->salt = pack("H*", Config::get('imgproxy.salt'));
        $this->url = Config::get('imgproxy.url');
    }

    public static function resolve(): static
    {
        return resolve(static::class);
    }

    public function sign(?string $path, string $options = null, $extension = null, $disk = null): ?string
    {
        if (!$path || !$disk) {
            return null;
        }

        if (!$extension) {
            $extension = $this->getExtension($path);
        }

        $encodedURL = $this->getEncodedURL($path, Config::get('filesystems.disks.' . $disk . '.bucket'));

        if ($options) {
            $options = "/$options";
        }
        $path = "{$options}/{$encodedURL}.{$extension}";

        return $this->signURL($path);
    }

    public function simpleSign(?string $path, $disk = null): ?string
    {
        return $this->sign($path, '', '', $disk);
    }

    private function getExtension(string $path): string
    {
        $extension = File::extension($path);
        $extension = Str::lower($extension);

        if ($extension == 'heic') {
            $extension = 'jpg';
        }

        return $extension;
    }

    private function getEncodedURL(string $path, $bucket): string
    {
        return rtrim(strtr(base64_encode($this->prepareURL($path, $bucket)), '+/', '-_'), '=');
    }

    private function prepareURL(string $path, $bucket): string
    {
        return "s3://{$bucket}/{$path}";
    }

    private function signURL(string $path): string
    {
        $signature = rtrim(strtr(base64_encode(hash_hmac('sha256',
            $this->salt . $path, $this->key, true)), '+/', '-_'), '=');
        return "$this->url/{$signature}{$path}";
    }
}
