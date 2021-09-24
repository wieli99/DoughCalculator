<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="text-black">
        <q-toolbar-title> Dough Calculator </q-toolbar-title>
        <q-toggle
          v-model="expertMode"
          label="Expert Mode"
          color="accent"
          dark="false"
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
import { LocalStorage } from "quasar";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const store = useStore();
    let expertMode = ref(store.getters.expertMode);
    if (LocalStorage.getItem("expertMode")) {
      expertMode.value = true
      store.dispatch("updateExpertMode", true);
    } else {
      expertMode.value = false
      store.dispatch("updateExpertMode", false);
    }

    watch(expertMode, () => {
      store.dispatch("updateExpertMode", expertMode.value);
      LocalStorage.set("expertMode", expertMode.value);
    });

    return {
      expertMode,
    };
  },
});
</script>
