<?php

namespace App\Infrastructure\MediaLibrary\Presets;

use Throwable;

use Illuminate\Contracts\Support\Arrayable;

/**
 *
 * Подробное описание параметров читайте в документации
 *
 * @see     https://docs.imgproxy.net/#/generating_the_url_advanced
 * @package App\Services\MediaLibrary\Conversions
 */
class ImgProxyPreset implements Arrayable
{
    public const DELIMITER = ':';
    public const RESIZE_TYPE_FIT = 'fit';
    public const RESIZE_TYPE_FILL = 'fill';
    public const RESIZE_TYPE_AUTO = 'auto';

    public const RESIZE_TYPES = [
        self::RESIZE_TYPE_FIT,
        self::RESIZE_TYPE_FILL,
        self::RESIZE_TYPE_AUTO,
    ];

    public const GRAVITY_TYPE_NO = 'no';
    public const GRAVITY_TYPE_SO = 'so';
    public const GRAVITY_TYPE_EA = 'ea';
    public const GRAVITY_TYPE_WE = 'we';
    public const GRAVITY_TYPE_NO_EA = 'noea';
    public const GRAVITY_TYPE_NO_WE = 'nowe';
    public const GRAVITY_TYPE_SO_EA = 'soea';
    public const GRAVITY_TYPE_SO_WE = 'sowe';
    public const GRAVITY_TYPE_CE = 'ce';
    public const GRAVITY_SPECIAL_TYPE_SMART = 'sm';
    public const GRAVITY_SPECIAL_TYPE_FOCUS = 'fp';

    public const GRAVITY_TYPES = [
        self::GRAVITY_TYPE_NO,
        self::GRAVITY_TYPE_SO,
        self::GRAVITY_TYPE_EA,
        self::GRAVITY_TYPE_WE,
        self::GRAVITY_TYPE_NO_EA,
        self::GRAVITY_TYPE_NO_WE,
        self::GRAVITY_TYPE_SO_EA,
        self::GRAVITY_TYPE_SO_WE,
        self::GRAVITY_TYPE_CE,
        self::GRAVITY_SPECIAL_TYPE_FOCUS,
        self::GRAVITY_SPECIAL_TYPE_SMART,

    ];

    protected ?int $height = null;
    protected ?int $width = null;
    protected ?string $dpr = null;
    protected ?string $resizeType = null;
    protected ?string $enlarge = null;
    protected ?string $extend = null;
    protected ?string $gravityType = null;
    protected ?string $gravityXOffset = null;
    protected ?string $gravityYOffset = null;
    protected ?int $cropWidth = null;
    protected ?int $cropHeight = null;
    protected ?string $cropGravityType = null;
    protected ?string $cropGravityXOffset = null;
    protected ?string $cropGravityYOffset = null;
    protected ?int $quality = null;
    protected ?string $background = null;
    protected ?int $blur = null;
    protected ?int $sharpen = null;
    protected ?string $extension = null;
    protected array $performOnCollections = [];
    protected string $name;

    public function __construct(string $name)
    {
        $this->name = $name;
    }

    public static function create(string $name): static
    {
        return new static($name);
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function performOnCollections(...$collectionNames): static
    {
        $this->performOnCollections = $collectionNames;

        return $this;
    }

    /*
    * Determine if this preset should be performed on the given
    * collection
    */
    public function shouldBePerformedOn(string $collectionName): bool
    {
        if (!count($this->performOnCollections)) {
            return true;
        }

        if (in_array('*', $this->performOnCollections)) {
            return true;
        }

        return in_array($collectionName, $this->performOnCollections);
    }

    public function extension(string $ext): static
    {
        $this->extension = $ext;

        return $this;
    }

    public function getExtension(): ?string
    {
        return $this->extension;
    }

    public function height(int $height): static
    {
        if ($height >= 0) {
            $this->height = $height;
        }

        return $this;
    }

    public function width(int $width): static
    {
        if ($width >= 0) {

            $this->width = $width;
        }

        return $this;
    }

    public function dpr(int $dpr): static
    {
        if ($dpr > 0) {
            $this->dpr = $dpr;
        }

        return $this;
    }

    public function resizeType(string $resizeType): static
    {

        if (in_array($resizeType, self::RESIZE_TYPES)) {
            $this->resizeType = $resizeType;
        }

        return $this;
    }

    public function enlarge(int $enlarge): static
    {
        if ($enlarge >= 0) {
            $this->enlarge = $enlarge;
        }

        return $this;
    }

    public function extend(int $extend): static
    {
        $this->extend = $extend;

        return $this;
    }

    public function gravity(string $type, $x = 0, $y = 0): static
    {
        if (!in_array($type, self::GRAVITY_TYPES)) {
            return $this;
        }

        $isWrongOffset = $this->isWrongGravityOffset($x, $y);

        if ($isWrongOffset && $type === self::GRAVITY_SPECIAL_TYPE_FOCUS) {
            return $this;
        } elseif ($isWrongOffset && $type !== self::GRAVITY_SPECIAL_TYPE_FOCUS) {
            $this->gravityType = $type;

            return $this;
        }

        $this->gravityType = $type;
        $this->gravityXOffset = $x;
        $this->gravityYOffset = $y;

        return $this;
    }

    private function isWrongGravityOffset($x, $y): bool
    {
        return $this->isWrongOffset($x) && $this->isWrongOffset($y);
    }

    protected function isWrongOffset($offset): bool
    {
        return $offset <= 0 && $offset >= 1;
    }

    public function crop(
        int    $width = 0,
        int    $height = 0,
        string $gravityType = null,
               $gravityX = 0,
               $gravityY = 0
    ): static
    {
        $this->cropWidth = $width;
        $this->cropHeight = $height;

        if (!$gravityType || !in_array($gravityType, self::GRAVITY_TYPES)) {
            return $this;
        }

        $isWrongOffset = $this->isWrongGravityOffset($gravityX, $gravityY);

        if ($isWrongOffset && $gravityType === self::GRAVITY_SPECIAL_TYPE_FOCUS) {
            return $this;
        } elseif ($isWrongOffset && $gravityType !== self::GRAVITY_SPECIAL_TYPE_FOCUS) {
            $this->cropGravityType = $gravityType;
            return $this;
        }

        $this->cropGravityType = $gravityType;
        $this->cropGravityXOffset = $gravityX;
        $this->cropGravityYOffset = $gravityY;

        return $this;
    }

    public function quality(int $qualityPercent): static
    {
        if ($qualityPercent >= 0 && $qualityPercent <= 100) {
            $this->quality = $qualityPercent;
        }

        return $this;
    }

    public function backgroundRGB(int $red, int $green, int $blue): static
    {
        $filterRGBCallback = function ($color) {
            return $color >= 0 && $color <= 100;
        };

        $colors = [$red, $green, $blue];

        if (count(array_filter($colors, $filterRGBCallback)) === 3) {
            $this->background = implode(self::DELIMITER, $colors);
        }

        return $this;
    }

    public function backgroundHEX(string $hex): static
    {
        try {
            $check = preg_match('/^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/', $hex);
        } catch (Throwable $exception) {
            $check = false;
        }

        if ($check) {
            $this->background = $hex;
        }

        return $this;
    }

    public function blur(int $blur): static
    {
        $this->blur = $blur;

        return $this;
    }

    public function sharpen(int $sharpen): static
    {
        $this->sharpen = $sharpen;

        return $this;
    }

    public function toString(): string
    {
        return collect($this->toArray())->map(function ($value, $key) {
            return $key . self::DELIMITER . $value;
        })->values()->implode('/');
    }

    public function toArray(): array
    {
        $params = [
            'w' => $this->width,
            'h' => $this->height,
            'rt' => $this->resizeType,
            'dpr' => $this->dpr,
            'el' => $this->enlarge,
            'ex' => $this->extend,
            'g' => $this->concatGravity($this->gravityType, $this->gravityXOffset, $this->gravityYOffset),
            'c' => $this->concatCrop(),
            'q' => $this->quality,
            'bg' => $this->background,
            'blur' => $this->blur,
            'sh' => $this->sharpen,
        ];

        return array_filter($params);
    }

    protected function concatGravity($type, $x, $y): ?string
    {
        if (!$type) {
            return null;
        }

        $result = $type;

        if ($type !== self::GRAVITY_SPECIAL_TYPE_SMART
            && !$this->isWrongOffset($x)
            && !$this->isWrongOffset($y)) {
            $result = $result . self::DELIMITER . $x . self::DELIMITER . $y;
        }

        return $result;
    }

    protected function concatCrop(): ?string
    {
        if (!$this->cropHeight && !$this->cropWidth) {
            return null;
        }
        $result = $this->cropWidth . self::DELIMITER . $this->cropHeight;
        $gravity = $this->concatGravity($this->cropGravityType, $this->cropGravityXOffset, $this->cropGravityYOffset);

        return $gravity ? $result . self::DELIMITER . $gravity : $result;
    }
}
