export const routes = {
  home: '/',
  authHome: '/home',
  register: '/register',
  signIn: '/signin',
  verification: '/verification/otp',
  quiz: '/quiz',
  history: '/history',
  refer: '/refer',
  settings: {
    home: '/settings',
    notification: '/settings/notifications',
    helpCenter: '/settings/help-center',
  },
  user: {
    profile: 'user/profile',
  },
  summary: '/summary',
  waitingArea: '/waiting-area',
  aboutUs: '/about-us',
  tramsAndConditions: '/terms-and-conditions',
  privacyPolicy: '/privacy-policy',
  question: '/question',
  // signIn: '/user/signin',
  forgetPassword: '/user/forget-password',
  adminLogin: '/admin/login',
  dashboard: '/admin/dashboard',
  questionsBank: {
    home: '/admin/question-bank',
    create: '/admin/questions-bank/create',
    edit: (id: string) => `/admin/questions-bank/update/${id}`,
  },
  dailyQuizzes: {
    home: '/admin/daily-quizzes',
    create: '/admin/daily-quizzes/create',
    edit: (id: string) => `/admin/daily-quizzes/update/${id}`,
  },
  liveQuizzes: {
    home: '/admin/live-quizzes',
    create: '/admin/live-quizzes/create',
    edit: (id: string) => `/admin/live-quizzes/update/${id}`,
  },
  reports: {
    dailyQuiz: '/admin/reports/daily-quiz',
    liveQuiz: '/admin/reports/live-quiz',
  },
  faqs: {
    home: '/admin/faqs',
    create: '/admin/faqs/create',
    edit: (id: string) => `/admin/faqs/update/${id}`,
  },
  upcomingFeatures: {
    home: '/admin/upcoming-features',
    create: '/admin/upcoming-features/create',
    edit: (id: string) => `/admin/upcoming-features/update/${id}`,
  },
  notifications: {
    home: '/admin/notifications',
    create: '/admin/notifications/create',
    edit: (id: string) => `/admin/notifications/update/${id}`,
  },
  manageUsers: {
    home: '/admin/manage-users',
    create: '/admin/manage-users/create',
    edit: (id: string) => `/admin/manage-users/update/${id}`,
  },
  manageAdmins: {
    home: '/admin/manage-admins',
    create: '/admin/manage-admins/create',
    edit: (id: string) => `/admin/manage-admins/update/${id}`,
  },
  deleteAccounts: '/admin/deletion-requests',
  generalSettings: '/admin/general-settings',

  // Skip others routes for now...

  manageLive: {
    home: '/admin/manage-live-matches',
    create: '/admin/manage-live-matches/create',
    details: (id: string) => `/admin/manage-live-matches/${id}`,
    edit: (id: number) => `/admin/manage-live-matches/update/${id}`,
  },
  fixture: {
    football: '/admin/fixtures/football',
    cricket: '/admin/fixtures/cricket',
  },
  highlights: {
    football: {
      home: '/admin/highlights/football',
      create: '/admin/highlights/football/create',
      details: (id: string) => `/admin/highlights/football/${id}`,
      edit: (id: string) => `/admin/highlights/football/update/${id}`,
    },
    cricket: {
      home: '/admin/highlights/cricket',
      create: '/admin/highlights/cricket/create',
      details: (id: string) => `/admin/highlights/cricket/${id}`,
      edit: (id: string) => `/admin/highlights/cricket/update/${id}`,
    },
  },
  popularFootballEntity: '/admin/popular/football-entities',
  popularCricketEntity: '/admin/popular/cricket-entities',
  eCommerce: {
    dashboard: '/ecommerce',
    products: '/ecommerce/products',
    createProduct: '/ecommerce/products/create',
    productDetails: (slug: string) => `/ecommerce/products/${slug}`,
    ediProduct: (slug: string) => `/ecommerce/products/${slug}/edit`,
    categories: '/ecommerce/categories',
    createCategory: '/ecommerce/categories/create',
    editCategory: (id: string) => `/ecommerce/categories/${id}/edit`,
    orders: '/ecommerce/orders',
    createOrder: '/ecommerce/orders/create',
    orderDetails: (id: string) => `/ecommerce/orders/${id}`,
    editOrder: (id: string) => `/ecommerce/orders/${id}/edit`,
    reviews: '/ecommerce/reviews',
    shop: '/ecommerce/shop',
    cart: '/ecommerce/cart',
    checkout: '/ecommerce/checkout',
    trackingId: (id: string) => `/ecommerce/tracking/${id}`,
  },
  searchAndFilter: {
    realEstate: '/search/real-estate',
    nft: '/search/nft',
    flight: '/search/flight',
  },
  support: {
    dashboard: '/support',
    inbox: '/support/inbox',
    supportCategory: (category: string) => `/support/inbox/${category}`,
    messageDetails: (id: string) => `/support/inbox/${id}`,
    snippets: '/support/snippets',
    createSnippet: '/support/snippets/create',
    viewSnippet: (id: string) => `/support/snippets/${id}`,
    editSnippet: (id: string) => `/support/snippets/${id}/edit`,
    templates: '/support/templates',
    createTemplate: '/support/templates/create',
    viewTemplate: (id: string) => `/support/templates/${id}`,
    editTemplate: (id: string) => `/support/templates/${id}/edit`,
  },
  logistics: {
    dashboard: '/logistics',
    shipmentList: '/logistics/shipments',
    customerProfile: '/logistics/customer-profile',
    createShipment: '/logistics/shipments/create',
    editShipment: (id: string) => `/logistics/shipments/${id}/edit`,
    shipmentDetails: (id: string) => `/logistics/shipments/${id}`,
    tracking: (id: string) => `/logistics/tracking/${id}`,
  },
  executive: {
    dashboard: '/executive',
  },
  analytics: '/analytics',
  file: {
    dashboard: '/file',
    manager: '/file-manager',
    upload: '/file-manager/upload',
    create: '/file-manager/create',
  },
  pos: {
    index: '/point-of-sale',
  },
  eventCalendar: '/event-calendar',
  rolesPermissions: '/roles-permissions',
  invoice: {
    home: '/invoice',
    create: '/invoice/create',
    details: (id: string) => `/invoice/${id}`,
    edit: (id: string) => `/invoice/${id}/edit`,
  },
  widgets: {
    cards: '/widgets/cards',
    icons: '/widgets/icons',
    charts: '/widgets/charts',
    maps: '/widgets/maps',
    banners: '/widgets/banners',
  },
  tables: {
    basic: '/tables/basic',
    collapsible: '/tables/collapsible',
    enhanced: '/tables/enhanced',
    pagination: '/tables/pagination',
    search: '/tables/search',
    stickyHeader: '/tables/sticky-header',
  },
  multiStep: '/multi-step',
  forms: {
    profileSettings: '/forms/profile-settings',
    notificationPreference: '/forms/profile-settings/notification',
    personalInformation: '/forms/profile-settings/profile',
    newsletter: '/forms/newsletter',
  },
  emailTemplates: '/email-templates',
  profile: '/profile',
  welcome: '/welcome',
  comingSoon: '/coming-soon',
  accessDenied: '/access-denied',
  notFound: '/not-found',
  maintenance: '/maintenance',
  blank: '/blank',
  auth: {
    signUp1: '/auth/sign-up-1',
    signUp2: '/auth/sign-up-2',
    signUp3: '/auth/sign-up-3',
    signUp4: '/auth/sign-up-4',
    signUp5: '/auth/sign-up-5',
    // sign in
    signIn1: '/auth/sign-in-1',
    signIn2: '/auth/sign-in-2',
    signIn3: '/auth/sign-in-3',
    signIn4: '/auth/sign-in-4',
    signIn5: '/auth/sign-in-5',
    // forgot password
    forgotPassword1: '/auth/forgot-password-1',
    forgotPassword2: '/auth/forgot-password-2',
    forgotPassword3: '/auth/forgot-password-3',
    forgotPassword4: '/auth/forgot-password-4',
    forgotPassword5: '/auth/forgot-password-5',
    // OTP
    otp1: '/auth/otp-1',
    otp2: '/auth/otp-2',
    otp3: '/auth/otp-3',
    otp4: '/auth/otp-4',
    otp5: '/auth/otp-5',
  },
}
