FROM node:iron-slim AS backend_build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./server

FROM node:iron-slim
WORKDIR /app
COPY --from=backend_build /app/server/ ./
COPY --from=backend_build /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "run", "start"]
# Note: The backend server is expected to run on port 3000.
# If you need to change the port, modify the CMD line accordingly.