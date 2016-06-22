import test from 'ava'
import sinon from 'sinon'
import 'patch'
import { mount } from 'enzyme'
import React from 'react'
import { Switch } from 'antd'

function Form({ handleChange }) {
  return (
    <div>
      <Switch name="basic" onChange={handleChange} />
    </div>
  )
}

test.beforeEach(t => {
  t.context.handleChange = sinon.spy()
  t.context.wrapper = mount(<Form handleChange={t.context.handleChange} />)
})

test('basic', t => {
  const { handleChange, wrapper } = t.context
  const sw1tch = wrapper.antd().find('Switch', { name: 'basic' })

  sw1tch.simulate('change', { target: { value: true } })

  t.true(handleChange.calledOnce)
  t.deepEqual(handleChange.firstCall.args, [true])
})
