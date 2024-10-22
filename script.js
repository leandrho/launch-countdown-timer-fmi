const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

let tillsec = 41;
let tillmin = 55;
  
const updateSeconds = () => {
    const newSecond = (--tillsec)+'';
    let changeMin = false;
    if(newSecond == '0'){
        tillsec=60;
        tillmin--;
    }
    if(newSecond == '59'){       
        changeMin=true;
    }
    seconds.classList.add('out');
    if(changeMin)
        minutes.classList.add('out');
  
    setTimeout(() => {
        seconds.textContent = newSecond.length === 1? '0' + newSecond : newSecond;
        if(changeMin){
            let min = tillmin+'';
            minutes.innerHTML = min.length === 1? '0' + tillmin : tillmin;
        }
        seconds.classList.remove('out');
        seconds.classList.add('in');
        if(changeMin){
            minutes.classList.remove('out');
            minutes.classList.add('in');
        }

      setTimeout(() => {
        seconds.classList.remove('in');
        seconds.classList.add('end');
        if(changeMin){
            minutes.classList.remove('in');
            minutes.classList.add('end');
        }
      }, 50);
    }, 500);
  }
  
  setInterval(updateSeconds, 1000);
  