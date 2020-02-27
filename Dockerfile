FROM node
WORKDIR /usr/app/client
COPY . .
RUN yarn install
USER reactapp
RUN yarn run build
EXPOSE 3000