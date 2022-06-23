<template>
  <el-menu :default-active="activeIndex" router @select="handleSelect">
    <el-menu-item :index="`${parentPath}/dock`">码头信息</el-menu-item>
    <el-menu-item :index="`${parentPath}/harbor`">港口信息</el-menu-item>
    <el-menu-item :index="`${parentPath}/region`">地区信息</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "NavMenuTop",
  props: {
    parentPath: {
      type: [String],
      required: false,
      default: "",
    },
  },
  data() {
    return {
      activeIndex: "",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped lang="scss"></style>
