import ReactWrapper from 'enzyme/ReactWrapper'
import isSubset from 'is-subset'
import Select from 'rc-select'


const components = {
  Select
}

const createAntdWrapper = function(wrapper) {
  function AntdWrapper() {}
  AntdWrapper.prototype = wrapper

  const origFind = wrapper.find
  AntdWrapper.prototype.find = function(component, selector) {
    return createAntdWrapper(
      origFind.call(wrapper, components[component]).filterWhere(node => {
        return isSubset(node.props(), selector)
      })
    )
  }

  AntdWrapper.prototype.simulate = function(event, mock) {
    let { value } = mock.target
    if (!Array.isArray(value)) {
      value = [value]
    }
    value = value.map(v => ({ key: v }))
    this.node.fireChange(value)
  }
  return new AntdWrapper
}

ReactWrapper.prototype.antd = function() {
  return createAntdWrapper(this)
}
