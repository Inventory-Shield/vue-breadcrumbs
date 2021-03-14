/*!
 * vue3-breadcrumbs v3.0.0
 * (c) 2021 Casper Lai
 * Released under the MIT License.
 */
'use strict';

function plugin(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  Object.defineProperties(Vue.config.globalProperties, {
    $breadcrumbs: {
      get: function get() {
        var crumbs = [];
        for (var i = 0; i < Vue.config.globalProperties.$route.matched.length; i++) {
          if (Vue.config.globalProperties.$route.matched[i].meta && Vue.config.globalProperties.$route.matched[i].meta.breadcrumb) {
            crumbs.push(Vue.config.globalProperties.$route.matched[i]);
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

plugin.version = '3.0.0';

module.exports = plugin;