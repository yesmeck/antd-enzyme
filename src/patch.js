import ReactWrapper from 'enzyme/ReactWrapper'
import AntdWrapper from './AntdWrapper'

ReactWrapper.prototype.antd = function(component) {
  return new AntdWrapper(this, component)
}
