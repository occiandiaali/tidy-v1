<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-white text-black">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Tidy
        </q-toolbar-title>
          <q-avatar style="position: absolute;right: 5%;">
            <img src="https://cdn.quasar.dev/img/avatar.png">
          </q-avatar>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          <q-img src="outflux-logo.png"
          style="height: 40px;max-width: 150px;"
          /> <span class="app-label">Tidy</span>
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue'

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Entries',
    caption: '',
    icon: 'lightbulb',
    link: '/'
  },
  {
    title: 'Reminders',
    caption: '',
    icon: 'notifications',
    link: '/reminders'
  },
  {
    title: '',
    icon: 'horizontal_rule'
  },
  {
    title: 'Edit/Create labels',
    caption: '',
    icon: 'edit',
    link: 'https://chat.quasar.dev'
  },
  {
    title: '',
    icon: 'horizontal_rule'
  },
  {
    title: 'Archive',
    caption: '',
    icon: 'archive',
    link: '/archive'
  },
  {
    title: 'Trash',
    caption: '',
    icon: 'delete',
    link: '/trash'
  },
  {
    title: '',
    icon: 'horizontal_rule'
  },
  {
    title: 'Settings',
    caption: '',
    icon: 'settings',
    link: '/settings'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style>
.app-label {
  font-size: larger;
  color: black;
}
</style>
