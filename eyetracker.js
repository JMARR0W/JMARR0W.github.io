
webgazer.saveDataAcrossSessions(false);
webgazer.showVideoPreview(false);
webgazer.applyKalmanFilter(true);


webgazer.setGazeListener(function (data, elapsedTime) {
    if (data == null) {
        return;
    }
    var element_predicted = document.elementFromPoint(data.x, data.y)
    // console.log(element_predicted);
    if (element_predicted != null) {
        if (element_predicted.className == 'kana-button') {
            // Get the element
            var element_predicted = document.elementFromPoint(data.x, data.y);

            // Store the original CSS value
            var originalOpacity = element_predicted.style.opacity;

            // Change the CSS property
            element_predicted.style.opacity = 0.5;
        }
    }
    var allElements = document.getElementsByClassName("kana-button");
    for (var i=0; i < allElements.length; i++) 
        {    
            var oldOpac = parseFloat(allElements[i].style.opacity);
            allElements[i].style.opacity = oldOpac + 0.05;
        }

}).begin();

