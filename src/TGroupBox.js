import {TApplication, TControl} from "./internal.js";

const style = `
/* Styles for TGroupBox */

.TApplication .TForm .TGroupBox {
    box-sizing: border-box;
    background-color: var(--form-background-color);
    border: 1px solid var(--panel-border-color);
    box-shadow: inset 1px 1px 0 0 var(--panel-border-shadow-color), 1px 1px 0 0 var(--panel-border-shadow-color);
    margin: 0 1px 1px 0;
}


.TApplication .TForm .TGroupBox.Disabled {
    box-sizing: border-box;
    border-color: var(--panel-disabled-border-color);
    box-shadow: none;
}

.TApplication .TForm .TGroupBox {
  margin-top: 8px;
  border-radius: 4px;
}

.TApplication .TForm .TGroupBox .TGroupBox__ContentContainer {
  top: 8px;
  right: 0;
  bottom: 0;
  left: 1px;
  overflow: hidden
}

.TApplication .TForm .TGroupBox .TGroupBox__Caption {
  display: inline-block;
  padding: 0 4px;
  top: -8px;
  left: 8px;
  height: 16px;
  line-height: 16px; 
  background-color: var(--form-background-color);
}

.TApplication .TForm .TGroupBox.Disabled .TGroupBox__Caption {
  color:  var(--font-disabled-color);
}
`;

class TGroupBox extends TControl {
    static NAME = 'TGroupBox';
    static STYLE = style;
    createNode() {
        super.createNode();
        const container = this.objectContainer;
        container.classList.add('TGroupBox');
    }
}

TApplication.addComponentToLibrary(TGroupBox);
export default TGroupBox;
