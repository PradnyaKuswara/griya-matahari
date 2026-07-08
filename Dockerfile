# Use an official Node runtime as a parent image
FROM node:22-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN NODE_ENV=development npm install --verbose

# Copy application source
COPY . .

RUN ls -la node_modules/@rsbuild/core

RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Run the preview server on all interfaces and port 3000
CMD ["npx", "rsbuild", "preview", "--host", "0.0.0.0", "--port", "3000"]
