let mm = document.getElementById('mini')
let ss = document.getElementById('sec')
let hh = document.getElementById('hour')
setInterval(() => {
    let d = new Date();
    let mmdeg = d.getMinutes() * 6 - 90;
    let ssdeg = d.getSeconds() * 6 - 90;
    let hhdeg = (30 * d.getHours()) + (mmdeg / 12) - 90;
    mini.style.transform = `rotate(${mmdeg}deg)`;
    sec.style.transform = `rotate(${ssdeg}deg)`;
    hour.style.transform = `rotate(${hhdeg}deg)`;
}, 1000);
setInterval(() => {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let sp = " "
    if (sec % 2 == 0) {
        sp = ":"
    }

    let am_pm = "AM";
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }


    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;

    let c = hour + "  " + sp + "  " + min + " " + am_pm;
    document.getElementById("digi").innerHTML = c;
}, 1000);