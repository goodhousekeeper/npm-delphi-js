/**
 * Utility static class
 */

import {Constants} from './internal.js'

export default class Utils {
    /**
     * add HTML node <STYLE> in <HEAD> section with @param {string} style
     * @param {string} style - css styles in text format
     */
    static addStyleNode(style) {
        const styleNode = document.createElement('style');
        styleNode.title = Constants.STYLE_TAG_TITLE;
        styleNode.innerHTML = style.replace(/\s+/g, ' ');
        document.getElementsByTagName('head')[0].appendChild(styleNode);
    }

    static updateStyleNode(style) {
        let styleNode;
        for (const node of document.getElementsByTagName('style')) {
            if (node.title === Constants.STYLE_TAG_TITLE) {
                styleNode = node;
            }
        }
        if (!styleNode) {
            return;
        }
        styleNode.innerHTML += style.replace(/\s+/g, ' ');
    }

    static addFaviconNode(favicon) {
        const headNode = document.getElementsByTagName('head')[0];
        let iconNode;
        headNode.childNodes.forEach((item) => {
            if (item.rel === 'shortcut icon') {
                iconNode = item;
            }
        });
        if (!iconNode) {
            iconNode = document.createElement('link');
            iconNode.rel = 'shortcut icon';
            document.getElementsByTagName('head')[0].appendChild(iconNode);
        }
        iconNode.href = favicon;
    }

    static setCSSVariable(name, value) {
        document.documentElement.style.setProperty(name, value);
    }

    static animate(options) {
        const start = performance.now();

        const duration = options.duration || options.duration === 0 ? options.duration : Constants.ANIMATION_SPEED;
        const timing = options.timing ? options.timing : Constants.ANIMATION_FUNCTION_LINEAR;

        window.requestAnimationFrame(function animate(time) {
            /* timeFraction from 0 to 1 */
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) {
                timeFraction = 1;
            }
            /* current animation state */
            const progress = timing(timeFraction);
            options.draw(progress);
            if (timeFraction < 1) {
                window.requestAnimationFrame(animate);
            } else {
                if (options.callback) {
                    options.callback();
                }
            }
        })
    }

    static getAbsolutePathToResource(resourcePath) {
        const location = window.location.href;
        return `${location.replace('/index.html', '')}/${resourcePath}`;
    }
}
