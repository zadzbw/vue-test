function autoBindMethod(target, key, { value: fn, configurable, enumerable }) {
  // 装饰Class中的method时，target是Class.prototype
  return {
    configurable,
    enumerable,
    get() {
      // 类的原型直接call该方法时
      // Class.prototype.hasOwnProperty(key) === true
      if (this === target) {
        return fn;
      }

      // 类的原型直接调用该类继承的方法
      // Class.prototype.hasOwnProperty(key) === false && key in Class.prototype
      const { constructor } = target; // 类本身
      if (
        this.constructor !== constructor &&
        Object.getPrototypeOf(this).constructor === constructor
      ) {
        return fn;
      }

      const boundFn = fn.bind(this);
      Object.defineProperty(this, key, {
        configurable: true,
        writable: true,
        enumerable: false, // 被绑定的方法，不可枚举
        value: boundFn,
      });
      return boundFn;
    },
    set(newValue) {
      Object.defineProperty(this, key, {
        configurable: true,
        writable: true,
        enumerable: true, // 重新赋值后，可以枚举
        value: newValue,
      });
      return newValue;
    },
  };
}

function autoBindClass(target) {
  // 装饰Class时，target是Class本身
  const descriptors = Object.getOwnPropertyDescriptors(target.prototype);
  const keys = [
    ...Object.getOwnPropertyNames(descriptors),
    ...Object.getOwnPropertySymbols(descriptors),
  ];

  keys.forEach((key) => {
    const descriptor = descriptors[key];
    if (typeof descriptor.value === 'function' && key !== 'constructor') {
      // eslint-disable-next-line max-len
      Object.defineProperty(target.prototype, key, autoBindMethod(target.prototype, key, descriptor));
    }
  });
}

export default function autoBind(...args) {
  if (args.length === 1) {
    return autoBindClass(...args);
  }
  return autoBindMethod(...args);
}
