# Install dependencies only when needed
FROM node:slim AS base
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .

# Build
FROM base AS build
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /build
COPY --from=base /app .
RUN yarn run build

# Packages
FROM node:slim AS node_modules
WORKDIR /modules
COPY package.json yarn.lock ./
RUN yarn install --non-interactive --frozen-lockfile --production

# Runner
FROM gcr.io/distroless/nodejs:16
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app

COPY package.json yarn.lock next.config.js ./
COPY --from=build /build/public ./public
COPY --from=build /build/.next ./.next
COPY --from=node_modules /modules/node_modules ./node_modules

EXPOSE 3000

CMD ["yarn", "start:next"]