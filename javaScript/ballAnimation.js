const ballOne = document.getElementById('balloonOne');
const ballTwo = document.getElementById('balloonTwo');
const ballThree = document.getElementById('balloonThree');

jQuery(document).ready(function () {

    var mouseB1 = 0;
    var mouseB2 = 0;

    var ypB1 = 0;
    var ypB2 = 0;

    $(document).mousemove(function (e) {

        mouseB1 = e.pageY - 30;
        mouseB2 = e.pageY - 30;
    });

    setInterval(function () {

        ypB1 += ((mouseB1 - (ypB1 + 30)) / 150);
        $(ballOne).css({ top: ypB1 + "px" });

        ypB2 += ((mouseB2 - (ypB2 + 30)) / 50);
        $(ballTwo).css({ top: ypB2 + "px" });
    }, 10);
});