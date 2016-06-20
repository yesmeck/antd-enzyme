import test from 'ava'
import sinon from 'sinon'
import '../src/patch'
import { mount } from 'enzyme'
import React from 'react'
import { Cascader } from 'antd'

const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          {
            value: 'xihu',
            label: '西湖',
          }
        ],
      }
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [
          {
            value: 'zhonghuamen',
            label: '中华门',
          }
        ],
      }
    ],
  }
]

function Form({ handleChange }) {
  return (
    <div>
      <Cascader name="basic" options={options} onChange={handleChange} />
    </div>
  )
}

test.beforeEach(t => {
  t.context.handleChange = sinon.spy()
  t.context.wrapper = mount(<Form handleChange={t.context.handleChange} />)
})

test('basic', t => {
  const { handleChange, wrapper } = t.context
  const cascader = wrapper.antd().find('Cascader', { name: 'basic' })

  cascader.simulate('change', { target: { value: ['zhejiang', 'hangzhou', 'xihu'] } })

  t.true(handleChange.calledOnce)
  t.deepEqual(
    handleChange.firstCall.args,
    [
      ['zhejiang', 'hangzhou', 'xihu'],
      [
        {
          value: 'zhejiang',
          label: '浙江',
          children: [
            {
              value: 'hangzhou',
              label: '杭州',
              children: [
                {
                  value: 'xihu',
                  label: '西湖',
                }
              ],
            }
          ],
        },
        {
          value: 'hangzhou',
          label: '杭州',
          children: [
            {
              value: 'xihu',
              label: '西湖',
            }
          ],
        },

        {
          value: 'xihu',
          label: '西湖',
        },
      ]
    ]
  )
})
