function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;    
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, duration);
}

animateValue("projects", 0, 633, 1000);
animateValue("clients", 0, 495, 2000);
animateValue("countries", 0, 15, 5000);

