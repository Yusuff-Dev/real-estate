import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Buy from "../pages/Buy";

const data = [
    {   
        id: 1,
        title: '',
        path: "/",
        element: Home,
    },
    {
        id: 2,
        title: 'Услуги',
        path: "/services",
        children: [
            {
                id: 2.1,
                title: "Купить",
                path: '/services/buy',
                element: Buy,
            },
            {
                id: 2.2,
                title: 'Арендовать',
                path: '/services/rent',
                element: Buy
            },
            {
                id: 2.3, 
                title: "Продать",
                path: "/services/sell",
                element: Buy
            },
            {
                id: 2.4,
                title: "Оценка недвижимости",
                path: "/services/rating",
                element: Buy
            }
        ]
    },
    {
        id: 3,
        title: "О нас",
        path: "/about",
        element: About,
    },
    {
        id: 4,
        title: "Блог",
        path: "/blog",
        element: Blog
    },
    {
        id: 5,
        title: "Контакты",
        path: "/contact",
        element: Contact,
    }
];

export default data