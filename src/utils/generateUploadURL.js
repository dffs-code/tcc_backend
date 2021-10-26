const aws = require('aws-sdk');
const crypto = require('crypto');
const { promisify } = require('util');
const randomBytes = promisify(crypto.randomBytes)

const region = process.env.AWS_REGION;
const bucketName = process.env.AWS_BUCKET;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;


const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4'
});

module.exports = {
  async generateUploadURL(){
    const rawBytes = await randomBytes(16);
    const imageName = rawBytes.toString('hex');

    const params = ({
      Bucket: bucketName,
      Key: imageName,
      Expires: 3600
    })

    const uploadUrl = await s3.getSignedUrlPromise('putObject', params)
    return uploadUrl
    }
  }