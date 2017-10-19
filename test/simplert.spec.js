import { shallow } from 'vue-test-utils'
import Simplert from '../src/Simplert.vue'

describe('test Simplert', () => {
  it('Test use plugin simplert', () => {    
    let wrapper = shallow(Simplert)

    let div = wrapper.find('.simplert')
    expect(div.is('div')).toBe(true)
  })
});

