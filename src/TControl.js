import {Constants, Utils, TComponent, TApplication} from './internal.js'

const style = `
/* Styles for TControl */
`;

class TControl extends TComponent {
    static NAME = 'TControl';
    static STYLE = style;

    createNode() {
        const objectContainer = document.createElement('div');
        let contentContainer = document.createElement('div');
        let caption = document.createElement('div');
        let icon = document.createElement('div');
        const content = [];
        objectContainer.id = this.getProperty('registerName');
        this.getProperty('ownerObject').contentContainer.appendChild(objectContainer);

        Object.assign(objectContainer.style, {
            whiteSpace: this.getProperty('multiLine') ? 'normal' : 'nowrap',
            color: this.getProperty('color') ? this.getProperty('color') : '',
            fontSize: this.getProperty('fontSize') ? this.getProperty('fontSize') : '',
            fontWeight: this.getProperty('fontWeight') ? this.getProperty('fontWeight') : '',
            fontStyle: this.getProperty('fontStyle') ? this.getProperty('fontStyle') : '',
            textAlign: this.getProperty('textAlign') ? this.getProperty('textAlign') : '',
            width: this.getProperty('width') ? this.getProperty('width') + 'px' : '',
            minWidth: this.getProperty('minWidth') ? this.getProperty('minWidth') + 'px' : '',
            height: this.getProperty('height') ? this.getProperty('height') + 'px' : '',
            minHeight: this.getProperty('minHeight') ? this.getProperty('minHeight') + 'px' : '',
            top: this.getProperty('top') !== undefined ? this.getProperty('top') + 'px' : '',
            left: this.getProperty('left') !== undefined ? this.getProperty('left') + 'px' : '',
            right: this.getProperty('right') !== undefined ? this.getProperty('right') + 'px' : '',
            bottom: this.getProperty('bottom') !== undefined ? this.getProperty('bottom') + 'px' : '',
            visibility: 'hidden'
        });

        Object.defineProperties(this, {
            objectContainer: {
                value: objectContainer,
                configurable: true
            },
            contentContainer: {
                value: contentContainer,
                configurable: true
            },
            content: {
                value: content,
                configurable: true
            },
            style: {
                value: objectContainer.style,
                configurable: true
            },
            caption: {
                configurable: true,
                get: () => document.getElementById(objectContainer.id + '.Caption').innerText,
                set: (newCaption) => {
                    document.getElementById(objectContainer.id + '.Caption').innerText = newCaption || ''
                }
            },
            icon: {
                configurable: true,
                get: () => document.getElementById(objectContainer.id + '.Icon'),
                set: (newIcon) => {
                    if (this.icon) {
                        this.setProperty('icon', newIcon);
                        document.getElementById(objectContainer.id + '.Icon').style.backgroundImage = `url('${this.getProperty('icon')}')`
                    }
                }
            }
        });

        if (this.getProperty('contentProperties') !== undefined) {
            contentContainer.id = `${objectContainer.id}.ContentContainer`;
            contentContainer.className = `${this.getProperty('className')}__ContentContainer`;
            objectContainer.appendChild(contentContainer)
        } else {
            contentContainer = undefined;
        }

        if (this.getProperty('caption') !== undefined) {
            objectContainer.appendChild(caption);
            caption.className = `${this.getProperty('className')}__Caption`;
            caption.id = `${objectContainer.id}.Caption`;
            this.caption = this.getProperty('caption');
        } else {
            caption = undefined;
            delete this.caption;
        }

        if (this.getProperty('icon') !== undefined) {
            objectContainer.appendChild(icon);
            icon.className = `${this.getProperty('className')}__Icon`;
            icon.id = `${objectContainer.id}.Icon`;
            this.icon = this.getProperty('icon');
        } else {
            icon = undefined;
            delete this.icon;
        }

        if (this.getProperty('enabled') === false) {
            this.enabled(false);
        } else {
            this.setProperty('enabled', true);
        }

        if (this.getProperty('className') !== 'TForm') {
            this.setProperty('visible', this.getProperty('visible') === undefined ? true : Boolean(this.getProperty('visible')));

            if (this.getProperty('visible') === true) {
                this.show();
            }
        }
        this.invalidated(false)
    }

    destroyNode() {
        const objectContainer = this.objectContainer;
        const ownerObject = this.getProperty('ownerObject');
        const ownerContentContainer = ownerObject.contentContainer;

        objectContainer.dispatchEvent(new CustomEvent('destroy'));

        if (ownerContentContainer.contains(objectContainer)) {
            ownerContentContainer.removeChild(objectContainer)
        }
        super.destroy();
        delete this.objectContainer;
        delete this.contentContainer;
        delete this.content;
        delete this.style;
        delete this.caption;
        delete this.icon;
    }

    onDestroy(fnc, runOnce) {
        this.setEventListener('destroy', fnc, runOnce);
    }

    setEventListener(eventName, fnc, runOnce = false) {
        const options = {};
        if (runOnce) {
            options.once = true;
        }
        this.objectContainer.addEventListener(eventName, fnc, options);
    }

    show() {
        this.setProperty('visible', true);
        this.style.visibility = 'unset';
        this.objectContainer.dispatchEvent(new CustomEvent('show'));
        return this;
    }

    onShow(fnc, runOnce) {
        this.setEventListener('show', fnc, runOnce);
    }

    hide() {
        this.setProperty('visible', false);
        this.style.visibility = 'hidden';
        this.objectContainer.dispatchEvent(new CustomEvent('hide'));
        return this
    }

    onHide(fnc, runOnce) {
        this.setEventListener('hide', fnc, runOnce);
    }

    onChange(fnc, runOnce) {
        this.setEventListener('onchange', fnc, runOnce);
    }

    onInput(fnc, runOnce) {
        this.setEventListener('input', fnc, runOnce);
    }

    click() {
        this.objectContainer.click();
    }

    onClick(fnc, runOnce) {
        this.setEventListener('click', fnc, runOnce);
    }

    enabled(status) {
        const container = this.objectContainer;
        switch (status) {
            case true:
                container.classList.toggle(Constants.DISABLED_CLASS_NAME, false);
                break;
            case false:
                container.classList.toggle(Constants.DISABLED_CLASS_NAME, true);
                break;
            default:
                return this.getProperty('enabled');
        }
        this.setProperty('enabled', status);
        this.content.forEach((object) => object.enabled(status))
    }

    checked(status) {
        const container = this.objectContainer;
        switch (status) {
            case true:
                container.classList.toggle(Constants.CHECKED_CLASS_NAME, true);
                container.classList.toggle(Constants.UNCHECKED_CLASS_NAME, false);
                break;
            case false:
                container.classList.toggle(Constants.CHECKED_CLASS_NAME, false);
                container.classList.toggle(Constants.UNCHECKED_CLASS_NAME, true);
                break;
            default:
                return this.getProperty('checked');
        }
        this.setProperty('checked', status);
        container.dispatchEvent(new CustomEvent('onchange'))
    }

    invalidated(status) {
        const container = this.objectContainer;
        switch (status) {
            case true:
                container.classList.toggle(Constants.INVALIDATED_CLASS_NAME, true);
                break;
            case false:
                container.classList.toggle(Constants.INVALIDATED_CLASS_NAME, false);
                break;
            default:
                return this.getProperty('invalidated')
        }
        this.setProperty('invalidated', status)
    }

    fadeIn(callback) {
        const style = this.style;
        if (style.opacity === '1') {
            return
        }
        if (style.opacity !== '1') {
            style.opacity = '0'
        }
        Utils.animate({
            draw: function (progress) {
                style.opacity = String(progress)
            },
            duration: TApplication.animationSpeed,
            callback: callback
        })
    }

    fadeOut(callback) {
        const style = this.style;
        if (style.opacity === '0') {
            return
        }
        Utils.animate({
            draw: function (progress) {
                style.opacity = String(1 - progress)
            },
            duration: TApplication.animationSpeed,
            callback: callback
        })
    }
}

TApplication.addComponentToLibrary(TControl);
export default TControl;
