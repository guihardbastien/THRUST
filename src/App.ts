import { Vue, Component } from 'vue-property-decorator';
import Test from '@/components/test/Test.vue';
import Button from '@/components/button/Button.vue';
import Card from '@/components/card/Card.vue';
import LoginForm from '@/components/login-form/LoginForm.vue';

/**
 * Global entry point of the app
 */
@Component({
    name: 'App',
    components: {
        Test,
        Button,
        Card,
        LoginForm,
    },
})
export default class App extends Vue {
    /**
     * Internal state
     */
    state: {[key: string]: any} = {
    };
}
