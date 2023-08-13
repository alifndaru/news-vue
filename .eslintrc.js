module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "@vue/standard"],
  rules: {
    // Aturan-aturan lain...
    "vue/multi-word-component-names": "off", // Menonaktifkan aturan multi-word-component-names
  },
};
