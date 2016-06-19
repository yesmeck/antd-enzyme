import React from 'react'
import { Select } from 'antd'

const Option = Select.Option

export default function SelectForm({ handleChange }) {
  return (
    <div>
      <Select name="color" defaultValue="blue" onChange={handleChange}>
        <Option value="blue">Blue</Option>
        <Option value="green">Geen</Option>
        <Option value="red">Red</Option>
      </Select>

      <Select name="fruit" defaultValue="apple">
        <Option value="orange">Orange</Option>
        <Option value="apple">Apple</Option>
        <Option value="banana">Banana</Option>
      </Select>
    </div>
  )
}
