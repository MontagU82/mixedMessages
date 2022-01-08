console.log('Hello World');

const questions = ['Why are you using an outdated and scientifically untenable method?',
    'Why do you ascribe such great benefit to something that has been proven to contain no active ingredients?',
    'Why do you give your own beliefs a higher priority than scientifically proven facts?',
    'Why do you prefer to chase after individual scientific opinions rather than accept scientific facts?'];

const bullshitAnswers = ['"He who heals is right!"',
    '"It also helped with my aunt, father-in-law, dog, baby..."',
    '"Better than antibiotics, vaccinations and cortisone!"',
    '"Homeopathy is based on Heisenberg \'s uncertainty relation and quantum physics."',
    '"It works for animals and babies, too."',
    '"Science is simply not yet ready to recognize the connections."',
    '"Experiential science!"',
    '"There are more things between heaven and earth than we can imagine and explain."',
    '"Holistic healing method."',
    '"Healthier than the dangerous conventional medicine!"',
    '"This has been around for so long, there must be something to it...."',
    '"The main thing is that it helps!"',
    '"Homeopathy heals not only the disease but the whole body."',
    '"The more diluted, the greater the effect!"',
    '"There is no evidence that homeopathy does not work."',
    '"There is no harmful drug effect."',
    '"Without evil chemistry!"',
    '"Gentle medicine!"',
    '"Orthodox doctors are at the service of the pharmaceutical lobby!"',
    '"Stimulates the body\'s own defenses."',
    '"Water has a memory!"',
    '"One does not know how it works, one knows only that it works."',
    '"Homeopathy is used by tens of thousands of doctors, midwives and professors."',
    '"Science cannot explain everything."'];

const corrReacs = ['"Homeopathy does not work beyond the placebo effect."',
    '"Homeopathy is an outdated method that has no justification whatsoever in the current state of knowledge."',
    '"I like to use globules to decorate Christmas cookies. They make beautiful snowflakes."'];

const orgObj = {
    questions, 
    bullshitAnswers, 
    corrReacs,

    bSB() {
        let i = Math.floor(Math.random() * questions.length)
        let j = Math.floor(Math.random() * bullshitAnswers.length)
        let k = Math.floor(Math.random() * corrReacs.length)
        return `Homeopathy-Bullshit-Bingo \n 
        some dude: ${questions[i]} \n
        believer: ${bullshitAnswers[j]} \n
        dude: ${corrReacs[k]}`
    }
};
console.log(orgObj.bSB());
