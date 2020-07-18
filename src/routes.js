import Dashboard from './components/Dashboard'
import FoodDetails from './components/FoodDetails'
import Cart from './components/Cart'

export default [
    { path: '/', component: Dashboard },
    { path: '/food-details', name: 'food-details', component: FoodDetails },
    { path: '/cart', component: Cart }
]