import ComponentWrapper from './ComponentWrapper'

export default class SliderWrapper extends ComponentWrapper {
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
