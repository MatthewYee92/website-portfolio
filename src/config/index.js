module.exports = {
  siteTitle: 'Matthew Yee | Software Engineer',
  siteDescription:
    'Matthew Yee is a software engineer based in Seattle, WA who specializes in developing (and occasionally designing) exceptional, high-quality websites and applications.',
  siteKeywords:
    'Matthew Yee, Matthew, Yee, matthewyee92, software engineer, front-end engineer, web developer, javascript, northeastern',
  siteUrl: 'https://matthewyee.dev',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Matthew Yee',
  location: 'Seattle, WA',
  email: 'matthewyee.dev',
  github: 'https://github.com/matthewyee92',
  twitterHandle: '@matthewyee92',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/matthewyee92',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/matthewyee92',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/matthewyee92',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/lifeofmattyee',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/matthewyee92',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
