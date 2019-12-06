import {TControl} from './internal.js'

const MODULE_STYLES = `
/* Styles for TButton, TBitButton */

.TApplication .TForm .TButton {
    box-sizing: border-box;
    background-color: var(--button-background-color);
    border: 1px solid var(--button-border-color);
    border-radius: 4px;
    cursor: pointer;
    box-shadow: inset -1px -1px 1px 1px #D1CCC1,
    inset  1px  1px 1px 1px #F0F0F0;
}

.TApplication .TForm .TButton .TButton__Caption,
.TApplication .TForm .TBitButton .TBitButton__Caption
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
    background-color: var(--button-background-active-color);
    box-shadow: inset -1px -1px 1px 1px #F0F0F0,
                inset  1px  1px 1px 1px #D1CCC1;
}

.TApplication .TForm .TButton.Disabled {
    background-color: var(--button-background-disabled-color);
    border-color: var(--button-border-disabled-color);
    box-shadow: none;
    cursor: default;
}

.TApplication .TForm .TButton.Disabled .TButton__Caption,
.TApplication .TForm .TBitButton.Disabled .TBitButton__Caption
 {
    color:  var(--form-color-disabled);
}

.TApplication .TForm .TBitButton .TBitButton__Caption {
    left: 24px;    
}

.TApplication .TForm .TBitButton .TBitButton__Icon {
    top: 0;
    bottom: 0;
    left: 0;
    width: 24px;
    background: transparent no-repeat 4px center;
    filter: grayscale(25%);
}

.TApplication .TForm .TBitButton:hover .TBitButton__Icon {
    filter: grayscale(0%);
}

.TApplication .TForm .TBitButton:active .TBitButton__Icon {
    filter: grayscale(75%);
}


.TApplication .TForm .TBitButton.Disabled .TBitButton__Icon {
    filter: grayscale(100%);
}
`;

class TButton extends TControl {
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

class TBitButton extends TButton {
    createNode() {
        super.createNode();
        const container = this.objectContainer;
        container.classList.add('TBitButton');
    }
}

export {MODULE_STYLES, TButton, TBitButton}
