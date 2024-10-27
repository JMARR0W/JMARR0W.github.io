
window.saveDataAcrossSessions = true
webgazer.showVideoPreview(false)
webgazer.applyKalmanFilter(true)

webgazer.setGazeListener(function (data, elapsedTime) {
    if (data == null) {
        return;
    }
    var element_predicted = document.elementFromPoint(data.x, data.y)
    console.log(element_predicted)
    if (document.elementFromPoint(data.x, data.y) != null) {

        // Get the element
        const element = document.elementFromPoint(data.x, data.y);

        // Store the original CSS value
        const originalOpacity = element.style.opacity;

        // Change the CSS property
        element.style.opacity = 0.7;

        // Set it back after a delay (e.g., 0.1 seconds)
        setTimeout(() => {
            element.style.opacity = originalOpacity;
        }, 100);
    }
}).begin();

