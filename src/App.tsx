import Vue from 'vue';

const JsxComponent = Vue.extend({
  props: {
    message: String
  },
  render(h) {
    return <p>{this.message}</p>;
  }
})

export default Vue.extend({
  name: 'app',
  components: {
    JsxComponent
  },
  computed: {
    message(): string {
      return 'Component rendered with JSX + TypeScript';
    }
  }
});
