# Reddit News App
A Website that shows the top new posts from r/news and r/worldnews

## Intro
This repository contains my attempt at making a website that show the latest news post from r/news and r/worldnews from Reddit. This will include the entire process from start to finish, with my planning process and planning the basic layout of the webiste, the commits that I make along the way as well as the reasoning behind any major changes that I make.

### Planning
I will be using React as the main structure for the website and will be using Reddit API documentation in order to connect the website to Reddit so that it can display the posts.

I have used the command ```npx create-react-app``` to make the app to start the whole process off, which has allowed me to write the README.md file that I am currently writing.

Before I got started on making the wireframe for the website, I looked into what the standard width of websites tend to be, as the height doesn't matter as much due to scrolling. Based on the information from [this article](https://www.browserstack.com/guide/ideal-screen-sizes-for-responsive-design) it is best practice to design the website with a mobile based layout in mind and scale it up to a desktop sizing, with multiple breakpoints adjusting the layout as the size available changes. I've decided to have the website's layout based on 4 different widths, these are:

|       Device       | Size(px) |
|--------------------|----------|
|Mobile              |    360   |
|Tablet(Vertical)    |    768   |
|Tablet(Horizontal)  |   1024   |
|Desktop             |   1920   |


## Installation
1. ```git clone https://github.com/Winterz-Heart/reddit-news-app```
2. ```cd reddit-news-app```
3. ```npm install```
4. ```npm start```