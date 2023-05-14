# Base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy project files
COPY . .

# Build project
RUN yarn build

# Expose port 3000
EXPOSE 3000

# Start Next.js
CMD ["yarn", "start"]
