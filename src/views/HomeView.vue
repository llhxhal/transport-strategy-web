<template>
  <div class="home">
    <el-container>
      <el-header height="60px">
        <div class="logo" @click="hdlRoute({ name: 'home' }, true)">
          集运管理平台
        </div>
        <NavMenuTop
          :menuList="menuList"
          :activeIndex="topMenuActiveIndex"
          @select="hdlTopMenuSelect"
        />
      </el-header>
      <el-container>
        <el-aside width="168px">
          <NavMenuLeft
            :menuList="subMenuList"
            :activeIndex="subMenuActiveIndex"
            @select="hdlSubMenuSelect"
          />
        </el-aside>
        <el-main>
          <el-tabs
            v-model="tabActiveName"
            type="card"
            closable
            @tab-click="hdlTabsClick"
            @tab-remove="hdlTabsRemove"
          >
            <el-tab-pane
              v-for="tab in tabs"
              :key="tab.name"
              :label="tab.label"
              :name="tab.name"
            >
              <router-view />
            </el-tab-pane>
          </el-tabs>
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
      // menu
      topMenuActiveIndex: "/tranQuery",
      subMenuActiveIndex: "",
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
      // tabs
      tabActiveName: "/",
      tabs: [
        {
          label: "首页",
          name: "/",
        },
      ],
    };
  },
  computed: {
    subMenuList() {
      return this.menuList.find(({ path }) => path === this.topMenuActiveIndex)
        .children;
    },
  },
  methods: {
    // route change <<>> menu select <<>> tabs update
    hdlTopMenuSelect(index) {
      this.topMenuActiveIndex = index;
    },
    hdlSubMenuSelect(index) {
      this.subMenuActiveIndex = index;
      const activeTab = this.tabs.find(({ name }) => name === index);
      if (activeTab) {
        this.tabActiveName = index;
      } else {
        this.hdlTabsAdd({
          label: this.subMenuList.find(({ path }) => path === index).name,
          name: index,
        });
      }
    },
    hdlRoute(route, isHome) {
      if (isHome) this.topMenuActiveIndex = "/tranQuery";
      this.$router.push(route);
    },
    hdlTabsClick(tab) {
      // 零宽正预先行断言
      const regExp = /\/\w+(?=\/)/;
      const result = tab.name.match(regExp);
      this.topMenuActiveIndex = result ? result[0] : "/";
      this.subMenuActiveIndex = tab.name;
      this.hdlRoute({ path: tab.name });
    },
    hdlTabsAdd(newTab) {
      this.tabs.push(newTab);
      this.tabActiveName = newTab.name;
    },
    hdlTabsRemove(targetName) {
      let tabs = this.tabs;
      let activeName = this.tabActiveName;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
              this.hdlRoute({ path: activeName });
            }
          }
        });
      }
      this.tabActiveName = activeName;
      this.tabs = tabs.filter(({ name }) => name !== targetName);
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
