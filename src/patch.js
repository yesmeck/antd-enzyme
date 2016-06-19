import ReactWrapper from 'enzyme/ReactWrapper'
import Select from 'rc-select'

const components = {
  Select
}

const createAntdWrapper = function(wrapper) {
  function AntdWrapper() {}
  AntdWrapper.prototype = wrapper

  const origFind = wrapper.find
  AntdWrapper.prototype.find = function(selector) {
    return createAntdWrapper(origFind.call(wrapper, components[selector]))
  }

  AntdWrapper.prototype.simulate = function(event, mock) {
    let value = mock.target.value
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
