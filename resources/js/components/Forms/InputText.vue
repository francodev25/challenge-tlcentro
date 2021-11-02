<template>
  <div :class="wrapperClass">
    <label :for="name" :class="labelClass">{{ label }}</label>
    <input
      ref="input"
      type="text"
      :class="inputClassName"
      :id="name"
      :placeholder="placeholder"
      v-bind:value="value"
      v-on:change="onChange($event)"
      v-on:focus="onFocus"
      v-on:blur="onBlur"
      :disabled="disabled"
    />
    <small v-if="helpText" class="text-muted">{{ helpText }}</small>
  </div>
</template>

<script>
import { props, methods} from "./commons.js"

export default {
  name: "InputText",
  props: props,
  computed: {
    wrapperClass: function() {
      return 'formWrapper'
    },
    labelClass: function() {
        return 'form-label'
    },
    inputClassName: function() {
        return 'form-input'
    }
  },
  methods: methods
}
</script>

<style scoped>
.formWrapper{
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    margin: 1rem;
}

.form-input{
    border-radius: 10px;
    border: 1px solid rgba(128, 128, 128, 0.66);
    padding: 10px;
    color: rgb(126, 126, 126);
}
.form-label{
    font-weight: 600;
    padding-left: 5px;
    margin:0;
}

.text-muted{
    padding-left: 5px;
    font-size: 10px;

}
</style>