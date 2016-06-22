import test from 'ava'
import sinon from 'sinon'
import 'patch'
import { mount } from 'enzyme'
import React from 'react'
import { Select } from 'antd'

const Option = Select.Option

function Form({ handleChange }) {
  return (
    <div>
      <Select name="basic" onChange={handleChange}>
        <Option value="blue">Blue</Option>
        <Option value="green">Geen</Option>
        <Option value="red">Red</Option>
      </Select>

      <Select multiple name="multiple" onChange={handleChange}>
        <Option value="orange">Orange</Option>
        <Option value="apple">Apple</Option>
        <Option value="banana">Banana</Option>
      </Select>

      <Select tags name="tags" onChange={handleChange}>
        <Option value="pop">Pop</Option>
        <Option value="rock">Rock</Option>
        <Option value="jazz">Jazz</Option>
      </Select>
    </div>
  )
}

test.beforeEach(t => {
  t.context.handleChange = sinon.spy()
  t.context.wrapper = mount(<Form handleChange={t.context.handleChange} />)
})

test('basic', t => {
  const { handleChange, wrapper } = t.context
  const select = wrapper.antd().find('Select', { name: 'basic' })

  select.simulate('change', { target: { value: 'green' } })

  t.true(handleChange.calledOnce)
  t.deepEqual(handleChange.firstCall.args, ['green'])
})

test('multiple', t => {
  const { handleChange, wrapper } = t.context
  const select = wrapper.antd().find('Select', { name: 'multiple' })

  select.simulate('change', { target: { value: ['apple', 'banana'] } })

  t.true(handleChange.calledOnce)
  t.deepEqual(handleChange.firstCall.args, [['apple', 'banana']])
})

test('tag', t => {
  const { handleChange, wrapper } = t.context
  const select = wrapper.antd().find('Select', { name: 'tags' })

  select.simulate('change', { target: { value: ['rock', 'jazz'] } })

  t.true(handleChange.calledOnce)
  t.deepEqual(handleChange.firstCall.args, [['rock', 'jazz']])
})
