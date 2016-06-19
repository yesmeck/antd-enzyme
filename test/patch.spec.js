import test from 'ava'
import sinon from 'sinon'
import '../src/patch'
import { mount } from 'enzyme'
import React from 'react'
import SelectForm from './helpers/SelectForm'

test('basic', t => {
  const handleChange = sinon.spy()
  const wrapper = mount(<SelectForm handleChange={handleChange} />)
  const select = wrapper.antd().find('Select', { name: 'color' })

  select.simulate('change', { target: { value: 'green' } })

  t.true(handleChange.calledOnce)
  t.is(handleChange.firstCall.args[0], 'green')
})

test('multiple', t => {
  const handleChange = sinon.spy()
  const wrapper = mount(<SelectForm handleChange={handleChange} />)
  const select = wrapper.antd().find('Select', { name: 'fruit' })

  select.simulate('change', { target: { value: ['apple', 'banana'] } })

  t.true(handleChange.calledOnce)
  t.deepEqual(handleChange.firstCall.args[0], ['apple', 'banana'])
})
