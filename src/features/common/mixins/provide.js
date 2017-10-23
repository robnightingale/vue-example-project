/**
 * Provide
 * @mixin
 *
 * Used to provide data to children that live down deeper in slots.
 * Utilizes the provide/inject methods of Vue.
 * See Vue documentation at https://vuejs.org/v2/api/#provide-inject.
 */
export default {
  // Override in your component. Used as the name for the provided object.
  name: 'myComponent',

  // Override in your component and include properties you want passed down.
  data: () => ({
    provide: {}
  }),

  provide () {
    // Makes all your provided properties reactive.
    return { [this.$options.name]: utils.makeReactive(this.provide) }
  }
}
