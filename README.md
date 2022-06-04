# concert-hall

## Сессии

### Клиент
Для отслеживания клиентов используются токены сгенерированные на стороне клиента.
Правило для генерации:

1. Подготовьте токен с высокой энтропией. Для этого подойдет библиотека nanoid.

2. Формируем JSON:
```json
{
    "source": "web",
    "token": "token-with-high-entropy" 
}
```

3. JSON преобразуем в base64 и отправляем как заголовок Authorization Bearer:
```json
{
    "Authorization": "Bearer base64-encoded-token"
}
```

При логауте удаляем токен из хранилища и создаем новый токен.

### Как работает?

Работает с помощью кастамного гварда. Гвард сначала получает авторизованный токен. Если у токена есть клиент, то пользователь токена считается авторизованным пользователем.

Смотреть в Domain\Sessions.

В случае если нужно убрать проверку на наличие токена отслеживания - добавляем мидлварь `WithoutTrackingMiddleware`. В таком случае Auth::user() всегда будет отдавать `null`, т.к. чтение токена не будет использоваться.

## Локальный запуск проекта

Используйте Docker + Docker compose

Команды:

```shell
# Сборка 
docker-compose build
# Устновить зависимости (первый запуск и изменение composer.lock)
docker-compose run --rm back composer install
# Запуск проекта
docker-compose up -d
# Логи
docker-compose logs -f
# Логи конкретного сервиса
docker-compose logs -f back
# Остальное через помощь
docker-compose help
# Помозь по команде docker-compose <command> --help, например
docker-compose exec --help
```
