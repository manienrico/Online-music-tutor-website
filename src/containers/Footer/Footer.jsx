import {BsFacebook,BsTwitter,BsInstagram,BsTelephone,} from 'react-icons/bs'
import {Md10K, MdEmail,MdFax} from 'react-icons/md'
import './footer.css'

function Footer() {
  return (
    <footer>
      <div className="app__footer-contain">
        <div className="app__footer-contain_left">
          <h2>
            Enjoy your music classes, here.
          </h2>
          <div id='le-ft'>Get a free Trial<a href="#" id='le-rt'>Now</a></div>
        </div>
        <div className="app__footer-contain_middle">
          <h3>Contact</h3>
          <div><MdEmail /> music100@gmail.com</div>
          <div><BsTelephone /> +256 746 376 353</div>
          <div><Md10K /> m100@fax.com</div>
        </div>
        <div className="app__footer-contain_right">
          <h3>Follow</h3>
          <div>Twitter: @music100</div>
          <div>Facebook: music100_Official</div>
          <div>Instagram: music100_Official</div>
        </div>
      </div>
      <span id='last'>Enrico Mani ©2023.</span>
    </footer>
  )
}

export default Footer