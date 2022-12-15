FROM --platform=linux/amd64 node:16-alpine AS builder
ARG BASE_URL=placeholder
ARG API_URL=placeholder
ENV BASE_URL=$BASE_URL
ENV API_URL=$API_URL
ENV NEXT_SHARP_PATH=$NEXT_SHARP_PATH

RUN apk add --no-cache libc6-compat
RUN apk update
# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm_config_arch=x64 npm_config_platform=linux yarn workspace client add sharp
RUN turbo prune --scope=client --docker

FROM --platform=linux/amd64 node:16-alpine AS installer
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
COPY --from=builder /app/apps/client/next.config.js next.config.js
RUN yarn install --timeout 1000000

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
RUN yarn turbo run build --filter=client...
RUN rm -rf node_modules
RUN yarn install --production --frozen-lockfile --ignore-scripts --prefer-offline


FROM --platform=linux/amd64 node:16-alpine AS runner
WORKDIR /app
COPY --from=installer /app/apps/client/package.json ./apps/client/package.json
COPY --from=installer /app/node_modules ./apps/client/node_modules
COPY --from=installer /app/apps/client/public ./apps/client/public
COPY --from=installer /app/apps/client/.next ./apps/client/.next
COPY --from=installer /app/apps/client/next.config.js ./apps/client/next.config.js

EXPOSE 3000
CMD ["npm", "start", "--prefix", "apps/client"]