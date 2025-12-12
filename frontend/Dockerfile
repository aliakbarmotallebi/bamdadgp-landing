# Use Node.js base image
FROM node:20.9-bullseye

ENV NODE_OPTIONS="--max-old-space-size=4096"

# Set working directory
WORKDIR /app

# Install build tools for native dependencies
RUN apt-get update && apt-get install -y python3 g++ make && rm -rf /var/lib/apt/lists/*

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm ci

# Copy the project files
COPY . .

# Expose default Next.js port
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "run", "dev"]
