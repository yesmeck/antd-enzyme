import test from 'ava'
import sinon from 'sinon'
import 'patch'
import { mount } from 'enzyme'
import React from 'react'
import { Slider } from 'antd'

function Form({ handleChange }) {
  return (
    <div>
      <Slider name="basic" onChange={handleChange} />
      <Slider name="range" onChange={handleChange} />
    </div>
  )
}

test.beforeEach(t => {
  t.context.handleChange = sinon.spy()
  t.context.wrapper = mount(<Form handleChange={t.context.handleChange} />)
})

test('basic', t => {
  const { handleChange, wrapper } = t.context
  const slider = wrapper.antd().find('Slider', { name: 'basic' })

  slider.simulate('change', { target: { value: 80 } })

  t.true(handleChange.calledOnce)
  t.deepEqual(handleChange.firstCall.args, [80])
})
