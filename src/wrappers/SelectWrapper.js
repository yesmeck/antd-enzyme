import ComponentWrapper from './ComponentWrapper'

export default class SelectWrapper extends ComponentWrapper {
  simulate(event, mock) {
    let { value } = mock.target
    if (!Array.isArray(value)) {
      value = [value]
    }
    value = value.map(v => ({ key: v }))
    this.wrapper.node.fireChange(value)
  }
}
