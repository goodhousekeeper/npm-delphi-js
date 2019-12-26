import {TApplication, TControl, Utils} from "./internal.js";

const style = `
/* Styles for TOverlay, TForm, TMessageDlg */

.TApplication .TPicture {
    background: transparent no-repeat center center;
    background-clip: border-box;
    background-size: auto;
}
`;

class TPicture extends TControl {
    static get NAME() { return 'TPicture'}
    static get STYLE() { return style }

    createNode() {
        super.createNode();
        const container = this.objectContainer;
        container.classList.add('TPicture');
        Object.assign(container.style, {
            backgroundColor: this.getProperty('backgroundColor') !== undefined ? this.getProperty('backgroundColor') : '',
            backgroundRepeat: this.getProperty('backgroundRepeat') !== undefined ? this.getProperty('backgroundRepeat') : '',
            backgroundPosition: this.getProperty('backgroundPosition') !== undefined ? this.getProperty('backgroundPosition') : '',
            backgroundClip: this.getProperty('backgroundClip') !== undefined ? this.getProperty('backgroundClip') : '',
            backgroundSize: this.getProperty('backgroundSize') !== undefined ? this.getProperty('backgroundSize') : ''
        });
        if (this.getProperty('image')) {
            this.setImage(this.getProperty('image'));
        }
        if (this.getProperty('imagePath')) {
            this.setImageByPath(this.getProperty('imagePath'));
        }
    }

    setImage(image) {
        this.style.backgroundImage = `url(${image})`;
    }

    setImageByPath(imagePath) {
        this.setImage(Utils.getAbsolutePathToResource(imagePath));
    }
}

TApplication.addComponentToLibrary(TPicture);
export default TPicture;