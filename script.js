let cookieValueElement = document.getElementById('cookies-value');
let cookie = document.getElementById('cookie-container').getElementsByTagName('img')[0];
let cookiesCount = 0;
let upgradesList = document.getElementById('left').getElementsByTagName('ul')[0];
let currentMultiplier = 1;
let multiplierElement = document.getElementById('multiplier-value');
const UPGRADE_AVAILABLE_CLASS = 'upgrade--available';
const UPGRADE_UNAVAILABLE_CLASS = 'upgrade--unavailable';


const cookieOnClick = () => {
    cookiesCount += currentMultiplier;
    cookieValueElement.innerText = cookiesCount.toString();
    updateStats();
}

cookie.addEventListener('click', cookieOnClick);

const upgrades = [
    new Upgrade('Маленькая фабрика', 2, 10),
    new Upgrade('Средняя фабрика', 3, 50),
    new Upgrade('Большая фабрика', 4, 100),
    new Upgrade('Гигантская фабрика', 10, 1000),
]

const updateMultiplierValueElement = (value) => {
    multiplierElement.innerText = value.toString();
}

const updateStats = () => {
    for (let upgrade of upgrades) {
        if (cookiesCount >= upgrade.price) {
            upgrade.element.classList.remove(UPGRADE_UNAVAILABLE_CLASS);
            upgrade.element.classList.add(UPGRADE_AVAILABLE_CLASS);
        } else {
            upgrade.element.classList.remove(UPGRADE_AVAILABLE_CLASS);
            upgrade.element.classList.add(UPGRADE_UNAVAILABLE_CLASS);
        }
    }
}

const upgradeOnClick = (upgrade) => {
    return function () {
        if (cookiesCount >= upgrade.price) {
            currentMultiplier += upgrade.multiplier;
            cookiesCount -= upgrade.price;
            cookieValueElement.innerText = cookiesCount.toString();
            updateMultiplierValueElement(currentMultiplier);
            updateStats();
        }
    }
}

for (let upgrade of upgrades) {
    let element = document.createElement('li');
    element.innerHTML = upgrade.name + '<span class="upgrade-price">Цена: ' + upgrade.price + '</span>';
    element.classList.add(UPGRADE_UNAVAILABLE_CLASS);
    element.addEventListener('click', upgradeOnClick(upgrade));
    upgradesList.appendChild(element);
    upgrade.setElement(element);
}
