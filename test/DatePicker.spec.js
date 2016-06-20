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
  const datePicker = wrapper.antd().find('DatePicker', { name: 'birthday' })

  datePicker.simulate('change', { target: { value: '2016-06-20' } })

  t.true(handleChange.calledOnce)
  t.is(handleChange.firstCall.args[0].getTime(), new Date('2016-06-20').getTime())
  t.is(handleChange.firstCall.args[1], '2016-06-20')
})

test('month picker', t => {
  const { handleChange, wrapper } = t.context
  const monthPicker = wrapper.antd().find('MonthPicker', { name: 'month' })

  monthPicker.simulate('change', { target: { value: '2016-06' } })

  t.true(handleChange.calledOnce)
  t.is(handleChange.firstCall.args[0].getTime(), new Date('2016-06-01').getTime())
  t.is(handleChange.firstCall.args[1], '2016-06')
})

test('range picker', t => {
  const { handleChange, wrapper } = t.context
  const rangePicker = wrapper.antd().find('RangePicker', { name: 'dateRange' })

  rangePicker.simulate('change', { target: { value: ['2016-06-01', '2016-06-30'] } })

  t.true(handleChange.calledOnce)

  t.is(handleChange.firstCall.args[0][0].getTime(), new Date('2016-06-01').getTime())
  t.is(handleChange.firstCall.args[0][1].getTime(), new Date('2016-06-30').getTime())
  t.deepEqual(handleChange.firstCall.args[1], ['2016-06-01', '2016-06-30'])
})
