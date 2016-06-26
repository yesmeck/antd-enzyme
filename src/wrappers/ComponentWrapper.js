import isSubset from 'is-subset'
import Select from 'rc-select'
import { DatePicker, Cascader } from 'antd'
import RangePicker from 'antd/lib/date-picker/RangePicker'
import Rate from 'rc-rate/lib/Rate'
import Slider from 'rc-slider/lib/Slider'
import Switch from 'rc-switch/lib/Switch'
import TreeSelect from 'rc-tree-select/lib/Select'

const components = {
  Select,
  DatePicker,
  MonthPicker: DatePicker.MonthPicker,
  RangePicker: RangePicker,
  Cascader,
  Rate,
  Slider,
  Switch,
  TreeSelect,
}

export default class ComponentWrapper {
  constructor(wrapper, name) {
    this.wrapper = wrapper
    this.name = name
  }

  find(selector) {
    return this.wrapper
      .find(components[this.name])
      .filterWhere(node => isSubset(node.props(), selector))
  }
}
