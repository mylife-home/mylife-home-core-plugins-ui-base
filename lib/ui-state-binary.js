'use strict';

module.exports = class UiStateBinary {
  constructor(/*config*/) {
    this.value = 'off';
  }

  action(val) {
    this.value = val;
  }

  static metadata(builder) {
    const type = builder.enum('off', 'on');
    builder.usage.ui();
    builder.attribute('value', type);
    builder.action('action', type);
  }
};
