<template>
  <q-input
    readonly
    label-slot
    suffix="ml"
    v-model.number="water"
    min="0"
    type="number"
    filled
    class="q-mb-sm"
  >
    <template v-slot:label>Water</template>
  </q-input>

  <q-input
    readonly
    label-slot
    suffix="g"
    v-model.number="yeast"
    min="0"
    type="number"
    filled
    class="q-mb-sm"
  >
    <template v-slot:label>Yeast</template>
  </q-input>

  <q-input
    readonly
    label-slot
    suffix="g"
    v-model.number="salt"
    min="0"
    type="number"
    filled
    class="q-mb-sm"
  >
    <template v-slot:label>Salt</template>
  </q-input>

  <q-input
    readonly
    label-slot
    suffix="g"
    v-model.number="sourdough"
    min="0"
    type="number"
    filled
    class="q-mb-sm"
  >
    <template v-slot:label>Sourdough Starter</template>
  </q-input>
</template>

<script>
import { ref, watch, watchEffect, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "CalculatorGrams",
  setup() {
    const store = useStore();

    let flour = ref(store.getters["absolute/flour"]);
    let water = computed(() => store.getters["absolute/water"]);
    let salt = computed(() => store.getters["absolute/salt"]);
    let yeast = computed(() => store.getters["absolute/yeast"]);
    let sourdough = computed(() => store.getters["absolute/sourdough"]);

    watch(flour, () => {
      store.dispatch("absolute/updateValues", flour.value);
    });

    return {
      flour,
      water,
      salt,
      yeast,
      sourdough,
    };
  },
};
</script>
