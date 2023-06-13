import {Router} from "./routes.js"

const router = new Router()

router.add("/", "/pages/home.html", "url(/assets/mountains-universe-1.png)")
router.add("/universe", "/pages/universe.html", "url(/assets/mountains-universe02.png)")
router.add("/exploration", "/pages/exploration.html", "url(/assets/mountains-universe-3.png)")
router.add(404, "/pages/404.html", "url(/assets/mountains-universe-4.png)")



router.handle()


window.onpopstate = () => router.handle()
window.route = () => router.route()
