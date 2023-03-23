import React from 'react'
import "./style.css"

const Index = () => {
  return (
    <div className='subscribe__container'>
      <>

        {/* Begin Mailchimp Signup Form */}
        <link
          href="//cdn-images.mailchimp.com/embedcode/classic-071822.css"
          rel="stylesheet"
          type="text/css"
        />
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:600px;}\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n"
          }}
        />
        <div id="mc_embed_signup subscribe__container">
          <form
            action="https://gmail.us21.list-manage.com/subscribe/post?u=a08311edbcc6614df94ec5072&id=76628f93b0&f_id=006c8fe1f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate=""
          >
            <div id="mc_embed_signup_scroll">
              <h1>Subscribe</h1>

              <div className="indicates-required">
                <p>Subscribe and be the first to know when Ocureel is available to download!</p>
              </div>
              <div className="mc-field-group">
                <input
                  type="email"
                  defaultValue=""
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  required=""
                  placeholder='Email'
                />
                <span id="mce-EMAIL-HELPERTEXT" className="helper_text" />
              </div>
              <div id="mce-responses" className="clear foot">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                />
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                />
              </div>{" "}
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_a08311edbcc6614df94ec5072_76628f93b0"
                  tabIndex={-1}
                  defaultValue=""
                />
              </div>
              <div className="optionalParent">
                <div className="clear foot">
                  <input
                    type="submit"
                    defaultValue="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button subscribe-btn"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        {/*End mc_embed_signup*/}
      </>

    </div>
  )
}

export default Index