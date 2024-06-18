import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart'


function Shop() {

  const {
    addItem,
    cartDetails,
  } = useShoppingCart()

  return(
    <>
      <div>
          <section>
            <h1>Cart</h1>
            <ul>
              {Object.entries(cartDetails).map(([priceId, cartItem]) => (
                <li key={`cart-${priceId}`}>
                  {cartItem.name} ({cartItem.formattedPrice} * {cartItem.quantity} = {cartItem.formattedValue})<br/>
                  <button>Increase</button>
                  <button>Decrease</button>
                  <button>Cancel</button>
                </li>
              ))}
            </ul>
          </section>
      </div>
    
    </>
  )
}

export default Shop ;