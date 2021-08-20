import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../view/Home"
import Shop from "../view/Shop"
import Blog from "../view/Blog"
import Contact from "../view/Contact"
import Cart from "../view/Cart"
import Payment from "../view/Payment"

const AppContainer = () => {
    return (
        <>
        <BrowserRouter>
        <Switch>
            <Route path="/payment" component={Payment} />
            <Route path="/cart" component={Cart} />
            <Route path="/Contact" component={Contact} />
            <Route path="/blog" component={Blog} />
            <Route path="/shop" component={Shop} />
            <Route path="/" component={Home} />
        </Switch>
        </BrowserRouter>
        </>
    )
}

export default AppContainer