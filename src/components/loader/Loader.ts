import { Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';

/**
 * test components
 */
@Component({
    components: {
    },
})
export default class Loader extends mixins() {
    /**
     * State
     */
    @Prop({ type: String, default: 'error' }) readonly currentState!: string;

    /**
     * Internal state
     */
    state: { [key: string]: any } = {

    };

}
