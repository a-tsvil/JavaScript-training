# Backend Application

Document serving application, provides robust API for access some (very important) documents, read and writing it's content.
Application API description:

- **GET** getDocuments - return all available documents in JSON, may take long time
- **GET** getDocumentsList - return all available documents list of ids and fragments
- **GET** getDocumentById?docid - return document for selected Id
- **GET** getDocumentFragment?docid=&fragmendid= - return specified document fragment
- **POST** saveDocument{ document: fragments: [] } } - receive JSON with formatted document separate on fragments and store it to base.

## Document Model

```
Document
    Id - unique document id (Required)
    Name - document name (Optional)
    Fragments - array of document fragments, representing paragraph, yet single  doc part
        Fragment (Optional) document node
            FragmentId - unique fragment id (Required)
            Name - Node name (Optional)
            Content - Node text content (Optional)
        ...
```

## How To Launch

```
This application require **NodeJS** (>= 0.12.7)
and NPM distribution installed on your pc.
```

1. Install [NodeJS](https://nodejs.org/en/). Important note: didn't reject NPM installation request, it's required to install app dependencies.
2. After installation ensure what you have node in you system PATH variable. Run **node --version** and check output.

  ```bash
  $ node --version
  v0.12.7
  ```

  In case if there no such command, add it to your path (depending on your OS this process may be different)

3. After node is installed and configured, we need to install application dependencies. navigate to app dir, and run following command

  ```bash
  $ npm install
  ```

  If all goes normal you must see dependencies tree in you terminal output.

4. After node is installed and configured, navigate to app dir, and run following command

  ```bash
  $ cd /d/path-to-js-tasks/task4/app
  $ node app.js
  ```

5. If all steps were correct you got such output and now your backend is ready to work.

  ```bash
   info: Document service app started at port: 3000
  ```
## License Notes
In case if you can't handle this app for you front-end needs, you can easily change it sources, but remember that I will test it on my own version.
