const dataLanguages = document.querySelectorAll("[data-lang]");

const english = document.getElementById('english');
const german = document.getElementById('german');
var languageChanged = false;

english.addEventListener('click', changeToEnglish);
german.addEventListener('click', changeToGerman);


function changeToEnglish() {
    languageChanged = false;

    // welcome.innerText = languages.en.welcome;
    mainLandH2.innerText = languages.en.mainLandH2;
    hiringID.innerHTML = languages.en.hiringID;
    btnHome.innerHTML = languages.en.btnHome;
    roadMapH1.innerText = languages.en.roadMapH1;
    RoadMapP.innerText = languages.en.RoadMapP;
    // servicesWhy.innerText = languages.en.servicesWhy;
    servicesParagraph0.innerText = languages.en.servicesParagraph0;
    // servicesParagraph1.innerText = languages.en.servicesParagraph1;
    // creativeBoxH1.innerText = languages.en.creativeBoxH1;
    // devBoxH1.innerText = languages.en.devBoxH1;
    // supBoxH1.innerText = languages.en.supBoxH1;
    weRockH1.innerText = languages.en.weRockH1;
    weRockH2.innerText = languages.en.weRockH2;
    proposalID.innerHTML = languages.en.proposalID;
    infoID.innerHTML = languages.en.infoID;
    DiscoveryMore.innerHTML = languages.en.DiscoveryMore;
    StrategyMore.innerHTML = languages.en.StrategyMore;
    DevMore.innerHTML = languages.en.DevMore;
    LaunchMore.innerHTML = languages.en.LaunchMore;
    askAQ.innerHTML = languages.en.askAQ;
    contactHead.innerText = languages.en.contactHead;

}

function changeToGerman() {
    languageChanged = true;

    // welcome.innerText = languages.de.welcome;
    mainLandH2.innerText = languages.de.mainLandH2;
    hiringID.innerHTML = languages.de.hiringID;
    btnHome.innerHTML = languages.de.btnHome;
    roadMapH1.innerText = languages.de.roadMapH1;
    RoadMapP.innerText = languages.de.RoadMapP;
    // servicesWhy.innerText = languages.de.servicesWhy;
    servicesParagraph0.innerText = languages.de.servicesParagraph0;
    // servicesParagraph1.innerText = languages.de.servicesParagraph1;
    // creativeBoxH1.innerText = languages.de.creativeBoxH1;
    // devBoxH1.innerText = languages.de.devBoxH1;
    // supBoxH1.innerText = languages.de.supBoxH1;
    weRockH1.innerText = languages.de.weRockH1;
    weRockH2.innerText = languages.de.weRockH2;
    proposalID.innerHTML = languages.de.proposalID;
    infoID.innerHTML = languages.de.infoID;
    DiscoveryMore.innerHTML = languages.de.DiscoveryMore;
    StrategyMore.innerHTML = languages.de.StrategyMore;
    DevMore.innerHTML = languages.de.DevMore;
    LaunchMore.innerHTML = languages.de.LaunchMore;
    askAQ.innerHTML = languages.de.askAQ;
    contactHead.innerText = languages.de.contactHead;
}