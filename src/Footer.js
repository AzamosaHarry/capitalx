import './Footer.css'
import logoblack from './CAPITAL X BLACK LOGO.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'


function Footer () {
    return(
        <div className='footer'>
            <section className='footer_section_one'>
                <img src={logoblack} className='footer_logo'/>
                <div>
                    <div className='footer_link'>
                        <h3>Contact us</h3>
                        <h3>FAQ</h3>
                        <h3>About us</h3>
                        <h3>Assets</h3>
                        <h3>Terms of use</h3>
                    </div>
                    <div className='footer_social_media'>
                        <FaLinkedinIn className='footer_media_fonts' />
                        <FaFacebookF className='footer_media_fonts' />
                        <FaXTwitter className='footer_media_fonts' />
                        <FaInstagram className='footer_media_fonts' />
                    </div>
                </div>
            </section>
            <section className='footer_section_two'>
                <div className='footer_subscribe'>
                    <h1>Subscribe to our newsletter</h1>
                    <p>Select topics and stay current with our latest insights</p>
                    <div className='footer_subscribe_select'>
                        <input type='text' placeholder='Enail adress' />
                        <button>
                            Submit
                        </button>
                    </div>
                </div>
                <div className='footer_address'>
                    <div>
                        <h1>Lagos</h1>
                        <p>B15 James Pinnock's place, Pinnock Beach Estate, Lekki, Lagos, Nigeria</p>
                    </div>
                </div>
            </section>
            <section className='footer_section_three'>
                <hr />
                <div>
                    <h3>Capital X Ventures - redefining the frontiers</h3>
                    <p>&copy; 2018 - 2023 Capital X Ventures</p>
                </div>
            </section>
        </div>
    )
}

export default Footer;