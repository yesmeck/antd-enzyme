import ComponentWrapper from './ComponentWrapper'

export default class SwitchWrapper extends ComponentWrapper {
  simulate(event, mock) {
    let { value } = mock.target
    this.wrapper.node.setChecked(value)
  }
}
