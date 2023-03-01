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
          <span>Email: music100@gmail.com</span>
          <span>Tel: +256 746 376 353</span>
          <span>Fax: m100@fax.com</span>
        </div>
        <div className="app__footer-contain_right">
          <h3>Follow</h3>
          <span>Twitter: @music100</span>
          <span>Facebook: music100_Official</span>
          <span>Instagram: music100_Official</span>
        </div>
      </div>
      <span id='last'>Enrico Mani ©2023.</span>
    </footer>
  )
}

export default Footer