<template>
  <div
    :class="[
      col && `col-${col}`,
      xs && `col-xs-${xs}`,
      sm && `col-sm-${sm}`,
      md && `col-md-${md}`,
      lg && `col-lg-${lg}`,
      xl && `col-xl-${xl}`
    ]"
    :style="{ 'padding-left': `${space}`, 'padding-top': `${space}` }"
  >
    <slot />
  </div>
</template>
<script>
import { inject } from 'vue'
export default {
  name: 'YCol',
  props: {
    col: Number,
    xs: Number,
    sm: Number,
    md: Number,
    lg: Number,
    xl: Number
  },
  setup () {
    const space = inject('row').space
    return {
      space
    }
  }
}
</script>
<style lang="scss" scoped>
$cols: (
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  '11': 11,
  '12': 12,
  '13': 13,
  '14': 14,
  '15': 15,
  '16': 16,
  '17': 17,
  '18': 18,
  '19': 19,
  '20': 20,
  '21': 21,
  '22': 22,
  '23': 23,
  '24': 24
);
@each $col, $value in $cols {
  .col-#{$col} {
    -moz-box-flex: 0;
    -webkit-box-flex: 0;
    max-width: ($value * 4.1666666667%);
    -ms-flex: 0 0 ($value * 4.1666666667%);
    flex: 0 0 ($value * 4.1666666667%);
  }
}
@media only screen and (max-width: 768px) {
  @each $col, $value in $cols {
    .col-xs-#{$col} {
      -moz-box-flex: 0;
      -webkit-box-flex: 0;
      max-width: ($value * 4.1666666667%);
      -ms-flex: 0 0 ($value * 4.1666666667%);
      flex: 0 0 ($value * 4.1666666667%);
    }
  }
}
@media only screen and (min-width: 768px) {
  @each $col, $value in $cols {
    .col-sm-#{$col} {
      -moz-box-flex: 0;
      -webkit-box-flex: 0;
      max-width: ($value * 4.1666666667%);
      -ms-flex: 0 0 ($value * 4.1666666667%);
      flex: 0 0 ($value * 4.1666666667%);
    }
  }
}
@media only screen and (min-width: 992px) {
  @each $col, $value in $cols {
    .col-md-#{$col} {
      -moz-box-flex: 0;
      -webkit-box-flex: 0;
      max-width: ($value * 4.1666666667%);
      -ms-flex: 0 0 ($value * 4.1666666667%);
      flex: 0 0 ($value * 4.1666666667%);
    }
  }
}
@media only screen and (min-width: 1200px) {
  @each $col, $value in $cols {
    .col-lg-#{$col} {
      -moz-box-flex: 0;
      -webkit-box-flex: 0;
      max-width: ($value * 4.1666666667%);
      -ms-flex: 0 0 ($value * 4.1666666667%);
      flex: 0 0 ($value * 4.1666666667%);
    }
  }
}
@media only screen and (min-width: 1920px) {
  @each $col, $value in $cols {
    .col-xl-#{$col} {
      -moz-box-flex: 0;
      -webkit-box-flex: 0;
      max-width: ($value * 4.1666666667%);
      -ms-flex: 0 0 ($value * 4.1666666667%);
      flex: 0 0 ($value * 4.1666666667%);
    }
  }
}
</style>
