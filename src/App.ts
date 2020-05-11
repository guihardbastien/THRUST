import { Vue, Component } from 'vue-property-decorator';
import Test from '@/components/test/Test.vue';

/**
 * Global entry point of the app
 */
@Component({
    name: 'App',
    components: {
        Test,
    },
})
export default class App extends Vue {
    /**
     * Internal state
     */
    state: {[key: string]: any} = {
    };
}
