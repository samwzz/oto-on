# Oto-on

## Background

Inspired by Yamaha's Tenori-on, this project is a music sequencer built using JavaScript and CSS. This audio step sequencer will allow users to add notes to a musical sequence.

## Functionality & MVP

With this music sequencer, users will be able to:

- [ ] Click on a grid square to add/remove notes
- [ ] Automatically loop through music notes
- [ ] Reset the loop
- [ ] Mute the music

In addition, this project will include:
- [ ] Effects and visualization of notes and sound loop
- [ ] A production README

## Wireframes

This app will consist of a single screen with a grid of notes, app controls, and links to my Github and LinkedIn. The loop will run in the background upon initialization, and users will click on individual squares or click and drag over multiple squares to add notes to the loop.

![wireframes](wireframes/main.png)

## Architecture and Technologies

This project will be implemented using the following technologies:

* Vanilla JavaScript for overall structure and logic
* Webpack to bundle and serve various scripts

In addition to the Webpack entry file, there will be two scripts involved in this project:

`view.js`: this script will handle the logic for creating html and audio elements and rendering them to the DOM.

`main.js`: this script will handle the logic for toggling squares and playing audio.

## Implementation Timeline

**Day 1**:
- Setup all necessary Node modules and webpack
- Create `webpack.config.js` and `package.json`.

**Day 2**:
- Build board.
- Begin learning about HTML audio.

**Day 3**:
- Create the logic for adding notes and looping.  
- Build functional board.

**Day 4**:
- Create controls for resetting loop and muting music.
- Style board and make app look polished and professional.

## Bonus Features

- Import/export audio to save it for later
- Slider for changing tempo
- Option for different visual effects
