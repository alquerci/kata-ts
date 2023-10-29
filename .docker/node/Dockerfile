FROM node:18.18.2-alpine3.18

ENV YARN_RC_FILENAME yarnrc.yml
ENV NPM_CONFIG_USERCONFIG /app/npm.ini

RUN set -eux; \
    corepack enable; \
    :;

RUN set -eux; \
    prefix=/usr/local; \
    coveragedir=/tools/coverage; \
    mkdir -p ${coveragedir}; \
    cd ${coveragedir}; \
    \
    yarn add c8; \
    \
    ln -s ${coveragedir}/node_modules/.bin/c8 ${prefix}/bin/cover-js-script; \
    \
    cover-js-script --version; \
    :;
