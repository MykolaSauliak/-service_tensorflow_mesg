
const tf = require('@tensorflow/tfjs');
// Optional Load the binding:
// Use '@tensorflow/tfjs-node-gpu' if running with GPU.
require('@tensorflow/tfjs-node');

// to test model - node test_model_loading
async function main(){
    const modelUrl = 'https://storage.googleapis.com/tfjs-models/savedmodel/mobilenet_v2_1.0_224/model.json';
    const model = await tf.loadGraphModel(modelUrl);
    const zeros = tf.zeros([1, 224, 224, 3]);
    let result = model.predict(zeros)
    console.log('result = ',result)
}

main()