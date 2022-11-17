export default function Sound(){
  const soundForest = new Audio ('../assets/forest.wav');
  const soundRain = new Audio ('../assets/rain.wav');
  const soundShop = new Audio ('../assets/coffee-shop.wav');
  const soundFire = new Audio ('../assets/fireplace.wav');
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  
  return {
    soundForest,
    soundRain,
    soundShop,
    soundFire,
    buttonPressAudio
  }
}

