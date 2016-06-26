import GregorianCalendar from 'gregorian-calendar'
import GregorianCalendarLocale from 'gregorian-calendar/lib/locale/zh_CN'
import ComponentWrapper from './ComponentWrapper'

export default class TimePickerWrapper extends ComponentWrapper {
  simulate(event, mock) {
    let { value } = mock.target
    const date = new GregorianCalendar(GregorianCalendarLocale)
    date.setTime(+new Date(`2016-01-01T${value}+08:00`))
    this.wrapper.node.handleChange(date)
  }
}
