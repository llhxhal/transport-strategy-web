<template>
  <el-menu :default-active="activeIndex" router>
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
  &-item {
    height: $sub-menu-height;
    line-height: $sub-menu-height;
    border-bottom: 1px solid $light-gray;
    text-align: center;
    &:hover {
      color: $el-blue;
      background: transparent;
    }
    &:focus,
    &.is-active {
      color: $white;
      background: $light-blue;
    }
  }
}
</style>
