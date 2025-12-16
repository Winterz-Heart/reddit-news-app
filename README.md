# Reddit News App
A Website that shows the top new posts from r/news and r/worldnews


### Intro
This repository contains my attempt at making a website that shows the latest news post from r/news and r/worldnews from Reddit. This will include the entire process from start to finish, with my planning process and planning the basic layout of the website, the commits that I make along the way as well as the reasoning behind any major changes that I make.


### Planning
I will be using React as the main structure for the website and will be using Reddit API documentation in order to connect the website to Reddit so that it can display the posts.


As this is a simple website, all it will do is show the posts that are on both r/news and r/world news. It will have a side bar where you can select which feed is being shown, with the options being All, r/news and r/worldnews. The reason for that All option is to allow for posts from both subreddits on the same feed. The website will only allow you to view the posts on the subreddits as cards in the feed, showing the title of the post, media attached(images, videos, links etc.), the upvotes and downvotes count and the number of comments. Selecting a post will bring it up full screen allowing you to see all the previous stated content and the comments that are on the post. The website won't allow the user to directly interact with the posts(comment, upvote, downvote etc.), or post to the subreddits directly. It will be designed with only viewing the posts in mind.


Once this has been achieved and the website is up and running, I may add the ability to connect to the website to more subreddits as well as remove subreddits from the feed, turning it into a reddit viewing app instead of a Reddit News App


I have used the command ```npx create-react-app``` to make the app, starting the whole process off, which has allowed me to write the README.md file that I am currently writing.


Before I got started on making the wireframe for the website, I looked into what the standard width of websites tend to be, as the height doesn't matter as much due to scrolling. Based on the information from [this article](https://www.browserstack.com/guide/ideal-screen-sizes-for-responsive-design) it is best practice to design the website with a mobile based layout in mind and scale it up to a desktop sizing, with multiple breakpoints adjusting the layout as the size available changes. I've decided to have the website's layout based on 4 different widths, these are:


|       Device       | Size(px) |
|--------------------|----------|
|Mobile              |    360   |
|Tablet(Vertical)    |    768   |
|Tablet(Horizontal)  |   1024   |
|Desktop             |   1920   |

### Wireframing
Using Figma, I created a wireframe for each of the widths above. On the Mobile and the Vertical Tablet sizes I had the feed selection be a side bar that pops out as required whilst on the other two, as the screen has a lot of space to spare, I have them permanently on screen.

![Wireframe](/Planning_documents//Reddit%20News%20App%20Wireframe.jpg)


## Installation
1. ```git clone https://github.com/Winterz-Heart/reddit-news-app```
2. ```cd reddit-news-app```
3. ```npm install```
4. ```npm start```