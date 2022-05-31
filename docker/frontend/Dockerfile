FROM node:16.13.1-alpine as dev

WORKDIR /app

CMD ["yarn", "dev"]

###

FROM dev

COPY frontend/package.json fronted/yarn.lock /app/

RUN yarn

COPY fronted /app

RUN yarn build

CMD ["yarn", "start"]
