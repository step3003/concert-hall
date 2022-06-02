FROM node:16-alpine as dev

WORKDIR /app

COPY frontend/package.json frontend/yarn.lock ./

RUN yarn install --frozen-lockfile

COPY frontend/ .

RUN yarn build 

CMD ["yarn", "dev"]
