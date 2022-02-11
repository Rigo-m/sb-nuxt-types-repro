<script setup lang="ts">
export type TitleProps = {
  size?: number;
  title: string;
};
const props = withDefaults(defineProps<TitleProps>(), {
  size: 1,
});
</script>

<template>
  <h1 :class="size">{{ title }}</h1>
</template>
