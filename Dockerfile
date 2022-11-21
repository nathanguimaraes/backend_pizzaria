# This build when running in development mode

FROM node:18.7.0 As base

WORKDIR /app

COPY ["package.json", "yarn.lock*", "./"]

FROM base As dev

RUN yarn install --frozen-lockfile
COPY . .
CMD ["yarn", "start:dev"]

# This build when running in production

FROM base As prod

RUN yarn install --frozen-lockfile --production

COPY . .

RUN yarn add global @nestjs/cli

RUN yarn build

CMD ["yarn", "start:prod"]