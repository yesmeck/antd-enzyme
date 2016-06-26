import ComponentWrapper from './ComponentWrapper.js'

export default class TreeSelectWrapper extends ComponentWrapper {
  simulate(event, mock) {
    const { value } = mock.target
    this.wrapper.node.fireChange([{ value, label: 'xx' }])
  }
}
