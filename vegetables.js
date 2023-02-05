function getAllVegetables() {
  return [
    {
      "id": 1,
      "nameFR": "Banane",
      "name": "banana",
      "maxAppears": 1000,
      "hate": 50,
      "firstAppear": true,
      "promises": [
        {
          "text": "Rrrrh ! Le saligot qui va passer après moi me doit de la thune ! Mange le tiens ! Ça lui fera les graines",
          "sound": "banana-promise-1.mp3",
          "cond": {
            days: 1,
            action: [2],
            vegetables: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            steps: 1
          },
          "reward": 60,
          "punishment": -30
        },
        {
          "text": "Eeh euuh toi là, ouai c’est à toi qu’je cause ! File de la thune à 2 de mes copains, on te revaudra ça t’inquiète ahah.. Tu as 5 jours !",
          "sound": "banana-promise-2.mp3",
          "cond": {
            days: 5,
            action: [0],
            vegetables: [1, 1],
            steps: 2
          },
          "reward": 80,
          "punishment": -40
        }
      ],
      "intros": [
        "Moi j'ai la banane tous les jours !",
        "Dans la vie y a ceux qui une banane et y a ceux qui creusent, et nous deux, on a la banane.",
        "Les singes mangent des bananes, mais moi je mange les singes, alors fait gaffe à ce que tu fais.",
        "Si tu continues de me chercher des noises, je t'épluches."
      ]
    },
    {
      "id": 2,
      "nameFR": "Carotte",
      "name": "carot",
      "maxAppears": 1000,
      "hate": 50,
      "firstAppear": true,
      "promises": [
        {
          "text": "J’suis dans la sauce, je dois de la thune à la prochaine banane que tu vas voir. Si tu le vois, vends le, je ferais n’importe quoi. fait vite, tu as 3 jours !",
          "sound": "carot-promise-1.mp3",
          "cond": {
            days: 3,
            action: [1],
            vegetables: [1],
            step: 1
          },
          "reward": 60,
          "punishment": -30
        },
        {
          "text": "Je pense que le clan des bananes prépare un sale coup, débarasse toi d’eux avant la fin de la semaine !",
          "sound": "carot-promise-2.mp3",
          "cond": {
            days: 7,
            action: [1, 2],
            vegetables: [1, 1],
            step: 2
          },
          "reward": 80,
          "punishment": -40
        }
      ],
      "intros": [
        "J'entends des noix dans ma tête, s'il te plait soit gentil avec moi.",
        "J'te donne une info comme ça mais, la NASA nous surveille fait gaffe à toi.",
        "Être ou ne pas être, de tout façon, on va tous crever !",
        "Fait gaffe à ce que tu vas faire parce que avec moi les carottes seront cuites !",
      ]
    },
    {
      "id": 3,
      "nameFR": "Aubergine",
      "name": "pedro",
      "maxAppears": 1000,
      "hate": 50,
      "firstAppear": true,
      "promises": [
        {
          "text": "Ola seniorita, rend moi un service, mange le prochain comme moi, ça lui fera plaisir, je te laisse 72h",
          "sound": "pedro-promise-1.mp3",
          "cond": {
            days: 3,
            action: [2],
            vegetables: [3],
            steps: 1
          },
          "reward": 60,
          "punishment": -40
        },
        {
          "text": "Ehh psss psss, tu aurais pas quelques pesos pour le prochain, je suis d’humour généreuse aujourd’hui",
          "sound": "pedro-promise-2.mp3",
          "cond": {
            days: 1,
            action: [0],
            vegetables: [1, 2, 3, 4],
            steps: 1
          },
          "reward": 80,
          "punishment": -40
        }
      ],
      "intros": [
        "Bonjour, je m'appelle Pedro, je suis un expert en moustache.. Et en plaisir *bise platonique*",
        "Toi je t'ai à la bonne, toi et moi c'est pour la vie.",
        "Ayy tu me plais mais j'ai déjà vu bien plus beau que toi.",
        "Toi gringo tu ne fais carrément pas parti de mes amigos !",
      ]
    },
    {
      "id": 4,
      "nameFR": "Brocoli",
      "name": "brocoli",
      "maxAppears": 1000,
      "hate": 50,
      "firstAppear": true,
      "promises": [
        {
          "text": "Ecoute mon pote euuh, moi et mes amis on est dans la merde, si tu donnes de l'argent à 3 brocolis avant 7 jours, j'te ferais un super cadeaauuu !",
          "sound": "brocoli-promise-1.mp3",
          "cond": {
            days: 7,
            action: [0],
            vegetables: [4, 4, 4],
            steps: 3
          },
          "reward": 60,
          "punishment": -30
        },
        {
          "text": "C'est moi ou les carottes elles sont bizarres en ce moment, tu pourrais en flinguer une pour moi s'il te plait, juste en 96h.",
          "sound": "brocoli-promise-2.mp3",
          "cond": {
            days: 4,
            action: [2],
            vegetables: [2],
            steps: 1
          },
          "reward": 80,
          "punishment": -40
        }
      ],
      "intros": [
        "Je je.. J'crois que je me sens pas bien mec.",
        "Faudrait pas que je te demande ça mon pote mais, t'aurais pas un petit bout pour moi s'il te plait.",
        "Ça.. Ça va pas bien dans ma tête.",
        "Fait gaffe mec, c'est pas parce que j'suis défoncé que je peux pas te défoncer !",
      ]
    },
    {
      "id": 5,
      "nameFR": "Framboise Hollande",
      "name": "hollande",
      "maxAppears": 1,
      "hate": 50,
      "firstAppear": true,
      "promises": [
        {
          "text": "Alors euuh, je te promets que si tu donnes des sous pour ma campagne, ça fera très très plaisir à tous mes amis les brocolis gne-eh.",
          "sound": "hollande-promise.mp3",
          "cond": { days: 1 }
        }
      ],
      "intros": [
        "Bonjour, c'est Framboise Hollande. Ça me fait très plaisir d'être avec vous aujourd'hui.",
      ]
    },
    {
      "id": 6,
      "nameFR": "Pomelo Anderson",
      "name": "pomelo",
      "maxAppears": 1,
      "hate": 50,
      "firstAppear": true,
      "promises": [
        {
          "text": "Ouh ouh, sois généreux avec moi et tous mes fans moustachus. N'hésite pas à leur donner de l'argent, de la money.",
          "sound": "pomelo-promise.mp3",
          "cond": { days: 1 }
        }
      ],
      "intros": [
        "Ouuh, hello darling, c'est Pomelo Andreson.",
      ]
    },
    {
      "id": 7,
      "nameFR": "Jean Lasalade",
      "name": "salad",
      "maxAppears": 1,
      "hate": 50,
      "firstAppear": true,
      "promises": [
        {
          "text": "Mmmh laisse moi reniffler ton cou petite cochonne, je vais faire de toi quelqu'un de riche.",
          "sound": "salad-promise.mp3",
          "cond": { days: 1 }
        }
      ],
      "intros": [
        "Aqueros mountagnos. Que tan hautes soun",
      ]
    },
    {
      "id": 8,
      "nameFR": "Orangesan",
      "name": "orange",
      "maxAppears": 1,
      "hate": 50,
      "firstAppear": true,
      "promises": [
        {
          "text": "Eh t'sais quoi, si t'acceptes de faire un feat avec moi j'te promets, tout le monde va m'adorer.. Sauf les bananes mais bon personne les aime.",
          "sound": "orange-promise.mp3",
          "cond": { days: 1 }
        }
      ],
      "intros": [
        "Bonjour l'épicerie.",
      ]
    },
    {
      "id": 9,
      "nameFR": "Chou-Marreur",
      "name": "chou",
      "maxAppears": 1,
      "hate": 50,
      "firstAppear": true,
      "promises": [
        {
          "text": "Gggrrrr aide moi à m'en débarasser et je me transformerai en ta machine à sous.",
          "sound": "chou-promise.mp3",
          "cond": { days: 1 }
        }
      ],
      "intros": [
        "*rire* Le bonjour du chou.",
      ]
    },
    {
      "id": 10,
      "nameFR": "Jean-Marie Le Panet",
      "name": "panet",
      "maxAppears": 1,
      "hate": 50,
      "firstAppear": true,
      "promises": [
        {
          "text": "Je peux te donner tout l'or des radis si tu deviens mon heritier, même si ça peut en chiffoner quelques uns.",
          "sound": "panet-promise.mp3",
          "cond": { days: 1 }
        }
      ],
      "intros": [
        "Bonsoiiiir c'est Jean-Marie Le Panet",
      ]
    },
    {
      "id": 11,
      "nameFR": "Jean-luc Melon",
      "name": "melon",
      "maxAppears": 1,
      "hate": 50,
      "firstAppear": true,
      "promises": [
        {
          "text": "J’ai besoin de votre soutien, je vous demande de m'élire premier fruitiste.",
          "sound": "melon-promise.mp3",
          "cond": { days: 1 }
        }
      ],
      "intros": [
        "La vitamine c'est moi.",
      ]
    }
  ];
}