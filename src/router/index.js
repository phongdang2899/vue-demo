import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Error from "../views/Error.vue";
import User from "../views/User.vue";
import Detail from "../components/user/Detail.vue";
import Edit from "../components/user/Edit.vue";
import Navbar from "../components/Navbar";
import Method from "../views/Method.vue";

const routes = [
  {
    path: "/", name: "Home", components: {
      default: Home,
      'Navbar': Navbar,
    }
  },
  {
    path: "/about", name: "About", components: {
      default: About,
      'Navbar': Navbar,
    }
  },
  {
    path: "/method", name: "Method", components: {
      default: Method,
      'Navbar': Navbar,
    }
  },
  {
    path: "/User", name: "User", components: {
      default: User,
      'Navbar': Navbar,
    },
    children: [
      { path: ":id", name: "Detail", component: Detail, },
      { path: ":id/Edit", name: "Edit", component: Edit, }
    ]
  },
  { path: "/:pathMatch(.*)*", name: "Error", component: Error, },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
