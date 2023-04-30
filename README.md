# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)


## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: https://github.com/Vladmidir/interactive-card-details-form
- Live Site URL: https://vladmidir.github.io/interactive-card-details-form/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Javascript
- CSS Grid

### What I learned
Learned client-side form validation using javascript

Learned how to use js event listeners to interactively manipulate HTML DOM
```js
 form.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;    
    if(inputElems["cvc"].value.replace(/ +/g, "").length < 3){
        showError(inputElems, "cvc", "Too short");
    }
 }
```

Learned how to position elements on the webpage using CSS position property
```css
#form {
    position: relative;
    top: 250px;
    left: 400px;
    right: 80px;
    bottom: 80px;
}
```

### Continued development
In the future, I should make sure to use CSS classes to change an element's style, instead of manipulating it with js.
