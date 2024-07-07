import config from '../config';
import HeaderOnly from '../layouts/HeaderOnly';
import Home from '../pages/Home';
import Product from '../pages/Product';
import News from '../pages/News';
import Contact from '../pages/Contact';
import Cart from '../pages/Cart';
// public routes
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.product,
        component: Product,
    },
    {
        path: config.routes.news,
        component: News,
    },
    {
        path: config.routes.contact,
        component: Contact,
    },
    {
        path: config.routes.cart,
        component: Cart,
        layout: HeaderOnly,
    },
];

// private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
