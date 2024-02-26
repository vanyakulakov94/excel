import {defaultStyles, defaultTitle} from '@/constants';

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  appTitle: defaultTitle,
  currentText: '',
  currentStyles: defaultStyles,
  openedDate: new Date().toJSON()
}
const normalize = state => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: ''
})

export function normalizeInitialState(state) {
  return state ? normalize(state) : {...defaultState}
}
