import GregorianCalendar from 'gregorian-calendar'
import GregorianCalendarLocale from 'gregorian-calendar/lib/locale/zh_CN'
import ComponentWrapper from './ComponentWrapper'

export default class RangePickerWrapper extends ComponentWrapper {
  simulate(event, mock) {
    let { value } = mock.target
    const values = value.map(v => {
      const date = new GregorianCalendar(GregorianCalendarLocale)
      date.setTime(+new Date(v))
      return date
    })
    this.wrapper.node.handleChange(values)
  }
}
