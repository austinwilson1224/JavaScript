const mobilenet = require('@tensorflow-models/mobilenet');
const img = document.getElementById('img');

// const model = await mobilenet.load();

// const predictions = await model.classify(img);

// console.log(predictions);

async = () => {
    const model = mobilenet.load();
    const predictions = model.classify(img);
    console.log(predictions);

}