# Build
FROM node:16-alpine AS build
WORKDIR /build
COPY frontend/package.json frontend/yarn.lock ./
RUN yarn install 
COPY frontend/ .
RUN yarn build

# Dev
FROM node:16-alpine AS dev
WORKDIR /app
CMD ["yarn", "dev"]

# Run
FROM node:16-alpine AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
COPY --from=build --chown=nextjs:nodejs /build .
USER nextjs
CMD ["yarn", "start"]
