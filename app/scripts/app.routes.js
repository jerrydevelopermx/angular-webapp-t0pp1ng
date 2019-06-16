angular
  .module('webApp')
  .config(routes);

/**
 * @function routes
 */
function routes ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/')
    $stateProvider
                .state('home', {
                    url: '/',
                    component: 'appMain',
                    publicPage: true
                })
                .state('nosotros', {
                    url: '/nosotros',
                    component: 'appNosotros',
                    publicPage: true
                })

                .state('blog', {
                    url: '/blog',
                    component: 'appBlog',
                    publicPage: true
                })
                .state('post', {
                    url: '/blog/post',
                    component: 'appPost',
                    publicPage: true
                })

                .state('contacto', {
                    url: '/contacto',
                    component: 'appContacto',
                    publicPage: true
                })

                .state('servicios', {
                    url: '/servicios',
                    component: 'appServicios',
                    publicPage: true
                })

                .state('detalleServicio', {
                    url: '/servicios/:div',
                    component: 'appServicios',
                    publicPage: true
                });
}
