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

<style scoped lang="scss"></style>
