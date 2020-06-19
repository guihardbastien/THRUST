import { Component, Prop, Model, Watch } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';

/**
 * input
 */
@Component({
    components: {
    },
})
export default class Input extends mixins() {

    /**
     * Value of the input
     */
    @Model('update', { type: [String, Number] }) readonly value!: string;

    /**
     * Type of the input
     */
    @Prop({ type: String, default: 'text' }) readonly type!: string;

    /**
     * Width of 100%
     */
    @Prop({ type: Boolean, default: false }) readonly fill!: boolean;

    /**
     * Placeholder of the input
     */
    @Prop({ type: String, default: '' }) readonly placeholder!: string;

    /**
     * Placeholder of the input
     */
    @Prop({ type: String, default: '' }) readonly label!: string;

    /**
     * Allow to show password when type === 'password'
     */
    @Prop({ type: Boolean, default: false }) readonly showPassword!: boolean;

    /**
     * Disabled state
     */
    @Prop({ type: Boolean, default: false }) readonly disabled!: boolean;

    /**
     * Internal state
     */
    state: { [key: string]: any } = {
        isPasswordVisible: false,
        focused: false,
    };

    /**
     * Clear the input
     */
    clear() {
        this.$emit('change', '');
    }

    /**
     * Propagate changes
     */
    @Watch('value')
    change(value: string) {
        this.$emit('change', value);
    }

}
