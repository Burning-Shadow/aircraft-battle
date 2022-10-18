import { Container, Sprite, Text, Texture } from 'pixi.js';
import { createRenderer } from 'vue';

const renderer = createRenderer<Container, Container>({
  createElement(type) {
    // Container
    let element;

    switch (type) {
      case 'Container':
        element = new Container();
        break;
      case 'Sprite':
        element = new Sprite();
        break;
      default:
        throw new Error('type 不存在');
        break;
    }

    return element;
  },

  // 处理属性
  patchProp(el, key, prevValue, nextValue) {
    switch(key) {
      case 'texture':
        (el as Sprite).texture = Texture.from(nextValue);
        break;
      default:
        el[key] = nextValue;
        break;
    }
  },
  // 元素插入时调用
  insert(el, parent) {
    if (el && parent) {
      parent.addChild(el);
    }
  },
  // 元素移除时调用
  remove(el) {
    if (el?.parent) {
      el.parent.removeChild(el);
    }
  },
  createText(text) {
    return new Text(text);
  },

  createComment(text) {
    return new Text(text);
  },
  setText() { },
  setElementText() { },
  parentNode(node) {
    return node.parent;
  },
  nextSibling() {
    return null;
  }
});

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent);
}
