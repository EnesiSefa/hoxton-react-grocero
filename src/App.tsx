import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header id="store">
        <h1>Grocero</h1>
        <ul className="item-list store--item-list">
          <li>
            <div className="store--item-icon">
              <img src="assets/icons/001-beetroot.svg" alt="beetroot" />
            </div>
            <button>Add to cart</button>
          </li>
          <li>
            <div className="store--item-icon">
              <img src="assets/icons/002-carrot.svg" alt="carrot" />
            </div>
            <button>Add to cart</button>
          </li>
          <li>
            <div className="store--item-icon">
              <img src="assets/icons/003-apple.svg" alt="apple" />
            </div>
            <button>Add to cart</button>
          </li>
          <li>
            <div className="store--item-icon">
              <img src="assets/icons/004-apricot.svg" alt="apricot" />
            </div>
            <button>Add to cart</button>
          </li>
          <li>
            <div className="store--item-icon">
              <img src="assets/icons/005-avocado.svg" alt="avocado" />
            </div>
            <button>Add to cart</button>
          </li>
          <li>
            <div className="store--item-icon">
              <img src="assets/icons/006-bananas.svg" alt="bananas" />
            </div>
            <button>Add to cart</button>
          </li>
          <li>
            <div className="store--item-icon">
              <img src="assets/icons/007-bell-pepper.svg" alt="bell-pepper" />
            </div>
            <button>Add to cart</button>
          </li>
          <li>
            <div className="store--item-icon">
              <img src="assets/icons/008-berry.svg" alt="berry" />
            </div>
            <button>Add to cart</button>
          </li>
          <li>
            <div className="store--item-icon">
              <img src="assets/icons/009-blueberry.svg" alt="blueberry" />
            </div>
            <button>Add to cart</button>
          </li>
          <li>
            <div className="store--item-icon">
              <img src="assets/icons/010-eggplant.svg" alt="eggplant" />
            </div>
            <button>Add to cart</button>
          </li>
        </ul>
      </header>

      <main id="cart">
        <h2>Your Cart</h2>

        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            <li>
              <img
                className="cart--item-icon"
                src="assets/icons/010-eggplant.svg"
                alt="eggplant"
              />
              <p>eggplant</p>
              <button className="quantity-btn remove-btn center">-</button>
              <span className="quantity-text center">0</span>
              <button className="quantity-btn add-btn center">+</button>
            </li>
          </ul>
        </div>

        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>

          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
