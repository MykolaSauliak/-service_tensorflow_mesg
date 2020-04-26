
  
const mobilenet = require('@tensorflow-models/mobilenet');
// to test model - node test_model_loading
const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

var imagePixels = require('image-pixels')

const imageByteArray = (image, numChannels) => {
    const pixels = image.data
    const numPixels = image.width * image.height;
    const values = new Int32Array(numPixels * numChannels);
  
    for (let i = 0; i < numPixels; i++) {
      for (let channel = 0; channel < numChannels; ++channel) {
        values[i * numChannels + channel] = pixels[i * 4 + channel];
      }
    }
  
    return values
}

const imageToInput = (image, numChannels) => {
    const values = imageByteArray(image, numChannels)
    const outShape = [image.height, image.width, numChannels];
    const input = tf.tensor3d(values, outShape, 'int32');

    return input
}

  
const readImage = async url => {
    var pixels = await imagePixels(url)
    return pixels
  }

  
module.exports = async (path, numChannels = 3) => {
    const image = await readImage(path)
    const input = imageToInput(image, numChannels)

    return input
  }
