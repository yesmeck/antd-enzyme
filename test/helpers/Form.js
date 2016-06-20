import React from 'react'
import { Select, DatePicker } from 'antd'

const Option = Select.Option

export default function Form({ handleChange }) {
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

      <Select tags name="music" onChange={handleChange}>
        <Option value="pop">Pop</Option>
        <Option value="rock">Rock</Option>
        <Option value="jazz">Jazz</Option>
      </Select>

      <DatePicker name="date" onChange={handleChange} />
    </div>
  )
}
