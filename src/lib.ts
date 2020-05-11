import Vue2TouchEvents from 'vue2-touch-events';
import * as DefaultComponents from './components';
import './assets/styles/main.scss';

/**
 * Init the theme passing the Vue instance
 */
const plugin = {
    install(vue: any, opts: {[key: string]: any} = {
        prefix: 'fast',
        enableTouchEvents: true,
    }) {
        let { prefix } = opts;
        const { enableTouchEvents } = opts;
        if (!prefix) {
            prefix = 'fast';
        }

        if (enableTouchEvents) {
            vue.use(Vue2TouchEvents, {
                disableClick: true,
            });
        }

        const elements: {[key: string]: any} = DefaultComponents;
        for (const componentKey in elements) {
            vue.component(`${prefix}-${componentKey.toLowerCase()}`,
                elements[componentKey]);
        }
    },
};

export default plugin;
