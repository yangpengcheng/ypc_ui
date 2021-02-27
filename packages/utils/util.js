import { getCurrentInstance } from 'vue'

export const getSize = () => {
  if (getCurrentInstance().$ELEMENT) {
    return getCurrentInstance().proxy.$ELEMENT.size
  }
}
