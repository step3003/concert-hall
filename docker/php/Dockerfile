FROM ghcr.io/dev-family/php-fpm-alpine:1.0.0 as dev

USER root

# Hooks for installing additional extensions or packages

USER php

###

FROM dev as vendor

COPY --chown=php:php backend/composer.json backend/composer.lock ./

RUN composer install --no-scripts

###

FROM dev as back

COPY --chown=php:php --from=vendor /app/vendor vendor

COPY --chown=php:php backend .

# trigger post-install hooks

RUN composer install --optimize-autoloader

FROM node:16-alpine as front

WORKDIR /app

CMD ["yarn" , "dev"]

###

FROM dev

COPY frontend/client/package.json frontend/client/yarn.lock /app/

RUN yarn


RUN yarn build

CMD ["yarn", "start"]