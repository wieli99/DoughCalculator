<template>
  <h2 class="column">
    <div class="self-center text-center">I want to make</div>

    <q-input v-model.number="portions" type="number" min="1" style="font-size: 1.5rem; max-width: 6rem;" class="self-center" @change="updatePortions" />

    <div class="self-center text-center"><span v-if="portions == 1">portion</span> <span v-else>portions</span> of</div>

    <q-select v-model="breadType" :options="breadTypes" style="font-size: 1.5rem;" class="self-center" @update:model-value="updatePortions()" />
  </h2>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "CalculatorPortionSizes",
  setup() {
    const store = useStore();

    let portions = ref(2);
    let breadType = ref("Bread");
    let breadTypes = ["Bread", "Pizza"];

    let updatePortions = () => {
      if (breadType.value === "Bread") {
        store.dispatch("absolute/updateValues", 500 * portions.value)
      } else {
        store.dispatch("absolute/updateValues", 140 * portions.value)
      }
    }

    return {
      portions,
      breadTypes,
      breadType,
      updatePortions
    };
  },
};
</script>
