
const tf = require('@tensorflow/tfjs');
// Optional Load the binding:
// Use '@tensorflow/tfjs-node-gpu' if running with GPU.
require('@tensorflow/tfjs-node');
const models = require('../initialData/models.json')

module.exports = async (inputs) => {
    // if (inputs.foo !== "hello" || inputs.bar !== "world") {
    //   throw new Error('invalid inputs')
    // }    
    if(!models[inputs.model]){
        throw new Error('invalid inputs')
    }

    const model = await tf.loadGraphModel("https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v1_050_160/classification/1/default/1", { fromTFHub: true });
    const result = model.predict([1.0])

    return {
      succesfull: true,
      result
    }
  }
  