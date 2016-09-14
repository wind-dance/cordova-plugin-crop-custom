/* global cordova */
var crop = module.exports = function cropImage (success, fail, image, options) {
  options = options || {}
  options.quality = options.quality || 100
  options.crop_width = options.crop_width
  options.crop_height = options.crop_height
  options.crop_type = options.crop_type || 'square'
  return cordova.exec(success, fail, 'CropPlugin', 'cropImage', [image, options])
}

module.exports.promise = function cropAsync (image, options) {
  return new Promise(function (resolve, reject) {
    crop(resolve, reject, image, options)
  })
}
