# Publist Front End Assignment
Thanks for the opportunity to complete this coding challenge. As requested, I have successfully provided a webpage that utilizes Next.js, React and Prettier.
Additionally, I have installed a few more npm packages to assist in making my final webpage possible

## npm packages
1. react
2. next
3. react-dom
4. axios -- used to make the http request to Publist api and retrieve the data
5. react-cookie -- access's the browser's cookies for the auth token
6. next-images -- used to access the publist SVG icon, check ```./next.config.js```

## Type of Token
In the instructions, it was asked what the type of token we are accessing is called. The answer is: **JWT Token**

# How it works:

### Server

Next.js allows for deployment to a local server. Setting this up is relatively quick and painless. Once installed, ```npm run dev``` in terminal to run the project on localhost.

### Retrieving News

Using React's ```componentDidMount```, an HTTP request is sent to the provided api url using the npm package, **axios**. Axios is friendly with both Next and React. In this project, my personal auth token is used to query Publist's data. In reality, we would use the installed npm package, **React Cookie**, to retrieve the current user's token stored in the browser cookies. Then send this request with the proper auth details.

### News Filtering

Users input keywords into the search bar. If the keyword is found in either an article's description or title, it is added to a list of approved articles. This list is kept track of in the React component state and is continuously re-rendered when changes are made to the search.

### Styling

This page replicates the current styling of Publist.ai. It is a pretty yet simple UI, so the page was built using React Components that fit with the design. Hovering over each news result pronounces each result node, and each node includes these important details below:
1. The name of the news outlet
2. The title of the article
3. A slice of the article description
4. A render of the provided image

### How to read the Styling

It turned out that Next.js is not very friendly with CSS files, so all styling was done using the recommended ```<style jsx>``` tags inside of each render method.
