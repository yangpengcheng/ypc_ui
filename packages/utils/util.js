import { getCurrentInstance } from 'vue'

export const getSize = () => {
  if (getCurrentInstance().$ELEMENT) {
    return getCurrentInstance().proxy.$ELEMENT.size
  }
}

export const isKorean = (text) => {
  const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi
  return reg.test(text)
}
