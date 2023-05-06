<script setup>
import { ref, onMounted } from "vue";
const transcript = ref("");
const isRecoding = ref(false);
const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const sr = new Recognition();

onMounted(() => {
  sr.continuos = true;
  sr.interimResults = true;

  sr.onstart = () => {
    console.log("SR Started");
    isRecoding.value = true;
  };

  sr.onend = () => {
    console.log("SR Stopped");
    isRecoding.value = false;
  };

  sr.onresult = (e) => {
    // console.log(e);
    for (let i = 0; i < e.results.length; i++) {
      const result = e.results[i];
      if (result.isFinal) {
        CheckForCommand(result);
      }
    }
    const t = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");
    transcript.value = t;
  };
});

const ToggleMic = () => {
  if (isRecoding.value) {
    sr.stop();
  } else {
    sr.start();
  }
};

const CheckForCommand = (result) => {
  const t = result[0].transcript;
  if (t.includes("стоп запись")) {
    sr.stop();
  } else if (t.includes("какое время") || t.includes("каково время")) {
    sr.stop();
    alert(new Date().toLocaleDateString());
    setTimeout(() => sr.start, 100);
  }
};
</script>

<template>
  <div class="app">
    <button :class="`mic`" @click="ToggleMic">Record</button>
    <div class="transcript" v-text="transcript"></div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}

body {
  background: #281936;
  color: #fff;
}
</style>
