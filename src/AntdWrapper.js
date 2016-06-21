import {
  SelectWrapper,
  DatePickerWrapper,
  RangePickerWrapper,
  CascaderWrapper,
  RateWrapper,
  SliderWrapper,
} from './componentWrappers'

export default class AntdWrapper {
  constructor(wrapper, component) {
    this.wrapper = wrapper
    this.component = component

    switch (this.component) {
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
  }

  find(selector) {
    return new this.ComponentWrapper(
      new this.ComponentWrapper(this.wrapper, this.component).find(selector)
    )
  }
}
