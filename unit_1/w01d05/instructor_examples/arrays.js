const confectionary = [
  ['mounds', 'almond joy'],
  [
    'lindt truffles',
    'easter egg',
    ['kitkat bar 1', 'kitkat bar 2', 'kitkat bar 3', 'kitkat bar 4']
  ]
];

confectionary[1][2][0] = 'Skittles';

console.log(confectionary);
