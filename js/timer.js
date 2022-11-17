export default function Timer({buttonMinutes, buttonSeconds}){
  let timerOut;
  let minutes = Number(buttonMinutes.textContent);

  function countDown(){
    timerOut = setTimeout(() => {
      let seconds = Number(buttonSeconds.textContent);
      let minutes = Number(buttonMinutes.textContent);
      let isFinishid = minutes <= 0 && seconds <= 0;
  
      if(isFinishid){
        updateDisplay()
        return
      }
      if(seconds <= 0){
        seconds = 10;
        --minutes
      }
      
      updateDisplay(minutes, String(seconds -= 1))
      countDown()
    }, 1000)
    
  }
  
  function updateDisplay(newMinutes, seconds){ 
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
  
    buttonMinutes.textContent = String(newMinutes).padStart(2,"0");
    buttonSeconds.textContent = String(seconds).padStart(2, "0");
  
    return
  }
  
  function pauseTimer(){
    clearTimeout(timerOut)
  }
  
  function addFiveMinutes(){
    pauseTimer()
    minutes = minutes + 5;
    updateDisplay(minutes, 0)
  }
  
  function removeFiveMinutes(){
    pauseTimer();
    if(minutes <= 0){
      return
    }
    minutes -= 5;
    updateDisplay(minutes, 0)
  }

  return {
    countDown,
    updateDisplay,
    pauseTimer,
    addFiveMinutes,
    removeFiveMinutes
  }
}