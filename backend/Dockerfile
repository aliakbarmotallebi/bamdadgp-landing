# Use Node.js base image
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN yarn install

# Copy the project files
COPY . .

# Start the Strapi server
CMD ["yarn", "develop"]
