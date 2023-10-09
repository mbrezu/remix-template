FROM node:18-bullseye-slim AS base
# set for base and all layer that inherit from it
ENV NODE_ENV production


FROM base AS deps
WORKDIR /app
ADD package.json package-lock.json ./
RUN npm install --include=dev

FROM deps AS build
WORKDIR /app
ADD . .
RUN npm run build
#RUN npm prune --omit=dev

FROM base
WORKDIR /app
ENV PORT="8080"
ENV NODE_ENV="production"
COPY --from=build /app/build /app/build
COPY --from=build /app/public /app/public
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package.json /app/package.json
ENTRYPOINT ["npm", "run", "start"]