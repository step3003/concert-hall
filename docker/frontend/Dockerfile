FROM node:16-alpine as dev

WORKDIR /app

CMD ["yarn", "dev"]

FROM dev

COPY frontend/package.json fronted/yarn.lock ./

RUN yarn

COPY fronted /app

RUN yarn build

CMD ["yarn", "start"]
