import ReactWrapper from 'enzyme/ReactWrapper'
import AntdWrapper from './AntdWrapper'

ReactWrapper.prototype.antd = function() {
  return new AntdWrapper(this)
}
