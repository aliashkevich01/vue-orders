<template>
  <input
    :value="modelValue"
    @input="updateInput"
    class="text-input"
    type="text"
  />
</template>

<script>
export default {
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.text-input {
  border: 1.5px solid #1e6fb9;
  padding: 17px 11px;
  font-size: 18px;
  outline: none;
  width: 100%;
  border-radius: 6px;
}
</style>
