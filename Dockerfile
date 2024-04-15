# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

ARG NODE_VERSION=16.14.0

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 3000

ENV DB_NAME=ba2ndivq93vckjxtbshv DB_USER=admin DB_PASSWORD=biast@dmin DB_HOST=localhost DB_PORT=5432 SERVER_PORT=3000 TOKEN_KEY=dgdhgfubvhvoljklkjyffcdcjcgcg

# Run the application.
CMD ["npm", "start"]
