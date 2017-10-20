const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

import { mount } from 'vue-test-utils'
import Simplert from '../src/Simplert.vue'

describe('Simplert.vue', () => {
  it('should be success mounted', () => {    
    let wrapper = mount(Simplert)

    let div = wrapper.find('.simplert')
    expect(div.is('div')).toBe(true)
  })
});

