import React from 'react'
import { Select } from 'antd'

const Option = Select.Option

export default function SelectForm({ handleChange }) {
  return (
    <div>
      <Select name="color" onChange={handleChange}>
        <Option value="blue">Blue</Option>
        <Option value="green">Geen</Option>
        <Option value="red">Red</Option>
      </Select>

      <Select multiple name="fruit" onChange={handleChange}>
        <Option value="orange">Orange</Option>
        <Option value="apple">Apple</Option>
        <Option value="banana">Banana</Option>
      </Select>
    </div>
  )
}
