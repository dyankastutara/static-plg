const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', [{
         libraryName: "antd-mobile",
         style: true
     },{
         libraryName: 'antd',
         style: true
     },{
         libraryName: '@material-ui/core',
         style: true
     },{
         libraryName: '@material-ui/icons',
         style: true
     }
  ]], config);
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      // fa541c
      // FF6A00
      // "#f5f5f5"
      "@primary-color": "#fa541c",
      "@layout-body-background": "#fff",
      "@layout-header-background": "#FFFFFF",
      "@font-size-base": "13px"
     },
  })(config, env);
  return config;
};
