setInterval(()=>{
    let d = new Date();
    let mm = d.getMinutes();
    let ss = d.getSeconds();
    let hh = d.getHours();
    let mmdeg = mm*6-90;
    let ssdeg = ss*6-90;
    let hhdeg = 30*hh+mm/12-90;
    mini.style.transform = ` rotate (${mmdeg}deg)`;
    sec.style.transform = `rotate(${ssdeg}deg)`;
    hour.style.transform = `rotate(${hhdeg}deg)`;
},1000);