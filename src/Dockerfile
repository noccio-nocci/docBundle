# Install dependencies only when needed
FROM node:slim AS base
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --non-interactive --frozen-lockfile --production
COPY . .

# Build
FROM base AS build
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /build
COPY --from=base /app .
RUN yarn run build

# Runner
FROM node:slim
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app

COPY package.json yarn.lock next.config.js ./
COPY --from=base /app/node_modules ./node_modules
COPY --from=build /build/public ./public
COPY --from=build /build/.next ./.next

EXPOSE 3000

CMD ["yarn", "start"]