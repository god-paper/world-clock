function updateTime() {
    var tokyoTimeElem = document.getElementById("tokyo-time");
    var dcTimeElem = document.getElementById("dc-time");
    var sydneyTimeElem = document.getElementById("sydney-time");

    var currentTime = new Date();

    var options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    tokyoTimeElem.innerText = "Tokyo: " + currentTime.toLocaleTimeString('ja-JP', options);
    
    options.timeZone = 'America/New_York';
    dcTimeElem.innerText = "Washington, DC: " + currentTime.toLocaleTimeString('en-US', options);

    options.timeZone = 'Australia/Sydney';
    sydneyTimeElem.innerText = "Sydney: " + currentTime.toLocaleTimeString('en-AU', options);
}

setInterval(updateTime, 1000);
