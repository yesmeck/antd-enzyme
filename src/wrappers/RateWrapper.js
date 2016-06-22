import ComponentWrapper from './ComponentWrapper'

export default class RateWrapper extends ComponentWrapper {
  simulate(event, mock) {
    const { value } = mock.target
    this.wrapper.node.getStarValue = () => value
    this.wrapper.node.onClick(mock)
  }
}
