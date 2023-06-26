export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', {
    mounted(el, bind) {
      el.clickOutside = (event: Event) => {
        if (!(el === event.target || el.contains(event.target))) {
            bind.value();
        }
    };
    document.addEventListener("click", el.clickOutside);
    },
    unmounted: el => {
        document.removeEventListener("click", el.clickOutside);
    },
    getSSRProps (binding, vnode) {
      // you can provide SSR-specific props here
      return {}
    }

  })
})
