# JS in Web Browser Task 4

This task is dedicated to writing client side code, and covers basic usage of all previously described features like, document querying,
style changing, event handling and AJAX.

## Description

Develop front-end application on base of REST service which purpose is to provide basic view and CRUD functionality for some document storage.
Try to implement it within SPA Architecture, use only indirect requests via (XmlHttpRequest aka AJAX) and try to not reload during regular app workflow (Obviously you cant handle any exceptional state so there reloading is allowed).

Some very basic mockup for application can be found [here](https://invis.io/Q87I9IWTZ#/163509805_Main-Viewpng). Also in mockups directory.

### View in details

View contains 3 main blocks:
* Main Menu - document name and control buttons
* Table of Content - which is content list of anchor links for navigating thru documents content
* Content View - document content displayed here

### Application overview

I provide document serving backend which is stored in app directory of task4 folder. You need to use this backend to access documents, read and write via public API which is described [here](https://github.com/DioDread/JavaScript-training/blob/master/task4/app/README.md).

### Task details

You free in selection of architectural approaches. But there are few important limitations:
* Don't use any tools except hand made (by you indeed)
* One of dialogs must be totally created by JS code, without using of HTML external templates
* Stick to SPA architectural approaches
* Try to create smooth animations of doc scrolling if it is possible
* Saving and creation of new documents is optional features which falls to advanced part.
* Try create partial document loading, not stick to single documents pack loading(I ensure, this is will be slow call :) ), try split it on event based ajax calls.
* **Deadline is 13.05.2016.**

### Conclusion
This task is creative work, so you free to apply your imagination. Good Luck!
