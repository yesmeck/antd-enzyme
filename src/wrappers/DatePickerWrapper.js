import GregorianCalendar from 'gregorian-calendar'
import GregorianCalendarLocale from 'gregorian-calendar/lib/locale/zh_CN'
import Picker from 'rc-calendar/lib/Picker'
import ComponentWrapper from './ComponentWrapper'

export default class DatePickerWrapper extends ComponentWrapper {
  find(selector) {
    return super.find(selector).find(Picker)
  }

  simulate(event, mock) {
    let { value } = mock.target
    const date = new GregorianCalendar(GregorianCalendarLocale)
    date.setTime(+new Date(value))
    this.wrapper.node.onCalendarSelect(date)
  }
}
