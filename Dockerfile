# Use the specified Node version as the base image
FROM node:20.16.0

# Set the working directory in the Docker image
WORKDIR /src

# Copy package.json and yarn.lock files to the Docker image
COPY package.json yarn.lock ./

# Install dependencies in the Docker image
RUN yarn

# Copy the rest of the files to the Docker image
COPY . /src

# Build the project
RUN yarn dist

# Expose port 3000
EXPOSE 3000

# Start the project
CMD [ "yarn", "dev" ]