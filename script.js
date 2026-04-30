"use strict";

/* ═══════════════════════════════════════════
   DICE DATA
═══════════════════════════════════════════ */
const DATA = {
  fr: {
    yellow:    ["Je dois vous avouer","L'autre jour","Bon, écoutez-moi","Tu vas pas me croire","Alooooors","Vous savez que"],
    orange:    ["Mais","Hélas","J'ajoute","C'est pourquoi","Donc","Or"],
    red:       ["Je précise que","Vous allez me dire","Le plus drôle","Bon, tu me connais","Tout à coup","En fait"],
    purple:    ["Là, ça se complique","Ah, j'oubliais !","C'est vrai que","Et là, surprise !","D'un autre côté","Du coup"],
    lightblue: ["Et là, Pataras !","Bref !","Moi, tranquille","et le pire !","J'avais prévu le coup","Finalement"],
    blue:      ["C'est comme ça que","la prochaine fois","Et le drame","Conclusion","Alors, vous allez rire","Comme dirait ma mamie"],
    black:     ["Avec du beurre ?","Ça, c'est faux !","T'oublies pas un détail ?","Il était quelle heure ?","J'ai pas compris","Moi, ça me rappelle"],
    start: [
      "J'ai passé une très bonne soirée avec une fée",
      "Comment j'ai bâti mon immense fortune",
      "Mon GPS se moque de moi",
      "Je lis l'avenir dans la purée de pommes de terre",
      "Mon cousin parle une langue inconnue",
      "Je vais me marier à Las Vegas, la classe...",
      "C'était un jour pluvieux d'octobre",
      "Mon premier grand amour",
      "Le bonheur d'être seul(e)",
      "Je suis recherché(e) par la police de l'Amérique du Sud",
      "Pourquoi je suis devenu(e) clown",
      "La légende du chevalier sans épée",
      "Je ronfle",
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
      "La machine à voyager dans le temps. Mon expérience",
      "J'ai inventé un nouveau sport",
      "Je vais vous avouer quelque chose de grave",
      "Bloqué(e) dans un ascenseur",
      "Il va y avoir une grande exposition de mes œuvres",
      "Le pique-nique infernal...",
      "En cuisine j'improvise avec n'importe quoi",
      "J'ai jamais pu retirer mes skis",
      "Ma collection unique au monde",
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
      "Le jour où j'ai rencontré un sosie de moi-même",
      "Comment j'ai bâti mon immense fortune"
    ]
  },
  en: {
    yellow:    ["I must confess","The other day","Now listen to me","You won't believe it","Sooooo","You know what"],
    orange:    ["But","Alas","I should add","That's why","So","Now"],
    red:       ["I should mention","You might say","The funniest part","Well, you know me","Suddenly","Actually"],
    purple:    ["Things get complicated","Oh, I forgot!","It's true that","And then, surprise!","On the other hand","So then"],
    lightblue: ["And then, boom!","Long story short!","Me, just chilling","And the worst part!","I saw it coming","Finally"],
    blue:      ["That's how","Next time","And the drama","In conclusion","So, you'll laugh","As my grandma would say"],
    black:     ["With butter?","That's not true!","You're missing a detail?","What time was it?","I didn't follow","That reminds me of"],
    start: [
      "I spent a wonderful evening with a fairy",
      "How I built my enormous fortune",
      "My GPS has it out for me",
      "I can read the future in mashed potatoes",
      "My cousin speaks an unknown language",
      "I'm getting married in Las Vegas, fancy that...",
      "It was a rainy October day",
      "My first great love",
      "The joy of being alone",
      "I'm wanted by the South American police",
      "Why I became a clown",
      "The legend of the swordless knight",
      "I snore",
      "Such a short story",
      "Honestly, I think everything is beautiful",
      "Head in the clouds...",
      "My stay in the Far North",
      "There's a genie in my coffee maker",
      "My political program for world peace",
      "I took etiquette classes",
      "I don't look it, but I once robbed a bank",
      "My unforgettable pyjama party",
      "You'll never guess what I found in a spring roll",
      "I have a dog that talks",
      "It's not my fault, it's my hairdresser",
      "I have nothing to say...",
      "Let me tell you who I really am",
      "How I ruined my favourite shirt",
      "Why I only shower once a month",
      "I kissed a frog",
      "I come from a very unusual family",
      "My tips for being irresistible",
      "The time machine. My experience",
      "I invented a new sport",
      "I'm about to confess something serious",
      "Stuck in a lift",
      "There's going to be a big exhibition of my work",
      "The picnic from hell...",
      "I improvise in the kitchen with absolutely anything",
      "I never managed to take off my skis",
      "The most unique collection in the world",
      "I almost became an astronaut",
      "The day I lost my keys abroad",
      "My neighbour is convinced he's a vampire",
      "I tried to cook a dish with 47 ingredients",
      "The time I was mistaken for someone else",
      "My cat saved my life — I think",
      "I slept somewhere completely improbable",
      "The biggest misunderstanding of my life",
      "I received a parcel meant for someone else",
      "My failed attempt at becoming an influencer",
      "The day I met my own doppelgänger",
      "How I built my enormous fortune"
    ]
  }
};

/* ═══════════════════════════════════════════
   TRANSLATIONS
═══════════════════════════════════════════ */
const T = {
  fr: {
    subtitle:       "Adaptation de <i>Comment j'ai adopté un Gnou</i>",
    rulesBtn:       "Règles du jeu",
    rollBtn:        "Lancer les dés",
    players:        "3–8 joueurs",
    rulesIntro:     "Lancez les dés en cliquant sur le bouton vert.",
    rulesHow:       "Racontez une histoire grâce à la phrase proposée, en suivant les dés de gauche à droite",
    rulesHowDesktop:", exemple ci-dessous",
    dice1rule:      "introduit l'histoire",
    dice1example:   " (« Tu vas pas me croire… »)",
    dice2rule:      "précise l'histoire",
    dice2example:   " (« C'est pourquoi… »)",
    dice3rule:      "amène un rebondissement",
    dice3example:   " (« Le plus drôle… »)",
    dice4rule:      "poursuit la narration",
    dice4example:   " (« Ah, j'oubliais ! »)",
    dice5rule:      "introduit la conclusion",
    dice5example:   " (« Et là, patatras ! »)",
    dice6rule:      "conclut",
    dice6example:   " (« Comme dirait mamie… »)",
    variantTitle:   "Variante :",
    variantText:    "à tout moment vous pouvez lancer 1 à 3",
    variantText2:   "noirs, utilisés par les autres joueurs pour interagir avec le conteur en l'obligeant à adapter son histoire.",
    blackBtn:       "Lancer un dé noir",
    num1: "1 intro", num2: "2 précise", num3: "3 rebond",
    num4: "4 suite", num5: "5 chute",   num6: "6 fin"
  },
  en: {
    subtitle:       "Adaptation of <i>Comment j'ai adopté un Gnou</i>",
    rulesBtn:       "Game rules",
    rollBtn:        "Roll the dice",
    players:        "3–8 players",
    rulesIntro:     "Roll the dice by clicking the green button.",
    rulesHow:       "Tell a story using the prompt, following the dice from left to right",
    rulesHowDesktop:", example below",
    dice1rule:      "opens the story",
    dice1example:   " (« You won't believe it… »)",
    dice2rule:      "adds detail",
    dice2example:   " (« That's why… »)",
    dice3rule:      "introduces a twist",
    dice3example:   " (« The funniest part… »)",
    dice4rule:      "continues the plot",
    dice4example:   " (« Oh, I forgot! »)",
    dice5rule:      "leads to the ending",
    dice5example:   " (« And then, boom! »)",
    dice6rule:      "concludes",
    dice6example:   " (« As my grandma would say… »)",
    variantTitle:   "Variant:",
    variantText:    "at any time you can roll 1 to 3",
    variantText2:   "black dice, used by the other players to interact with the storyteller and force them to adapt.",
    blackBtn:       "Roll a black die",
    num1: "1 intro", num2: "2 detail", num3: "3 twist",
    num4: "4 plot",  num5: "5 landing", num6: "6 end"
  }
};

/* ═══════════════════════════════════════════
   STATE
═══════════════════════════════════════════ */
let lang = 'fr';
let maxBlackDices = 0;
let blackDiceCount = 0;

/* ═══════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════ */
function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function setDice(text, id) {
  const el = document.getElementById(id);
  if (!el) return;
  const numSpan = el.querySelector('.dice-num');
  el.textContent = text;
  if (numSpan) el.appendChild(numSpan);
  el.classList.remove('rolling');
  void el.offsetWidth;
  el.classList.add('rolling');
}

/* ═══════════════════════════════════════════
   I18N
═══════════════════════════════════════════ */
function applyTranslations() {
  const t = T[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.documentElement.lang = lang;
}

/* ═══════════════════════════════════════════
   ROLL
═══════════════════════════════════════════ */
function handleClickGreenButton() {
  const d = DATA[lang];
  setDice(rand(d.yellow),    "yellow");
  setDice(rand(d.orange),    "orange");
  setDice(rand(d.red),       "red");
  setDice(rand(d.purple),    "purple");
  setDice(rand(d.lightblue), "light-blue");
  setDice(rand(d.blue),      "blue");
  setDice(rand(d.start),     "start");

  document.getElementById('blackDices').textContent = '';
  maxBlackDices = 0;
  blackDiceCount = 0;
  document.getElementById('blackButton').disabled = false;
}

function handleClickBlackButton() {
  if (maxBlackDices >= 3) return;
  const blackDices = document.getElementById('blackDices');
  const div = document.createElement('div');
  div.textContent = rand(DATA[lang].black);
  div.id = "black-" + (++blackDiceCount);
  div.classList.add('dice-card', 'black');
  blackDices.appendChild(div);
  maxBlackDices++;
  if (maxBlackDices >= 3) document.getElementById('blackButton').disabled = true;
}

/* ═══════════════════════════════════════════
   THEME SWITCH
═══════════════════════════════════════════ */
const themeSwitch = document.getElementById('themeSwitch');
themeSwitch.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light');
  themeSwitch.classList.toggle('light', isLight);
});

/* ═══════════════════════════════════════════
   LANG SWITCH
═══════════════════════════════════════════ */
const langSwitch = document.getElementById('langSwitch');
langSwitch.addEventListener('click', () => {
  lang = (lang === 'fr') ? 'en' : 'fr';
  langSwitch.classList.toggle('en', lang === 'en');
  applyTranslations();
  handleClickGreenButton();
});

/* ═══════════════════════════════════════════
   EVENTS
═══════════════════════════════════════════ */
document.getElementById('rollDice').addEventListener('click', handleClickGreenButton);
document.getElementById('blackButton').addEventListener('click', handleClickBlackButton);

const toggleBtn = document.getElementById('toggleBtn');
const panel     = document.getElementById('panel');
toggleBtn.addEventListener('click', () => panel.classList.toggle('open'));

// Lightbox
const lightbox      = document.getElementById('lightbox');
const lightboxClose = document.getElementById('lightboxClose');
const gnouImg       = document.getElementById('gnouImg');
gnouImg.addEventListener('click', () => lightbox.classList.add('open'));
lightboxClose.addEventListener('click', e => { e.stopPropagation(); lightbox.classList.remove('open'); });
lightbox.addEventListener('click', e => { if (e.target !== lightbox.querySelector('.lightbox-img')) lightbox.classList.remove('open'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.classList.remove('open'); });

/* ═══════════════════════════════════════════
   INIT
═══════════════════════════════════════════ */
applyTranslations();
handleClickGreenButton();