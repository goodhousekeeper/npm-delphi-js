import {TApplication, TControl} from "./internal.js";

const style = `
/* Styles for TButton */

.TApplication .TForm .TButton {
    box-sizing: border-box;
    background-color: var(--button-background-color);
    border: 1px solid var(--button-border-color);
    border-radius: 4px;
    cursor: pointer;
    box-shadow: inset -1px -1px 1px 1px #D1CCC1,
    inset  1px  1px 1px 1px #F0F0F0;
}

.TApplication .TForm .TButton .TButton__Caption
 {
    top: 0;
    right: 4px;
    bottom: 0;
    left: 4px;
    background-color: transparent;
    color: inherit;
    font-weight: inherit;
    font-size: inherit;
    text-align: inherit;
    font-style: inherit;
    font-family: inherit;
    overflow: hidden;
    text-overflow: ellipsis;
}

.TApplication .TForm .TButton:hover {
    box-shadow: inset  -1px  -1px 2px 0px #F8B230,
                inset   1px   1px 2px 0px #FDD889;                   
}

.TApplication .TForm .TButton:active {
    background-color: var(--button-active-background-color);
    box-shadow: inset -1px -1px 1px 1px #F0F0F0,
                inset  1px  1px 1px 1px #D1CCC1;
}

.TApplication .TForm .TButton.Disabled {
    background-color: var(--button-disabled-background-color);
    border-color: var(--button-disabled-border-color);
    box-shadow: none;
    cursor: default;
    color:  var(--font-disabled-color);
}
`;

class TButton extends TControl {
    static get NAME() { return 'TButton'}
    static get STYLE() { return style }

    createNode() {
        super.createNode();
        const container = this.objectContainer;
        const caption = document.getElementById(`${container.id}.Caption`);

        container.classList.add('TButton');

        container.appendChild(caption);
        if (this.getProperty('toolTip')) {
            container.title = this.getProperty('toolTip');
        }

        caption.style.lineHeight = (parseInt(container.style.height, 10) - 2) + 'px';
    }
}

TApplication.addComponentToLibrary(TButton);
export default TButton;
