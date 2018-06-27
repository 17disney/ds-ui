<style lang='stylus'>
@require '../../../styles/disney/var/color.styl';
@require '../../../styles/disney/mixin/index.styl';

.ds {
  &-button {
    appearance: none;
    border-radius: 4px;
    border: 0;
    box-sizing: border-box;
    color: inherit;
    display: block;
    font-size: 18px;
    height: 41px;
    outline: 0;
    overflow: hidden;
    position: relative;
    text-align: center;

    .att-icon {
      font-size: 18px;
      height: 18px;
    }

    &::after {
      background-color: #000;
      content: ' ';
      opacity: 0;
      position: absolute 0 0 0 0;
    }

    &:not(.is-disabled):active::after {
      opacity: 0.4;
    }

    &-icon {
      vertical-align: middle;
      display: inline-block;
      height: 20px;
    }

    &--default {
      color: $color-primary;
      background-color: transparent;

      // box-shadow: $button-default-box-shadow;
      .is-plain {
        border: 1px solid $color-primary;
        background-color: transparent;
        box-shadow: none;
        color: $color-primary;
      }
    }

    &--primary {
      color: #FFF;
      background-color: $color-primary;

      .is-plain {
        border: 1px solid $color-primary;
        background-color: transparent;
        color: $color-primary;
      }
    }

    &--danger {
      color: #FFF;
      background-color: $color-red;

      .is-plain {
        border: 1px solid $color-red;
        background-color: transparent;
        color: $color-red;
      }
    }

    &--large {
      display: block;
      width: 100%;
    }

    &--normal {
      display: inline-block;
      padding: 0 12px;
    }

    &--small {
      display: inline-block;
      font-size: 14px;
      padding: 0 12px;
      height: 33px;
    }

    .is-disabled {
      opacity: 0.6;
    }
  }
}
</style>

<template>
  <button :type="nativeType" class="ds-button" :class="['ds-button--' + type, 'ds-button--' + size, {
      'is-disabled': disabled,
      'is-plain': plain
    }]" @click="handleClick" :disabled="disabled">
    <span class="ds-button-icon" v-if="icon || $slots.icon">
      <slot name="icon">
        <att-icon v-if="icon" :name="icon"></att-icon>
        <!-- <i v-if="icon" class="dsui" :class="'dsui-' + icon"></i> -->
      </slot>
    </span>
    <label class="ds-button-text">
      <slot></slot>
    </label>
  </button>
</template>

<script>
/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: xank <xank@qq.com>  Blog：https://www.xank.cn
+-----------------------------------------------------------------------------------------------------------------------
| Ds-Button
| 按钮
*/

/**
 * @param {string} [type=default] - 显示类型，接受 default, primary, danger
 * @param {boolean} [disabled=false] - 禁用
 * @param {boolean} [plain=false] - 幽灵按钮
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 * @param {string} [native-type] - 原生 type 属性
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .dsui-xxx）
 * @param {slot} - 显示文本
 * @param {slot} [icon] 显示图标
 *
 * @example
 * <ds-button size="large" icon="back" type="primary">按钮</ds-button>
 */

const NAME = 'ds-button'

export default {
  name: NAME,

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  },

  props: {
    icon: String,
    disabled: Boolean,
    nativeType: String,
    plain: Boolean,
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return [
          'default',
          'danger',
          'primary'
        ].indexOf(value) > -1;
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'small',
          'normal',
          'large'
        ].indexOf(value) > -1;
      }
    }
  }
};
</script>
