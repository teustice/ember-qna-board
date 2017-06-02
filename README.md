## Planning

1. Configuration/dependencies
  * ember-bootstrap
  * emberfire (firebase)

2. Specs
  * Spec 1: User inputs a question, the question is appended to '/'
  * Spec 2: User may type a response to a question, the answer should append to a specific questions page

3. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
  * Components for 'new-question', and 'question-tile'
  * Template for question route
  * Components for 'edit-question', 'new-answer', and 'answer-tile'
  * Integrate feature that allows for up and down voting answers

4. UX/UI
  * Include and modify bootstrap/materialize/Sass
  * Add Navbar throughout the site

5. Polish
  * Delete unused code
  * Make README awesome


<!-- -----------------DELETE PLANNING SECTION UPON COMPLETION------------- -->
# tech-qna-board

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd tech-qna-board`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
