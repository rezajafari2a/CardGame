<template>
  <div class="main-game">
    <div class="card-wraper">
      <Card
        v-for="i in 4"
        :key="i"
        :gameStatus="gameStatus"
        :title="i"
        @finish="finishGame"
      />
    </div>
    <div v-if="gameStatus == gameStatusList.END">End</div>
  </div>
</template>

<script>
import Card from "@/components/card";
export default {
  name: "MainGame",
  components: { Card },
  data() {
    return {
      gameStatusList: { START: "START", END: "END" },
      gameStatus: undefined,
    };
  },
  mounted() {
    this.gameStatus = this.gameStatusList.START;
  },
  methods: {
    finishGame() {
      this.gameStatus = this.gameStatusList.END;
    },
  },
};
</script>
<style scoped>
.main-game {
  max-width: 1200px;
  margin: auto;
  background-color: #225684;
  height: 100vh;
  width: 100%;
}
.card-wraper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center center;
  height: 100%;
}
</style>
