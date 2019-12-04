/**
 * Constants
 */
const APPLICATION_STYLES = `
/* Reset styles, styles for TApplication,  setting up css variables */

* {
    margin: 0;
    padding: 0;
    border: 0 none;
    background-color: transparent;
    position: absolute;
}

*:focus {
    outline: none;
}

html {
    width: 100%;
    height: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 14px;
    overflow: auto;
}

body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: #E6E6E6;
    background-image: url('data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQAQMAAAC6caSPAAAAAXNSR0IArs4c6QAAAAZQTFRF////zsrFFOhhzwAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfbCA8IIAxOHyTqAAAAbElEQVR42u3PMQ0AAAgDsMlHNhqWcHC0Dpqp5S0XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXF5cjC3IDYNdXepeXAAAAAElFTkSuQmCC');
    background-size: auto;
    background-repeat: repeat;
    --form-color: #1F2933;
    --form-color-disabled: #ACA899;
    --form-shadow-color: #FFF;
    --form-back-layer: #EEEBD6;
    --form-caption-color: #FFF;
    --form-caption-shadow-color: #072BA2;
    --button-background-color: #F3F3F3;
    --button-background-active-color: #E3E3DC;
    --button-background-disabled-color: #F5F4EA;
    --button-border-color: #003C74;
    --button-border-disabled-color: #C9C7BA;
    --panel-border-color: #ACA899;
    --panel-border-shadow-color: #FFF;
    --panel-border-disabled-color: #C9C7BA;
    --input-background-color: #FFF;
    --input-background-invalidated-color: #FFE3E3;
    --input-border-color: #7F9DB9;
    --input-border-invalidated-color: #E12D39;
    --input-background-disabled-color: #F5F4EA;    
    --input-border-disabled-color: #C9C7BA;
}
`;

const STYLE_TAG_TITLE = 'Delphi.js';

const DISABLED_CLASS_NAME = 'Disabled';
const CHECKED_CLASS_NAME = 'Checked';
const UNCHECKED_CLASS_NAME = 'Unchecked';
const INVALIDATED_CLASS_NAME = 'Invalidated';
const BRING_TO_FRONT_Z_INDEX = 1000;
const ANIMATION_SPEED = 500;
const ANIMATION_FUNCTION_LINEAR = (timeFraction) => timeFraction;
const ANIMATION_FUNCTION_ARC = (timeFraction) => 1 - Math.sin(Math.acos(timeFraction));

const OVERLAY_Z_INDEX = 1000000;
const OVERLAY_PROPERTIES = {
    name: 'overlay',
    className: 'TOverlay',
    visible: false
};

const MODAL_RESULT_CLOSE = 'mrClose';

/* ------------------------------------------------------------------------------------------ */
export {
    APPLICATION_STYLES,

    STYLE_TAG_TITLE,

    DISABLED_CLASS_NAME,
    CHECKED_CLASS_NAME,
    UNCHECKED_CLASS_NAME,
    INVALIDATED_CLASS_NAME,
    BRING_TO_FRONT_Z_INDEX,

    ANIMATION_SPEED,
    ANIMATION_FUNCTION_LINEAR,
    ANIMATION_FUNCTION_ARC,

    OVERLAY_Z_INDEX,
    OVERLAY_PROPERTIES,

    MODAL_RESULT_CLOSE
}
