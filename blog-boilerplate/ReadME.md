# Blog App Project Setup

## STEP-1

We need to create react app so client can interact with the micro service.
(make sure you are in Blog app directory first)

    > CMD: npx create-react-app client
    > CMD: cd ./client
    > CMD: npm i 
    > CMD: npm i axios
    > CMD: npm start

Then we can start basic integration of the service inside the react component

## STEP-2

For the service we have to create service for comments, posts using node
(make sure you are in Blog app directory first)

    > CMD: npm init
    > CMD: npm i express nodemon axios cors
    > CMD: cd ./posts

    change the script of package.json to run app 
    "script": "nodemon start"

Reapet the step-2 for comments, query, event-bus and moderation and make sure every service is running on the different post

