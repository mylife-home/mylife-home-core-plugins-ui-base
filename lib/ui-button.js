'use strict';

module.exports = class UiButton {
  constructor(/*config*/) {
    this.value = 'off';
  }

  action() {
    console.log('test3');
    this.value = 'on';
    this.value = 'off';
  }

  // close(done) { }

  static metadata(builder) {
    builder.usage.ui();
    builder.attribute('value', builder.enum('off', 'on'));
    builder.action('action');
  }
};
