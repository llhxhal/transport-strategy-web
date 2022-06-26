<template>
  <el-menu :default-active="activeIndex" mode="horizontal" router>
    <el-menu-item v-for="menu in menuList" :key="menu.path" :index="menu.path">
      {{ menu.name }}
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "NavMenuTop",
  props: {
    menuList: {
      type: [Array],
      required: true,
      default: () => [],
    },
    activeIndex: {
      type: [String],
      required: true,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/css/base";

.el-menu {
  background: transparent;
  &--horizontal {
    border-bottom: none !important;
  }
  & > &-item {
    color: $white;
    &:not(.is-disabled) {
      &.is-active,
      &:hover,
      &:focus {
        color: $white !important;
        background: $light-blue !important;
      }
    }
  }
}
</style>
