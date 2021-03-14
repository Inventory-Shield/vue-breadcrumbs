function plugin (Vue, options = {}) {
  Object.defineProperties(Vue.config.globalProperties, {
    $breadcrumbs: {
      get: function () {
        var crumbs = []
        for (var i = 0; i < config.globalProperties.$route.matched.length; i++) {
          if (config.globalProperties.$route.matched[i].meta && config.globalProperties.$route.matched[i].meta.breadcrumb) {
            crumbs.push(config.globalProperties.$route.matched[i])
          }
        }
        return crumbs
      }
    }
  })
  
  Vue.component('breadcrumbs', {
    template: '<nav class="breadcrumbs" v-if="$breadcrumbs.length"> <ul> <li v-for="(crumb, i) in $breadcrumbs"> <router-link :to=" { path: crumb.path }">{{ crumb.meta.breadcrumb }}</router-link> </li> </ul> </nav>'
  })
}

plugin.version = '3.0.0'

export default plugin
