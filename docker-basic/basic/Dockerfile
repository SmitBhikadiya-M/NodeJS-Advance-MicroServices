# going to use existing docker image as a base
FROM alpine

# download and install the dependencies
RUN apk add --update redis
RUN apk add --update gcc

# what to do when its start as a container
CMD ["redis-server"]