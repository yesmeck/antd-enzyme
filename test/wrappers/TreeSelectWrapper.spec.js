import test from 'ava'
import sinon from 'sinon'
import 'patch'
import { mount } from 'enzyme'
import React from 'react'
import { TreeSelect } from 'antd'

const TreeNode = TreeSelect.TreeNode

function Form({ handleChange }) {
  return (
    <div>
      <TreeSelect name="basic" onChange={handleChange}>
        <TreeNode value="parent 1" title="parent 1" key="0-1">
          <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
            <TreeNode value="leaf1" title="my leaf" key="random" />
            <TreeNode value="leaf2" title="your leaf" key="random1" />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
    </div>
  )
}

test.beforeEach(t => {
  t.context.handleChange = sinon.spy()
  t.context.wrapper = mount(<Form handleChange={t.context.handleChange} />)
})

test.skip('basic', t => {
  const { handleChange, wrapper } = t.context
  const treeSelect = wrapper.antd().find('TreeSelect', { name: 'basic' })

  treeSelect.simulate('change', { target: { value: 'leaf1' } })

  t.true(handleChange.calledOnce)
  t.deepEqual(handleChange.firstCall.args, [
    'leaf1',
    ['my leaf'],
  ])
})
