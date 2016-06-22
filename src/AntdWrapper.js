import {
  SelectWrapper,
  DatePickerWrapper,
  RangePickerWrapper,
  CascaderWrapper,
  RateWrapper,
  SliderWrapper,
} from './componentWrappers'

export default class AntdWrapper {
  constructor(wrapper) {
    this.wrapper = wrapper
  }

  find(component, selector) {
    switch (component) {
      case 'Select':
        this.ComponentWrapper = SelectWrapper
        break
      case 'DatePicker':
      case 'MonthPicker':
        this.ComponentWrapper = DatePickerWrapper
        break
      case 'RangePicker':
        this.ComponentWrapper = RangePickerWrapper
        break
      case 'Cascader':
        this.ComponentWrapper = CascaderWrapper
        break
      case 'Rate':
        this.ComponentWrapper = RateWrapper
        break
      case 'Slider':
        this.ComponentWrapper = SliderWrapper
        break
    }

    this.componentWrapper = new this.ComponentWrapper(
      new this.ComponentWrapper(this.wrapper, component).find(selector)
    )
    return this
  }

  simulate(...args) {
    this.componentWrapper.simulate(...args)
  }
}
