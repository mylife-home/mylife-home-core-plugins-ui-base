'use strict';

module.exports = class UiButton {
  constructor() {
    this.value = 'off';
  }

  action() {
    this.value = 'on';
    this.value = 'off';
  }

  static metadata(builder) {
    builder.usage.ui();
    builder.attribute('value', builder.enum('off', 'on'));
    builder.action('action');
  }
};
