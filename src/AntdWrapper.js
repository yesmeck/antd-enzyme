import {
  SelectWrapper,
  DatePickerWrapper,
  RangePickerWrapper,
  CascaderWrapper,
  RateWrapper,
  SliderWrapper,
  SwitchWrapper,
  TreeSelectWrapper,
  TimePickerWrapper,
} from './wrappers'

const wrapperMap = {
  Select: SelectWrapper,
  DatePicker: DatePickerWrapper,
  MonthPicker: DatePickerWrapper,
  RangePicker: RangePickerWrapper,
  Cascader: CascaderWrapper,
  Rate: RateWrapper,
  Slider: SliderWrapper,
  Switch: SwitchWrapper,
  TreeSelect: TreeSelectWrapper,
  TimePicker: TimePickerWrapper,
}

export default class AntdWrapper {
  constructor(wrapper) {
    this.wrapper = wrapper
  }

  find(component, selector) {
    const ComponentWrapper = wrapperMap[component]

    this.componentWrapper = new ComponentWrapper(
      new ComponentWrapper(this.wrapper, component).find(selector)
    )
    return this
  }

  simulate(...args) {
    this.componentWrapper.simulate(...args)
  }
}
