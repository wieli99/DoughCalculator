<template>
  <q-select
    filled
    v-model="selectedRecipe"
    :options="recipes"
    label="Recipe Templates"
  />
</template>

<script>
import { ref, watch } from "vue";
import { useStore } from "vuex";

export default {
  name: "CalculatorGrams",
  setup() {
    const store = useStore();

    let recipes = ["Sourdough-Yeast", "Sourdough", "Yeast"];
    let selectedRecipe = ref("Sourdough-Yeast");

    watch(selectedRecipe, () => {
      switch (selectedRecipe.value) {
        case "Sourdough-Yeast":
          store.dispatch("percentage/updateAll", {
            water: 70,
            salt: 3,
            yeast: 0.1,
            sourdough: 3,
          });
          store.dispatch(
            "absolute/updateValues",
            store.getters["absolute/flour"]
          );
          break;

        case "Sourdough":
          store.dispatch("percentage/updateAll", {
            water: 72,
            salt: 3,
            yeast: 0,
            sourdough: 4,
          });
          store.dispatch(
            "absolute/updateValues",
            store.getters["absolute/flour"]
          );
          break;

        case "Yeast":
          store.dispatch("percentage/updateAll", {
            water: 70,
            salt: 3,
            yeast: 1,
            sourdough: 0,
          });
          store.dispatch(
            "absolute/updateValues",
            store.getters["absolute/flour"]
          );
          break;
      }
    });

    return {
      recipes,
      selectedRecipe,
    };
  },
};
</script>
