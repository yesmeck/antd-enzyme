import React from 'react'
import { Select } from 'antd'

const Option = Select.Option

export default function SelectForm({ handleChange }) {
  return (
    <div>
      <Select mingzi="aLongName" defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>Disabled</Option>
        <Option value="yiminghe">yiminghe</Option>
      </Select>
    </div>
  )
}
