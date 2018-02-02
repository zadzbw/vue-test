import Vue from 'vue';
import _ from 'lodash';
import LoadingVue from './Loading';

const defaultOptions = {
  visible: false,
  target: null,
};

const LoadingConstructor = Vue.extend(LoadingVue);

export default class Loading {
  show(text, options = {}) {
    // 单例
    if (this.instance) {
      return this.instance;
    }
    this.options = Object.assign({}, defaultOptions, options);
    const { target } = this.options;
    if (_.isString(target)) {
      this.options = document.querySelector(target);
    }
    if (!this.options.target) {
      this.options.target = document.body;
    }
    this.instance = new LoadingConstructor({
      data: this.options,
    }).$mount();
    const root = this.options.target;
    root.classList.add('loading-no-scroll');
    root.classList.add('loading-fit-position');
    root.appendChild(this.instance.$el);
    this.instance.setText(text);
    Vue.nextTick(() => {
      this.instance.showLoading();
    });
    return this.instance;
  }

  close() {
    const root = this.options.target;
    Vue.nextTick(() => {
      if (this.instance) {
        this.instance.closeLoading();
        this.instance.$on('after-leave', () => {
          root.classList.remove('loading-no-scroll');
          root.classList.remove('loading-fit-position');
          this.instance.$destroy();
          this.instance = null;
        });
        Vue.nextTick(() => {
        });
      }
    });
  }
}
