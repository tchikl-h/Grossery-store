function getAllVegetables() {
  return [
    {
      "id": 1,
      "name": "Banane",
      "srcImg": "banana",
      "isUnique": false,
      "hate": 50,
      "intro": [
        {
          "text": "",
          "sound": ""
        }
      ],
      "promises": [
        {
          "text": "Rrrrh ! Le saligot qui va passer après moi me doit de la thune ! Mange le tiens ! Ça lui fera les graines",
          "sound": "",
          "cond": {
            days: 1,
            action: 2,
            vegetables: [1, 2, 3, 4],
            steps: 1
          },
          "reward": 10,
          "punishment": -10
        },
        {
          "text": "Eeh euuh toi là, ouai c’est à toi qu’je cause ! File de la thune à 2 de mes copains, on te revaudra ça t’inquiète ahah.. Tu as 5 jours !",
          "sound": "",
          "cond": {
            days: 5,
            action: 0,
            vegetables: [1, 1]
          },
          "reward": 30,
          "punishment": -15
        }
      ]
    },
    {
      "id": 2,
      "name": "Carotte",
      "srcImg": "carot",
      "isUnique": false,
      "hate": 50,
      "intro": [
        {
          "text": "",
          "sound": ""
        }
      ],
      "promises": [
        {
          "text": "J’suis dans la sauce, je dois de la thune à la prochaine banane que tu vas voir. Si tu le vois, vends le, je ferais n’importe quoi. fait vite, tu as 3 jours !",
          "sound": "",
          "cond": {
            days: 3,
            action: 1,
            vegetables: [1],
            step: 1
          },
          "reward": 15,
          "punishment": -20
        },
        {
          "text": "Je pense que le clan des bananes prépare un sale coup, débarasse toi d’eux avant la fin de la semaine !",
          "sound": "",
          "cond": {
            days: 7,
            action: [1, 2],
            vegetables: [1],
            step: 1
          },
          "reward": 35,
          "punishment": -30
        }
      ]
    },
    {
      "id": 3,
      "name": "Aubergine",
      "srcImg": "banana",
      "isUnique": false,
      "hate": 50,
      "intro": [
        {
          "text": "",
          "sound": ""
        }
      ],
      "promises": [
        {
          "text": "Ola seniorita, rend moi un service, mange le prochain comme moi, ça lui fera plaisir, je te laisse 72h",
          "sound": "",
          "cond": {
            days: 3,
            action: 2,
            vegetables: [3]
          },
          "reward": 20,
          "punishment": -20
        },
        {
          "text": "Ehh psss psss, tu aurais pas quelques pesos pour le prochain, je suis d’humour généreuse aujourd’hui",
          "sound": "",
          "cond": {
            days: 1,
            action: [0],
            vegetables: [1, 2, 3, 4]
          },
          "reward": 10,
          "punishment": -10
        }
      ]
    },
    {
      "id": 4,
      "name": "Brocoli",
      "srcImg": "brocoli",
      "isUnique": false,
      "hate": 50,
      "intro": [
        {
          "text": "",
          "sound": ""
        }
      ],
      "promises": [
        {
          "text": "",
          "sound": "",
          "cond": {
            days: 10,
            action: 0,
            vegetables: [1]
          },
          "reward": 20,
          "punishment": -10
        }
      ]
    }
  ];
}