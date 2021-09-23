<template>
  <q-input
    min="0"
    label-slot
    suffix="%"
    v-model.number="water"
    type="number"
    filled
    class="q-mb-sm"
  >
    <template v-slot:label>Water</template>
  </q-input>

  <q-input
    min="0"
    label-slot
    suffix="%"
    v-model.number="yeast"
    type="number"
    step="0.1"
    filled
    class="q-mb-sm"
  >
    <template v-slot:label>Yeast</template>
  </q-input>

  <q-input
    min="0"
    label-slot
    suffix="%"
    v-model.number="salt"
    type="number"
    step="0.1"
    filled
    class="q-mb-sm"
  >
    <template v-slot:label>Salt</template>
  </q-input>

  <q-input
    min="0"
    label-slot
    suffix="%"
    v-model.number="sourdough"
    type="number"
    step="0.1"
    filled
    class="q-mb-sm"
  >
    <template v-slot:label>Sourdough Starter</template>
  </q-input>
</template>

<script>
import { ref, watch, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "CalculatorPercentages",
  setup() {
    const store = useStore();

    let water = ref(store.getters["percentage/water"]);
    let salt = ref(store.getters["percentage/salt"]);
    let yeast = ref(store.getters["percentage/yeast"]);
    let sourdough = ref(store.getters["percentage/sourdough"]);

    watch(water, () => {
      store.dispatch("percentage/updateWater", water.value);
      store.dispatch("absolute/updateValues", store.getters["absolute/flour"]);
    });
    watch(salt, () => {
      store.dispatch("percentage/updateSalt", salt.value);
      store.dispatch("absolute/updateValues", store.getters["absolute/flour"]);
    });
    watch(yeast, () => {
      store.dispatch("percentage/updateYeast", yeast.value);
      store.dispatch("absolute/updateValues", store.getters["absolute/flour"]);
    });
    watch(sourdough, () => {
      store.dispatch("percentage/updateSourdough", sourdough.value);
      store.dispatch("absolute/updateValues", store.getters["absolute/flour"]);
    });

    let waterStored = computed(() => store.getters["percentage/water"]);
    let saltStored = computed(() => store.getters["percentage/salt"]);
    let yeastStored = computed(() => store.getters["percentage/yeast"]);
    let sourdoughStored = computed(() => store.getters["percentage/sourdough"]);

    watch([waterStored, saltStored, yeastStored, sourdoughStored], () => {
      water.value = store.getters["percentage/water"];
      salt.value = store.getters["percentage/salt"];
      yeast.value = store.getters["percentage/yeast"];
      sourdough.value = store.getters["percentage/sourdough"];
    });

    return {
      water,
      salt,
      yeast,
      sourdough,
    };
  },
};
</script>
