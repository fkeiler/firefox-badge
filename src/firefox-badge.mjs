import { styles, getFirefoxButton, text, getFirefoxText } from './style.css';
import firefoxLogo from './firefox-logo.svg';

class FirefoxBadge extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        const root = document.createElement("a");
        root.href = "https://www.mozilla.org/firefox/switch/";
        root.relList.add("noreferrer", "nofollow");
        root.target = "_blank";
        root.classList.add(getFirefoxButton);

        let delay = 0;
        for (const string of ["Safer, Faster, Better", "The browser you can trust", "Rediscover the web"]) {
            const textElement = document.createElement("span");
            textElement.innerText = string;
            textElement.style.animationDelay = `${delay}s`;
            textElement.classList.add(text);
            root.appendChild(textElement);
            delay += 3;
        }

        const getFirefox = document.createElement("span");
        getFirefox.innerHTML = "Get <strong>Firefox</strong>";
        getFirefox.classList.add(text, getFirefoxText);
        getFirefox.style.animationDelay = '9s';
        root.appendChild(getFirefox);

        root.appendChild(firefoxLogo);

        const styleRoot = document.createElement("style");
        styleRoot.innerHTML = styles;

        this.appendChild(styleRoot);
        this.appendChild(root);
    }
    disconnectedCallback() {
        console.debug("Firefox Badge has been removed from the page");
    }
}

export default FirefoxBadge;