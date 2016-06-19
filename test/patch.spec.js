import test from 'ava'
import sinon from 'sinon'
import '../src/patch'
import { mount } from 'enzyme'
import React from 'react'
import SelectForm from './helpers/SelectForm'

test.beforeEach(t => {
  t.context.handleChange = sinon.spy()
  t.context.wrapper = mount(<SelectForm handleChange={t.context.handleChange} />)
})

test('basic select', t => {
  const { handleChange, wrapper } = t.context
  const select = wrapper.antd().find('Select', { name: 'color' })

  select.simulate('change', { target: { value: 'green' } })

  t.true(handleChange.calledOnce)
  t.is(handleChange.firstCall.args[0], 'green')
})

test('multiple select', t => {
  const { handleChange, wrapper } = t.context
  const select = wrapper.antd().find('Select', { name: 'fruit' })

  select.simulate('change', { target: { value: ['apple', 'banana'] } })

  t.true(handleChange.calledOnce)
  t.deepEqual(handleChange.firstCall.args[0], ['apple', 'banana'])
})

test('tag select', t => {
  const { handleChange, wrapper } = t.context
  const select = wrapper.antd().find('Select', { name: 'music' })

  select.simulate('change', { target: { value: ['rock', 'jazz'] } })

  t.true(handleChange.calledOnce)
  t.deepEqual(handleChange.firstCall.args[0], ['rock', 'jazz'])
})
