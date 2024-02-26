import {ExcelComponent} from '@core/ExcelComponent'
import {$} from '@core/dom'
import * as action from '@/redux/actions';
import {defaultTitle} from '@/constants';
import {ActiveRoute} from '@core/routes/ActiveRoute';

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input', 'click'],
      ...options
    });
  }

  toHTML() {
    const title = this.store.getState().appTitle || defaultTitle
    return `
            <input type="text" class="input" value="${title}">

            <div>

                <div class="button" data-button="exit">
                    <i class="material-icons" data-button="exit">exit_to_app</i>
                </div>

                <div class="button" data-button="remove">
                    <i class="material-icons" data-button="remove">delete</i>
                </div>

            </div>
        `
  }

  onClick(event) {
    const $target = $(event.target)

    if ($target.data.button === 'remove') {
      const desision = confirm('Удалить таблицу?')

      if (desision) {
        localStorage.removeItem('excel:' + ActiveRoute.param)
        ActiveRoute.navigate('')
      }
    } else if ($target.data.button === 'exit') {
      ActiveRoute.navigate('')
    }
  }

  onInput(event) {
    this.$dispatch(action.changeTitle({
      value: $(event.target).text()
    }))
  }
}
