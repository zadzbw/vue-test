/* eslint-disable no-param-reassign */
export default function readonly(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}
