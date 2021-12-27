// change image on mobile devices
function MediaQuerry(x) {
    if (x.matches) {
        const imgBx = document.getElementById('imgBx');
        const box = document.getElementById('box');

        imgBx.innerHTML = `<img src="./images/bg-pattern-mobile.svg" alt="">
                           <img src="./images/illustration-woman-online-mobile.svg" alt="">`;
        box.src = ' ';

    }
    else {
        const imgBx = document.getElementById('imgBx');
        const box = document.getElementById('box');

        imgBx.innerHTML = `<img src="./images/bg-pattern-desktop.svg" alt="">
                           <img src="./images/illustration-woman-online-desktop.svg" alt="">`;
        box.src = './images/illustration-box-desktop.svg';
    };
};

var x = window.matchMedia("(max-width: 1051px");

MediaQuerry(x);

x.addListener(MediaQuerry);


// accordian

function initAccordion(accordionElem) {

    function handlePanelClick(event) {
        showPanel(event.currentTarget);
    }

    function showPanel(panel) {
        var expandedPanel = accordionElem.querySelector(".active");
        if (expandedPanel) {
            expandedPanel.classList.remove("active");
        }
        panel.classList.add("active");

        var rotatedIcon = accordionElem.querySelector("#downIcon");
        if (rotatedIcon) {
            rotatedIcon.classList.remove("active");
        }
        panel.classList.add("active");

    }
    var allPanelElems = accordionElem.querySelectorAll(".accordian");
    for (var i = 0, len = allPanelElems.length; i < len; i++) {
        allPanelElems[i].addEventListener("click", handlePanelClick);
    }
    showPanel(allPanelElems[0])
}

initAccordion(document.getElementById("accordianbx"));