import isSubset from 'is-subset'
import GregorianCalendar from 'gregorian-calendar'
import GregorianCalendarLocale from 'gregorian-calendar/lib/locale/zh_CN'
import Select from 'rc-select'
import { DatePicker } from 'antd'
import RangePicker from 'antd/lib/date-picker/RangePicker'
import Picker from 'rc-calendar/lib/Picker'

export function createSelectWrapper(wrapper) {
  function SelectWrapper() {}

  SelectWrapper.prototype = wrapper

  const selectWrapper = new SelectWrapper

  const origFind = wrapper.find
  selectWrapper.find = function(selector) {
    return createSelectWrapper(
      origFind.call(wrapper, Select).filterWhere(node => {
        return isSubset(node.props(), selector)
      })
    )
  }

  selectWrapper.simulate = function(event, mock) {
    let { value } = mock.target
    if (!Array.isArray(value)) {
      value = [value]
    }
    value = value.map(v => ({ key: v }))
    this.node.fireChange(value)
  }

  return selectWrapper
}

export function createDatePickerWrapper(wrapper, component) {
  const components = {
    DatePicker,
    MonthPicker: DatePicker.MonthPicker,
  }

  function DatePickerWrapper() {}

  DatePickerWrapper.prototype = wrapper

  const datePickerWrapper = new DatePickerWrapper

  const origFind = wrapper.find
  datePickerWrapper.find = function(selector) {
    return createDatePickerWrapper(
      origFind.call(wrapper, components[component]).filterWhere(node => {
        return isSubset(node.props(), selector)
      }).find(Picker)
    )
  }

  datePickerWrapper.simulate = function(event, mock) {
    let { value } = mock.target
    const date = new GregorianCalendar(GregorianCalendarLocale)
    date.setTime(+new Date(value))
    this.node.onCalendarSelect(date)
  }

  return datePickerWrapper
}

export function createRangePickerWrapper(wrapper) {
  function RangePickerWrapper() {}

  RangePickerWrapper.prototype = wrapper

  const rangePickerWrapper = new RangePickerWrapper

  const origFind = wrapper.find
  rangePickerWrapper.find = function(selector) {
    return createRangePickerWrapper(
      origFind.call(wrapper, RangePicker).filterWhere(node => {
        return isSubset(node.props(), selector)
      })
    )
  }

  rangePickerWrapper.simulate = function(event, mock) {
    let { value } = mock.target
    const values = value.map(v => {
      const date = new GregorianCalendar(GregorianCalendarLocale)
      date.setTime(+new Date(v))
      return date
    })
    this.node.handleChange(values)
  }

  return rangePickerWrapper
}
