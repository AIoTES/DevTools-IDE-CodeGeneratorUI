#FROM nginx:1.17.1-alpine
#COPY /dist/codegenerator-ui /usr/share/nginx/html
FROM node:12.7-alpine
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]