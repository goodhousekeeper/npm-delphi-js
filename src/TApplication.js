import {Utils, Constants, Forms, Buttons, Inputs} from './internal.js'

/* Application instance */
const TApplication = Object.create(null);
/* Private properties */
const componentModulesLoaded = [];
const componentLibrary = Object.create(null);
const objectStorage = Object.create(null);
const modalStack = [];
const content = [];
let caption = 'Delphi.js';
let icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAwAAAAMADO7oxXAAAEhklEQVRo3u2aPXLjOBCFP+86NxMrVcd24huwb7K6CZs30VGaN1CiiaHUTOgTeAIAEqkfivoZ21O1r4plgwaBfo2HBhow/OV4uLUBM1OgNLMpdfu/1/cg8HiHNkrgvPWHuAuBq0bAzKr4o2+3gRKf0x8OiqqKqmJmF9uRbfj3gg9UVf9zd23bVtu2lSACgwcozjTUrw90IRBCyM4ME82psg2XSGgrlfV6fdSjZ6E6KAZ3gjupXQN8qj+zDZOGzsw+3R13v9zoaR30Sw8j1SrAqgqaRnHX8UmcI4y7x7Hd8+AoQogPDCRzFKr9+hXQkEYj2wDGyws6m0Xj39+fHfB/zphRAnY1Aff4ZCJjBHYELfU7sAGw2QwtS3BXfv16dTOrR4brCtlkgzkekCwbO+aI4VqRBsLpy6YftU5KaLLXe1KREMh+FCFGJZQYXEIiFMA96iNJayHCqutYdd2enByRgAg0Dby/t87eRB8lcNZbmUDyuvS9vi1o6jMR8AAeohVJOgsRliHsCGxl54hAWUJdA6zdbD1YAA8kNFikThE4JZVBIaI/9PtSlMUCWSwAWIbAcm+ufFZG08SuzI5Hp4MR8GTY3sQaQmTnqfxdcroAuIKE+ABFUSAihJ4zRARREFnGOl0BFCxEKIoVRbGiaSCE3KofNeU0gbGJm8PiHgHtE1AfJ6CKyJL5PBEIcfgWIog487kn2Qg7GU4gcBHMUoxgcqQSEUSEstTB+4UIqjp4P6bijME6YGbV6+vrSPXbURSrrWz6eHrave+6NzabBagS6KniCPZHwJ6fn/+k/RTFivncj74vihUAHx9vhLAA9f5+aRKBb0fTeIpIPqn+QEJXbRmuRN0oHmRbzrLZrgcT8W0EzJVmsyOQZXMTga+AufJQ28H7ZQjoiNYnEVDVFMcvb+gWbDYLuu7tqm9/BIEQridwVRQydarSj0rhonZcMVemZ5KH2J8D1rbtaGumTjkPQFw934riJhKjcI8biZGgsr8S1+v1epRAVToqP5TAAGaDuWDqfFZ2WO3E+/txcBs7NzpGoCFlf0LcB/Zl04fIkqen1R8zfgqOTWJPj2UCVelHP85b4Z9GABgexH45dhnf2XOr0TAaE+pA02hKyw9Ho+ve+Ph4A5Z3M16ICY9PWI9GtxIigbJ03JXlNmYPsd363gsTIk8fByOQk/oqJdR1neR0JDW6dOt7znDcs3Rt6v3BgICZVS8va53N2nQOs8sYadt4tFCBB6HZCOHCneM5r0t0kBEj4SQcZGSzWUtZ5oQaN0sXEfE0WAGajSQ5hduNzwR2dwUXXXw8Zs9zIJthBMhBqa5TjurOpEuNUzg4QpwumwGBUdkMnQSkHavkYyGPg+DTOgO2x4aqStu23tu6TJbNgABjshkhEI+FjG18vYSAOxq97uv1ur5lzXk0s3RXZefuqmpgrLPPKR2qqrn7TUYPCHDdDeOPwSNQb+8B/kJ8eVJ/b9x6sFX1C7urAk+FGGG7bkXXLeO7tlXbfdLYLfkkt/+rwdmJa2f+bDfe2P/1EvqfwHfjN57qfUzoi+OGAAAAJXRFWHRjcmVhdGUtZGF0ZQAyMDEwLTA3LTI3VDEyOjEyOjQ3KzAwOjAwA3zMRwAAACV0RVh0bW9kaWZ5LWRhdGUAMjAxMC0wNy0yN1QxMjoxMjo0NyswMDowMFzNunMAAAAASUVORK5CYII=';
let mainFormName;
let animationSpeed = Constants.ANIMATION_SPEED;

/* ----------------------------------------------------------------------------- */

Object.defineProperties(TApplication, {
    caption: {
        get: () => caption,
        set: (newCaption) => {
            caption = newCaption;
            document.title = newCaption;
        }
    },
    icon: {
        get: () => icon,
        set: (newIcon) => {
            icon = newIcon;
            Utils.addFaviconNode(newIcon);
            TApplication.getObjectsByClassName('TForm').forEach(form => {
                if (form.icon) {
                    form.icon = newIcon;
                }
            })
        }
    },
    mainFormName: {
        get: () => mainFormName,
        set: (newName) => {
            mainFormName = newName;
        }
    },
    getMainForm: {
        value: () => TApplication.getObject(mainFormName)
    },
    modalStack: {
        value: modalStack
    },
    componentModulesLoaded: {
        value: componentModulesLoaded
    },
    contentContainer: {
        value: document.body
    },
    content: {
        value: content
    },
    animationSpeed: {
        get: () => animationSpeed,
        set: (value) => {
            animationSpeed = Math.abs(parseInt(value, 10));
        }
    },

    createForm: {
        value: (formModule) => {
            let formObject = TApplication.getObject(formModule.properties.name);
            if (!formObject) {
                formObject = TApplication.createObject(formModule.properties);
                if (formModule.onFormCreate) {
                    formModule.onFormCreate(formObject)
                }
            }
            return formObject
        }
    },

    createObject: {
        value: (properties) => {
            const ownerName = properties.ownerName ? properties.ownerName : '';
            const ownerObject = TApplication.getObject(ownerName);

            if (ownerName !== '') {
                properties.registerName = `${ownerName}.${properties.name}`
            } else {
                properties.registerName = `${properties.name}`
            }

            properties.ownerObject = ownerObject;
            if (TApplication.getObject(properties.registerName)) {
                throw new Error(`Object with name "${properties.registerName}" already exists.`)
            }
            const newObject = new componentLibrary[properties.className](properties);
            objectStorage[properties.registerName] = newObject;
            Object.defineProperty(ownerObject, properties.name, {
                value: newObject,
                configurable: true
            });
            ownerObject.content.push(newObject);
            if (newObject.createNode) {
                newObject.createNode()
            }
            if (properties.contentProperties) {
                newObject.createContent()
            }

            return newObject
        }
    },
    getObject: {
        value: (objectRegisterName) => {
            if (objectRegisterName === '') {
                return TApplication;
            } else if (objectStorage[objectRegisterName]) {
                return objectStorage[objectRegisterName]
            } else {
                return false;
            }
        }
    },
    destroyObject: {
        value: (object) => {
            const registerName = object.getProperty('registerName');
            const name = object.getProperty('name');
            const ownerObject = object.getProperty('ownerObject');
            const objectContentIndex = ownerObject.content.indexOf(object);

            if (object.getProperty('contentProperties')) {
                object.deleteContent()
            }
            if (objectStorage[registerName]) {
                delete objectStorage[registerName]
            }
            if (ownerObject[name]) {
                delete ownerObject[name]
            }
            if (objectContentIndex > -1) {
                ownerObject.content.splice(objectContentIndex, 1)
            }
            if (object.destroyNode) {
                object.destroyNode()
            }
            return null
        }
    },
    getObjectsByClassName: {
        value: (className) => {
            const result = [];
            for (const [key, value] of Object.entries(objectStorage)) {
                if (objectStorage[key].getProperty('className') === className) {
                    result.push(value);
                }
            }
            return result;
        }
    },
    addComponentsToLibrary: {
        value: (componentModule) => {
            if (TApplication.componentModulesLoaded.indexOf(componentModule) !== -1) {
                return false;
            }
            for (const [key, value] of Object.entries(componentModule)) {
                if (key === 'MODULE_STYLES') {
                    Utils.updateStyleNode(value);
                    continue;
                }
                if (componentLibrary[key]) {
                    throw new Error(`Component with name ${value.name} already exists`);
                } else {
                    componentLibrary[key] = value;
                }
            }
            TApplication.componentModulesLoaded.push(componentModule);
        }
    }
});

/* ----------------------------------------------------------------------------- */

/* Application Instance Initialize */
Utils.addStyleNode(Constants.APPLICATION_STYLES);
document.body.classList.add('TApplication');

/* Add base components */
TApplication.addComponentsToLibrary(Forms);
TApplication.addComponentsToLibrary(Buttons);
TApplication.addComponentsToLibrary(Inputs);

/* Add core Objects */
TApplication.createObject(Constants.OVERLAY_PROPERTIES);

/* Set up base properties */
TApplication.caption = caption;
TApplication.icon = icon;

/* ----------------------------------------------------------------------------- */

export default TApplication;
