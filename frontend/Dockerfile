FROM node:iron-slim AS web_build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./client
RUN cd client && npm run build

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=web_build /app/client/dist/ /usr/share/nginx/html/
