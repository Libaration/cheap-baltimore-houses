FROM node:alpine AS builder
RUN apk add --no-cache libc6-compat
RUN apk update
# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=client --docker

FROM node:alpine AS installer
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN yarn install --timeout 1000000

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
RUN yarn turbo run build --filter=client...
RUN rm -rf node_modules
RUN yarn install --production --frozen-lockfile --ignore-scripts --prefer-offline


FROM node:alpine AS runner
WORKDIR /app
COPY --from=installer /app/apps/client/package.json ./apps/client/package.json
COPY --from=installer /app/node_modules ./apps/client/node_modules
COPY --from=installer /app/apps/client/public ./apps/client/public
COPY --from=installer /app/apps/client/.next ./apps/client/.next

EXPOSE 3000
CMD ["npm", "start", "--prefix", "apps/client"]