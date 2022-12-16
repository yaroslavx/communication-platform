ARG NODE_VERSION=16.13.1

FROM yaroslavx/communication-platform_client AS client

FROM node:$NODE_VERSION

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn 

COPY . .

COPY --from=client /client/dist /app/client/dist

EXPOSE 5000

CMD ["yarn", "start"]