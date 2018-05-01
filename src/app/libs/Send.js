// @flow

const PixsellAccessor = require('../utils/PixsellAccessor').PixsellAccessor
const AppConf = require('../utils/ApplicationConfiguration').ApplicationConfiguration

class Send {

  _key: string;
  _enpoint: string;

  constructor(key: string) {
    let appConf = new AppConf()
    this._key = appConf._key
    this._enpoint = appConf._endpoint
  }

  send(recipient: number, message: string, sender: number): Promise<object> {
    let pixsellAccessor = new PixsellAccessor(this._enpoint)
    return pixsellAccessor.broadcast({
      key: this._key,
      recipient: recipient,
      message: message,
      sender: sender
    })
  }
}

exports.Send = Send