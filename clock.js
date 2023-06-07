let mm = document.getElementById('mini')
let ss = document.getElementById('sec')
let hh = document.getElementById('hour')
setInterval(()=>{
    let d = new Date();
    let mmdeg = d.getMinutes()*6-90;
    let ssdeg = d.getSeconds()*6-90;
    let hhdeg = (30* d.getHours())+(mmdeg/12)-90;
    mini.style.transform = `rotate(${mmdeg}deg)`;
    sec.style.transform = `rotate(${ssdeg}deg)`;
    hour.style.transform = `rotate(${hhdeg}deg)`;
},1000);