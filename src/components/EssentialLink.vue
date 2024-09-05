<template>
  <!-- <q-item
    clickable
    tag="a"
    :href="link"
  > -->
    <q-item
    clickable
    tag="a"
    :to="link"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" style="color: grey;"/>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <!-- <q-item-label caption>{{ caption }}</q-item-label> -->
    </q-item-section>
  </q-item>

</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref(true)
export interface EssentialLinkProps {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
}
withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  link: '',
  icon: ''
})
</script>

<style scoped>
/* .panelItem {
  background-color: orange;
  width: 240px;
  height: 60px;
  border-radius: 32px;
  margin-left: 8px;
} */
</style>
