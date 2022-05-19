function walking(steps, footprint, speed){
    let distanceInMeters  = steps * footprint;
    let speedInMetersPerSec  = speed / 3.6;
    let time = distanceInMeters / speedInMetersPerSec;
    let rest = Math.floor(distanceInMeters / 500);
    time += rest;

    let hours = Math.floor(time / 60);
    time -= hours * 60;
    let minutes = Math.floor(time / 60);
    time -= minutes * 60;
    let seconds = time;

    console.log((hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" +(seconds < 10 ? "0" : "") + seconds);
}
walking(4000, 0.60, 5);