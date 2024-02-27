FROM node:20.11.1

# Network
EXPOSE 3000
ENV HOST 0.0.0.0
ENV PORT 3000

# Get source code and install
RUN git clone https://github.com/ryanlelek/Raneto.git /app
WORKDIR /app
RUN npm install --omit=dev

RUN rm -rf ./content/pages/*
COPY ./content ./content/pages
COPY ./config.js ./config/
COPY ./theme ./theme

CMD ["npm", "start"]