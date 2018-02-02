import Vue from 'vue';
import _ from 'lodash';
import LoadingVue from './Loading';

const defaultOptions = {
  visible: false,
  target: null,
  body: false,
  lock: true, // 是否锁定target的滚动
  maskColor: null, // 蒙层背景色
};
let loadingArray = [];

const LoadingConstructor = Vue.extend(LoadingVue);

export default class Loading {
  show(text, options = {}) {
    this.options = Object.assign({}, defaultOptions, options);
    const { target } = this.options;
    // target is String or HTMLElement
    if (_.isString(target)) {
      this.options = document.querySelector(target);
    }
    if (!this.options.target) {
      this.options.target = document.body;
    }
    this.options.body = this.options.target === document.body;
    const root = this.options.target;
    // 一个target同时只能有一个loading
    const foundLoading = loadingArray.find(item => item.root === root);
    if (foundLoading) {
      return foundLoading.instance;
    }
    const instance = new LoadingConstructor({
      data: this.options,
    }).$mount();
    loadingArray.push({
      root,
      instance,
    });
    const { position } = window.getComputedStyle(root);
    // 如果position已经是absolute||fixed,则无需添加该类
    if (!(position === 'absolute' || position === 'fixed')) {
      root.classList.add('loading-fit-position');
    }
    if (this.options.lock) {
      root.classList.add('loading-no-scroll');
    }
    root.appendChild(instance.$el);
    instance.setText(text);
    Vue.nextTick(() => {
      instance.showLoading();
    });
    this.instance = instance;
    return instance;
  }
}

LoadingConstructor.prototype.close = function close() {
  const root = this.target;
  Vue.nextTick(() => {
    if (this) {
      this.closeLoading();
      this.$on('after-leave', () => {
        root.classList.remove('loading-no-scroll');
        root.classList.remove('loading-fit-position');
        this.$destroy();
        loadingArray = loadingArray.filter(item => item.root !== root);
      });
    }
  });
};
