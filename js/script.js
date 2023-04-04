// x and y for track current position
let x = 50;
let y = 0;
// function for start moving the ball after open or reload the page
window.onload = function () {
    // get the ball div
    const blueBall = document.getElementById('blue-ball');

    // true means x axis and false means y axis
    let axis = true;
    // ball will move by 1px
    let moveX = 1;
    let moveY = 1;
    setInterval(function () {
        if (axis) {
            axis = false;
            x += moveX;
            // set top x pixel to move the ball up or down
            blueBall.style.top = x + 'px';
            // change direction if the ball hit the wall
            if (x === 570 || x === 0) moveX = -moveX;
        }
        else {
            axis = true;
            y += moveY;
            // set left y pixel to move the ball left or right
            blueBall.style.left = y + 'px';
            // change direction if the ball hit the wall
            if (y === 670 || y === 0) moveY = -moveY;
        }
    }, 1);
}