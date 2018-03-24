// @flow

const SendApi = require('../libs/Send').Send
const ReceiveApi = require('../libs/Receive').Receive

exports.send = (req: Object, res: Object) => {
  let sendApi = new SendApi()
  sendApi.send(
    req.body.recipient,
    req.body.message,
    req.body.sender
    ).then( data => {
    res.json(data)
  }).catch(err => {
    res.status(err.code).send(err)
  })
}

exports.receive = (req: Object, res: Object) => {
  let receiveApi = new ReceiveApi(req.query.strPass)
  receiveApi.receive(
    req.query.strMobileNo,
    req.query.strMessage
    ).then( data => {
    res.json(data)
  }).catch(err => {
    res.status(err.code).send(err)
  })
}