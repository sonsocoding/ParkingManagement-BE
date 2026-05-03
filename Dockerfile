# use official Node.js runtime as the parent image
FROM node:22-alpine 

# set working directory in the container 
WORKDIR /app

# copy package.json and package-lock.json to the container
COPY package*.json ./

# Clean install dependencies
RUN npm ci

# copy prisma schema to the container and generate Prisma client
COPY prisma ./prisma
RUN npm run prisma:generate

# copy the rest of the application code to the container
COPY src ./src

# set environment variable for production
ENV NODE_ENV=production

# expose the port the app runs on
EXPOSE 3000

# define the command to run the application
CMD ["npm", "start"]
