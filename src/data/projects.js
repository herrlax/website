const projects = [
  {
    'id':           'musicalarm',
    'name':         'Music Alarm',
    'description':  'An Android app that wakes you up to your favorite tunes from Spotify.',
    'mypart':       'As I developed the app by my self I took the role both as graphical designer and as Android developer.',
    'thumbnail':    'thumbnails/musicalarm.png',
    'gradientStart':        '5B5B5B',
    'gradientEnd':          '222121',
    'link': {
      'type': 'github',
      'link': 'https://github.com/herrlax/MusicAlarm'
    },
    'phonescreens': [
      '/img/screens/musicalarm/musicalarm1.png',
      '/img/screens/musicalarm/musicalarm2.png',
      '/img/screens/musicalarm/musicalarm3.png',
      '/img/screens/musicalarm/musicalarm4.png',
      '/img/screens/musicalarm/musicalarm5.png',
      '/img/screens/musicalarm/musicalarm6.png'
    ]
  },
  {
    'id':           'swosh',
    'name':         'Swosh',
    'description':  'An Android app for creating request links to the populat payment app Swish.',
    'mypart':       'This application was developed in a team of two where we both has an equal responsibility for development. I was also responsible for the graphical design and UX of the app.',
    'thumbnail':    'thumbnails/swosh.png',
    'gradientStart':        '9542EB',
    'gradientEnd':          '493062',
    'link': {
      'type': 'github',
      'link': 'https://github.com/malmers/SwoshAndroid'
    },
    'phonescreens': [
      '/img/screens/swosh/swosh1.png',
      '/img/screens/swosh/swosh2.png',
      '/img/screens/swosh/swosh3.png',
      '/img/screens/swosh/swosh4.png',
      '/img/screens/swosh/swosh5.png',
      '/img/screens/swosh/swosh6.png'
    ]
  },
  {
    'id':           'auxiliaire',
    'name':         'Auxiliaire',
    'description':  'Auxiliaire is an Android app that helps people help each other out. It was a project during Gothenburg Startup Hack 2016 with a client app written in Java and a back end written in Ruby on Rails.',
    'mypart':       'My part during the project was as both front end Android developer and UX-designer. As the project was done in a 4-man team I worked close together with another Android developer, while the other 2 wrote the back end.',
    'thumbnail':    'thumbnails/auxiliaire.png',
    'gradientStart':        'FF82C1',
    'gradientEnd':          'FFC6FD',
    'link': {
      'type': 'github',
      'link': 'https://github.com/AuxiliaireSH/android-app'
    },
    'phonescreens': [
      '/img/screens/auxiliaire/auxiliaire1.png',
      '/img/screens/auxiliaire/auxiliaire2.png',
      '/img/screens/auxiliaire/auxiliaire3.png',
      '/img/screens/auxiliaire/auxiliaire4.png',
      '/img/screens/auxiliaire/auxiliaire5.png',
      '/img/screens/auxiliaire/auxiliaire6.png',
      '/img/screens/auxiliaire/auxiliaire7.png',
      '/img/screens/auxiliaire/auxiliaire8.png'
    ]
  },
  {
    'id':           'capmap',
    'name':         'Capmap',
    'description':  'Capmap allows users to share life experiences in an easy and fun way through short videos tagged with the user’s geographical location. The project consists of the Android app, as well as a backend written in Ruby on Rails. The goal with the app is to allow users to share moments of their day based on their current location in 5 second videos. These movies can be viewed by other people from around the world by clicking the corresponding marker on the map.',
    'mypart':       'The projects was done in a 2 man team where my part was to design and develop the Android app, the graphical design as well as doing user tests. The project started with a short user study where we figured out what features were most relevant for our user group, in order for us to develop the user requirements. After this a prototype was designed using Sketch, which was evaluated using the same users that was a part of the first user study. The app was then developed using Java, based on the design and the feedback we got from our users. Apart from the features of uploading and streaming videos in the app, Google Sign-In was integrated, which allowed our users to sign into the app using their Google/Gmail account and view their own videos in a list.',
    'thumbnail':    'thumbnails/capmap.png',
    'gradientStart':        '9794FF',
    'gradientEnd':          'FABEEE',
    'link': {
      'type': 'github',
      'link': 'https://github.com/herrlax/capmap'
    },
    'phonescreens': [
      '/img/screens/capmap/map.png',
      '/img/screens/capmap/search.png',
      '/img/screens/capmap/signin.png',
      '/img/screens/capmap/videos3.png'
    ],
    'phonescreensLandscape': [
      '/img/screens/capmap/videoliked.png'
    ]
  },
  {
    'id':           'settlers',
    'name':         'Settlers of Catan',
    'description':  'Settlers of Catan Mobile was a project in a course in Graphical Interface design at Chalmers University of Technology, during my masters there. The goal of the project was to design a digital, mobile version of the classic board game Settlers of Catan. The graphical interface of the game was design for phone and tablet using Android guidelines. The tablet was used to visualize the game board, while the phone was used as the Player’s hub, with their cards and the possibility of using resources for buying or trading.',
    'mypart':       'The project was done in a team of 5 designers where my main responsibility was the design of the phone interface, as well as the user research and testing that was carried out. The user tests was done in order to verify and evaluate the usability of the interface and pinpoint potential usability issues. User requirements and specifications was developed in an early phase of the project with the help of user personas. These were later used to validate the design using validation scenarios and generally helped us to steer the design in the right direction. The user tests were carried out with paper prototypes along with Think-aloud technique. These proved to be very helpful and helped us develop the more hi-fi and interactive prototypes, which was evaluated using InVision. Sketch and Figma were our two main tools when designing the interfaces.',
    'thumbnail':    'thumbnails/settlers.png',
    'gradientStart':        'A67DC2',
    'gradientEnd':          'BCF2EC',
    'link': {
      'type': 'none',
      'link': ''
    },
    'phonescreens': [
      '/img/screens/settlers/settlers1.png',
      '/img/screens/settlers/settlers2.png',
      '/img/screens/settlers/settlers3.png',
      '/img/screens/settlers/settlers4.png',
      '/img/screens/settlers/settlers5.png',
      '/img/screens/settlers/settlers6.png',
      '/img/screens/settlers/settlers8.png'
    ],
    'tabletscreens': [
      '/img/screens/settlers/settlers9.png',
      '/img/screens/settlers/settlers10.png',
      '/img/screens/settlers/settlers11.png',
      '/img/screens/settlers/settlers12.png',
      '/img/screens/settlers/settlers13.png'
    ]
  },
  {
    'id':           'faluna',
    'name':         'SMS Acknowledge',
    'description':  'SMS Acknowledge is an Android app with the purpose of handling incoming SMS from specific phone numbers as alarms. Developed for Faluna Automation AB during my time as an Android Deveoper at We Know IT.',
    'mypart':       'As I was the only person on the project I served both as UX-designer and Android developer.',
    'thumbnail':    'thumbnails/faluna.png',
    'gradientStart':        '739BD0',
    'gradientEnd':          '9369D0',
    'link': {
      'type': 'none',
      'link': ''
    },
    'phonescreens': [
      '/img/screens/faluna/faluna1.png',
      '/img/screens/faluna/faluna2.png',
      '/img/screens/faluna/faluna3.png',
    ]
  },
  {
    'id':           'plus',
    'name':         'The Plus Puzzle',
    'description':  'The Plus Puzzle is a Rubick\'s cube like puzzle game where the goal is to turn all the bricks into the same color. Tap the board to flip the color of the bricks in a plus layout.',
    'mypart':       'My part on the project was as Android developer along with another developer.',
    'thumbnail':    'thumbnails/plus.png',
    'gradientStart':        '2AD0FF',
    'gradientEnd':          'B3D2FF',
    'link': {
      'type': 'none',
      'link': ''
    },
    'phonescreens': [
      '/img/screens/plus/plus1.png',
      '/img/screens/plus/plus2.png',
      '/img/screens/plus/plus3.png',
    ]
  }
];

export default projects;
