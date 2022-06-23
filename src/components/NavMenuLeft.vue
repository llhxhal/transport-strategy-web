<template>
  <el-menu :default-active="activeIndex" router @select="handleSelect">
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
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      activeIndex: "",
    };
  },
  computed: {
    subMenuList() {
      console.log(this.menuList);
      return [];
    },
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped lang="scss"></style>
