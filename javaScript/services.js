const creative = document.getElementById('creativeHover');
const dev = document.getElementById('devHover');
const sup = document.getElementById('supHover');

creative.addEventListener('mouseenter', changeCreative);
dev.addEventListener('mouseenter', changeDev);
sup.addEventListener('mouseenter', changeSup);

function changeCreative() {

    if (languageChanged == false) {


        creative.innerHTML = `<h1>Creative</h1>
        <h1>Print & Web Presence</h1>
        <h1>Audience Growth</h1>
        <h1>Advertisement</h1>
        `;

        function returnContent() {
            creative.innerHTML = `<div class="boxImg">
            <img src="./resources/services/lightbulb.png" alt="">
        </div>
        <h1 id="creativeBoxH1">creative</h1>
        `
            creative.style.backgroundColor = '#b22cb5';
        };

        creative.addEventListener('mouseleave', returnContent);
    } else {
        creative.innerHTML = `<h1>Kreativ</h1>
        <h1>Print & Webpräsenz</h1>
        <h1>Publikumswachstum</h1>
        <h1>Werbung</h1>
        `;

        function returnContent() {
            creative.innerHTML = `<div class="boxImg">
            <img src="./resources/services/lightbulb.png" alt="">
        </div>
        <h1 id="id="creativeBoxH1"">creative</h1>
        `
            creative.style.backgroundColor = '#b22cb5';
        };

        creative.addEventListener('mouseleave', returnContent);
    }


    creative.style.backgroundColor = '#f74162';




};

function changeDev() {

    if (languageChanged == false) {
        dev.innerHTML = `<h1>Software Development</h1>
        <h1>Web Applications</h1>
        <h1>Website Creation</h1>
        <h1>Custom CMS</h1>
        `;

        dev.addEventListener('mouseleave', returnContent);
        function returnContent() {
            dev.innerHTML = `<div class="boxImg">
            <img src="./resources/services/laptop.png" alt="">
        </div>
        <h1 id="devBoxH1">development</h1>
        `;
            dev.style.backgroundColor = '#b22cb5';
        }
    } else {

        dev.innerHTML = `<h1>Software-Entwicklung</h1>
        <h1>Web Applikationen</h1>
        <h1>Website-Erstellung</h1>
        <h1>Benutzerdefiniertes CMS</h1>`;

        dev.addEventListener('mouseleave', returnContent);
        function returnContent() {
            dev.innerHTML = `<div class="boxImg">
            <img src="./resources/services/laptop.png" alt="">
        </div>
        <h1 id="devBoxH1">development</h1>
        `
            dev.style.backgroundColor = '#b22cb5';
        }


    };
};

function changeSup() {

    if (languageChanged == false) {
        sup.innerHTML = `<h1>Fulltime Product Support</h1>
        <h1>SEO & Content Creation</h1>
        <h1>Social Media Management</h1>
        `;
        sup.style.backgroundColor = '#f74162';

        sup.addEventListener('mouseleave', returnContent);

        function returnContent() {
            sup.innerHTML = `<div class="boxImg">
            <img src="./resources/services/shield.png" alt="">
        </div>
        <h1 id="supBoxH1">support</h1>
        `;

            sup.style.backgroundColor = '#b22cb5';
        }

    } else {
        sup.innerHTML = `<h1>Vollzeit-Produktsupport</h1>
    <h1>SEO & Content Erstellung</h1>
    <h1>Social Media Management</h1>
    `;
        sup.style.backgroundColor = '#f74162';

        sup.addEventListener('mouseleave', returnContent);

        function returnContent() {
            sup.innerHTML = `<div class="boxImg">
        <img src="./resources/services/shield.png" alt="">
    </div>
    <h1 id="supBoxH1">Support</h1>
    `;

            sup.style.backgroundColor = '#b22cb5';
        }
    };
}