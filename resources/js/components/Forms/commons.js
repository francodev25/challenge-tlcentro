const props = {
  value: { required: true, default: null },
  label: { type: String, default: null, required: true },
  name: { type: String, default: null, required: true },
  placeholder: { type: String, default: "" },
  helpText: { type: [String, Boolean], default: null },
  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
}

const methods = {
  setFocus() {
    this.$refs.input.focus()
  },
  onFocus() {
    this.$refs.input.parentElement &&
      this.$refs.input.parentElement.classList.add("focus")
  },
  onBlur() {
    this.$refs.input.parentElement &&
      this.$refs.input.parentElement.classList.remove("focus")
  },
  onChange($event) {

    const element = {}
    element[`${this.name}`] = $event.target.value;
    
    this.$emit("change", element, $event)
  }
}

export { props, methods }