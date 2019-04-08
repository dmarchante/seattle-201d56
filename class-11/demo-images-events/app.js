'use strict';

//global variables
const goatpic = document.getElementById('goatpic');

let allGoats = [];

function GoatPic(name) {
  // images/sassy-goat.jpg
  this.filepath = `images/${name}.jpg`;
  this.name = name;
  this.views = 0;
  allGoats.push(this);
}

new GoatPic('sassy-goat');
new GoatPic('cruisin-goat');
new GoatPic('float-your-goat');
new GoatPic('goat-away');
new GoatPic('goat-out-of-hand');
new GoatPic('kissing-goat');
new GoatPic('smiling-goat');
new GoatPic('sweater-goat');
new GoatPic('the-goat');

function showRandomGoat() {
  let random = Math.floor(Math.random() * allGoats.length);

  allGoats[random].views++;

  while (goatpic.alt === allGoats[random].name) {
    random = Math.floor(Math.random() * allGoats.length);
    console.log('duplicate found');
  }

  goatpic.src = allGoats[random].filepath;
  goatpic.alt = allGoats[random].name;
  goatpic.title = allGoats[random].name;
}

function handleGoatClick() {
  console.log(event.target);
  showRandomGoat();
}

showRandomGoat();

goatpic.addEventListener('click', handleGoatClick);
