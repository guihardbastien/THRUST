import { Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';

/**
 * test components
 */
@Component({
    components: {
    },
})
export default class ImagePlaceholder extends mixins() {

    /**
     * Name
     */
    @Prop({ type: String, default: 'NAME_ERROR' }) readonly name!: string;

    /**
     * Font size for style purpose
     */
    @Prop({ type: String, default: 'text-2xl' }) readonly fontSize!: string;

    /**
     * Color
     */
    @Prop({ type: String, default: 'gray' }) readonly color!: string;

    /**
     * Internal state
     */
    state: { [key: string]: any } = {

    };

}
