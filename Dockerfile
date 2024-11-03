# FROM ubuntu:23.04
# RUN apt-get update && apt-get install -y nodejs
FROM node:23.1.0
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8000
CMD [ "node", "server.js" ]