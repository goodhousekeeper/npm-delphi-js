import {TApplication, TControl} from "./internal.js";

const style = `
/* Styles for TPanel */

.TApplication .TForm .TPanel{
    box-sizing: border-box;
    background-color: var(--form-background-color);
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

.TApplication .TForm .TPanel.Disabled {
    box-sizing: border-box;
    border-color: var(--panel-disabled-border-color);
    box-shadow: none;
}
`;

class TPanel extends TControl {
    static NAME = 'TPanel';
    static STYLE = style;
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

TApplication.addComponentToLibrary(TPanel);
export default TPanel;