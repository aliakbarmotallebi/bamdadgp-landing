import './src/extensions/app.css';

export default {
  config: {
    locales: ['fa'],
    translations: {
      fa: require('./translations/fa.json'),
    },
  },
  bootstrap(app) {
    console.log('Custom theme loaded');
  },
};