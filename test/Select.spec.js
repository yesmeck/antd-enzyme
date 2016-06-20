import test from 'ava'
import sinon from 'sinon'
import '../src/patch'
import { mount } from 'enzyme'
import React from 'react'
import Form from './helpers/Form'

test.beforeEach(t => {
  t.context.handleChange = sinon.spy()
  t.context.wrapper = mount(<Form handleChange={t.context.handleChange} />)
})

test('basic', t => {
  const { handleChange, wrapper } = t.context
  const select = wrapper.antd().find('Select', { name: 'color' })

  select.simulate('change', { target: { value: 'green' } })

  t.true(handleChange.calledOnce)
  t.true(handleChange.calledWith('green'))
})

test('multiple', t => {
  const { handleChange, wrapper } = t.context
  const select = wrapper.antd().find('Select', { name: 'fruit' })

  select.simulate('change', { target: { value: ['apple', 'banana'] } })

  t.true(handleChange.calledOnce)
  t.true(handleChange.calledWith(['apple', 'banana']))
})

test('tag', t => {
  const { handleChange, wrapper } = t.context
  const select = wrapper.antd().find('Select', { name: 'music' })

  select.simulate('change', { target: { value: ['rock', 'jazz'] } })

  t.true(handleChange.calledOnce)
  t.true(handleChange.calledWith(['rock', 'jazz']))
})
