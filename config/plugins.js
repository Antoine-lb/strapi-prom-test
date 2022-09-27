// config/plugins.js

// enable plugin with default configuration.
module.exports = {
  "strapi-prometheus": {
    enabled: true,
    config: {
      // add prefix to all the prometheus metrics names.
      prefix: "",

      // use full url instead of matched url
      // if true sets path label to `/api/models/1`
      // if false sets path label as `/api/models/:id`
      fullURL: false,

      // include url query in the url label
      // if true sets path label to `/api/models?limit=1`
      // if false sets path label to `/api/models`
      includeQuery: false,

      // collect default metrics of `prom-client`
      defaultMetrics: true,
    },
  },
};
