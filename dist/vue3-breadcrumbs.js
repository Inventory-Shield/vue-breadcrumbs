/*!
 * vue3-breadcrumbs v2.0.0
 * (c) 2021 Casper Lai
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  global.Vue3Breadcrumbs = factory();
}(this, function () { 'use strict';

  function plugin(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Object.defineProperties(Vue.config.globalProperties, {
      $breadcrumbs: {
        get: function get() {
          var crumbs = [];
          for (var i = 0; i < config.globalProperties.$route.matched.length; i++) {
            if (config.globalProperties.$route.matched[i].meta && config.globalProperties.$route.matched[i].meta.breadcrumb) {
              crumbs.push(config.globalProperties.$route.matched[i]);
            }
          }
          return crumbs;
        }
      }
    });

    Vue.component('breadcrumbs', {
      template: '<nav class="breadcrumbs" v-if="$breadcrumbs.length"> <ul> <li v-for="(crumb, i) in $breadcrumbs"> <router-link :to=" { path: crumb.path }">{{ crumb.meta.breadcrumb }}</router-link> </li> </ul> </nav>'
    });
  }

  plugin.version = '2.0.0';

  return plugin;

}));