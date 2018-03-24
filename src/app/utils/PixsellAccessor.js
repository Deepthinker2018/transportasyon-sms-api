// @flow

const rp = require('request-promise')

class PixsellAccessor {

  _endpoint: string;

  constructor(endpoint: string) {
    this._endpoint = endpoint
  }

  broadcast(smsRequest: object): Promise<object> {
    return rp({
      method: "POST",
      uri: this._endpoint,
      body: smsRequest,
      json: true
    })
  }
}

exports.PixsellAccessor = PixsellAccessor