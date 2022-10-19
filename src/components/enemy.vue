<template>
  <Container :x="enemy.x" :y="enemy.y">
    <Sprite :texture="enemyImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import enemyImg from "../assets/enemy.png";
import { Enemy } from "../game/enemy";

const { enemy } = defineProps({
  enemy: {
    type: Object as PropType<Enemy>,
    required: true,
  },
});

enemy.width = 100;
enemy.height = 100;
</script>

<style scoped></style>
