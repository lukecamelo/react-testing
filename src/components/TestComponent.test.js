import React from 'react'
import { shallow } from 'enzyme'
import TestComponent from './TestComponent'

describe('everything in the DOM is working properly', () => {
  it('renders a single h1 element', () => {
    const tester = shallow(<TestComponent />)
    expect(tester.find('h1').length).toEqual(1)
  })

  it('displays the whole sentence', () => {
    const sentence = shallow(<TestComponent />)
    expect(sentence.find('h2').text()).toEqual(
      'i am a lazy dog and i like to jump'
    )
  })

  it('adds a box on click', () => {
    const container = shallow(<TestComponent />)
    for (let i = 0; i < 10; i++) {
      container.find('button').simulate('click')
      expect(container.find('div.box').length).toEqual(i+1)
    }
  })
  
  it('adds another box on click', () => {
    const container = shallow(<TestComponent />)
    for (let i = 0; i < 10; i++) {
      container.find('p').simulate('click')
      expect(container.find('div.box').length).toEqual(i+1)
    }
  })

})
