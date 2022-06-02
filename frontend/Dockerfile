FROM node:16-alpine as dev

WORKDIR /home/node/app

CMD ["yarn", "dev"]

FROM dev

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

RUN yarn build

CMD ["yarn", "start"]
