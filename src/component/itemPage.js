

function itemPage() {
  return(
    <>
      <div id="item" class="wrapper">
        <div class="item-image">
          <img src="img/item/goods01.png" alt="" />
        </div>

        <div class="item-info">
          <h1 class="item-title">Goods01</h1>
          <p>
            テキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキスト
          </p>

          <p>￥9,999 +tax</p>

          <table class="order-table">
            <thead>
              <tr>
                <th class="color">Color</th>
                <th class="size">Size</th>
                <th class="quantity"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>White</td>
                <td>S</td>
                <td>
                  <select name="quantity_s">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>White</td>
                <td>M</td>
                <td>
                  <select name="quantity_m">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>White</td>
                <td>L</td>
                <td>
                  <select name="quantity_l">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          <a class="cart-btn" href="#">ADD TO CART</a>

          <table class="size-table">
            <thead>
              <tr>
                <th class="size">Size</th>
                <th class="chest">Chest</th>
                <th class="weist">Weist</th>
                <th class="height">Height</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>S</th>
                <td>99 ～ 99</td>
                <td>99 ～ 99</td>
                <td>99 ～ 99</td>
              </tr>
              <tr>
                <th>M</th>
                <td>99 ～ 99</td>
                <td>99 ～ 99</td>
                <td>99 ～ 99</td>
              </tr>
              <tr>
                <th>L</th>
                <td>99 ～ 99</td>
                <td>99 ～ 99</td>
                <td>99 ～ 99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default itemPage ;