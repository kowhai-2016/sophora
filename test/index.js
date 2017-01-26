import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'

import App from '../client/components/App'

test('<App />', t => {
  const expected = 'Things'
  const wrapper = shallow(React.createElement(App))
  t.is(wrapper.find('h1').text(), expected)
})
