import { sum } from './modules/sum'
import './index.sass'

const root: HTMLDivElement | null = document.querySelector('#root')

if (root) {
  root.textContent = sum(6, -1).toString()
} else {
  throw Error('Элемент с id = root не найден')
}

