FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build if React / Next / etc.
RUN npm run build || echo "No build step"

EXPOSE 3000

CMD ["npm", "start"]
