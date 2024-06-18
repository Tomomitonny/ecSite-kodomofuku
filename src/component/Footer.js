

function Footer() {
  return(
    <>
        <footer>
      <div className="flex justify-between max-w-screen-lg mx-auto py-10 font-thin">
        
          <a href="https://www.instagram.com/" target="_blank"><img src="footer_icon.png" alt="" /></a>
        
        <div>
          <p>MENU</p>
          <ul>
            <li>ABOUT</li>
            <li>LOOK BOOK</li>
            <li>EVENT</li>
            <li>STORE</li>
            <li><img src="img/insta_icon.png" alt="" /></li>
          </ul>
        </div>
        <div>
          <p>CONTACT</p>
          <ul>
            <li><a href="">Q&A</a></li>
          </ul>
          <ul>
            <li><a href="">FRANCHISE</a></li>
          </ul>
          <ul>
            <li><a href="">FAQ</a></li>
          </ul>
          <ul>
            <li><a href="">MY PAGE</a></li>
          </ul>
          <ul>
            <li><a href="">PRIVACY</a></li>
          </ul>
          <ul>
            <li><a href="">AGREEMENT</a></li>
          </ul>
        </div>
        <div class="footer_box">
          <dl>
            <p>CUSTOMER</p>
            <dt>ABC Center</dt>
            <dd>abcdefghijklmn123-321</dd>
            <dt>Marketing & Collab</dt>
            <dd>kodo-mo-fuku@kodo.com</dd>
            <dt></dt>
            <dd></dd>
          </dl>
        </div>
        <div class="footer_box">
          <dl>
            <p>COMPANY</p>
            <dt>ABC Center</dt>
            <dd>abcdefghijklmn123-321</dd>
            <dt>Marketing & Collab</dt>
            <dd>kodo-mo-fuku@kodo.com</dd>
            <dt></dt>
            <dd></dd>
          </dl>
          
        </div>
      </div>
      <p className="text-center p-3 font-extralight">&copy; kodo mo fuku</p>
    </footer>
    
    </>
  )
}

export default Footer ;