import React from 'react';
import { Link } from 'react-router-dom';
import theme from '../../assets/Got_questions.png'
import Accordion from './QuestionsAccordion'
import SnapScroll from './ScrollSnap';
import './style.css';

const TextContent = () => {

    const questions = [{ title: "What is Ocureel?", content: "Accordion Content 3" }, { title: "How do I play?", content: "Accordion Content 3" }, { title: "Still scared?", content: "Accordion Content 3" }, { title: "How do I find genuine friends?", content: "Accordion Content 3" }, { title: "How do I play the daily challenge?", content: "Accordion Content 3" }]

    return (
        <div className='play__container'>
            <SnapScroll/>
            <div className="play__card1">
                <div className="play__card1_section1">
                    <h1 className="play__card1__title">It's time for a BIG change!</h1>
                    <p className='play__card1__text__content'>Are you tired of feeling bad about yourself after scrolling for hours on social media?</p>
                    <p className='play__card1__text__content'>Were you having a good day until you saw someone post about their:</p>
                    <p className='play__card1__styled__content'>shiny new car <br /> cookie cutter house <br /> smokin' hot spouse <br /> perfect kids <br /> adorable puppy <br /> new girlfriend or boyfriend <br /> or their bangin body?</p>
                </div>
                <div className="play__card1__section2">
                    <p className='play__card1__section2__text'>And then all of a sudden your life seemed super lame?! Do you hate the pressure to constantly use filters to show a flawless version of yourself?</p>
                    <h3>YEAH… WE TOO AND WE HAD ENOUGH!</h3>
                    <p className='play__card1__section2__text__light'>Nobody likes being fake! Well… some people do and they might not like our <br /> game very much.</p>
                    <p className='play__card1__section2__patent'>Our <b>PATENT PENDING</b> game is designed to bring life and help you feel good<br /> about the time you spend on your phone. Ocureel is the <b>ULTIMATE GAME of<br /> QUESTIONS.</b> Where you get to be YOU and nobody can hate on you or make <br /> you feel bad about it!</p>

                    <div className="play__card1__section2__story">
                        <p>On OCUREEL, your <b>STORY</b> matters more than your <b>OPINION!</b> </p>
                        <p className='play__card1__section2__story__text__style'>Be seen for who you really are! Find genuine friends!</p>
                    </div>
                    <h3 className='play_card1__section2__filter'>NO FILTERS! NO HATE! ONLY POSITIVITY!</h3>
                    <div className="play__card1__signature">
                        <h3><b>OCUREEL</b></h3>
                        <p>be SEEN. be YOU.</p>
                    </div>
                </div>
            </div>



            <div className="play__card2">
                <div className="play__card2__section1">
                    <h1 className="play__card2__title">Got questions?</h1>
                    <div>
                        {
                            questions.map(({ title, content }) => (
                                <Accordion
                                    title={title}
                                    content={content}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="play__card2__section2">
                    <img src={theme} alt=""/>
                </div>
            </div>





            <div className="play__card3">
                <div className="play__card3__section1">
                    <h1 className="play__card3__title">Looking for something?</h1>
                    <div>
                        <h4>Need some inspiration?</h4>
                        <p>Share who I really am?! You’re not supposed to do that… If this sounds scary, don't worry! You always get to see other people go first. Watch other people who have played the game before you take the leap.</p>
                        <button className='play__card3__btn'><Link to="/get-inspired" style={{textDecoration: 'none', color: "black"}}>Get Inspired</Link></button>
                    </div>
                </div>
                <div className="play__card3__section2">
                    <div className="play__card3__section2__header">
                        <h4>How do you earn points on Ocureel?</h4>
                        <p>By being awesome and contributing!</p>
                    </div>
                    <p className='play__card3__section2__subheader'>There are a ton of ways to earn points and move up the leaderboard.</p>

                    <div className="play__card3__points">
                        <p>As you play the game, you'll earn points for each ocureel you post!</p>

                        <p>Each question in the game is worth different points. The deeper you go, <br /> the more points you’ll earn! </p>
                        <p>On Ocureel, your status is based off being real & authentic. and NOT how <br />  good you look!</p>

                        <p>It's time to share YOU! Don’t be boring and just be a spectator, <br />  contribute to Ocureel and play the game!!</p>

                        <p>Check out the Leaderboard to see how you can earn more points!</p>
                        <button className='play__card3__btn'><Link to="/leaderboard" style={{textDecoration: 'none', color: "black"}}>Leaderboard</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextContent;
