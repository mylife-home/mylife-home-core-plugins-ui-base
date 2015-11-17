'use strict';

console.log('button load4');

module.exports = class UiButton {
  constructor(/*config*/) {
    this.value = 'off';
  }

  action() {
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
