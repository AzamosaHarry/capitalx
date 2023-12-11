import Footer from './Footer.js';
import Header from './Header.js';
import './Home.css'
import { FaLongArrowAltRight } from 'react-icons/fa'
import image1 from './one.jpg'
import image2 from './two.jpg'
import image3 from './three.jpg'
import image14 from './fourteen.png'
import image9 from './nine.png'
import image10 from './ten.png'
import image11 from './eleven.png'
import image12 from './twelve.png'

import { useNavigate } from 'react-router-dom';

function Home () {
    const navigate = useNavigate()
    return(
        <div className='home'>
            <Header />
            <div className='home_body'>
                <section className='home_section_one'>
                    <div className='home_section_one_div1'>
                    </div>
                    <div className='home_section_one_div2'>
                    </div>
                    <div className='home_section_one_hero'>
                            <h1>Your Journey to a Debt-Free Tomorrow Begins Here.</h1>
                            <p>Welcome to Capital X Ventures, Your Trusted Partner in Corporate Debt Advisory and Management. We Understand Your Challenges, Navigate Your Options, and Chart a Path to Financial Resilience. Take Control of Your Finances with Expert Guidance. Discover Peace of Mind. Explore our Solutions Today.</p>
                            <div className='home_section_one_hero_div'  onClick={() => {navigate('/capital/about')}}>
                                <h3>Learn more</h3>
                                <FaLongArrowAltRight className='home_link_arrow'/>
                            </div>
                        </div>
                </section>
                <section className='home_section_two'>
                    <div className='home_section_two_start'>
                        <h3>Currently sited globally at</h3>
                        <div>
                            <div>
                                <h3>Abuja</h3>
                            </div>
                            <div>
                                <h3>Dubai</h3>
                            </div>
                            <div>
                                <h3>Lagos</h3>
                            </div>
                            <div>
                                <h3>London</h3>
                            </div>
                        </div>
                    </div>
                    <div className='home_section_two_intermediary'>
                        <h1>Discover Capial X</h1>
                        <p>Capital X Ventures is a trusted provider of comprehensive Debt Management and Advisory Services. We offer a wide range of financial solutions to assist businesses in managing and optimizing  thier debt with strong focus on debt restructuring, debt refinancing and financial consulting.</p>
                    </div>
                    <div className='home_section_two_one'>
                        <img src={image1} className='section_two_image' />
                        <div className='home_section_one_div'>
                            <h1>Financial consulting</h1>
                            <p>In today' ever-evolving financial landscape, buinesses require expert guidance to navigate complex financial matters. Our fincancial conulting services are tailored to address the unique needs of each client. Our experienced advisors provide invaluable insights and solutions to help business make informed decisions, mitigate risks, and optimize thier financial strategies. Whether its budgeting, investing or long-term financial planning, we are here to support our clients in achieving thier financial objectives.</p>
                        </div>
                    </div>
                    <div className='home_section_two_two'>
                        <img src={image2} className='section_two_image' />
                        <div className='home_section_two_div'>
                            <h1>Debt restructuring</h1>
                            <p>Our debt restructuring services are meticulously crafted to help businesses organize thier financial obligavions. we understand that financial challenges can arise unexpectedly, and we are here to guide our clients through tough times. By working closely with them , we assist in improving cash flow and financial stability. Our team formulates strategic plans that address the specific requirements of each client, ensuring a tailored approach to debt restructuring.</p>
                        </div>
                    </div>
                    <div className='home_section_two_three'>
                        <img src={image3} className='section_two_image' />
                        <div className='home_section_one_div'>
                            <h1>Debt refinancing</h1>
                            <p>At Capital X Ventures, we specialize in debt refinancing solutions that are designed to ease the financial burden on businesses. By refinancing existing debt, we aim to reducet interest rates and overall costs, while simultaneosly optimizing the financial structure of our clients. Our experts analysze the financial lanscpe and identify opportunities for refinancing that lead to more favorable terms and increased financial flexibility. </p>
                        </div>
                    </div>
                    <div className='home_section_two_intermediary'>
                        <h1>Take control of your finance</h1>
                        <p>Capital X Ventures is a trusted provider of comprehensive Debt Management and Advisory Services. We offer a wide range of financial solutions to assist businesses in managing and optimizing thier debt, with a strong focus on our ultimate objective of delivering end-to-end solutions that cater to the diverse financial needs of clients.</p>
                    </div>
                </section>
                <section className='home_section_three'>
                    <div className='home_section_three_div1'>
                        <div>
                            <img src={image9} className='section_three_image' />
                            <div>
                                <h3>Deep industry knowledge</h3>
                                <p> Capital X Ventures possesses an extensive and profound understanding of the complexities of corporate debt management and the financial markets in Nigeria. This knowledge is the cornerstone of our ability to deliver effective financial solutions to deliver effective financial solutionsto to our clients. </p>
                            </div>
                        </div>
                        <div>
                            <img src={image10} className='section_three_image' />
                            <div>
                                <h3>Commitment to Client Success</h3>
                                <p> We are dedicated to the success of our clients. Our team goes above and beyond to ensure that our clients achieve their fincancial objectives. This commitment is embedded in our corporate culture, making us a reliable and trusted partner in the industry.</p>
                            </div>
                        </div>
                        <div>
                            <img src={image11} className='section_three_image' />
                            <div>
                                <h3>Tailored Financial Solutions</h3>
                                <p> One of our core competencies is the ability to craft customized financial solutions. We recognize that each client's financial sitaution and goals are unique, and we pride ourselves on creating tailored solutions that specifically meet these individual needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className='home_section_three_div2'>
                        <div className='home_section_three_div2_part1'>
                            <h3>What truly sets Capital X Ventures apart is our personal touch. We treat each client with the attention and care they deserve.</h3>
                            <div className='home_section_one_hero_div' onClick={() => {navigate('/capital/about')}}>
                                <h3>Learn more</h3>
                                <FaLongArrowAltRight className='home_link_arrow'/>
                            </div>
                        </div>
                        <div className='home_section_three_div2_part2'>
                            <img src={image12} className='section_three_image' />
                            <div>
                                <h3>We understand that one-size-fits-all solutions rarely work in finance. this is why our approach is centered on crafting personalized financial strategies that align with each client's unique objective, risk tolerance and financial sitaution.</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='home_section_four'>
                    <div className='home_section_four_div1'>
                        <h3>Make things possible</h3>
                        <h1>Carreers at Capital X Ventures</h1>
                        <p>Begin your career with the Capital X 2024 Summer Internship, where your skills can make an impact across our business.</p>
                        <div className='home_section_one_hero_div'>
                            <h3 onClick={() => {navigate('/capital/career')}}>Explore careers</h3>
                            <FaLongArrowAltRight className='home_link_arrow'/>
                        </div>
                    </div>
                    <div className='home_section_four_div2'>
                        <img src={image14} className='section_four_image' />
                    </div>
                </section>
                <section className='home_section_five' id='with-hash-contact'>
                    <h3>How can we help you?</h3>
                    <div className='home_section_one_hero_div' onClick={() => window.location = 'info@capitalx?subject=Get in touch'}>
                        <h3>Get in touch with us today</h3>
                        <FaLongArrowAltRight className='home_link_arrow'/>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Home;