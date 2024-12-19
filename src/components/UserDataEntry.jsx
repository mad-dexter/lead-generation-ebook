import { motion } from "motion/react";
import { useState } from "react";

function UserDataEntry() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section className="bg-[#E0F2F1] py-16 text-center" id="form">
      <h2 className="mb-12 text-center font-header text-5xl font-bold tracking-wide text-[#004D40]">
        Claim Your Free E-Book Now!
      </h2>
      <div className="grid gap-2 md:grid-cols-2">
        <div className="hidden items-center justify-center md:flex">
          <img
            src="/assets/form.jpg"
            alt="Form"
            className="w-[90%] rounded-2xl shadow-2xl"
          />
        </div>

        <div id="mc_embed_signup">
          <form
            action="https://gmail.us17.list-manage.com/subscribe/post?u=128915dd612926d64274a7a7b&amp;id=5ea6b2fd99&amp;f_id=00a2c2e1f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate mt-8 flex flex-col items-center gap-4 px-10"
          >
            <div id="mc_embed_signup_scroll">
              <h2></h2>
              <div className="indicates-required">
                <span className="asterisk">*</span> indicates required
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">
                  Email Address <span className="asterisk">*</span>
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  className="required email mb-4 w-full rounded-lg border-2 px-4 py-3 text-center focus:outline-none focus:ring-2 focus:ring-[#45a049] focus:ring-offset-2 focus:ring-offset-slate-50"
                  id="mce-EMAIL"
                  required=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-FNAME">First Name </label>
                <input
                  type="text"
                  name="FNAME"
                  className="text mb-4 w-full rounded-lg border-2 px-4 py-3 text-center focus:outline-none focus:ring-2 focus:ring-[#45a049] focus:ring-offset-2 focus:ring-offset-slate-50"
                  id="mce-FNAME"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-LNAME">Last Name </label>
                <input
                  type="text"
                  name="LNAME"
                  className="text mb-4 w-full rounded-lg border-2 px-4 py-3 text-center focus:outline-none focus:ring-2 focus:ring-[#45a049] focus:ring-offset-2 focus:ring-offset-slate-50"
                  id="mce-LNAME"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div id="mce-responses" className="clear foot">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                ></div>
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                ></div>
              </div>
              {/* <div
                aria-hidden="true"
                style={{ position: "absolute", left: "-5000px" }}
              >
                <input
                  type="text"
                  name="b_128915dd612926d64274a7a7b_5ea6b2fd99"
                  tabIndex="-1"
                  value=""
                />
              </div> */}
              <div className="optionalParent">
                <div className="clear foot">
                  {/* <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                    value="Subscribe"
                  /> */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.1, backgroundColor: "#00352d" }}
                    whileTap={{ scale: 1, backgroundColor: "#00352d" }}
                    className="button mt-2 w-fit rounded-lg bg-[#004D40] px-6 py-2 text-lg font-semibold text-white shadow-sm transition-all duration-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#45a049] focus:ring-offset-2 focus:ring-offset-slate-50"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    value="Subscribe"
                  >
                    Send Me E-Book
                  </motion.button>
                  <p style={{ margin: "0px auto" }}>
                    <a
                      href="http://eepurl.com/i6xGHk"
                      title="Mailchimp - email marketing made easy and fun"
                    >
                      <span
                        style={{
                          display: "inline-block",
                          backgroundColor: "transparent",
                          borderRadius: "4px",
                        }}
                      >
                        <img
                          className="refferal_badge"
                          src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                          alt="Intuit Mailchimp"
                          style={{
                            width: "220px",
                            height: "40px",
                            display: "flex",
                            padding: "2px 0px",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        />
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default UserDataEntry;
