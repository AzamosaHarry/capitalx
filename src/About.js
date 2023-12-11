import './About.css'
import bgvid2 from './bgvid2.mp4'
import Footer from './Footer'
import Header from './Header'
import { FaLongArrowAltRight } from 'react-icons/fa'
import image6 from './six.jpg'
import image2 from './two.jpg'
import image5 from './five.jpg'
import image15 from './fifteen.png'
import image16 from './sixteen.png'
import image17 from './seventeen.png'
import image18 from './eighteen.png'


function About() {
    return(
        <div className='about'>
            <Header />
            <div className='about_body'>
                <div>
                    <video autoPlay muted loop id="bgvid2">
                        <source src={bgvid2} type="video/mp4" />
                    </video>    
                    <div className='about_section_one_div'>
                        <h3>About us</h3>
                        <h1>We accelerate sustainable and inclusive growth</h1>
                    </div>
                    <section className='about_section_two'>
                    <div className='about_section_two_div1'>
                        <p>Our clients are always pushing forward, testing and challenging, striving for the change that changes everything. </p>
                        <p>We partner with bold leaders every step of the way. Pinpoiting the strategy that will reshape tomorrow. Harnessing innovation to reach net zero. Transforming through technology. Developing skills and capabilities across thier organization.</p>
                       
                    </div>
                    <div className='about_section_two_div2'>
                        <p> Together we're accelerating toward a more sustainable, inclusive, and growing future for all.</p>
                    </div>
                </section>
                <section>
                    <div className='home_section_two_intermediary'>
                        <h1>Commited to sustainable goals</h1>
                        <p>We are dedicated to managing our firm and working with our clients in ways that benefit individuals, communities, and the environments they live in.</p>
                    </div>
                    <div className='home_section_two_one'>
                        <img src={image5} className='section_two_image' />
                        <div className='home_section_one_div'>
                            <h1>Who we are?</h1>
                            <p>Our firm is designed to operate as one—a single global partnership united by a strong set of values. We are equally committed to both sides of our mission: attracting and developing a talented and diverse group of colleagues and helping our clients create meaningful and lasting change.</p>
                        </div>
                    </div>
                    <div className='home_section_two_two'>
                        <img src={image6} className='section_two_image' />
                        <div className='home_section_two_div'>
                            <h1>How we work?</h1>
                            <p>From the C-suite to the front line, we partner with clients to help them innovate more sustainably, achieve lasting gains in performance, and build workforces that will thrive for this generation and the next.</p>
                        </div>
                    </div>
                </section>
                <section className='about_section_three'  id='with-hash-sustain'>
                    <h1>Partnership and Collaboration</h1>
                    <h3>At Capital X, we believe in the power of collaboration and partnerships. We welcome opportunities to work with like-minded organizations and firms who share our vision.</h3>
                </section>
                <section className='about_section_four'>
                    <h3>Our mission and vision</h3>
                    <h1>Our commitment to these principles drives everything we do at Capital X Ventures.</h1>
                    <div>
                        <div className='about_vision'>
                            <h3>Vision</h3>
                            <p>At Capital X Ventures, we are driven by a clear and ambitious vision: "To be the Leading Debt Management Partner for Nigerian Corperations". this vision is a testament to our unwavering commitment to becoming the foremost debt management partner for businesses in Nigeria. We aspire to set industry standards and play a piivotal role in facilitating financial growth and prosperity for our clients.</p>
                        </div>
                        <div className='about_mission'>
                            <h3>Mission</h3>
                            <p>Empowering our partners and businesses burdened by debt to regain financial control by providing personalized solutions, comprehensive education, and unwavering support, paving the path towards financial freedom and a brighter future.</p>
                        </div>
                    </div>
                </section>
                <section className='about_section_five'>
                    <h1>Unique selling point</h1>
                    <div>
                        <div>
                            <img src={image17} className='about_section_five_image' />
                            <h1>Personalized Approach</h1>
                            <p> What truly sets Capital X Ventures apart is our personal touch. We treat each client with the attention and care they deserve. Our clients are not just numbers; they are partners, amd we build relaltionships based on trust and a genuine desire to see them succeed</p>
                        </div>
                        <div>
                            <img src={image15} className='about_section_five_image' />
                            <h1>Industry expertise</h1>
                            <p>With our extensive experience in the Nigerian financial sector, we are uniquely positioned to navigate the intricacies of the local market. Our in-depth industry knowledge allows us to offer insights and strategies that are finely tuned to the specific challenges and opportunities around Nigeria.</p>
                        </div>
                        <div>
                            <img src={image16} className='about_section_five_image' />
                            <h1>Local and Global Reach</h1>
                            <p>Capital X Ventures operates both locally in Nigeria and on a global scale. This dual presence allows us to serve clients wherever they conduct business. We can provide local insights and solutions while also leveraging a global perspective to ensure the best outcomes of our clients</p>
                        </div>
                        <div>
                            <img src={image18} className='about_section_five_image' />
                            <h1>Tailored Solutions</h1>
                            <p>Our approach is centered on crafting personalized financial strategies that align with each client's unique objectives, risk tolerance, and financial situation. Our commitment to tailored solutions ensures that our clients receive the best possible financial support and guidance</p>
                        </div>
                    </div>
                </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About