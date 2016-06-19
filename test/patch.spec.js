import test from 'ava'
import sinon from 'sinon'
import '../src/patch'
import { mount } from 'enzyme'
import React from 'react'
import SelectForm from './helpers/SelectForm'

test('app', t => {
  const handleChange = sinon.spy()
  const wrapper = mount(<SelectForm handleChange={handleChange} />)

  const select = wrapper.antd().find('Select')

  select.simulate('change', { target: { value: 1 } })

  t.is(handleChange.firstCall.args[0], 1)
})
