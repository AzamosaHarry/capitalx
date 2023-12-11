import './Career.css'
import Footer from './Footer'
import Header from './Header'
import careerone from './careerone.webp'
import careertwo from './careertwo.jpg'


function Career () {
    return(
        <div>
            <Header />
            <div className='career_body'>
                <section className='career_section_one'>
                    <h1>You have come to the right place</h1>
                </section>
                <section className='career_section_two'>
                    <img src={careertwo} className='career_image' />
                    <div>
                        <h1>
                            What does it take to create sustainable and inclusive growth?
                        </h1>
                        <p>
                        It takes a lot. Dedication and passion. Boldness and curiosity. Hard skills and soft skills. Some you are born with, and others can be learned through experience or taught. But one thing is certain: Creating impact takes exceptional people who are driven and eager to learn. When you join Capital X, your work will help reshape institutions and industries through technology and innovation. You’ll have a role to play in some of the most important matters of our time, regardless of whether you’re client-facing or not. Every member of our firm is critical to our success.
                        </p>
                    </div>
                </section>
                <section className='career_section_three'>
                    <img src={careerone} className='career_image' />
                    <div>
                        <h1>
                            Exceptional can come from anywhere
                        </h1>
                        <p>
                        At Capital X, we hire people, not degrees. There is no set definition for what exceptional looks like, and we know it can come from anywhere. We believe in your potential, regardless of your pedigree.There are many routes to a career at Capital X, and most of them are unconventional. Whether you built your expertise on the job, learned new skills through an internship, or earned an MBA, experience is experience. We hire people who are brand new to the workforce, as well as ones with decades of proven career success behind them. With big ideas and a wide range of perspectives and life experiences, we want people who are ready to take on new challenges.
                        </p>
                    </div>
                </section>
                <section className='career_section_four'>
                    <h1>" Impact at the firm looks different every day, and that vision is changing every year along with the world around us."</h1>
                </section>
                <section className='career_section_five'>
                    <h1>Start your journey with us</h1>
                    <button>Check for openings</button>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Career;