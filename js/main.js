import Timer from "./timer.js";
import Sound from "./sounds.js";

const buttonMinutes = document.querySelector('.minutes');
const buttonSeconds = document.querySelector('.seconds');
const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const buttonPluss = document.querySelector('.pluss');
const buttonLess = document.querySelector('.less');

const buttonAllCards = document.querySelectorAll('.cards');
const allInput = document.querySelectorAll('input');
const allInput2 = document.querySelectorAll('input::-moz-range-thumb');
const allSpan = document.querySelectorAll('span');
const buttonMoon = document.querySelector('.moon');
const buttonTheme = document.querySelector('.theme')
const buttonSun = document.querySelector('.sun');
const mainBody = document.querySelector('body');

const buttonForest = document.querySelector('.forest');
const buttonRain = document.querySelector('.rain');
const buttonShop = document.querySelector('.shop');
const buttonFire = document.querySelector('.fire');

const iconTreeWhite = document.querySelector('.treeWhite');
const iconTreeBlack = document.querySelector('.treeBlack');
const iconRainWhite = document.querySelector('.rainWhite');
const iconRainBlack = document.querySelector('.rainBlack');
const iconShopWhite = document.querySelector('.shopWhite');
const iconShopBlack = document.querySelector('.shopBlack');
const iconFireWhite = document.querySelector('.fireWhite');
const iconFireBlack = document.querySelector('.fireBlack');

const volumeForest = document.querySelector('.volumeForest');
const volumeRain = document.querySelector('.volumeRain');
const volumeShop = document.querySelector('.volumeShop');
const volumeFire = document.querySelector('.volumeFire');

const timer = Timer({ buttonMinutes, buttonSeconds });
const sound = Sound();

resetVolume();

buttonTheme.onclick = () => {
  sound.buttonPressAudio.play();
  darkMode();
}

buttonPlay.onclick = () => {
  sound.buttonPressAudio.play();
  timer.countDown();
}

buttonStop.onclick = () => {
  sound.buttonPressAudio.play();
  timer.updateDisplay();
  timer.pauseTimer();
}

buttonPluss.onclick = () => {
  sound.buttonPressAudio.play();
  timer.addFiveMinutes();
}

buttonLess.onclick = () => {
  sound.buttonPressAudio.play();
  timer.removeFiveMinutes();
}

buttonForest.onclick = () => {
  pauseMusic(sound.soundRain, sound.soundShop, sound.soundFire);
  resetCards(buttonRain, buttonShop, buttonFire);
  playMusic(buttonForest, sound.soundForest);
  buttonForest.classList.toggle('cardSelect')
}

buttonRain.onclick = () => {
  pauseMusic(sound.soundForest, sound.soundShop, sound.soundFire);
  resetCards(buttonForest, buttonShop, buttonFire);
  playMusic(buttonRain, sound.soundRain);
  buttonRain.classList.toggle('cardSelect');
}

buttonShop.onclick = () => {
  pauseMusic(sound.soundForest, sound.soundRain, sound.soundFire);
  resetCards(buttonForest, buttonRain, buttonFire);
  playMusic(buttonShop, sound.soundShop);
  buttonShop.classList.toggle('cardSelect');
}

buttonFire.onclick = () => {
  pauseMusic(sound.soundForest, sound.soundRain, sound.soundShop);
  resetCards(buttonForest, buttonRain, buttonShop);
  playMusic(buttonFire, sound.soundFire);
  buttonFire.classList.toggle('cardSelect');
}

volumeForest.onclick = () => {
  sound.soundForest.volume = volumeForest.valueAsNumber / 100;
  buttonForest.classList.toggle('cardSelect');
}

volumeRain.onclick = () => {
  sound.soundRain.volume = volumeRain.valueAsNumber / 100;
  buttonRain.classList.toggle('cardSelect');
}

volumeShop.onclick = () => {
  sound.soundShop.volume = volumeShop.valueAsNumber / 100;
  buttonShop.classList.toggle('cardSelect');
}

volumeFire.onclick = () => {
  sound.soundFire.volume = volumeFire.valueAsNumber / 100;
  buttonFire.classList.toggle('cardSelect');
}

function resetCards(card1, card2, card3){
  card1.classList.remove('cardSelect');
  card2.classList.remove('cardSelect');
  card3.classList.remove('cardSelect');
}

function playMusic(currentCard, music){
  if(currentCard.classList.contains('cardSelect') == true) {
    music.pause();
  } else {
    music.play();
    music.loop = true;
  }
}

function pauseMusic(card1, card2, card3) {
  card1.pause();
  card2.pause();
  card3.pause();
}

function resetVolume(){
  sound.soundForest.volume = 0.5;
  volumeForest.valueAsNumber = 50;

  sound.soundRain.volume = 0.5;
  volumeRain.valueAsNumber = 50;

  sound.soundShop.volume = 0.5;
  volumeShop.valueAsNumber = 50;

  sound.soundFire.volume = 0.5;
  volumeFire.valueAsNumber = 50;
}

function darkMode(){
  buttonSun.classList.toggle('hide');
  buttonMoon.classList.toggle('hide');
  mainBody.classList.toggle('bodyDark');
  
  iconTreeBlack.classList.toggle('hide');
  iconTreeWhite.classList.toggle('hide');
  iconRainBlack.classList.toggle('hide');
  iconRainWhite.classList.toggle('hide');
  iconShopBlack.classList.toggle('hide');
  iconShopWhite.classList.toggle('hide');
  iconFireBlack.classList.toggle('hide');
  iconFireWhite.classList.toggle('hide');

  
  for(let cards of buttonAllCards){
    cards.classList.toggle('cardDark');
  }
  
  for(let span of allSpan){
    span.classList.toggle('spanDark');
  }

  for(let input of allInput){
    input.classList.toggle('inputDark')
  }

  for(let input of allInput2){
    input.classList.toggle('inputDark')
  }
}
