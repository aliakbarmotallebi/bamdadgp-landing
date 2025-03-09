# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN yarn install

# Copy the project files
COPY . .

# Build the Next.js app
RUN yarn build

# Start the Next.js server
CMD ["yarn", "dev"]
