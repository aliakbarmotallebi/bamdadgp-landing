# Use Node.js base image
FROM node:18-bullseye

# Set working directory
WORKDIR /app

# Install build tools for native dependencies
RUN apt-get update && apt-get install -y python3 g++ make && rm -rf /var/lib/apt/lists/*

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the project files
COPY . .

# Expose Strapi default port
EXPOSE 1337

# Start the Strapi server
CMD ["yarn", "develop"]
