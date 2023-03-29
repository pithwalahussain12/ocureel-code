import React from 'react';
import Accordion from './Accordion';
import styles from './styles.module.css';

function AccordionSectionList() {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.supportHeading}>Support</h1>
        <p>We are committed to making Ocureel an incredible experience for you! If you are having any trouble with our app, please give us the opportunity to help! Check out our Frequently Asked Questions below and if you still need more help, please email us at: support@ocureel.com</p>
      </div>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2>Playing</h2>
          <h5>FREQUENTLY ASKED QUESTIONS</h5>
          <Accordion title="Will I have to watch ads?">
            <p>We do have ads BUT don't worry! You will NEVER have to watch an ad if you don't want to. There are several features that you can unlock by watching an ad which helps us to keep Ocureel running. </p>
          </Accordion>
          <Accordion title="What is the GIFT button?">
            <p>While watching an ocureel, the greatest complement you can give is a GIFT. By watching an ad you can help boost that user's video and you will both receive 25 additional points!</p>
          </Accordion>
          <Accordion title="Can I give more than 1 GIFT?">
            <p>You can give as many GIFTS as you want! By interacting with other user's videos you are contributing to make Ocureel a stronger community. Make someones day and give them a GIFT!</p>
          </Accordion>
          <Accordion title="What happens if I skip a question?">
            <p>Why would you want to do that?! haha If you skip a question we will ask you why. If the question does not apply to you, we will never ask it again. If you just don't want to answer it right now, we will ask it again at a later time.</p>
          </Accordion>
          <Accordion title="Why do I have to watch an ad to skip a question?">
            <p>The game is designed to help you share the real version of yourself. We encourage you to answer all the questions in our game. If you don't want to, that's ok. The ad is designed to add a little friction so you'll decide to answer the question. </p>
          </Accordion>
        </div>
        <div className={styles.section}>
          <h2>Profile</h2>
          <Accordion title="Why do you ask me personal questions when I set up my account?">
            <p>Instead of tracking your every move (like the big guys do), we allow you to provide information about yourself. We never share this information with other users but it does allow you and other users to filter the content you see in your feed. We want you to make deep connections and this allows you to choose what type of people you want to connect with!</p>
          </Accordion>
          <Accordion title="My profile says it is not complete. How do I get that to go away?">
            <p>Your profile will show complete when you have answered all of the demographic questions. You can click the pencil by your profile picture to edit your profile. Here you can click "Edit Your Demographics" to finish all of the questions. </p>
          </Accordion>
        </div>
      </div>
    </>
  );
};


export default AccordionSectionList;
