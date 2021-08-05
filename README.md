# **Scytale Assignment - FE**

This project was built using React JS.
To start, run the "**npm start**" command in the terminal, when you are in the **"scytalefeapi"** folder.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

If there is another process that is running on port 3000, a question will appear in the terminal whether to use another port - press Y.

**Npm packages I used:**
* npm install axios
* npm install react-bootstrap@next bootstrap@5.0.2
* npm i --save react-select

The repository has a presentation with API examples.

This app has 2 main pages 

## **All Pull Requests Page**

### ``Filter By Status``

If you want to filter using different status types, you will see all the existing status types on the server according to which you can filter, selection of all types is equivalent without selection at all - in this situation requests from all status types will be returned

### ``Filter By Labels``

If you want to filter with different types of labels, you will see all the types of labels available on the server, according to which you can filter, a selection of all types is equivalent without any choice at all - in this situation requests from all types of labels will be returned

### `Sorting Results`

It is possible to sort the results by the "Title" of the request or by the "PR Number" of the request according to the order you choose - ascending order or descending order. The default is sorting by ascending "PR Number"

## **Insert New Pull Request Page**

On this page you can enter a new request on the server according to the following parameters:
* Pull Request Title
* Pull Request Description
* Pull Request Author (full name)
* Pull Request Status, Choice from three status types - Draft, Open, Closed
* Pull Request Labels

Note that all parameters must be entered without special characters - only letters and numbers.



