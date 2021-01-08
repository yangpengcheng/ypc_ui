import { getCurrentInstance } from 'vue'

export const getSize = () => getCurrentInstance().proxy.$ELEMENT.size
