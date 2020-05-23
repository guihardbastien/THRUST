import { Vue, Component } from 'vue-property-decorator';
import Test from '@/components/test/Test.vue';
import Button from '@/components/button/Button.vue';
/**
 * Global entry point of the app
 */
@Component({
    name: 'App',
    components: {
        Test,
        Button,
    },
})
export default class App extends Vue {
    /**
     * Internal state
     */
    state: {[key: string]: any} = {
    };
}
