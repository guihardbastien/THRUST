import { Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';

/**
 * test components
 */
@Component({
    components: {
    },
})
export default class Button extends mixins() {

    /**
     * Button icon
     */
    @Prop({ type: String, default: 'none' }) readonly icon!: string;

    /**
     * Internal state
     */
    state: {[key: string]: any} = {

    };

}
