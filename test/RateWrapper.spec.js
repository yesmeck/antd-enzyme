import test from 'ava'
import sinon from 'sinon'
import '../src/patch'
import { mount } from 'enzyme'
import React from 'react'
import { Rate } from 'antd'

function Form({ handleChange }) {
  return (
    <div>
      <Rate name="basic" onChange={handleChange} />
      <Rate name="allowHalf" allowHalf onChange={handleChange} />
    </div>
  )
}

test.beforeEach(t => {
  t.context.handleChange = sinon.spy()
  t.context.wrapper = mount(<Form handleChange={t.context.handleChange} />)
})

test('basic', t => {
  const { handleChange, wrapper } = t.context
  const rate = wrapper.antd().find('Rate', { name: 'basic' })

  rate.simulate('change', { target: { value: 3 } })

  t.true(handleChange.calledOnce)
  t.deepEqual(handleChange.firstCall.args, [3])
})

test('allow half', t => {
  const { handleChange, wrapper } = t.context
  const rate = wrapper.antd().find('Rate', { name: 'allowHalf' })

  rate.simulate('change', { target: { value: 3.5 } })

  t.true(handleChange.calledOnce)
  t.deepEqual(handleChange.firstCall.args, [3.5])
})
