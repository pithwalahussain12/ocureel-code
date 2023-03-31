import React from 'react';
import { Link } from 'react-router-dom';
import theme from '../../assets/Got_questions.png'
import Accordion from './QuestionsAccordion'
import SnapScroll from './ScrollSnap';
import { BsCheckLg } from "react-icons/bs"
import './style.css';

const TextContent = () => {

    const questions = [
        {
            title: "What is Ocureel?",
            content: "An ocureel (ah-cue-real) is a video where you can be seen for who you really are. "
        },
        {
            title: "How do I play?",
            content: "Ocureel guides the content you watch and record but ultimately, you get to CHOOSE YOUR ADVENTURE! What path will you take? You can Reveal, Freestyle, play the daily Challenge or LINK up with our 1-on-1 game."
        },
        {
            title: "Still scared?",
            content: "Are you ready to share your story but aren’t ready for anyone to know it’s you? You can still play! Our unique masking feature allows you to post a video and hide your identity. When you’re ready, you can remove the mask and reveal yourself! If you’re never ready… that’s ok too!"
        },
        {
            title: "How do I find genuine friends?",
            content: "LINKS are our 1-on-1 connection game designed to take the guesswork out of making deep connections. Wether you are looking to connect on a deeper level with your existing friends, kids, parents, partner, spouse, etc. or are trying to meet new people, we've got you covered! "
        },
        {
            title: "How do I play the daily challenge?",
            content: "Ocureel will keep you on your toes! At a random time each day you will receive a notification to record the daily challenge. Each challenge is worth a different amount of points and every day you'll have a different amount of time to record. Launch the camera with 1 second left and you'll earn points for posting! If you miss the time window you can still play for fun!"
        }
    ]

    return (
        <div className='play__container'>
            <SnapScroll />
            <div className="play__card1">
                <div className="play__card1_section1">
                    <h1 className="play__card1__title">It's time for a BIG change!</h1>
                    <p className='play__card1__text__content'>Are you tired of feeling bad about yourself after scrolling for hours on social media?</p>
                    <p className='play__card1__text__content'>Were you having a good day until you saw someone post about their:</p>
                    <p className='play__card1__styled__content'>shiny new car <br /> cookie cutter house <br /> smokin' hot spouse <br /> perfect kids <br /> adorable puppy <br /> new girlfriend or boyfriend <br /> or their bangin body?</p>
                </div>
                <div className="play__card1__section2">
                    <p className='play__card1__section2__text'>And then all of a sudden your life seemed super lame?! Do you hate the pressure to constantly use filters to show a flawless version of yourself?</p>
                    <h3>YEAH… US TOO AND WE HAD ENOUGH!</h3>
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
                    <img src={theme} alt="" />
                </div>
            </div>





            <div className="play__card3">
                <div className="play__card3__section1">
                    <h1 className="play__card3__title">Looking for something?</h1>
                    <div>
                        <h4>Need some inspiration?</h4>
                        <p>Share who I really am?! You’re not supposed to do that… If this sounds scary, don't worry! You always get to see other people go first. Watch other people who have played the game before you take the leap.</p>
                        <button className='play__card3__btn bg-black'><Link to="/get-inspired" style={{ textDecoration: 'none', color: "white" }}>Get Inspired</Link></button>
                    </div>
                </div>
                <div className="play__card3__section2">
                    <div className="play__card3__section2__header">
                        <h4>How do you earn points on Ocureel?</h4>
                        <p>By being awesome and contributing!</p>
                    </div>
                    <p className='play__card3__section2__subheader'>There are a ton of ways to earn points and move up the leaderboard.</p>

                    <div className="play__card3__points">
                        <div><BsCheckLg className='check__mark'/><p>As you play the game, you'll earn points for each ocureel you post!</p></div>

                        <div><BsCheckLg className='check__mark'/><p>Each question in the game is worth different points. The deeper you go, <br /> the more points you’ll earn! </p></div>
                        <div><BsCheckLg className='check__mark'/><p>On Ocureel, your status is based off being real & authentic. and NOT how <br />  good you look!</p></div>

                        <div><BsCheckLg className='check__mark'/><p>It's time to share YOU! Don’t be boring and just be a spectator, <br />  contribute to Ocureel and play the game!!</p></div>

                        <div><BsCheckLg className='check__mark'/><p>Check out the Leaderboard to see how you can earn more points!</p></div>
                        <button className='play__card3__btn bg-black'><Link to="/leaderboard" style={{ textDecoration: 'none', color: "white" }}>Leaderboard</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextContent;
