// @flow

const config = require('../../../config.json')

class ApplicationConfiguration {

  _port: number;
  _config: string;
  _endpoint: string;

  constructor() {
    this._port = config.application.port
    this._key = config.pixsell.key
    this._endpoint = config.pixsell.endpoint
  }
}

exports.ApplicationConfiguration = ApplicationConfiguration