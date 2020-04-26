const Service = require('@mesg/service')
const pretrainedModels = require('./tasks/pretrainedModels')
const mesg = new Service()

async function main(){

  mesg.listenTask({
    greeting: () => ({greeting: `Hello, ${inputs.name}`}),
    predict: require('./tasks/predict'),
    mobilenet_classify : pretrainedModels.mobilenet_classify,
    toxicity: pretrainedModels.toxicity,
  })
  .on('error', (error) => console.error(error))
  
  mesg.emitEvent('started', { x: true })
    .catch((error) => console.error(error))
}

main()
