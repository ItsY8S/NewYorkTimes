# New York Times

### What is this?
It's a single page news application created with React. It hits the Guardian API to
fetch news articles. The page will load the top stories by default. There is also a
search functionality. All queries get an array of stories. My application starts
users at the first result and has previous and next functionality.

### Project Requirements
I was assigned the task of using a javascript framework. I chose to use ReactJS
as it seems to be the current thing to do and is heavily sought after in the job market.
Another requirement was to integrate the application with a third party API.

### How it was created
The first step was to come up with a few ideas and settle on an API of my interest.
My first thought was to create a sports application. I figured it couldn't be very
difficult to find one. I was wrong. I found a few resources, but most were out of
date. Others weren't a sport I was interested in. I tossed around a couple more ideas
but I wasn't really in love with. Running out of time, I settled on a news API.
Little did I know, the API didn't come with a body section. I panicked and
tried four more APIs until I found something that suited my project.
My next step after testing the API was to start designing. I used Adobe XD and
started throwing some shapes up on the screen. I just knew I wanted something simplistic.
Like every other design, I hated the first few attempts. Eventually, I decided to go
with a border-heavy look. I moved around the navigation and the contents until I went
with a pretty basic bar. After finishing up, I jumped into a file and started laying
out all of my elements. I used flexbox for the navigation as it made things easy to align.
It wasn't too challenging considering it's a single page application. From there, I
made use of components and made use of my API. When I said I finally found a good API,
I mean I found one with an article body. The response I got back literally contained
HTML. I thought it was going to be a huge mess and take a lot of work, but luckily
I found something called 'dangerouslySetInnerHTML'. I wasn't really concerned how
dangerous it was because it just worked. The only tweak I made was to the img tag.
After receiving feedback, I continued making changes to my application until my deadline.

___

## Default app state
![Default app state](https://image.ibb.co/ipC9pT/topstories.png)

## Search for 'laptops'
![Search for laptops](https://image.ibb.co/kemDG8/search.png)
