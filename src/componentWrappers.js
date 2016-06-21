import isSubset from 'is-subset'
import GregorianCalendar from 'gregorian-calendar'
import GregorianCalendarLocale from 'gregorian-calendar/lib/locale/zh_CN'
import Select from 'rc-select'
import { DatePicker, Cascader } from 'antd'
import RangePicker from 'antd/lib/date-picker/RangePicker'
import Picker from 'rc-calendar/lib/Picker'
import Rate from 'rc-rate/lib/Rate'
import Slider from 'rc-slider/lib/Slider'

const components = {
  Select,
  DatePicker,
  MonthPicker: DatePicker.MonthPicker,
  RangePicker: RangePicker,
  Cascader,
  Rate,
  Slider,
}

class ComponentWrapper {
  constructor(wrapper, name) {
    this.wrapper = wrapper
    this.name = name
  }

  find(selector) {
    return this.wrapper
      .find(components[this.name])
      .filterWhere(node => isSubset(node.props(), selector))
  }
}

export class SelectWrapper extends ComponentWrapper {
  simulate(event, mock) {
    let { value } = mock.target
    if (!Array.isArray(value)) {
      value = [value]
    }
    value = value.map(v => ({ key: v }))
    this.wrapper.node.fireChange(value)
  }
}

export class DatePickerWrapper extends ComponentWrapper {
  find(selector) {
    return super.find(selector).find(Picker)
  }

  simulate(event, mock) {
    let { value } = mock.target
    const date = new GregorianCalendar(GregorianCalendarLocale)
    date.setTime(+new Date(value))
    this.wrapper.node.onCalendarSelect(date)
  }
}

export class RangePickerWrapper extends ComponentWrapper {
  simulate(event, mock) {
    let { value } = mock.target
    const values = value.map(v => {
      const date = new GregorianCalendar(GregorianCalendarLocale)
      date.setTime(+new Date(v))
      return date
    })
    this.wrapper.node.handleChange(values)
  }
}

export class CascaderWrapper extends ComponentWrapper {
  simulate(event, mock) {
    const findOptions = (options, values, selectedOptions = []) => {
      const [ value, ...rest ] = values
      const option = options.find(option => option.value === value)
      selectedOptions.push(option)
      if (rest.length > 0) {
        return findOptions(option.children, rest, selectedOptions)
      }
      return selectedOptions
    }
    let { value } = mock.target
    const selectedOptions = findOptions(this.wrapper.props().options, value)
    this.wrapper.node.handleChange(value, selectedOptions)
  }
}

export class RateWrapper extends ComponentWrapper {
  simulate(event, mock) {
    const { value } = mock.target
    this.wrapper.node.getStarValue = () => value
    this.wrapper.node.onClick(mock)
  }
}

export class SliderWrapper extends ComponentWrapper {
  simulate(event, mock) {
    let { value } = mock.target
    if (this.wrapper.props().range) {
      value = { lowerBound: value[0], upperBound: value[1] }
    } else {
      value = { upperBound: value }
    }
    this.wrapper.node.onChange(value)
  }
}
