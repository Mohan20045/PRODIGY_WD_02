let startBtn = document.getElementById('start'); 
let stopBtn = document.getElementById('stop'); 
let resetBtn = document.getElementById('reset'); 
let hr = document.getElementById('hr'); 
let min = document.getElementById('min');
let sec = document.getElementById('sec'); 
let ms = document.getElementById('count');
  
let hour = 0; 
let minute = 0; 
let second = 0; 
let count = 0; 
  
startBtn.addEventListener('click', function () { 
    timer = true; 
    stopWatch(); 
}); 
  
stopBtn.addEventListener('click', function () { 
    timer = false; 
}); 
  
resetBtn.addEventListener('click', function () { 
    timer = false; 
    hour = 0; 
    minute = 0; 
    second = 0; 
    count = 0; 
    hr.innerHTML = "00"; 
    min.innerHTML = "00"; 
    sec.innerHTML = "00"; 
    ms.innerHTML = "00"; 
}); 
  
function stopWatch() { 
    if (timer) { 
        count++; 
        if (count == 100) { 
            second++; 
            count = 0; 
        } 
        if (second == 60) { 
            minute++; 
            second = 0; 
        } 
        if (minute == 60) { 
            hour++; 
            minute = 0; 
            second = 0; 
        } 
        let hrString = hour; 
        let minString = minute; 
        let secString = second; 
        let countString = count; 
  
        if (hour < 10) { 
            hrString = "0" + hrString; 
        } 
        if (minute < 10) { 
            minString = "0" + minString; 
        } 
        if (second < 10) { 
            secString = "0" + secString; 
        } 
        if (count < 10) { 
            countString = "0" + countString; 
        } 
  
        hr.innerHTML = hrString; 
        min.innerHTML = minString; 
        sec.innerHTML = secString; 
        ms.innerHTML = countString; 
        setTimeout(stopWatch, 8); 
    } 
}