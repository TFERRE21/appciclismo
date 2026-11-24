FROM node:24-alpine
WORKDIR /app
COPY web.mjs ./
COPY public ./public
RUN mkdir -p /app/data && chown node:node /app/data
USER node
ENV DATA_DIR=/app/data PORT=8080
EXPOSE 8080
CMD ["node","web.mjs"]
