import { Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';

/**
 * test components
 */
@Component({
    components: {
    },
})
export default class Card extends mixins() {

    /**
     * Title
     */
    @Prop({ type: String, default: 'THRUST' }) readonly title!: string;

    /**
     * Picture
     */
    @Prop({
        type: String,
        default: 'https://unsplash.com/photos/sc5sTPMrVfk/download?force=true&w=640',
    }) readonly picture!: string;

    /**
     * User
     */
    @Prop({ type: String, default: 'Thrust_user' }) readonly user!: string;

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
