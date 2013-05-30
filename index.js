var Presence = require('ninja-presence-base');

module.exports = Presence;

Presence.prototype.G = 'bluetooth';
Presence.prototype.name = 'Presence - Bluetooth';

Presence.prototype.init = function() {
  var self = this;
  this._bt = new (require('bluetooth-serial-port')).BluetoothSerialPort();

  this._bt.on('found', function(address, name) {
    self.see({
      name: name,
      id: address
    });
    self._app.log.info("Found bluetooth device", name, address);
  });

  bt.on('finished', function() {
    self.scanComplete();
  });
};

Presence.prototype.scan = function() {
  this._bt.inquire();
};
