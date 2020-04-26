

module.exports = (data, shape) => {
    const outShape = [shape.height, shape.width, shape.numChannels];
    const input = tf.tensor3d(data, outShape);
    return input
    
}