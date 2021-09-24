<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="text-black">
        <q-toolbar-title class="text-center">
          Dough Calculator
        </q-toolbar-title>
        <q-toggle
          v-model="expertMode"
          label="Expert Mode"
          color="accent"
          size="lg"
          class="flex-center"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const store = useStore();
    let expertMode = ref(store.getters.expertMode);
    watch(expertMode, () => {
      store.dispatch("updateExpertMode", expertMode.value);
    })

    return {
      expertMode,
    };
  },
});
</script>
