FROM node:18.18.2-alpine3.18

RUN set -eux; \
    prefix=/usr/local; \
    mkdir -p /tools/coverage; \
    cd /tools/coverage; \
    \
    yarn add c8; \
    \
    ln -s /tools/coverage/node_modules/.bin/c8 ${prefix}/bin/cover-js-script; \
    \
    cover-js-script --version; \
    :;
