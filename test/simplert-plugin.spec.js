import { createLocalVue, shallow } from 'vue-test-utils'

import App from '../src/App.vue'
import Simplert from '../src/index.js'

describe('test Simplert', () => {
  it('Test use plugin simplert', () => {    
    let localVue = createLocalVue()
    
    localVue.use(Simplert)

    let wrapper = shallow(App, {
      localVue
    })

    let div = wrapper.find('.simplert')
    expect(div.is('div')).toBe(true)
  })
});

