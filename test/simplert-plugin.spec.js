import { createLocalVue, mount } from 'vue-test-utils'

import App from '../src/App.vue'
import Simplert from '../src/simplert-plugin.js'

describe('App.vue', () => {
  it('should be success mounted', () => {
    let localVue = createLocalVue()

    localVue.use(Simplert)

    let wrapper = mount(App, {
      localVue
    })

    let div = wrapper.find('.app')
    expect(div.is('div')).toBe(true)
  })
});

