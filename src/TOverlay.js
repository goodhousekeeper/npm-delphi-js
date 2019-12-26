import {Constants, TControl, TApplication} from "./internal.js";

const style = `
/* Styles for TOverlay */

.TOverlay {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--overlay-background-color);
}
`;

class TOverlay extends TControl {
    static get NAME() { return 'TOverlay'}
    static get STYLE() { return style }

    createNode() {
        super.createNode();
        this.objectContainer.classList.add('TOverlay');
        this.style.zIndex = Constants.OVERLAY_Z_INDEX;
    }

    show() {
        this.style.opacity = '0';
        super.show();
        this.fadeIn();
    }

    hide() {
        this.fadeOut(() => super.hide());
    }
}

TApplication.addComponentToLibrary(TOverlay);
TApplication.createObject(Constants.OVERLAY_PROPERTIES);

export default TOverlay;
