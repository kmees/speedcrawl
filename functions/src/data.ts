export const backgrounds = [
  'AE',
  'AK',
  'AM',
  'Ar',
  'As',
  'Be',
  'CK',
  'Cj',
  'EE',
  'En',
  'FE',
  'Fi',
  'Gl',
  'Hu',
  'IE',
  'Mo',
  'Ne',
  'Sk',
  'Su',
  'Tm',
  'VM',
  'Wn',
  'Wr',
  'Wz',
]

export const races = [
  'Ba',
  'Ce',
  'DD',
  'DE',
  'Dg',
  'Dr',
  'Ds',
  'Fe',
  'Fo',
  'Gh',
  'Gn',
  'Gr',
  'HO',
  'Ha',
  'Hu',
  'Ko',
  'Mf',
  'Mi',
  'Mu',
  'Na',
  'Og',
  'Op',
  'Sp',
  'Te',
  'Tr',
  'VS',
  'Vp',
]

export const comboBlacklist = ['FeAS', 'GhTm', 'MuTm']

export const godKeywords = [
  'Ashenzari',
  'Beogh',
  'Cheibriados',
  'Dithmenos',
  'Elyvilon',
  'Fedhas',
  'Gozag',
  'Hepliaklqana',
  'Jiyva',
  'Kikubaaqudgha',
  'Lugonu',
  'Makhleb',
  'Nemelex',
  'Okawaru',
  'Qazlal',
  'Ru',
  'Sif',
  'Trog',
  'Uskayaw',
  'Vehumet',
  'WJC',
  'Xom',
  'Yredelemnul',
  'Zin',
  'TSO',
]
export const gods = [
  'Ashenzari',
  'Beogh',
  'Cheibriados',
  'Dithmenos',
  'Elyvilon',
  'Fedhas',
  'Gozag',
  'Hepliaklqana',
  'Jiyva',
  'Kikubaaqudgha',
  'Lugonu',
  'Makhleb',
  'Nemelex',
  'Okawaru',
  'Qazlal',
  'Ru',
  'Sif Muna',
  'Trog',
  'Uskayaw',
  'Vehumet',
  'Wu Jian',
  'Xom',
  'Yredelemnul',
  'Zin',
  'The Shining One',
]

export const bots = ['bot']

export const accounts = {
  manman: ['FastMan', 'pureman'],
  NormalPerson7: ['SpeedyPerson7', 'NormalPerson7T'],
  Demise: ['AllRandomAllDemise', 'DemiseSR'],
  YTcomUltraviolent4: ['Ultraviolent4'],
  MeekVeins: ['SpeedVeins'],
}
export const playerByAccount = Object.keys(accounts).reduce(
  (memo, player) => {
    accounts[player].forEach((account: string) => {
      memo[account] = player
    })
    return memo
  },
  {} as { [account: string]: string }
)

export const videos = {
  'P0WERM0DE:cue:20180712164931S':
    'https://www.youtube.com/watch?v=yq3XAXpSK7g',
  'ezero:cjr:20180519223620S': 'https://www.youtube.com/watch?v=OONO__mkMXs',
}
