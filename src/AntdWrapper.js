import {
  createSelectWrapper,
  createDatePickerWrapper,
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
        return createDatePickerWrapper(this.wrapper).find(selector)
      break;
    }
  }
}
