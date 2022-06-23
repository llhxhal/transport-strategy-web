<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="/tranQuery">运输查询</el-menu-item>
    <el-menu-item index="/baseData">基础资料</el-menu-item>
    <el-menu-item index="/custManage">客户</el-menu-item>
    <el-menu-item index="/suppManage">供应商</el-menu-item>
    <el-menu-item index="/costManage">成本管理</el-menu-item>
    <el-menu-item index="/systManage">系统设置</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "NavMenuTop",
  data() {
    return {
      activeIndex: "/tranQuery",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$emit("menuChange", key);
    },
  },
};
</script>

<style scoped lang="scss"></style>
