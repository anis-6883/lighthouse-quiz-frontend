export const upcomingStatus: string[] = ['TBA', 'NS', 'WO', 'ABANDONED', 'CANCELLED', 'AWARDED', 'INTERRUPTED', 'POSTPONED']
export const finishedStatus = ['FT', 'AET', 'FT_PEN']
export const liveStatus: string[] = [
  'INPLAY_1ST_HALF',
  'INPLAY_2ND_HALF',
  'HT',
  'INPLAY_ET',
  'INPLAY_ET_2ND_HALF',
  'BREAK',
  'PEN_BREAK',
  'EXTRA_TIME_BREAK',
  'INPLAY_PENALTIES',
]

export const QUESTION_DURATIONS = [
  { label: '5 seconds', value: '5' },
  { label: '10 seconds', value: '10' },
  { label: '15 seconds', value: '15' },
  { label: '20 seconds', value: '20' },
  { label: '25 seconds', value: '25' },
  { label: '30 seconds', value: '30' },
  { label: '35 seconds', value: '35' },
  { label: '40 seconds', value: '40' },
  { label: '45 seconds', value: '45' },
  { label: '50 seconds', value: '50' },
  { label: '55 seconds', value: '55' },
  { label: '60 seconds', value: '60' },
]

export const CART_KEY = 'isomorphic-cart'
export const POS_CART_KEY = 'isomorphic-pos-cart'
export const DUMMY_ID = 'FC6723757651DB74'
export const CHECKOUT = 'isomorphic-checkout'
export const CURRENCY_CODE = 'USD'
export const LOCALE = 'en'
export const CURRENCY_OPTIONS = {
  formation: 'en-US',
  fractions: 2,
}

export const ROW_PER_PAGE_OPTIONS = [
  {
    value: 5,
    name: '5',
  },
  {
    value: 10,
    name: '10',
  },
  {
    value: 15,
    name: '15',
  },
  {
    value: 20,
    name: '20',
  },
]

export const ROLES = {
  Administrator: 'Administrator',
  Manager: 'Manager',
  Sales: 'Sales',
  Support: 'Support',
  Developer: 'Developer',
  HRD: 'HR Department',
  RestrictedUser: 'Restricted User',
  Customer: 'Customer',
} as const
