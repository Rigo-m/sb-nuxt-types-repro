<script setup lang="ts">
import { CardProps } from "../molecules/Card.vue";
export type CardsListProps = {
  cards: Array<CardProps>;
  listTitle: string;
};

const props = defineProps<CardsListProps>();
</script>
<template>
  <div>
    <MoleculesCard v-for="card of cards" v-bind="card"></MoleculesCard>
  </div>
</template>

<style scoped></style>
