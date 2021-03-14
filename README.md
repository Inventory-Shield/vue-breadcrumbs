# vue3-breadcrumbs
Fork from [samturrell/vue-breadcrumbs](https://github.com/samturrell/vue-breadcrumbs)

Vue breadcrumbs builds on the official vue-router package to provide simple breadcrumbs.

Support Vue 2.0

# Usage

```html
<script src="../dist/vue-breadcrumbs.min.js"></script>
```

```js
Vue.use(VueBreadcrumbs)
```

or with browserify/bundler:

```sh
$ npm install vue3-breadcrumbs
```

```js
var VueBreadcrumbs = require('vue3-breadcrumbs')

Vue.use(VueBreadcrumbs)
```

Define the matching breadcrumb text in your vue-router routes as the `breadcrumb:` property of a route or subRoute, e.g.:

```js
new VueRouter({
  {
    path: '/',
    component: Page,
    meta: {
      breadcrumb: 'Home Page'
    }
  },
  {
    path: '/foo',
    component: Foo,
    meta: {
      breadcrumb: 'Foo Page'
    }
  },
  {
    path: '/about',
    component: Page,
    meta: {
      breadcrumb: 'About Us'
    },
    children: [
      {
        path: 'foo',
        component: Foo,
        meta: {
          breadcrumb: 'Foo About'
        }
      },
      {
        path: 'bar',
        component: Bar,
        meta: {
          breadcrumb: 'Bar About'
        }
      },
    ]
  }
});
```

You can then render the breadcrumbs using the included <breadcrumbs> component or using your own markup logic with the `this.$breadcrumbs` property which will return an array of active routes.

# License

[MIT](http://opensource.org/licenses/MIT)
