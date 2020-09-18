const discoArrow = document.getElementById('discoArrow');
var discoRotation = true;
$('#DiscoveryBtn').click(function () {
    $('#DiscoveryMore').slideToggle("fast");
    if (discoRotation) {
        discoArrow.style.transform = 'rotate(180deg)';
        discoRotation = false;
    } else {
        discoArrow.style.transform = 'rotate(0deg)';
        discoRotation = true;
    }
});

const StrategyArrow = document.getElementById('StrategyArrow');
var strategyRotation = true;
$('#StrategyBtn').click(function () {
    $('#StrategyMore').slideToggle("fast");
    if (strategyRotation) {
        StrategyArrow.style.transform = 'rotate(180deg)';
        strategyRotation = false;
    } else {
        StrategyArrow.style.transform = 'rotate(0deg)';
        strategyRotation = true;
    }
})

const devArrow = document.getElementById('devArrow');
var devRotation = true;
$('#DevBtn').click(function () {
    $('#DevMore').slideToggle('fast');
    if (devRotation) {
        devArrow.style.transform = 'rotate(180deg)';
        devRotation = false;
    } else {
        devArrow.style.transform = 'rotate(0deg)';
        devRotation = true;
    }
})

const launchArrow = document.getElementById('launchArrow');
var launchRotation = true;
$('#LaunchBtn').click(function () {
    $('#LaunchMore').slideToggle('fast');
    if (launchRotation) {
        launchArrow.style.transform = 'rotate(180deg)';
        launchRotation = false;
    } else {
        launchArrow.style.transform = 'rotate(0deg)'
        launchRotation = true;
    }
})