import { Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';

/**
 * test components
 */
@Component({
    components: {
    },
})
export default class LoginForm extends mixins() {

    /**
     * Title
     */
    @Prop({ type: String, default: 'THRUST' }) readonly title!: string;

    /**
     * Logo
     */
    @Prop({ type: String, default: 'https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png' }) readonly logo!: string;

    /**
     * Internal state
     */
    state: {[key: string]: any} = {

    };

    /**
     * Emit click
     */
    emitClick() {
        this.$emit('click', true);
    }

}
