"use strict";
const yellow_dice = [
    "Je dois vous avouer",
    "L'autre jour",
    "Bon, écoutez-moi",
    "Tu vas pas me croire",
    "Alooooors",
    "Vous savez que",
];
const orange_dice = [
    "Mais",
    "Hélas",
    "J'ajoute",
    "C'est pourquoi",
    "Donc",
    "Or"
];
const red_dice = [
    "Je précise que",
    "Vous allez me dire",
    "Le plus drôle",
    "Bon, tu me connais",
    "Tout à coup",
    "En fait"
];
const purple_dice = [
    "Là, ça se complique",
    "Ah, j'oubliais !",
    "C'est vrai que",
    "Et là, surprise !",
    "D'un autre côté",
    "Du coup"
];
const lightblue_dice = [
    "Et là, Pataras !",
    "Bref !",
    "Moi, tranquille",
    "et le pire !",
    "Javais prévu le coup",
    "Finalement"
];
const blue_dice = [
    "C'est comme ça que",
    "la prochaine fois",
    "Et le drame",
    "Conclusion",
    "Alors, vous allez rire",
    "Comme dirait ma mamie"
];
const black_dice = [
    "Avec du beurre ?",
    "Ca , c'est faux !",
    "T'oublies pas un détail ?",
    "Il était quelle heure ?",
    "J'ai pas compris",
    "Moi, ça me rappelle "
];
const start_sentences = [
    "J'ai passé une très bonne soirée avec une fée",
    "Comment j'ai bâti mon immense fortune",
    "Mon GPS se moque de moi",
    "Je lis l'avenir dans la purée de pommes de terre",
    "Mon cousin parle une langue inconnue",
    "Je vais me marier à Las Vegas, la classe...",
    "C'était un jour pluvieux d'octobre",
    "Mon premier grand amour",
    "Je lis l'avenir dans la purée de pommes de terre",
    "Le bonheur d'être seul(e)",
    "Je suis recherché(e) suis par la police de l'Amérique du Sud",
    "Pourquoi je suis devenu(e) clown",
    "La légende du chevalier sans épée",
    "Je ronfle",
    "Comment j'ai bâti mon immense fortune",
    "Une histoire tellement courte",
    "Sincèrement, je trouve que tout est beau",
    "Dans la Lune...",
    "Mon séjour dans le Grand Nord",
    "Il y a un génie dans ma cafetière",
    "Mon programme politique pour la paix sur Terre",
    "J'ai pris des cours de savoir-vivre",
    "J'ai pas l'air comme ça, mais j'ai attaqué une banque",
    "Mon inoubliable soirée pyjama",
    "Tu sais ce que j'ai retrouvé dans un nem ?",
    "J'ai un chien qui parle",
    "C'est pas de ma faute, c'est mon coiffeur",
    "J'ai rien à dire...",
    "Je vais vous dire qui je suis vraiment",
    "Comment j'ai sali mon t-shirt",
    "Pourquoi je ne prends qu'une douche tous les mois",
    "J'ai embrassé un crapaud",
    "Je viens d'une famille très spéciale",
    "Mes astuces pour séduire",
    "La machine à voyager dans le temps. Mon experience",
    "J'ai inventé un nouveau sport",
    "Je vais vous avouer quelque chose de grave",
    "Bloqué(e) dans un ascenseur",
    "Il va y avoir une grande exposition de mes œuvres",
    "Le pique-nique infernal...",
    "En cuisine j'improvise avec n'importe quoi",
    "J'ai jamais pu retirer mes skis",
    "Ma collection unique ou monde",
    "J'ai failli devenir astronaute",
    "Le jour où j'ai perdu mes clés dans un pays étranger",
    "Mon voisin est convaincu d'être un vampire",
    "J'ai essayé de cuisiner un plat de 47 ingrédients",
    "La fois où j'ai été pris pour quelqu'un d'autre",
    "Mon chat m'a sauvé la vie, enfin je crois",
    "J'ai dormi dans un endroit complètement improbable",
    "Le plus grand malentendu de ma vie",
    "J'ai reçu un colis qui ne m'était pas destiné",
    "Ma tentative ratée de devenir influenceur",
    "Le jour où j'ai rencontré un sosie de moi-même"
];
let maxBlackDices = 0;
let blackDiceCount = 0;

function getRandomSentence(sentences) {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}

function setDice(text, id) {
    const targetDice = document.getElementById(id);
    if (targetDice) {
        // Preserve .dice-num span, update only text node
        const numSpan = targetDice.querySelector('.dice-num');
        targetDice.textContent = text;
        if (numSpan) targetDice.appendChild(numSpan);
        // Trigger roll animation
        targetDice.classList.remove('rolling');
        void targetDice.offsetWidth; // reflow
        targetDice.classList.add('rolling');
    }
}

function handleClickBlackButton() {
    if (maxBlackDices < 3) {
        const blackDices = document.getElementById('blackDices');
        const childDiv = document.createElement('div');
        childDiv.textContent = rollBlackDice();
        childDiv.id = "black-" + (++blackDiceCount);
        childDiv.classList.add('dice-card', 'black');
        blackDices.appendChild(childDiv);
    }
    maxBlackDices += 1;
    if (maxBlackDices >= 3) {
        document.getElementById('blackButton').disabled = true;
    }
}

function rollBlackDice() {
    return getRandomSentence(black_dice);
}

function handleClickGreenButton() {
    const yellowSentence   = getRandomSentence(yellow_dice);
    const orangeSentence   = getRandomSentence(orange_dice);
    const redSentence      = getRandomSentence(red_dice);
    const purpleSentence   = getRandomSentence(purple_dice);
    const lightblueSentence = getRandomSentence(lightblue_dice);
    const blueSentence     = getRandomSentence(blue_dice);
    const startSentence    = getRandomSentence(start_sentences);

    setDice(yellowSentence,    "yellow");
    setDice(orangeSentence,    "orange");
    setDice(redSentence,       "red");
    setDice(purpleSentence,    "purple");
    setDice(lightblueSentence, "light-blue");
    setDice(blueSentence,      "blue");
    setDice(startSentence,     "start");

    const blackDices = document.getElementById('blackDices');
    blackDices.textContent = '';
    maxBlackDices = 0;
    blackDiceCount = 0;
    document.getElementById('blackButton').disabled = false;
}

const button = document.getElementById('rollDice');
if (button) {
    button.addEventListener('click', handleClickGreenButton);
}

const blackButton = document.getElementById('blackButton');
if (blackButton) {
    blackButton.addEventListener('click', handleClickBlackButton);
}

handleClickGreenButton();

// Lightbox
const lightbox      = document.getElementById('lightbox');
const lightboxClose = document.getElementById('lightboxClose');
const gnouImg       = document.getElementById('gnouImg');

gnouImg.addEventListener('click', () => lightbox.classList.add('open'));
lightboxClose.addEventListener('click', e => { e.stopPropagation(); lightbox.classList.remove('open'); });
lightbox.addEventListener('click', e => { if (e.target !== lightbox.querySelector('.lightbox-img')) lightbox.classList.remove('open'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.classList.remove('open'); });

const toggleBtn = document.getElementById('toggleBtn');
const panel = document.getElementById('panel');
toggleBtn.addEventListener('click', () => {
    panel.classList.toggle('open');
});