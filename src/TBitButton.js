import {TApplication, TButton} from "./internal.js";

const style = `
/* Styles for TBitButton */

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


class TBitButton extends TButton {
    static NAME = 'TBitButton';
    static STYLE = style;
    createNode() {
        super.createNode();
        const container = this.objectContainer;
        container.classList.add('TBitButton');
    }
}

TApplication.addComponentToLibrary(TBitButton);
export default TBitButton;