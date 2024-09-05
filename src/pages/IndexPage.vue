<template>
  <q-page>
          <q-input class="search-input" dense outlined v-model="text" label="Search your entries.."/>
    <!-- <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component> -->
    <div class="masonry">
    <div class="item item1">Item 1</div>
    <div class="item item2">Item 2</div>
    <div class="item item3">Item 3</div>
    <div class="item item4">Item 4</div>
    <div class="item item5">Item 5</div>
    <div class="item item6">Item 6</div>
    <div class="item item7">Item 7</div>
    <div class="item item8">Item 8</div>
    <div class="item item9">Item 9</div>
    <div class="item item10">Item 10</div>
    </div>
      <q-fab class="fab" color="amber" text-color="black" icon="keyboard_arrow_left" direction="left">
        <q-fab-action color="amber" text-color="black" @click="onClick" icon="mic" />
        <q-fab-action color="amber" text-color="black" @click="onClick" icon="brush" />
        <q-fab-action color="amber" text-color="black" @click="onClick" icon="image" />
      </q-fab>
  </q-page>
</template>

<script setup lang="ts">
// import { Todo, Meta } from 'components/models'
// import ExampleComponent from 'components/ExampleComponent.vue'
import { ref } from 'vue'

const text = ref('')

// const todos = ref<Todo[]>([
//   {
//     id: 1,
//     content: 'ct1'
//   },
//   {
//     id: 2,
//     content: 'ct2'
//   },
//   {
//     id: 3,
//     content: 'ct3'
//   },
//   {
//     id: 4,
//     content: 'ct4'
//   },
//   {
//     id: 5,
//     content: 'ct5'
//   }
// ])
// const meta = ref<Meta>({
//   totalCount: 1200
// })

function onClick () {
  return null
}
</script>

<style>
.fab {
  position: absolute;
  bottom: 5%;
  right: 5%;
}
.item {
  background-color: green;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: transform 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  color: #fff;
}
.item1 { grid-row: span 15; background-color: #ff6f61; }
.item2 { grid-row: span 20; background-color: #6b5b95; }
.item3 { grid-row: span 10; background-color: #88b04b; }
.item4 { grid-row: span 25; background-color: #d65076; }
.item5 { grid-row: span 30; background-color: #ffb347; }
.item6 { grid-row: span 15; background-color: #45b8ac; }
.item7 { grid-row: span 20; background-color: #e94b3c; }
.item8 { grid-row: span 10; background-color: #6c5b7b; }
.item9 { grid-row: span 25; background-color: #00a86b; }
.item10 { grid-row: span 30; background-color: #b565a7;}
.masonry {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-auto-rows: 10px;
  gap: 16px;
  padding: 12px;
}
.search-input {
  margin: 12px;
}
</style>
