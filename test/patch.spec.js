import test from 'ava'
import sinon from 'sinon'
import '../src/patch'
import { mount } from 'enzyme'
import React from 'react'
import SelectForm from './helpers/SelectForm'

test('app', t => {
  const handleChange = sinon.spy()
  const wrapper = mount(<SelectForm handleChange={handleChange} />)

  const select = wrapper.antd().find('Select', { name: 'color' })

  select.simulate('change', { target: { value: 'green' } })

  t.is(handleChange.firstCall.args[0], 'green')
})
