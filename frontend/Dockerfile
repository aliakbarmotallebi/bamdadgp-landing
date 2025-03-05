# Use Node.js base image
FROM node:18-slim

ENV NODE_OPTIONS="--max-old-space-size=4096"
# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN yarn install

# Copy the project files
COPY . .

# Start the Next.js server
CMD ["yarn", "dev"]
