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
    @Prop({ type: String, default: 'loading' }) readonly currentState!: string;

    /**
     * Internal state
     */
    state: { [key: string]: any } = {

    };

    /**
     * Get color status depending on state
     */
    get type(): string {
        switch (this.currentState) {
            default:
            case 'loading':
                return 'primary';
            case 'success':
                return 'success';
            case 'error':
                return 'danger';
        }
    }

}
