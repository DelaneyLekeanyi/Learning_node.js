# Learning_node.js

learning and understanding MVC in node.js.

# what is MVC?
    MVC stands for Model View Controller. It's a software design pattern that separates the representation of information from the user's interaction with it.

# Fetures of MVC
    Offer full controll over HTML and URLs making it easy to design web appliction architecture.
    Easy to test, maintain and reuse code.
    Easy to learn and understand.

# Components Of MVC.
    -Model
    -View
    -Controller.

    1-Model
        It corresponds all date related operations like database connection, data manipulation etc, that the users works with.

        It represents data that is beign transfered between the view and the controller or any other business logic.

        It is responsible for managing data CRUD.
        It notifies the View and controller of state changes.

    2-View
        Handles all ui logic of the application.It generate a user interface based on the model provided by the controller.

        it is reponsible for rendering the UI elements.
        Rendering data to users in a specific format.
        It does not contain any business logic.
        Updating the display when the ui changes.

    3-Controller
        The controller receives input from the user and decides what action should be taken.
        It controls the flow of data between the model and views.
        It handles user requests and updates the model accordingly.
        It also interacts with the view to update its content.

    4-advantages    
        easy to maintain and modify.
        reusable components.
        separation of concerns.
        decoupling of layers.
        improved modularity.
        better organization.
        enhanced collaboration among team members.
        simplified development process.
        improved code readability.
        increased flexibility.
        reduced coupling between modules.
        improved extensibility.
        improved performance.
        improved security.
        improved usability.
        easier testing.

    5-disadvantages
        complexity.
        learning curve. the more complex your app gets, the more difficult it becomes to manage.
        scalability.
        security vulnerabilities.
        debugging difficulties.
        compatibility problems.
        resource consumption.
        dependency management.
        version control challenges.
        documentation requirements.
        deployment complexities.
        integration challenges.
        community support limitations.
        vendor lock-in.
        cost implications.
        legal and compliance considerations.
        cultural differences.

# What is node.js all about
    -node js is a javascript runtime environment : this is becouse it executes outside the browswer
    -node js is used to build fast and scalable network applications.
    -node js uses event-driven non-blocking I/O model which makes it lightweight and efficient.
    -node js is platform independent.
    -node js is an open-source server environment.
    -node js is cross-platform.
    -node js runs on various platforms(linux,windows etc)
    -node js uses javascript on the server side : this means that you can write server     logic in javascript.
    -node js is built on chrome v8 engine.
    -node js is single threaded but highly scalable.
    -mode js is asynchronous : this means that multiple client request can be handled at the same time without blocking each other.
    -node js is event driven : this means that node js will not wait for an api to return data.it executes the next piece of code while waiting for the api call to return
       
# Why learn node.js
    -Fast
    -it's real time
    -lightweight
    -easy to use
    -open source
    -free
    -scalable


# NPM (Node package Maneger)
    -it proveides ways to find,install, update, manage, publish, and remove node.jjs pakages

    # Global and local pakages
        -pakages con be install global such that it can be accesed anytime a developrer needs it.   for example npm i nodemon --global
        -or they can be installed locally so that they can only be accessed within the project you are working with. for example npm i express --save

    # projects initialization
        -to initialize a projects in node js run the command npm init -
        -A package.json file would be created and it contains metadata(Data that provides info about other data).this includes name,version,description,author,license and dependencies(what packages we need to run our project) about our project.

    # installing pakaeges
        -To install development dependency , run npm install pakage name ==>  npm install express mongodb

        -To install as a pacakge as a development dependency add --save-dev  ==>  npm install browser-sync --save-dev


# Node js Modules
    -A set of functions you want to include in your application
    -This module could be build in or self created.

    # Build-in modules
        -http 
        -fs
        -path
        -os
        -events
        -util

       - To include a module use these modules we have to require them first using the require() function.
        -for example var http = require('http);

        -To include a custom module just create a new .js file and save it in the same folder where your main program resides.
        -then require it using the require() function.

# HTTP module
        -const server = http.createServer((req, res) => { });
            the above line is used in creating a server wich takes a call back (req, res) as an arguiment thsi his handel in comming responds and request.
        
        -within the server the callback function we can access the req object to get information about the current http request. and we can write the response to the client using the res object. this can be done using the res.write() method.And finally we end the response using the res.end() method.

        -the res.writehead  sets the HTTP response header. It specifies a status code of 200, which means "OK", and sets the Content-Type to text/html, indicating that the response will be in HTML format.
        Line 12: res.write(Hello WorldThe date and time are currently: ${dt.custom()});

# fs - File system
    -This module allows us to work with files on our computer
    -With this we can
     i-create new files fs.readfile, fs.appendFile, fs.open, fs.writeFile.
     ii-Read existing files
     iii-update existing files fs.rename, fs.unlink, fs.appendFile, fs.writeFile
     iv-delete existing files fs.unlink
