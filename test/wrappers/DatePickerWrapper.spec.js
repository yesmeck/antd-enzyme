import test from 'ava'
import sinon from 'sinon'
import 'patch'
import { mount } from 'enzyme'
import React from 'react'
import { DatePicker } from 'antd'

function Form({ handleChange }) {
  return (
    <div>
      <DatePicker name="basic" onChange={handleChange} />
      <DatePicker.MonthPicker name="month" onChange={handleChange} />
      <DatePicker.RangePicker name="range" onChange={handleChange} />
    </div>
  )
}

test.beforeEach(t => {
  t.context.handleChange = sinon.spy()
  t.context.wrapper = mount(<Form handleChange={t.context.handleChange} />)
})

test('basic', t => {
  const { handleChange, wrapper } = t.context
  const datePicker = wrapper.antd().find('DatePicker', { name: 'basic' })

  datePicker.simulate('change', { target: { value: '2016-06-20' } })

  t.true(handleChange.calledOnce)
  t.is(handleChange.firstCall.args[0].getTime(), new Date('2016-06-20').getTime())
  t.is(handleChange.firstCall.args[1], '2016-06-20')
})

test('month', t => {
  const { handleChange, wrapper } = t.context
  const monthPicker = wrapper.antd().find('MonthPicker', { name: 'month' })

  monthPicker.simulate('change', { target: { value: '2016-06' } })

  t.true(handleChange.calledOnce)
  t.is(handleChange.firstCall.args[0].getTime(), new Date('2016-06-01').getTime())
  t.is(handleChange.firstCall.args[1], '2016-06')
})

test('range', t => {
  const { handleChange, wrapper } = t.context
  const rangePicker = wrapper.antd().find('RangePicker', { name: 'range' })

  rangePicker.simulate('change', { target: { value: ['2016-06-01', '2016-06-30'] } })

  t.true(handleChange.calledOnce)

  t.is(handleChange.firstCall.args[0][0].getTime(), new Date('2016-06-01').getTime())
  t.is(handleChange.firstCall.args[0][1].getTime(), new Date('2016-06-30').getTime())
  t.deepEqual(handleChange.firstCall.args[1], ['2016-06-01', '2016-06-30'])
})
