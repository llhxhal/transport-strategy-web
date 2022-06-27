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
  &.el-menu--horizontal {
    border-bottom: none;
    & > .el-menu-item {
      height: $top-menu-height;
      line-height: $top-menu-height;
      border-bottom: none;
      color: $white;
      &:not(.is-disabled) {
        &:hover,
        &:focus,
        &.is-active {
          color: $white;
          background: $light-blue;
        }
      }
    }
  }
}
</style>
