import React, {useState} from 'react'
import './App.css';
import Header from './components/Layouts/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => { setShowCart(true)};
  const hideCartHandler = () => { setShowCart(false)}
  return (
    <div className="App">
      <CartProvider>
        {showCart && <Cart onCloseCart={hideCartHandler} />}
        <Header onShowCart={showCartHandler}></Header>
        <main>
          <Meals />
        </main>
      </CartProvider>

    </div>
  );
}

export default App;
