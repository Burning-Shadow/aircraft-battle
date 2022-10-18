<script setup lang="ts">
import Plane from "./components/plane.vue";
import Bullet from "./components/bullet.vue";
import Enemy from "./components/enemy.vue";
import { reactive } from "vue";
import { initGame } from "./game";

const { plane, bullets, enemys } = initGame(
  reactive({}),
  reactive([]),
  reactive([])
);
</script>

<template>
  <Container>
    <Plane :plane="plane"></Plane>
    <Bullet
      v-for="(bullet, idx) in bullets" :key="idx" :bullet="bullet" />
    <Enemy v-for="(enemy, idx) in enemys" :key="idx" :enemy="enemy" />
  </Container>
</template>

<style scoped>
</style>
