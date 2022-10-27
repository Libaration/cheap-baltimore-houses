FROM --platform=linux/amd64 node:16-alpine as server-builder
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY . .
RUN npx turbo prune --scope=client
RUN cd out && \
    yarn install --network-timeout 1000000 && \ 
    yarn turbo run build --filter=client && \
    yarn workspaces focus --all --production && \
    rm -rf node_modules/.cache .yarn/cache apps/client/.next/cache

FROM --platform=linux/amd64 node:16-alpine as app
ENV NODE_ENV=production
WORKDIR /app
COPY --chown=node:node --from=server-builder /app/out .
WORKDIR /app/apps/client
USER 1000
EXPOSE 3000
CMD ["yarn", "start"]