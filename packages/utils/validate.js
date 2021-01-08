export const colorValidator = (color) => {
  return ['attention', 'danger', 'info', 'primary', 'success', 'warning'].includes(color)
}

export const sizeValidator = (size) => {
  return ['large', 'medium', 'small', 'mini', null].includes(size)
}

const typeValidator = (o, type) => {
  return ['undefined', type].includes(typeof o)
}

export const debounceValidator = (d) => {
  return !d || (typeValidator(d.wait, 'number') &&
    (typeValidator(d.options, 'object') &&
      typeValidator(d.options.leading, 'boolean') &&
      typeValidator(d.options.maxWait, 'number') &&
      typeValidator(d.options.trailing, 'boolean')
    )
  )
}

export const throttleValidator = (t) => {
  return !t || (typeValidator(t.wait, 'number') &&
    (typeValidator(t.options, 'object') &&
      typeValidator(t.options.leading, 'boolean') &&
      typeValidator(t.options.trailing, 'boolean')
    )
  )
}
