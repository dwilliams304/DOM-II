# DOM II

## Project Description

Fun Bus wants you to make their site more interactive. They are relying on you to provide 10 unique events to enhance their site. Explore the many events available to you by using the [MDN events reference](https://developer.mozilla.org/en-US/docs/Web/Events).

## Git Setup

* [x] Create a forked copy of this project.
* [x] Clone your OWN version of the repository.
* [x] Implement the project on the main branch, committing changes regularly.
* [x] Push commits: `git push origin main`.

## Running the project

This project uses [Webpack and Babel](https://bloomtech-1.wistia.com/medias/bhi99dwr2x). Inside `src/index.html` you will notice there is no `script` tag linking the JavaScript, nor a `link` tag linking the styles. When the project starts, Webpack transcompiles the LESS into CSS, and injects the JavaScript and the styles into the HTML.

Do not **move or rename any files** in this project. The website's source files live inside the `src` folder. Do not make changes to any files outside of the `src` folder, unless it's new dependecies declared in the `package.json` due to installing NPM libraries (E.G. `npm i lodash`).

* [x] Run `npm install` to download the project's dependencies.
* [x] Run `npm start` to launch the website on `http://localhost:3000`.

## MVP

### Create listeners of 10 types of events

* [ ] Using your [index.js file](src/index.js), create [event listeners](https://developer.mozilla.org/en-US/docs/Web/Events) of at least 10 _different_ types. You must Use your creativity to make the Fun Bus site more interactive. For example you could change colors, animate objects, add DOM elements, remove them, etc.

* Stupid site functionality + [Event Used]:
* -Pressing r,g, or b anywhere will change background color. 
* ^[keydown]^
* -Copying the "Let's Go!" text changes it. 
* ^[copy]^
* -Click on each sign me up button will change text. 
* ^[click]^
* -Double clicking on the Home button will change a few things. 
* ^[dblclick]^
* -Hovering over About Us/Blog does something. 
* ^[mouseover] + [mouseenter]/[mouseout]^
* -Right clicking on "Welcome To Fun Bus!" changes text.
* ^[contextmenu]^
* -Scrolling over text under 'Welcome to Fun Bus' changes text.
* ^[scroll]^
* -Clicking on the Contact button and typing any letter will change text to letter pressed.
* ^[keydown]^

Note: Drag and drop is a bit more advanced than the others. It's not actually a single type of event but several types that need to work together.

### Use preventDefault

* [ ] Find a usecase for preventDefault. For example, you could prevent a link from navigating when clicked, or to navigate somewhere surprising.

## Submission Format

* [ ] Submit project using Codegrade, as per the instructions in the learning platform.
