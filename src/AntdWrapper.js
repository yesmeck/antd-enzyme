import {
  createSelectWrapper,
  createDatePickerWrapper,
  createRangePickerWrapper,
  createCascaderWrapper,
  createRateWrapper,
} from './componentWrappers'

export default class AntdWrapper {
  constructor(wrapper) {
    this.wrapper = wrapper
  }

  find(component, selector) {
    switch (component) {
      case 'Select':
        return createSelectWrapper(this.wrapper).find(selector)
      case 'DatePicker':
      case 'MonthPicker':
        return createDatePickerWrapper(this.wrapper, component).find(selector)
      case 'RangePicker':
        return createRangePickerWrapper(this.wrapper).find(selector)
      case 'Cascader':
        return createCascaderWrapper(this.wrapper).find(selector)
      case 'Rate':
        return createRateWrapper(this.wrapper).find(selector)
      break
    }
  }
}
