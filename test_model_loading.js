const mobilenet = require('@tensorflow-models/mobilenet');
// to test model - node test_model_loading
const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');
const convertURLtoTensor = require('./utils/convertURLtoTensor')

async function main(){
    const modelUrl = 'https://storage.googleapis.com/tfjs-models/savedmodel/mobilenet_v2_1.0_224/model.json';
    const model = await tf.loadGraphModel(modelUrl);
    const zeros = tf.zeros([1, 224, 224, 3]);
    let result = model.predict(zeros)
    console.log('result = ',result)
}

async function testMobileNet(){
    // let inputs = require('./testData/MOBILENET_INPUTS.json')
    // image = convertDataURIToBinary(inputs.image, inputs.shape)
    const tensor = await convertURLtoTensor("https://pngimg.com/uploads/dog/dog_PNG50348.png", 3)
 
    const model = await mobilenet.load();
    const predictions = await model.classify(tensor);
    console.log('predictions',predictions)
}

testMobileNet()