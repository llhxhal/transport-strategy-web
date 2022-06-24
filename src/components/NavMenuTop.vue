<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    router
    @select="hdlSelect"
  >
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
  computed: {
    parent_activeIndex() {
      return this.$route.path.match(/\/\w+/g)[0];
    },
  },
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
    },
  },
  methods: {
    hdlSelect(index) {
      this.$emit("select", index);
    },
  },
};
</script>

<style scoped lang="scss"></style>
