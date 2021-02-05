FROM node@sha256:8de47da5764557cce9e8cfea9c29f246484d37828e8bccf73f888ba5333400b3

WORKDIR /app

RUN apk update && \
  apk add git

ENV HOST 0.0.0.0