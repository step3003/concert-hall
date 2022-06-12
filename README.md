# Concert-hall

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
