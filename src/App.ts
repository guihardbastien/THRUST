import { Vue, Component } from 'vue-property-decorator';
import Test from '@/components/test/Test.vue';
import Button from '@/components/button/Button.vue';
import Card from '@/components/card/Card.vue';
import LoginForm from '@/components/login-form/LoginForm.vue';
import Input from '@/components/input/Input.vue';
import ImagePlaceholder from '@/components/image-placeholder/ImagePlaceholder.vue';
import Loader from '@/components/loader/Loader.vue';

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
        Input,
        ImagePlaceholder,
        Loader,
    },
})
export default class App extends Vue {
    /**
     * Internal state
     */
    state: {[key: string]: any} = {
        v:'truc',
    };

    /**
     * handle change
     * @param val
     */
    change(val: string) {
        this.state.v = val;
        console.log(val);

    }
}
