import Home from '../pages/Home';
import Product from '../pages/Product';
import News from '../pages/News';
import Contact from '../pages/Contact';

// public routes
const publicRoutes = [
    {
        path: '/',
        component: <Home />,
    },
    {
        path: '/product',
        component: <Product />,
    },
    {
        path: '/news',
        component: <News />,
    },
    {
        path: '/contact',
        component: <Contact />,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
