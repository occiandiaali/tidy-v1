import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'reminders', component: () => import('pages/NotificationsPage.vue') },
      { path: 'archive', component: () => import('pages/ArchivePage.vue') },
      { path: 'trash', component: () => import('pages/TrashPage.vue') },
      { path: 'settings', component: () => import('pages/SettingsPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
