<template>
  <div class="border">
    <div
      :class="[
        [Date.parse(props.lastDate) < new Date() ? 'green' : 'blue'],
        'progress',
      ]"
      :style="
        Date.parse(props.lastDate) < new Date()
          ? { width: '100%' }
          : Date.parse(props.lastDate) > new Date()
          ? { width: '0' }
          : {
              width: `${
                ((Date.parse(props.lastDate) - new Date()) * 100) /
                (Date.parse(props.lastDate) - Date.parse(props.firstDate))
              }%`,
            }
      "
    ></div>
    <div class="dates">
      <div>{{ props.firstDate }}</div>
      <div>{{ props.lastDate }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  firstDate: String,
  lastDate: String,
});
</script>

<style scoped>
.border {
  margin: 0 30px;
  position: relative;
  height: 7px;
  background-color: #e9e9e9;
  border-radius: 4px;
}
.progress {
  height: 7px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  border-radius: 4px;
}
.blue {
  background-color: #1e6fb9;
}
.green {
  background-color: #a1ffa1;
}
.dates {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
}
</style>
