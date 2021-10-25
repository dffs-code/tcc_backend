const s3Util = require('../utils/generateUploadURL')

module.exports = {
  async generate(req, res) {
    const url = await s3Util.generateUploadURL()
    res.send({url})
    }

}