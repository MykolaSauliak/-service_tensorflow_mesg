const Service = require('@liteflow/service')
const pretrainedModels = require('./tasks/pretrainedModels')
const liteflow = new Service()

async function main(){

  liteflow.listenTask({
    greeting: () => ({greeting: `Hello, ${inputs.name}`}),
    predict: require('./tasks/predict'),
    mobilenet_classify : pretrainedModels.mobilenet_classify,
    toxicity: pretrainedModels.toxicity,
  })
  .on('error', (error) => console.error(error))
  
  liteflow.emitEvent('started', { x: true })
    .catch((error) => console.error(error))
}

main()
