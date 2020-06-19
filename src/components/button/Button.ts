import { Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';

/**
 * button component
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
     * Button color
     */
    @Prop({ type: String, default: 'default' }) readonly color!: string;

    /**
     * Internal state
     */
    state: { [key: string]: any } = {

    };

    emitClick() {
        this.$emit('click', '');
    }

}
