<template>
  <Container :x="plane.x" :y="plane.y">
    <Sprite :texture="planeImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import planeImg from "../assets/plane.png";
import { Plane } from "../game";

const { plane } = defineProps({
  plane: {
    type: Object as PropType<Plane>,
    required: true,
  },
});

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    plane.attack();
  }

  switch (e.code) {
    case "ArrowLeft":
      plane.moveLeft();
      break;
    case "ArrowRight":
      plane.moveRight();
      break;
    case "ArrowUp":
      plane.moveUp();
      break;
    case "ArrowDown":
      plane.moveDown();
      break;
    default:
      break;
  }
});
</script>

<style scoped></style>
