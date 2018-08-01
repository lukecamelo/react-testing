import React from 'react'
import { shallow } from 'enzyme'
import TestComponent from './TestComponent'

describe('<TestComponent/>', () => {
  it('renders the test component', () => {
    const tester = shallow(<TestComponent/>)
    expect(tester.find('h1').length).toEqual(1)
  })
})
