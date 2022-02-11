<script setup lang="ts">
import { TitleProps } from "~/components/atoms/Title.vue";

export type CardProps = {
  title: TitleProps;
  text?: string;
};

const props = defineProps<CardProps>();
</script>
<template>
  <div>
    <AtomsTitle v-bind="title"></AtomsTitle>
    <div class="text-light-600 text-lg">{{ text }}</div>
  </div>
</template>

<style scoped></style>
