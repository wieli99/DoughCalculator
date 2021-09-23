<template>
  <q-page class="flex column flex-center">
    <q-card class="main-card" bordered>
      <q-card-section>
        <CalculatorRecipes class="q-mb-sm"></CalculatorRecipes>


        <q-input
          label-slot
          suffix="g"
          v-model.number="flour"
          min="0"
          type="number"
          filled
        >
          <template v-slot:label>Flour</template>
        </q-input>
      </q-card-section>

      <q-separator horizontal />

      <q-card-section horizontal>
        <q-card-section>
          <CalculatorPercentages></CalculatorPercentages>
        </q-card-section>

        <q-separator vertical />

        <q-card-section>
          <CalculatorGrams></CalculatorGrams>
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";
import CalculatorRecipes from "../components/CalculatorRecipes";
import CalculatorGrams from "../components/CalculatorGrams";
import CalculatorPercentages from "../components/CalculatorPercentages";

export default defineComponent({
  name: "PageIndex",
  components: {
    CalculatorRecipes,
    CalculatorGrams,
    CalculatorPercentages,
  },
  setup() {
    const store = useStore();

    let flour = ref(store.getters["absolute/flour"]);

    watch(flour, () => {
      store.dispatch("absolute/updateValues", flour.value);
    });

    return {
      flour,
    };
  },
});
</script>
