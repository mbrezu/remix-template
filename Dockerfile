FROM node:18-bullseye-slim AS base
# set for base and all layer that inherit from it
RUN mkdir /app

FROM base AS deps
WORKDIR /app
ADD package.json package-lock.json ./
RUN npm install --production=false

FROM base AS production-deps
ENV NODE_ENV production
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
ADD package.json package-lock.json ./
RUN npm prune --production

FROM base AS build
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
ADD . .
RUN npm run build

FROM base
ENV NODE_ENV production
WORKDIR /app
ENV PORT="80"
ENV NODE_ENV="production"
COPY --from=production-deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build
COPY --from=build /app/public /app/public
COPY --from=build /app/package.json /app/package.json
ENTRYPOINT ["npm", "run", "start"]