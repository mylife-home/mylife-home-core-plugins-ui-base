'use strict';

module.exports = class UiStateTemperature {
  constructor(/*config*/) {
    this.value = 0;
  }

  action(val) {
    this.value = val;
  }

  // close(done) { }

  static metadata(builder) {
    const type = builder.range(-1000, 9000);
    builder.usage.ui();
    builder.attribute('value', type);
    builder.action('action', type);
  }
};
