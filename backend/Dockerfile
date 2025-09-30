# Use Node.js base image
FROM node:18-bullseye

ENV NODE_OPTIONS="--max-old-space-size=4096"

# Set working directory
WORKDIR /app

# Install build tools for native dependencies
RUN apt-get update && apt-get install -y python3 g++ make && rm -rf /var/lib/apt/lists/*

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies including mysql2
RUN npm install --save mysql2 && npm ci


# Copy the project files
COPY . .

# Expose default Strapi port
EXPOSE 1337

# Start the Strapi server
CMD ["npm", "run", "develop"]

