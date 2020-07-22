import Dashboard from './components/Dashboard'
import FoodDetails from './components/FoodDetails'
import Cart from './components/Cart'
import Demo from './components/demo'

export default [
    { path: '/', component: Dashboard },
    { path: '/food-details', name: 'food-details', component: FoodDetails },
    { path: '/cart', component: Cart },
    { path: '/demo', component: Demo }
]