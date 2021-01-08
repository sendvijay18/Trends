
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageHome.vue') },
      { path: '/camera', component: () => import('pages/PageCamera.vue') },
      { path: '/contact', component: () => import('pages/PageContact.vue') },
      { path: '/pricing', component: () => import('pages/pricing.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
