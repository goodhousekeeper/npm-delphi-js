import {TApplication, TControl} from "./internal.js";

const style = `
/* Styles for TStaticText */

.TApplication .TForm .TStaticText {
  box-sizing: border-box;
}

.TApplication .TForm .TStaticText .TStaticText__Caption {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: transparent;
  color: inherit;
  font-weight: inherit;
  font-size: inherit;
  text-align: inherit;
  font-style: inherit;
  font-family: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0;
}

.TApplication .TForm .TStaticText.Disabled .TStaticText__Caption
 {
    color:  var(--font-disabled-color);
}
`;

class TStaticText extends TControl {
    static get NAME() { return 'TStaticText'}
    static get STYLE() { return style }

    createNode() {
        super.createNode();
        const container = this.objectContainer;
        const caption = document.getElementById(`${container.id}.Caption`);
        container.classList.add('TStaticText');

        if (!this.getProperty('multiLine')) {
            caption.style.lineHeight = (parseInt(container.style.height, 10)) + 'px';
        }
    }
}

TApplication.addComponentToLibrary(TStaticText);

export default TStaticText;