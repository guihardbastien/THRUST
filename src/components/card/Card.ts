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
     * Internal state
     */
    state: { [key: string]: any } = {

    };

}
