FROM node:23-alpine3.19 as react-build
WORKDIR /app
COPY . ./
RUN npm i
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/configfile.template

COPY --from=react-build /app/build /usr/share/nginx/html

ENV PORT=80
ENV HOST=0.0.0.0
EXPOSE 80

CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"