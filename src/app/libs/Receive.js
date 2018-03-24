// @flow

const PixsellAccessor = require('../utils/PixsellAccessor').PixsellAccessor
const AppConf = require('../utils/ApplicationConfiguration').ApplicationConfiguration

class Receive {

  _pass: string;

  constructor(pass: string) {
    this._pass = pass
  }

  receive(mobile: number, message: string): Promise<object> {
    return new Promise( (resolve, reject) => {
      resolve({
        statusCode: 1,
        statusDescription: 'Success'
      })
    })
    // let pixsellAccessor = new PixsellAccessor(this._enpoint)
    // return pixsellAccessor.broadcast({
    //   recipient: recipient,
    //   message: message,
    //   sender: sender
    // })
  }
}

exports.Receive = Receive