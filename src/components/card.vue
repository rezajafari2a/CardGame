<template>
  <div class="card" @click="clickFlip">
    <div class="card__inner" :class="isFlip ? 'is-flipped' : ''">
      <div class="card__face card__face--front">
        {{ title }}
      </div>
      <div class="card__face card__face--back">
        <h2>Back</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: Number,
    },
    gameStatus: {
      required: true,
    },
  },
  data() {
    return {
      isFlip: false,
    };
  },
  methods: {
    clickFlip() {
      if (this.gameStatus == "START") {
        this.isFlip = true;
        this.$emit("finish");
      }
    },
  },
};
</script>
<style scoped>
.card {
  width: 40%;
  height: 45vh;
  display: flex;
  place-items: center;
  place-content: center;
  border-radius: 15px;
  cursor: pointer;
  perspective: 1000px;
}
.card__inner.is-flipped {
  transform: rotateY(180deg);
}
.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);
}
.card__face--back {
  background-color: #f3f3f3;
  transform: rotateY(180deg);
}
.card__inner {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}
.card__face--front {
  background-image: linear-gradient(
    to bottom right,
    #f3f3f3,
    #3955d6
  );
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
