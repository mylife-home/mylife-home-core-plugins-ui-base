'use strict';

module.exports = class UiState0_100 {
  constructor(/*config*/) {
    this.value = 0;
  }

  action(val) {
    this.value = val;
  }

  // close(done) { }

  static metadata(builder) {
    const type = builder.range(0, 100);
    builder.usage.ui();
    builder.attribute('value', type);
    builder.action('action', type);
  }
};
