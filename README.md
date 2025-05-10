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
