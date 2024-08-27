import { createBrowserRouter } from "react-router-dom";
import Layout from "../views/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Buy from "../pages/Buy";
import Rent from "../pages/Rent";
import Rating from "../pages/Rating";
import Sell from "../pages/Sell";
import Blogs from "../pages/Blogs";


// const flattenRoutes = (routes) => {
//     return routes.reduce((acc, route) => {
//         if (route.children?.length) {
//             const childRoutes = flattenRoutes(route.children).map(child => ({
//                 ...child,
//                 path: `${route.path}${child.path}`
//             }));
//             acc.push(...childRoutes);
//         } else {
//             acc.push(route);
//         }
//         return acc;
//     }, []);
// };

// export const router = createBrowserRouter([
//     ...flattenRoutes(data).map(route => ({
//         path: route.path,
//         element: <Layout><route.element /></Layout>,
//         errorElement: <h2>Not Found Page</h2>
//     })),
// ]);

export const router = createBrowserRouter([    
    {
        path: '/',
        element: <Layout><Home/></Layout>,
        errorElement: <h2>not found page</h2>
    },
    {
        path: '/about',
        element: <Layout><About/></Layout>,
        errorElement: <h2>not found page</h2>
    },
    {
        path: '/blogs',
        element: <Layout><Blogs/></Layout>,
        errorElement: <h2>not found page</h2>
    },
    {
        path: '/blogs/:blogId',
        element: <Layout><Blog/></Layout>,
        errorElement: <h2>not found page</h2>
    },
    {
        path: '/contact',
        element: <Layout><Contact/></Layout>,
        errorElement: <h2>not found page</h2>
    },
    {
        path: '/services/buy',
        element: <Layout><Buy/></Layout>,
        errorElement: <h2>not found page</h2>
    },
    {
        path: '/services/rent',
        element: <Layout><Rent/></Layout>,
        errorElement: <h2>not found page</h2>
    },
    {
        path: '/services/sell',
        element: <Layout><Sell/></Layout>,
        errorElement: <h2>not found page</h2>
    },
    {
        path: '/services/rating',
        element: <Layout><Rating/></Layout>,
        errorElement: <h2>not found page</h2>
    },
    {
        path: '*',
        element: <h2>404 not found</h2>
    }
])