# blackjack App

This project is a Blackjack game based JavaScript Vanilla, so you can do:

- Start a new game
- Call card
- Stop your turn

## Makers

- Developed by Jorge Arias Argüelles [GitHub](https://github.com/jorgearguellles) &
  [LinkedIn](https://www.linkedin.com/in/jorgeariasarguelles/)
- JavaScript Moderno: Guía para dominar el lenguaje course by Fernando Herrera [GitHub](https://github.com/Klerith) & [Udemy](https://www.udemy.com/course/javascript-fernando-herrera/)

## Development Technologies

Made with :green_heart: using:

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Screenshot App

![App Screenshot](https://github.com/jorgearguellles/blackjack.js/blob/main/assets/img/1.png)
![App Screenshot](https://github.com/jorgearguellles/blackjack.js/blob/main/assets/img/2.png)
![App Screenshot](https://github.com/jorgearguellles/blackjack.js/blob/main/assets/img/3.png)
![App Screenshot](https://github.com/jorgearguellles/blackjack.js/blob/main/assets/img/4.png)

## Feedback

Open to: [@JorgeAriasArgüelles](https://www.linkedin.com/in/jorgeariasarguelles/)

# Some Notes...

## Module patron in JS - Immediately Invoked Function Expression IIFE

Is the most common patron used because:

- Is compatible with any browsers
- Let isolate the code / encapsulation

## IIFE Syntax

```js
(() => {
  // ...
})();
```

```js
(function () {
  // ...
})();
```

Example:

```js
(() => {
  "use strict"; // -> say to JS be strict when evaluate the code
  const persons = ["Uva", "Lila", "Ana"];
  console.log(persons);
})();
// ["Uva", "Lila", "Ana"]
```
