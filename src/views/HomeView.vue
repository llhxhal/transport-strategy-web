<template>
  <div class="home">
    <el-container>
      <el-header height="60px">
        <div class="logo" @click="hdlRoute">集运管理平台</div>
        <NavMenuTop
          :menuList="menuList"
          :activeIndex="activeIndex"
          @select="hdlMenuChange"
        />
      </el-header>
      <el-container>
        <el-aside width="168px">
          <NavMenuLeft :menuList="subMenuList" />
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
  name: "HomeView",
  components: {
    NavMenuTop,
    NavMenuLeft,
  },
  data() {
    return {
      activeIndex: "/tranQuery",
      menuList: [
        {
          name: "运输查询",
          path: "/tranQuery",
          children: [
            {
              name: "运输策略查询",
              path: "/tranQuery/strategy",
            },
          ],
        },
        {
          name: "基础资料",
          path: "/baseData",
          children: [
            {
              name: "码头信息",
              path: "/baseData/dock",
            },
            {
              name: "港口信息",
              path: "/baseData/harbor",
            },
            {
              name: "地区信息",
              path: "/baseData/region",
            },
          ],
        },
        {
          name: "客户",
          path: "/custManage",
          children: [
            {
              name: "客户信息",
              path: "/custManage/customer",
            },
            {
              name: "服务事项",
              path: "/custManage/service",
            },
          ],
        },
        {
          name: "业务",
          path: "/busiManage",
          children: [
            {
              name: "码头作业范围",
              path: "/busiManage/range",
            },
          ],
        },
        {
          name: "供应商",
          path: "/suppManage",
          children: [
            {
              name: "供应商信息",
              path: "/suppManage/supplier",
            },
            {
              name: "作业范围",
              path: "/suppManage/range",
            },
          ],
        },
        {
          name: "成本管理",
          path: "/costManage",
          children: [
            {
              name: "码头成本",
              path: "/costManage/dock",
            },
            {
              name: "供应商成本",
              path: "/costManage/supplier",
            },
          ],
        },
      ],
    };
  },
  computed: {
    subMenuList() {
      return this.menuList.find(({ path }) => path === this.activeIndex)
        .children;
    },
  },
  methods: {
    hdlMenuChange(v) {
      this.activeIndex = v;
    },
    hdlRoute() {
      this.activeIndex = "/tranQuery";
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss" scoped>
.el-header {
  display: flex;
  align-items: center;
  .logo {
    width: 148px;
    cursor: pointer;
  }
  .el-menu {
    flex: 1;
  }
}
</style>
