<template>
  <div id="app">
    <el-container>
      <el-header height="60px">
        <NavMenuTop @menuChange="hdlMenuChange" />
      </el-header>
      <el-container>
        <el-aside width="118px">
          <NavMenuLeft :parentPath="currMenuIndex" />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenuTop from "@/components/NavMenuTop.vue";
import NavMenuLeft from "@/components/NavMenuLeft.vue";

export default {
  name: "app",
  components: {
    NavMenuTop,
    NavMenuLeft,
  },
  data() {
    return {
      currMenuIndex: "",
    };
  },
  methods: {
    hdlMenuChange(v) {
      this.currMenuIndex = v;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
