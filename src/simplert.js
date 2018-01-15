import simplertMixin from 'vue2-simplert-core'
import { SimplertEventBus } from './simplert-event-bus.js'

export default {
  name: 'Simplert',
  mixins: [
    simplertMixin
  ],
  created () {
    // listen eventBus
    SimplertEventBus.$on('open', this.openSimplert);
    SimplertEventBus.$on('close', this.justCloseSimplert);
  }
}
