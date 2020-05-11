import { Vue, Component } from 'vue-property-decorator';

/**
 * Global entry point of the app
 */
@Component({
    name: 'App',
})
export default class App extends Vue {
    /**
     * Internal state
     */
    state: {[key: string]: any} = {
    };
}
