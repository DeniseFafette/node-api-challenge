# Sprint Challenge: Express and Node.js - Projects & Actions

## Description

In this challenge, you design and create a web API to manage the following resources: `Projects` and `Actions`.

## Instructions

**Read these instructions carefully**. Understand exactly what is expected **_before_** starting to code.

This is an individual assessment, please work on it alone. It is an opportunity to demonstrate proficiency of the concepts and objectives introduced and practiced in preceding days.

If the instructions are not clear, please seek support from your TL and Instructor on Slack.

The Minimum Viable Product must be completed in three hours.

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add your _Team Lead_ as collaborator on Github.
- [ ] Clone your forked version of the Repository.
- [ ] Create a new Branch on the clone: git checkout -b `firstName-lastName`.
- [ ] Implement the project on this Branch, committing changes regularly.
- [ ] Push commits: git push origin `firstName-lastName`.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge `firstName-lastName` Branch into master on **your fork, don't make Pull Requests against Lambda's repository**.
- [ ] Please don't merge your own pull request.
- [ ] Add your _Team Lead_ as a Reviewer on the Pull-request
- [ ] Your _Team Lead_ will count the challenge as done by merging the branch into _master_.

## Commits

Commit your code regularly and use descriptive messages. This helps both you (in case you ever need to return to old code) and your Team Lead.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your Team Lead.

- [ ] Mention two parts of Express that you learned about this week.

Express is a Node.js module like any other module. Express is a web application framework that sits on top of the Node.js web server (http server module). It’s like React, for your backend.

Express’ middleware stack is basically an array of functions. Think of middleware as array of functions that get executed in the order they are introduced into the server code. We can use Express Middleware to add features to Express. It is the biggest part of Express, most of the code we write, including route handlers, is middleware under the hood. Express middleware is compatible with connect middleware. Connect is a web application framework for Node.js that only provides the middleware layer. Since Connect has been around for longer, it has a rich ecosystem of modules and we can take advantage of that. If you can’t find an Express Middleware package with the functionality you want, try searching for a Connect Middleware module instead.

Routing is a way to select which request handler function is executed. Using routing we can map incoming requests to the appropriate request handler based on the URL and HTTP Method used.
Convenience Helpers that make writing web apps and API servers easier.

Express sits on top of the raw http server module provided by Node.js and adds extra functionality, like routing and middleware support, and a simpler API.

- [ ] Describe Middleware?

An intermediary between the client and the server that can support asynchronous requests to improve ux. We can think of middleware as array of functions that get executed in the order they are introduced into the server code. Tasks like authentication and logging are commonly handled by middleware. Another benefit of Middleware is that it provides an easy way to add modularity to our code. There are three types of middleware, built-in, third party and custom.

- [ ] Describe a Resource?

Routing makes building RESTful Web APIs a breeze. We can have a single URL per resource and execute different code based on the HTTP Method/Verb used.
A resource is an object with a type, associated data, relationships to other resources, and a set of methods that operate on it. It is similar to an object instance in an object-oriented programming language, with the important difference that only a few standard methods are defined for the resource (corresponding to the standard HTTP GET, POST, PUT and DELETE methods), while an object instance typically has many methods.

The term endpoint is focused on the URL that is used to make a request.

The term resource is focused on the data set that is returned by a request.
 
A resource refers to one or more nouns being served, represented in namespaced fashion, because it is easy for humans to comprehend:

/api/users/johnny         # Look up johnny from a users collection.
/v2/books/1234            # Get book with ID 1234 in API v2 schema.

All of the above could be considered service endpoints, but only the bottom group would be considered resources, RESTfully speaking. The top group is not expressive regarding the content it provides.

A REST request is like a sentence composed of nouns (resources) and verbs (HTTP methods):

GET (method) the user named johnny (resource).

DELETE (method) the book with id 1234 (resource).


- [ ] What can the API return to help clients know if a request was successful?

REST APIs use the Status-Line part of an HTTP response message..
RFC 2616 defines the Status-Line syntax as shown below:
 
Status-Line = HTTP-Version SP Status-Code SP Reason-Phrase CRLF
 
A great amount of applications are using Restful APIs that are based on the HTTP protocol for connecting their clients. In all the calls, the server and the endpoint at the client both return a call status to the client which can be in the form of:
 
1xx: Informational - Communicates transfer protocol-level information
2xx: Success -Indicates that the client’s request was accepted successfully.
3xx: Redirection - Indicates that the client must take some additional action in order to complete their request.
4xx: Client Error - This category of error status codes points the finger at clients.
5xx: Server Error - The server takes responsibility for these error status codes.


- [ ] How can we partition our application into sub-applications?

Routers are used for Application Modularity. Express Routers are a way to split an application into sub-applications to make it more modular and easier to maintain and reason about.

Applications can be broken up into routers. We could have a router to serve our SPA and another router for our API. Each router can have its own middleware and routing. This combination provides improved functionality.

An Express Router behaves like a mini Express application. It can have it’s own Routing and Middleware, but it needs to exist inside of an Express application. Think of routers as organizing Express applications because you write separate pieces that can later be composed together.
Also, note that it is possible to have a central router that represents our API and have that router import the routes. This logic cleans up our main server file even more. Let’s see a quick example of that.


## Minimum Viable Product

- [ ] Configure an _npm script_ named _"server"_ that will execute your code using _nodemon_. Make _nodemon_ be a development time dependency only, it shouldn't be deployed to production.
- [ ] Configure an _npm script_ named _"start"_ that will execute your code using _node_.

Design and build the necessary endpoints to:

- [ ] Perform CRUD operations on _projects_ and _actions_. When adding an action, make sure the `project_id` provided belongs to an existing `project`. If you try to add an action with an `id` of 3 and there is no project with that `id` the database will return an error.
- [ ] Retrieve the list of actions for a project.

Please read the following sections before implementing the Minimum Viable Product, they describe how the database is structured and the files and methods available for interacting with the data.

### Database Schemas

The description of the structure and extra information about each _resource_ stored in the included database (`./data/lambda.db3`) is listed below.

#### Projects

| Field       | Data Type | Metadata                                                                    |
| ----------- | --------- | --------------------------------------------------------------------------- |
| id          | number    | no need to provide it when creating projects, the database will generate it |
| name        | string    | required.                                                                   |
| description | string    | required.                                                                   |
| completed   | boolean   | used to indicate if the project has been completed, not required            |

#### Actions

| Field       | Data Type | Metadata                                                                                         |
| ----------- | --------- | ------------------------------------------------------------------------------------------------ |
| id          | number    | no need to provide it when creating posts, the database will automatically generate it.          |
| project_id  | number    | required, must be the id of an existing project.                                                 |
| description | string    | up to 128 characters long, required.                                                             |
| notes       | string    | no size limit, required. Used to record additional notes or requirements to complete the action. |
| completed   | boolean   | used to indicate if the action has been completed, not required                                  |

### Database Persistence Helpers

The `/data/helpers` folder includes files you can use to manage the persistence of _project_ and _action_ data. These files are `projectModel.js` and `actionModel.js`. Both files publish the following api, which you can use to store, modify and retrieve each resource:

**All these helper methods return a promise. Remember to use .then().catch() or async/await.**

- `get()`: resolves to an array of all the resources contained in the database. If you pass an `id` to this method it will return the resource with that id if one is found.
- `insert()`: calling insert passing it a resource object will add it to the database and return the newly created resource.
- `update()`: accepts two arguments, the first is the `id` of the resource to update, and the second is an object with the `changes` to apply. It returns the updated resource. If a resource with the provided `id` is not found, the method returns `null`.
- `remove()`: the remove method accepts an `id` as it's first parameter and, upon successfully deleting the resource from the database, returns the number of records deleted.

The `projectModel.js` helper includes an extra method called `getProjectActions()` that takes a _project id_ as it's only argument and returns a list of all the _actions_ for the _project_.

We have provided test data for all the resources.

## Stretch Goal

- Use `create-react-app` to create an application in a separate folder (outside the API project folder). Name it anything you want.
- From the React application show a list of all _projects_ using the API you built.
- Add functionality to show the details of a project, including its actions, when clicking a project name in the list. Use React Router to navigate to a separate route to show the project details.
- Add styling!
