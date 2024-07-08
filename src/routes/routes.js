import config from '../config';
import HeaderOnly from '../layouts/HeaderOnly';
import { Home, Product, News, Contact, Cart } from '../pages';
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
