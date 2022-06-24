import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = (location) =>
//   originalPush.call(this, location).catch((err) => err);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    // redirect: "/tranQuery",
    children: [
      {
        path: "tranQuery",
        name: "tranQuery",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "tranQuery" */ "../views/LayoutView.vue"),
        children: [
          {
            path: "strategy",
            name: "tranQuery.strategy",
            component: () =>
              import(
                /* webpackChunkName: "strategy" */ "../views/TranQuery/Strategy/IndexView.vue"
              ),
          },
        ],
      },
      {
        path: "baseData",
        name: "baseData",
        component: () =>
          import(/* webpackChunkName: "baseData" */ "../views/LayoutView.vue"),
        children: [
          {
            path: "dock",
            name: "baseData.dock",
            component: () =>
              import(
                /* webpackChunkName: "dock" */ "../views/BaseData/Dock/IndexView.vue"
              ),
          },
          {
            path: "harbor",
            name: "baseData.harbor",
            component: () =>
              import(
                /* webpackChunkName: "harbor" */ "../views/BaseData/Harbor/IndexView.vue"
              ),
          },
          {
            path: "region",
            name: "baseData.region",
            component: () =>
              import(
                /* webpackChunkName: "region" */ "../views/BaseData/Region/IndexView.vue"
              ),
          },
        ],
      },
      {
        path: "custManage",
        name: "custManage",
        component: () =>
          import(
            /* webpackChunkName: "custManage" */ "../views/LayoutView.vue"
          ),
        children: [
          {
            path: "customer",
            name: "custManage.customer",
            component: () =>
              import(
                /* webpackChunkName: "customer" */ "../views/CustManage/Customer/IndexView.vue"
              ),
          },
          {
            path: "service",
            name: "custManage.service",
            component: () =>
              import(
                /* webpackChunkName: "service" */ "../views/CustManage/Service/IndexView.vue"
              ),
          },
        ],
      },
      {
        path: "busiManage",
        name: "busiManage",
        component: () =>
          import(
            /* webpackChunkName: "busiManage" */ "../views/LayoutView.vue"
          ),
        children: [
          {
            path: "range",
            name: "busiManage.range",
            component: () =>
              import(
                /* webpackChunkName: "range" */ "../views/BusiManage/Range/IndexView.vue"
              ),
          },
        ],
      },
      {
        path: "suppManage",
        name: "suppManage",
        component: () =>
          import(
            /* webpackChunkName: "suppManage" */ "../views/LayoutView.vue"
          ),
        children: [
          {
            path: "supplier",
            name: "suppManage.supplier",
            component: () =>
              import(
                /* webpackChunkName: "supplier" */ "../views/SuppManage/Supplier/IndexView.vue"
              ),
          },
          {
            path: "range",
            name: "suppManage.range",
            component: () =>
              import(
                /* webpackChunkName: "range" */ "../views/SuppManage/Range/IndexView.vue"
              ),
          },
        ],
      },
      {
        path: "costManage",
        name: "costManage",
        component: () =>
          import(
            /* webpackChunkName: "costManage" */ "../views/LayoutView.vue"
          ),
        children: [
          {
            path: "dock",
            name: "costManage.dock",
            component: () =>
              import(
                /* webpackChunkName: "dock" */ "../views/CostManage/Dock/IndexView.vue"
              ),
          },
          {
            path: "supplier",
            name: "costManage.supplier",
            component: () =>
              import(
                /* webpackChunkName: "supplier" */ "../views/CostManage/Supplier/IndexView.vue"
              ),
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
