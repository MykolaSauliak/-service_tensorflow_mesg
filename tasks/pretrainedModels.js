const mobilenet = require('@tensorflow-models/mobilenet');
const toxicityModel = require('@tensorflow-models/toxicity');



async function mobilenet_classify(inputs){

    // input format can see in test_model_loading.js 
    if(!inputs.image){
        throw new Error('invalid inputs')
    }
    const model = await mobilenet.load();
    const predictions = await model.classify(inputs.image);
    
    return {
      succesfull: true,
      result : predictions
    }

}

async function toxicity(inputs){

    if(!inputs.sentences){
        throw new Error('invalid inputs')
    }
    if(!inputs.threshold){
        inputs.threshold = 0.9
    }
    // const model = await mobilenet.load();
    // const predictions = await model.classify(inputs.image);
    let model = await toxicityModel.load(inputs.threshold)
    sentences = sentences.split()

    let predictions = await model.classify(sentences)
    // `predictions` is an array of objects, one for each prediction head,
    // that contains the raw probabilities for each input along with the
    // final prediction in `match` (either `true` or `false`).
    // If neither prediction exceeds the threshold, `match` is `null`.
    
    // console.log(predictions);
    /*
    prints:
    {
    "label": "identity_attack",
    "results": [{
        "probabilities": [0.9659664034843445, 0.03403361141681671],
        "match": false
    }]
    },
    {
    "label": "insult",
    "results": [{
        "probabilities": [0.08124706149101257, 0.9187529683113098],
        "match": true
    }]
    },
    ...
    */

    return {
      succesfull: true,
      result : predictions
    }

}

export {
    mobilenet_classify,
    toxicity
}