import { Router } from "./router.js"
const router = new Router()

const routes = {
  "/": "/pages/home.html",
  "/explore": "/pages/explore.html",
  "/universe": "/pages/universe.html",
  404: "/pages/404.html"
}

router.add("/", "/pages/home.html")
router.add("/explore", "/pages/explore.html")
router.add("/universe", "/pages/universe.html")
router.add(404, "/pages/404.html")



router.handle()



window.onpopstate = () => router.handle()
window.route = () => router.route()
