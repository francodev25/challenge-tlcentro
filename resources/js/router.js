const Home = () => import("./views/Home.vue");
const About = () => import("./views/About.vue");

export const routes = [
    {
        name: "home",
        path: "/",
        component: Home
    },
    {
        name: "about",
        path: "/about",
        component: About
    }
];
