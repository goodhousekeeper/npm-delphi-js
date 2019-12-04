import TControl from './TControl.js'

const MODULE_STYLES = `
/* Styles for TPanel */

.TApplication .TForm .TPanel, .TApplication .TForm .TGroupBox {
    box-sizing: border-box;
    background-color: var(--form-back-layer);
    border: 1px solid var(--panel-border-color);
    box-shadow: inset 1px 1px 0 0 var(--panel-border-shadow-color), 1px 1px 0 0 var(--panel-border-shadow-color);
    margin: 0 1px 1px 0;
}

.TApplication .TForm .TPanel .TPanel__ContentContainer {
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
}

.TApplication .TForm .TPanel.Lowered {
    box-sizing: border-box;
    border-right-color: var(--panel-border-shadow-color);
    border-bottom-color: var(--panel-border-shadow-color);
    box-shadow: none;
}

.TApplication .TForm .TPanel.Raised {
    box-sizing: border-box;
    border-left-color: var(--panel-border-shadow-color);
    border-top-color: var(--panel-border-shadow-color);
    box-shadow: none;
}

.TApplication .TForm .TPanel.Disabled, .TApplication .TForm .TGroupBox.Disabled {
    box-sizing: border-box;
    border-color: var(--panel-border-disabled-color);
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
  background-color: var(--form-back-layer);
}

.TApplication .TForm .TGroupBox.Disabled .TGroupBox__Caption {
  color:  var(--form-color-disabled);
}

`;

class TPanel extends TControl {
    createNode() {
        super.createNode();
        const container = this.objectContainer;
        const contentContainer = this.contentContainer;
        container.classList.add('TPanel');
        if (contentContainer) {
            Object.assign(contentContainer.style, {
                overflowX: this.getProperty('overflowX') ? 'scroll' : 'hidden',
                overflowY: this.getProperty('overflowY') ? 'scroll' : 'hidden'
            })
        }
        if (this.getProperty('lowered')) {
            this.low()
        }
        if (this.getProperty('raised')) {
            this.raise()
        }
    }

    low() {
        this.objectContainer.classList.remove('Raised');
        this.objectContainer.classList.add('Lowered');
    }

    raise() {
        this.objectContainer.classList.remove('Lowered');
        this.objectContainer.classList.add('Raised');
    }
}

class TGroupBox extends TControl {
    createNode() {
        super.createNode();
        const container = this.objectContainer;
        container.classList.add('TGroupBox');
    }
}

export {MODULE_STYLES, TPanel, TGroupBox}
