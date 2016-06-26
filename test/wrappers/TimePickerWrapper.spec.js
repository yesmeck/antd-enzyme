import test from 'ava'
import sinon from 'sinon'
import 'patch'
import { mount } from 'enzyme'
import React from 'react'
import { TimePicker } from 'antd'

function Form({ handleChange }) {
  return (
    <div>
      <TimePicker name="basic" onChange={handleChange} />
    </div>
  )
}

test.beforeEach(t => {
  t.context.handleChange = sinon.spy()
  t.context.wrapper = mount(<Form handleChange={t.context.handleChange} />)
})

test('basic', t => {
  const { handleChange, wrapper } = t.context
  const timePicker = wrapper.antd().find('TimePicker', { name: 'basic' })

  timePicker.simulate('change', { target: { value: '23:58:41' } })

  t.true(handleChange.calledOnce)
  t.is(handleChange.firstCall.args[0].getTime(), new Date('2016-01-01T23:58:41+08:00').getTime())
  t.is(handleChange.firstCall.args[1], '23:58:41')
})
