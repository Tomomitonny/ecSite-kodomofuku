import { FaInstagram } from "react-icons/fa";

function Footer() {
  return(
    <>
        <footer>
          <div className="flex sm:hidden block items-center flex-row justify-between max-w-screen-lg mx-24 py-5 font-thin">
          <a href="https://www.instagram.com/" target="_blank">
            <FaInstagram /> 
          </a>
          <a href="">
            <p>ABOUT</p>
          </a>
          <a href="">
            <p>CONTACT</p>
          </a>
            
          </div>
          <div className="hidden sm:block">

            <div className="flex justify-between max-w-screen-lg mx-auto py-5 font-thin px-10">
              
                <a href="https://www.instagram.com/" target="_blank"><img src="footer_icon.png" alt="" /></a>
              
              <div>
                <p>MENU</p>
                <ul>
                  <li>ABOUT</li>
                  <li>LOOK BOOK</li>
                  <li>EVENT</li>
                  <li>STORE</li>
                  <li><FaInstagram /></li>
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
          </div>
      <p className="text-center p-3 font-extralight">&copy; kodo mo fuku</p>
    </footer>
    
    </>
  )
}

export default Footer ;