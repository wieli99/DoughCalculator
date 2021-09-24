<template>
  <q-page class="flex column flex-center">
    <CalculatorPortionSizes v-if="!expertMode"></CalculatorPortionSizes>
    <q-card class="main-card" bordered>
      <q-card-section>
        <CalculatorRecipes class="q-mb-sm"></CalculatorRecipes>

        <q-input
          label-slot
          v-if="expertMode"
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
        <q-card-section v-if="expertMode">
          <CalculatorPercentages></CalculatorPercentages>
        </q-card-section>

        <q-separator vertical v-if="expertMode" />

        <q-card-section>
          <CalculatorGrams></CalculatorGrams>
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref, watch, computed } from "vue";
import { useStore } from "vuex";
import CalculatorPortionSizes from "../components/CalculatorPortionSizes";
import CalculatorRecipes from "../components/CalculatorRecipes";
import CalculatorGrams from "../components/CalculatorGrams";
import CalculatorPercentages from "../components/CalculatorPercentages";

export default defineComponent({
  name: "PageIndex",
  components: {
    CalculatorPortionSizes,
    CalculatorRecipes,
    CalculatorGrams,
    CalculatorPercentages,
  },
  setup() {
    const store = useStore();
    let expertMode = computed(() => store.getters.expertMode);

    let flour = ref(store.getters["absolute/flour"]);

    watch(flour, () => {
      store.dispatch("absolute/updateValues", flour.value);
    });

    //Needed to sync flour between modes
    watch(expertMode, () => {
      flour.value = store.getters["absolute/flour"];
    });

    return {
      flour,
      expertMode,
    };
  },
});
</script>
