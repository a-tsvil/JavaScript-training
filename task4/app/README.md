# Backend Application

Application contains following API:

* **GET** getDocuments - return all available documents in JSON, may take long time
* **GET** getDocumentsList - return all available documents list of ids and fragments
* **GET** getDocumentById<docId> - return document for selected Id
* **GET** getDocumentFragment<docId>,<fragmendId> - return specified document fragment
* **POST** saveDocument{ document: fragments: [] } } - receive JSON with formatted document separate on fragments and store it to base.

## How To Launch

```
This application required **NodeJS** distribution installed (>= 0.12.7) on your pc.
```

1. Install [NodeJS](https://nodejs.org/en/)
2. After installation ensure what you have node in you system PATH variable. Run **node --version** and check output.

  ```bash
  $ node --version
  v0.12.7
  ```

   In case if there no such command, add it to your path (depending on your OS this process may be different)
3. After node is installed and configured, navigate to app dir, and run following command

  ```bash
  $ cd /d/path-to-js-tasks/task4/app
  $ node app.js
  ```

4. If all steps were correct you got such output and now your backend is ready to work.
