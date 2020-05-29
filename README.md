# Cardley

[![Build Status](https://travis-ci.com/fac19/Cardley.svg?branch=master)](https://travis-ci.com/fac19/Cardley) 

[Cardley](https://objective-bell-c9fa55.netlify.app/) is a modern flash card app made for people who like to learn. It incorporates modern scientific findings on how people learn to help you learn effectively. 

There is a [sister repo for the Cardley API](https://github.com/fac19/Cardley---backend).

We have some sample users that you can use to play around with the site, and you can also create your own account.

| email | password |
| - | - |
| meg@iscool.com | password |
| bob@iscool.com | password |
| joe@iscool.com | password |
| pat@iscool.com | password |

## Things that don't work yet...
- Creating a deck. You can edit decks you own but you can't create new ones yet so you will need to use one of the above accounts if you want to try and edit cards.
- Lots of other things, several buttons don't take you where they should for example! (use the menu!)

## Local setup

To set up the frontend locally run the following commands in your terminal `git clone <front-end-repo-url>`, `cd`, `npm i`, `npm start`.
(frontend repo url: ```https://github.com/fac19/Cardley.git```)

(To run the tests on the front end, run `npm run test` instead of `npm start`).

One thing to be aware of is the backend URL. In the production repo the URL of the backend is live. To truly run the project locally (__strongly__ recommended for development):
1) run the API server locally by `git clone <back-end-repo-url>`, `cd`, `npm i`, `npm run dev`.
(backend repo url: ```https://github.com/fac19/Cardley---backend.git```)
2) Set up databases as instructed [here](https://github.com/fac19/Cardley---backend)
3) Make sure the backend is running on ```localhost:3001``` 
4) change the URL the frontend uses to access the API, found at `Cardley/src/utils/fetchData/backend-url.js` to

```javascript
// const url = 'https://cardley-api.herokuapp.com/';
const url = 'http://localhost:3001/';
export default url;
// make your choice
```

## Libraries

This is a React project with a number of libraries:

#### React addons

| Library | Purpose |
| - | - |
| React-router-dom | page-routing |
| proptypes | type-checking |

#### UI, styling and animation
| Library  | Purpose   |
| --- | --- |
|  Material-UI   |  Component library for UI elements   |
| clsx | styling utility |
| styled-components | styling utility |
| react transition-group | animations |
| react flash message | temporary components, used for error messages |
| react card-flip | a card-flip effect |
react-confetti | a confetti effect |

#### WYSIWYG text editor

| Library   | Purpose  |
| --- | --- |
| react-quill | text editor that creates html-formatted strings |
| html-to-react | parse html strings to React components |

Note: the editor is subject to change. Changes to the editor would mean changes in the component CardEditor at `Cardley/src/components/cards/CardEditor.js` and would entail corresponding changes to the display in CardFace at `.
Cardley/src/components/cards/cardFace.js`

## Contributing

This is an open source project. We love contributors, so get involved! (not actually true yet, we need to add a license)

## Building the App

### Contributors

* Roger-Heathcote 
* VatsKan (Vatsal Kanoria)
* Ivo-Evans 
* Tacotoemeck (Tom Wagner)

### Design week: Planning, Figma prototyping, User testing

We tested and adjusted our Figma prototypes after doing user surveys. Planned detail user flows and used several agile methadologies in the design stages.

### API 

The backend is a RESTful API, for more info on the routes, see the backend repo. 

### Issue management
We use Github's issue tracker to track issues, and we assign labels for priority and estimates.

Priorities range from P1-P4, where P1 is the most urgent and P4 the least. Estimates start and E1 and go up, where a single E unit represents an hour of one person's time, or half an hour of pair-programming.

If you make an issue, you should give it E and P labels. When you complete an issue you should give it an A label, to indicate how long the issue actually took. A labels use the same scale as E labels.

### Linting rules

We use the Airbnb linting config, which is run with husky on commit. We ask that you don't `git commit --no-verify`.

### Use Material UI where possible

You can find the docs for Material UI components [here](https://material-ui.com/)

### React hooks

The project is written with React hooks in a largely functional style. 
