## What is a Single-Page Application (SPA)?

A Single-Page Application (SPA) is an application where you only load the application code consisting of HTML, CSS and JavaScript once.  When a user interacts with the application, JavaScript intercepts the browser events, but instead of making a request to the server, the client requests some JSON or performs an action on the server, but the page that the user sees is never completely reloaded.

## What is a Multi-Page Application (MPA)?

MPA is a web application which has to request a new page from the server and render it to the web browser every time it needs to display data or submit data back to the server.

## When we built our Unit 2 apps, were they a SPA or MPA, why?

The first app that we build was serverless, so that was an SPA.  The second, the full CRUD one, was an MPA because we had the server side, database and server side rendering in place.

## Give two pros of a SPA

1) SPAs are fast because its resources, which are HTML, CSS and JavaScript, are loaded only once. Only data is transmitted back and forth.
2) The development is easy because there is no need to write code that would render pages on the server.

## Give two cons of a SPA

1) It is more difficult to implement SEO techniques on an SPA.
2) If there is a lot of JavaScript code, the page loading times can become long, which will hurt the user experience.

## Give two pros of a MPA

1) SEO is better on MPAs since the architecture is native to search engine crawlers.
2) Scalability is better because MPAs allow you to create new content and place it on new pages.

## Give two cons of a MPA

1) Performance and speed may be slower because a server needs to reload most resources, such as HTML, CSS and JavaScript with every interaction.
2) MPAs take more time to develop because the backend needs to be coded from scratch.

---------

## What were the three great technical accomplishments of MPL?

1) Redesigning the questionnaire that people had to complete from 76 pages to 16, and the process took around 9 minutes instead of the previous 20.  The most important thing, it worked.  People could log on and go through the process.

2) Rebuilding the login system - the new one is faster and cheaper than the old one.

3) Using agile process, and gradual deployment.

What does 'API' stand for? *

API stands for an Application Programming Interface.

What is an API? *

The API is not the database or even the server, it is the code that governs the access point for the server.  We can send an API a request detailing the information we want.  APIs allow our sites to alter data on other applications, for example, share things on Twitter.  