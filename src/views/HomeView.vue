<template>
  <el-container class="home">
    <el-header>
      <div class="logo flex-center" @click="toRoute({ path: '/' })">
        集运管理平台
      </div>
      <NavMenuTop :menuList="menuList" :activeIndex="topMenuActiveIndex" />
      <div class="user-info flex-center">
        <div class="avator"></div>
        <div class="name">{{ userName }}</div>
      </div>
    </el-header>
    <el-container>
      <el-aside>
        <NavMenuLeft
          :menuList="subMenuList"
          :activeIndex="subMenuActiveIndex"
        />
      </el-aside>
      <el-main>
        <el-tabs
          v-model="tabActiveName"
          type="card"
          @tab-click="(tab) => toRoute({ path: tab.name })"
          @tab-remove="onRemoveTabs"
        >
          <el-tab-pane
            v-for="tab in tabsList"
            :key="tab.name"
            :label="tab.label"
            :name="tab.name"
            :closable="isNotOnlyOneHomeTab"
          >
            <router-view />
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>
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
          userName: "admin",
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
      tabsList: [
        {
          label: "首页",
          name: "/",
        },
      ],
      tabActiveName: "/",
      userName: "admin",
    };
  },
  computed: {
    // 根据pathes的长度判断路由等级
    pathes() {
      return this.$route.path.match(/\/\w+/g);
    },
    // 根据路由等级 获取一级菜单索引
    topMenuActiveIndex() {
      return this.pathes !== null ? this.pathes[0] : "";
    },
    // 根据一级菜单索引 获取二级菜单目录
    subMenuList() {
      return this.topMenuActiveIndex
        ? this.menuList.find(({ path }) => path === this.topMenuActiveIndex)
            .children
        : [];
    },
    // 根据路由等级 获取二级菜单索引
    subMenuActiveIndex: {
      get() {
        if (this.topMenuActiveIndex && this.pathes.length > 1) {
          return this.pathes[0] + this.pathes[1];
        } else {
          return "";
        }
      },
    },
    // 根据二级菜单索引 获取二级菜单标题
    subMenuActiveName() {
      return this.subMenuActiveIndex
        ? this.subMenuList.find(({ path }) => path === this.subMenuActiveIndex)
            .name
        : "";
    },
    // 根据路由等级 获取标签页索引
    tabActiveIndex() {
      return !this.topMenuActiveIndex ? "/" : this.subMenuActiveIndex;
    },
    // 非 唯一 [首页] 标签页
    isNotOnlyOneHomeTab() {
      return this.tabsList.length !== 1 || this.tabsList[0].name !== "/";
    },
  },
  watch: {
    $route() {
      this.onSyncTabs();
    },
  },
  mounted() {
    this.onSyncTabs();
  },
  methods: {
    // menu.index 绑定 $route.path
    // 路由改变即可同步数据更新视图
    // tab.name 绑定 data 绑定 $route.path
    // 是因为 v-model 绑定计算属性时必须提供setter
    toRoute(route) {
      // NavigationDuplicated: Avoided redundant navigation to current location
      if (route.path === this.tabActiveIndex) return;

      this.$router.push(route);
    },
    onSyncTabs() {
      const index = this.tabActiveIndex;
      if (!index) return;

      const activeTab = this.tabsList.find(({ name }) => name === index);
      if (!activeTab) {
        this.tabsList.push({
          label: index === "/" ? "首页" : this.subMenuActiveName,
          name: index,
        });
      }
      this.tabActiveName = index;
    },
    onRemoveTabs(targetName) {
      if (targetName === this.tabActiveIndex) {
        this.tabsList.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = this.tabsList[index + 1] || this.tabsList[index - 1];
            this.toRoute({ path: nextTab ? nextTab.name : "/" });
          }
        });
      }
      this.tabsList = this.tabsList.filter(({ name }) => name !== targetName);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable";

.home {
  height: 100%;
  background: $background;
  .el-header {
    display: flex;
    align-items: center;
    margin-bottom: $margin-mini;
    padding: 0;
    height: $header-height !important;
    color: $white;
    background: $dark-blue;
    .logo {
      width: $aside-width;
      height: 100%;
      cursor: pointer;
    }
    .el-menu {
      flex: 1;
    }
    .user-info {
      width: 100px;
      height: 100%;
      cursor: pointer;
    }
  }
  .el-container {
    .el-aside {
      width: $aside-width !important;
      margin-right: $margin-mini;
      .el-menu {
        height: 100%;
      }
    }
    .el-main {
      padding: 0;
      ::v-deep .el-tabs {
        height: 100%;
        &__header {
          margin-bottom: $margin-mini;
          border-bottom: 1px solid $white;
          .el-tabs__nav {
            border: none;
            .el-tabs__item {
              padding: $tabs-item-padding;
              height: $tabs-item-height;
              line-height: $tabs-item-height;
              border-radius: 8px 8px 0 0;
              background: $white;
              &:not(:last-child) {
                margin-right: 4px;
              }
              &.is-active {
                color: $white;
                background: $light-blue;
              }
              &.is-closable {
                .el-icon-close {
                  position: absolute;
                  top: 50%;
                  right: 6px;
                  transform: translate(0, -50%);
                }
              }
            }
          }
        }
        &__content {
          height: calc(100% - $tabs-item-height - $margin-mini);
          background: $white;
          .el-tab-pane {
            padding: $padding-mini;
          }
        }
      }
    }
  }
}
</style>
