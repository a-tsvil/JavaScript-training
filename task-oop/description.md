# Media Catolog

## Foreword
Over the millennia of mankind's history, people created a lot of media content, and in the last two centuries
speed with which this content is created increased dramatically. Traditional, physical information
storage devices already failed and get buried under this tremendous tide of data. But fear not,
the digital era comes with brand new ways to organize and store information! And you as fellow students
of ways of a digital church here to rescue the situation. To not lose any piece of our precious
legacy, and to ease search and access to it we need to create software that provides catologisation
functionality, and here is the description of how it should be implemented.

## Application Description
- Application (further "app") should represent a digital catalog for various media (with the possibility add more media types).
- App users should be able to add, edit, view, or remove media from the catalog.
- App should be written without using any 3rd party code, purely on Javascript.
- This is a core app that serves as core functionality for future bigger applications thus it shouldn't have any GUI, and any interaction should be performed via code running on the command line.

## Media Class
In the app, we would use an object-oriented model to work with various media. Although these media can be very different they usually have common treats (such as name, author, and date of creation). All these common treats should be extracted to some abstract base class with a set of properties that are common to all media in the app. This base media type should also have a set of generic methods which can be used for e.g. returning a textual representation of media. Class representing media should be designed in such a way, that we can simply list all necessary info from it in the textual form (see for-in loop).

## App Requirements
- User should be able to add new media by selecting the type of media that is available in our app
- Implement at least four various types of media of your choice (movie, book, song, art, movie, comic, etc.)
- User should be able to list all media that are currently stored in our application (table with short info)
- User should be able to update media from the list
- User should be able to remove media from the list
- User should be able to see details of selected media

## Note About Storage
This task doesn't require you to persist your data in any way between app executions. Populating some test data from the script on app startup and further work with data in memory is totally ok. But if you suppose that this is "not a real enough use case", you can easily fix this with file system-based storage. [Node.js FS module](https://nodejs.org/api/fs.html) is at your service - `fs.readFileSync()`, `fs.writeFileSync()`, with `JSON` built-in module will do the trick for you.

## Note About How To Implement App
As was mentioned before, this app doesn't require any GUI, nor it should be implemented as a frontend web application. So how we can implement it then? For simplicity, we can do that as a Node.js command-line app! As a reference on how to create persistent running command-line apps use the example from [here](guessing-game-cli.js). Using the same approach you can build your own command-line interface for the Catalog Application with all necessary actions that can be selected from the same menu in textual form.

## Note On How It Would Be Evaluated
There are no strict guidelines on how to implement this task, besides that it should be written in an object-oriented programming style, the rest is on you! Try to abstract your code as much as your fantasy and understanding allow you! Happy coding and May the Force be with you! <(-_-)>