import ComponentWrapper from './ComponentWrapper'

export default class CascaderWrapper extends ComponentWrapper {
  simulate(event, mock) {
    const findOptions = (options, values, selectedOptions = []) => {
      const [ value, ...rest ] = values
      const option = options.find(option => option.value === value)
      selectedOptions.push(option)
      if (rest.length > 0) {
        return findOptions(option.children, rest, selectedOptions)
      }
      return selectedOptions
    }
    let { value } = mock.target
    const selectedOptions = findOptions(this.wrapper.props().options, value)
    this.wrapper.node.handleChange(value, selectedOptions)
  }
}
