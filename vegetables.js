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
            vegetables: [1, 2, 3, 4],
            steps: 1
          },
          "reward": 10,
          "punishment": -10
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
          "reward": 30,
          "punishment": -15
        }
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
          "reward": 15,
          "punishment": -20
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
          "reward": 35,
          "punishment": -30
        }
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
          "reward": 20,
          "punishment": -20
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
          "reward": 10,
          "punishment": -10
        }
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
          "reward": 45,
          "punishment": -40
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
          "reward": 15,
          "punishment": -20
        }
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
        }
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
        }
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
        }
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
        }
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
        }
      ]
    }
  ];
}