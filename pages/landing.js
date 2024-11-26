import React, { Fragment } from 'react'
import Head from 'next/head'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'

const Landing = (props) => {
  return (
    <>
      <div className="landing-container">
        <Head>
          <title>Landing - Apollonlab | Product design agency</title>
          <meta
            name="description"
            content="Apollonlab | Product design agency based in Antananarivo Madagascar, specialized in UX UI Design and No-code"
          />
          <meta
            property="og:title"
            content="Landing - Apollonlab | Product design agency "
          />
          <meta
            property="og:description"
            content="Apollonlab | Product design agency based in Antananarivo Madagascar, specialized in UX UI Design and No-code"
          />
        </Head>
        <Navbar8
          page4Description={
            <Fragment>
              <span className="landing-text100">Page Four Description</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="landing-text101">Main Action</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="landing-text102">#about</span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="landing-text103">Home</span>
            </Fragment>
          }
          link1={
            <Fragment>
              <span className="landing-text104">#home</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="landing-text105">Contact</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="landing-text106">About Us</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="landing-text107">#contact</span>
            </Fragment>
          }
          page1Description={
            <Fragment>
              <span className="landing-text108">Page One Description</span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="landing-text109">Page Two Description</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="landing-text110">#services</span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="landing-text111">Services</span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="landing-text112">Page Three Description</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="landing-text113">Secondary Action</span>
            </Fragment>
          }
        ></Navbar8>
        <Hero17
          action2={
            <Fragment>
              <span className="landing-text114">Learn More</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="landing-text115">Sign Up Now</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="landing-text116">
                Welcome to our Landing Page
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="landing-text117">
                Discover amazing products and services tailored just for you.
              </span>
            </Fragment>
          }
        ></Hero17>
        <Features24
          feature3Description={
            <Fragment>
              <span className="landing-text118">Description for Feature 3</span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="landing-text119">Feature 3 Title</span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="landing-text120">Description for Feature 2</span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="landing-text121">Feature 1 Title</span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="landing-text122">Description for Feature 1</span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="landing-text123">Feature 2 Title</span>
            </Fragment>
          }
        ></Features24>
        <CTA26
          heading1={
            <Fragment>
              <span className="landing-text124">
                Ready to boost your productivity?
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="landing-text125">
                Sign up now and start organizing your tasks efficiently!
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="landing-text126">Sign Up Now</span>
            </Fragment>
          }
        ></CTA26>
        <Features25
          feature3Description={
            <Fragment>
              <span className="landing-text127">
                Dedicated support team available round the clock to assist you
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="landing-text128">
                Top-notch security measures to keep your data safe
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="landing-text129">User-Friendly Interface</span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="landing-text130">Advanced Security</span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="landing-text131">
                Intuitive and easy-to-use interface for seamless navigation
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="landing-text132">24/7 Customer Support</span>
            </Fragment>
          }
        ></Features25>
        <Pricing14
          plan3Price={
            <Fragment>
              <span className="landing-text133">$29.99/month</span>
            </Fragment>
          }
          plan3Action={
            <Fragment>
              <span className="landing-text134">Sign up now</span>
            </Fragment>
          }
          plan11={
            <Fragment>
              <span className="landing-text135">Basic plan</span>
            </Fragment>
          }
          plan1Action={
            <Fragment>
              <span className="landing-text136">Sign up now</span>
            </Fragment>
          }
          plan31={
            <Fragment>
              <span className="landing-text137">Enterprise plan</span>
            </Fragment>
          }
          plan3Feature41={
            <Fragment>
              <span className="landing-text138">Feature text goes here</span>
            </Fragment>
          }
          plan1Feature2={
            <Fragment>
              <span className="landing-text139">Feature 2 included</span>
            </Fragment>
          }
          plan2Feature11={
            <Fragment>
              <span className="landing-text140">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature51={
            <Fragment>
              <span className="landing-text141">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature41={
            <Fragment>
              <span className="landing-text142">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature2={
            <Fragment>
              <span className="landing-text143">Feature 2 included</span>
            </Fragment>
          }
          plan3Feature21={
            <Fragment>
              <span className="landing-text144">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature4={
            <Fragment>
              <span className="landing-text145">Feature text goes here</span>
            </Fragment>
          }
          plan2Yearly={
            <Fragment>
              <span className="landing-text146">or $299 yearly</span>
            </Fragment>
          }
          plan1Action1={
            <Fragment>
              <span className="landing-text147">Get started</span>
            </Fragment>
          }
          plan2Action={
            <Fragment>
              <span className="landing-text148">Sign up now</span>
            </Fragment>
          }
          plan3Feature1={
            <Fragment>
              <span className="landing-text149">Feature 1 included</span>
            </Fragment>
          }
          plan2Feature3={
            <Fragment>
              <span className="landing-text150">Feature text goes here</span>
            </Fragment>
          }
          plan1Price1={
            <Fragment>
              <span className="landing-text151">$200/yr</span>
            </Fragment>
          }
          plan2={
            <Fragment>
              <span className="landing-text152">Business plan</span>
            </Fragment>
          }
          plan2Feature21={
            <Fragment>
              <span className="landing-text153">Feature text goes here</span>
            </Fragment>
          }
          plan2Action1={
            <Fragment>
              <span className="landing-text154">Get started</span>
            </Fragment>
          }
          plan3Feature2={
            <Fragment>
              <span className="landing-text155">Feature 2 included</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="landing-text156">
                Choose the perfect plan for you
              </span>
            </Fragment>
          }
          plan2Feature1={
            <Fragment>
              <span className="landing-text157">Feature 1 included</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="landing-text158">Pricing plan</span>
            </Fragment>
          }
          plan3Feature31={
            <Fragment>
              <span className="landing-text159">Feature text goes here</span>
            </Fragment>
          }
          plan1={
            <Fragment>
              <span className="landing-text160">Basic plan</span>
            </Fragment>
          }
          plan21={
            <Fragment>
              <span className="landing-text161">Business plan</span>
            </Fragment>
          }
          plan1Feature11={
            <Fragment>
              <span className="landing-text162">Feature text goes here</span>
            </Fragment>
          }
          plan1Feature21={
            <Fragment>
              <span className="landing-text163">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature5={
            <Fragment>
              <span className="landing-text164">Feature text goes here</span>
            </Fragment>
          }
          plan2Yearly1={
            <Fragment>
              <span className="landing-text165">or $29 monthly</span>
            </Fragment>
          }
          plan2Price={
            <Fragment>
              <span className="landing-text166">$19.99/month</span>
            </Fragment>
          }
          plan3Yearly1={
            <Fragment>
              <span className="landing-text167">or $49 monthly</span>
            </Fragment>
          }
          plan2Feature31={
            <Fragment>
              <span className="landing-text168">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature11={
            <Fragment>
              <span className="landing-text169">Feature text goes here</span>
            </Fragment>
          }
          plan1Yearly1={
            <Fragment>
              <span className="landing-text170">or $20 monthly</span>
            </Fragment>
          }
          plan2Price1={
            <Fragment>
              <span className="landing-text171">$299/yr</span>
            </Fragment>
          }
          plan3Yearly={
            <Fragment>
              <span className="landing-text172">or $499 yearly</span>
            </Fragment>
          }
          plan3Feature4={
            <Fragment>
              <span className="landing-text173">Feature text goes here</span>
            </Fragment>
          }
          plan3Price1={
            <Fragment>
              <span className="landing-text174">$499/yr</span>
            </Fragment>
          }
          plan1Feature31={
            <Fragment>
              <span className="landing-text175">Feature text goes here</span>
            </Fragment>
          }
          plan1Feature3={
            <Fragment>
              <span className="landing-text176">Feature text goes here</span>
            </Fragment>
          }
          plan1Yearly={
            <Fragment>
              <span className="landing-text177">or $200 yearly</span>
            </Fragment>
          }
          plan1Feature1={
            <Fragment>
              <span className="landing-text178">Feature 1 included</span>
            </Fragment>
          }
          plan3Feature3={
            <Fragment>
              <span className="landing-text179">Feature text goes here</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="landing-text180">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </Fragment>
          }
          plan3Action1={
            <Fragment>
              <span className="landing-text183">Get started</span>
            </Fragment>
          }
          plan1Price={
            <Fragment>
              <span className="landing-text184">$9.99/month</span>
            </Fragment>
          }
          plan3={
            <Fragment>
              <span className="landing-text185">Enterprise plan</span>
            </Fragment>
          }
        ></Pricing14>
        <Steps2
          step1Description={
            <Fragment>
              <span className="landing-text186">
                Create an account by providing your email and setting up a
                password.
              </span>
            </Fragment>
          }
          step3Description={
            <Fragment>
              <span className="landing-text187">
                Begin using the platform by customizing your profile and
                settings.
              </span>
            </Fragment>
          }
          step2Title={
            <Fragment>
              <span className="landing-text188">Step 2: Explore Features</span>
            </Fragment>
          }
          step2Description={
            <Fragment>
              <span className="landing-text189">
                Discover all the amazing features and functionalities our
                platform offers.
              </span>
            </Fragment>
          }
          step1Title={
            <Fragment>
              <span className="landing-text190">Step 1: Sign Up</span>
            </Fragment>
          }
          step3Title={
            <Fragment>
              <span className="landing-text191">Step 3: Start Using</span>
            </Fragment>
          }
          step4Description={
            <Fragment>
              <span className="landing-text192">
                Start enjoying the benefits of our platform and make the most
                out of it.
              </span>
            </Fragment>
          }
          step4Title={
            <Fragment>
              <span className="landing-text193">Step 4: Enjoy!</span>
            </Fragment>
          }
        ></Steps2>
        <Testimonial17
          author2Position={
            <Fragment>
              <span className="landing-text194">
                Marketing Manager, XYZ Inc.
              </span>
            </Fragment>
          }
          author1Position={
            <Fragment>
              <span className="landing-text195">CEO, Company ABC</span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="landing-text196">John Doe</span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="landing-text197">David Johnson</span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="landing-text198">
                I highly recommend this service to anyone looking to streamline
                their operations. The support team is also very responsive.
              </span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="landing-text199">Jane Smith</span>
            </Fragment>
          }
          author4Position={
            <Fragment>
              <span className="landing-text200">COO, Innovation Co.</span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="landing-text201">Sarah Brown</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="landing-text202">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </Fragment>
          }
          author3Position={
            <Fragment>
              <span className="landing-text203">CTO, Tech Solutions Ltd.</span>
            </Fragment>
          }
          review1={
            <Fragment>
              <span className="landing-text204">
                Great experience with the product! It has helped our team
                increase productivity and efficiency.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="landing-text205">What Our Customers Say</span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="landing-text206">
                The platform is user-friendly and has exceeded our expectations.
                Our clients are also impressed with the results.
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="landing-text207">
                We have seen a significant improvement in our project management
                since using this tool. It has been a game-changer for us.
              </span>
            </Fragment>
          }
        ></Testimonial17>
        <Contact10
          content1={
            <Fragment>
              <span className="landing-text208">
                Have any questions or inquiries? Feel free to reach out to us.
              </span>
            </Fragment>
          }
          location1Description={
            <Fragment>
              <span className="landing-text209">
                123 Main Street, City, Country
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="landing-text210">Contact Us</span>
            </Fragment>
          }
          location2Description={
            <Fragment>
              <span className="landing-text211">
                456 Support Street, City, Country
              </span>
            </Fragment>
          }
          location1={
            <Fragment>
              <span className="landing-text212">Headquarters</span>
            </Fragment>
          }
          location2={
            <Fragment>
              <span className="landing-text213">Support Center</span>
            </Fragment>
          }
        ></Contact10>
        <Footer4
          link5={
            <Fragment>
              <span className="landing-text214">FAQ</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="landing-text215">Services</span>
            </Fragment>
          }
          link1={
            <Fragment>
              <span className="landing-text216">Home</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="landing-text217">Terms and Conditions</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="landing-text218">About Us</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="landing-text219">Contact Us</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="landing-text220">Cookies Policy</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="landing-text221">Privacy Policy</span>
            </Fragment>
          }
        ></Footer4>
      </div>
      <style jsx>
        {`
          .landing-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .landing-text100 {
            display: inline-block;
          }
          .landing-text101 {
            display: inline-block;
          }
          .landing-text102 {
            display: inline-block;
          }
          .landing-text103 {
            display: inline-block;
          }
          .landing-text104 {
            display: inline-block;
          }
          .landing-text105 {
            display: inline-block;
          }
          .landing-text106 {
            display: inline-block;
          }
          .landing-text107 {
            display: inline-block;
          }
          .landing-text108 {
            display: inline-block;
          }
          .landing-text109 {
            display: inline-block;
          }
          .landing-text110 {
            display: inline-block;
          }
          .landing-text111 {
            display: inline-block;
          }
          .landing-text112 {
            display: inline-block;
          }
          .landing-text113 {
            display: inline-block;
          }
          .landing-text114 {
            display: inline-block;
          }
          .landing-text115 {
            display: inline-block;
          }
          .landing-text116 {
            display: inline-block;
          }
          .landing-text117 {
            display: inline-block;
          }
          .landing-text118 {
            display: inline-block;
          }
          .landing-text119 {
            display: inline-block;
          }
          .landing-text120 {
            display: inline-block;
          }
          .landing-text121 {
            display: inline-block;
          }
          .landing-text122 {
            display: inline-block;
          }
          .landing-text123 {
            display: inline-block;
          }
          .landing-text124 {
            display: inline-block;
          }
          .landing-text125 {
            display: inline-block;
          }
          .landing-text126 {
            display: inline-block;
          }
          .landing-text127 {
            display: inline-block;
          }
          .landing-text128 {
            display: inline-block;
          }
          .landing-text129 {
            display: inline-block;
          }
          .landing-text130 {
            display: inline-block;
          }
          .landing-text131 {
            display: inline-block;
          }
          .landing-text132 {
            display: inline-block;
          }
          .landing-text133 {
            display: inline-block;
          }
          .landing-text134 {
            display: inline-block;
          }
          .landing-text135 {
            display: inline-block;
          }
          .landing-text136 {
            display: inline-block;
          }
          .landing-text137 {
            display: inline-block;
          }
          .landing-text138 {
            display: inline-block;
          }
          .landing-text139 {
            display: inline-block;
          }
          .landing-text140 {
            display: inline-block;
          }
          .landing-text141 {
            display: inline-block;
          }
          .landing-text142 {
            display: inline-block;
          }
          .landing-text143 {
            display: inline-block;
          }
          .landing-text144 {
            display: inline-block;
          }
          .landing-text145 {
            display: inline-block;
          }
          .landing-text146 {
            display: inline-block;
          }
          .landing-text147 {
            display: inline-block;
          }
          .landing-text148 {
            display: inline-block;
          }
          .landing-text149 {
            display: inline-block;
          }
          .landing-text150 {
            display: inline-block;
          }
          .landing-text151 {
            display: inline-block;
          }
          .landing-text152 {
            display: inline-block;
          }
          .landing-text153 {
            display: inline-block;
          }
          .landing-text154 {
            display: inline-block;
          }
          .landing-text155 {
            display: inline-block;
          }
          .landing-text156 {
            display: inline-block;
          }
          .landing-text157 {
            display: inline-block;
          }
          .landing-text158 {
            display: inline-block;
          }
          .landing-text159 {
            display: inline-block;
          }
          .landing-text160 {
            display: inline-block;
          }
          .landing-text161 {
            display: inline-block;
          }
          .landing-text162 {
            display: inline-block;
          }
          .landing-text163 {
            display: inline-block;
          }
          .landing-text164 {
            display: inline-block;
          }
          .landing-text165 {
            display: inline-block;
          }
          .landing-text166 {
            display: inline-block;
          }
          .landing-text167 {
            display: inline-block;
          }
          .landing-text168 {
            display: inline-block;
          }
          .landing-text169 {
            display: inline-block;
          }
          .landing-text170 {
            display: inline-block;
          }
          .landing-text171 {
            display: inline-block;
          }
          .landing-text172 {
            display: inline-block;
          }
          .landing-text173 {
            display: inline-block;
          }
          .landing-text174 {
            display: inline-block;
          }
          .landing-text175 {
            display: inline-block;
          }
          .landing-text176 {
            display: inline-block;
          }
          .landing-text177 {
            display: inline-block;
          }
          .landing-text178 {
            display: inline-block;
          }
          .landing-text179 {
            display: inline-block;
          }
          .landing-text180 {
            display: inline-block;
          }
          .landing-text183 {
            display: inline-block;
          }
          .landing-text184 {
            display: inline-block;
          }
          .landing-text185 {
            display: inline-block;
          }
          .landing-text186 {
            display: inline-block;
          }
          .landing-text187 {
            display: inline-block;
          }
          .landing-text188 {
            display: inline-block;
          }
          .landing-text189 {
            display: inline-block;
          }
          .landing-text190 {
            display: inline-block;
          }
          .landing-text191 {
            display: inline-block;
          }
          .landing-text192 {
            display: inline-block;
          }
          .landing-text193 {
            display: inline-block;
          }
          .landing-text194 {
            display: inline-block;
          }
          .landing-text195 {
            display: inline-block;
          }
          .landing-text196 {
            display: inline-block;
          }
          .landing-text197 {
            display: inline-block;
          }
          .landing-text198 {
            display: inline-block;
          }
          .landing-text199 {
            display: inline-block;
          }
          .landing-text200 {
            display: inline-block;
          }
          .landing-text201 {
            display: inline-block;
          }
          .landing-text202 {
            display: inline-block;
          }
          .landing-text203 {
            display: inline-block;
          }
          .landing-text204 {
            display: inline-block;
          }
          .landing-text205 {
            display: inline-block;
          }
          .landing-text206 {
            display: inline-block;
          }
          .landing-text207 {
            display: inline-block;
          }
          .landing-text208 {
            display: inline-block;
          }
          .landing-text209 {
            display: inline-block;
          }
          .landing-text210 {
            display: inline-block;
          }
          .landing-text211 {
            display: inline-block;
          }
          .landing-text212 {
            display: inline-block;
          }
          .landing-text213 {
            display: inline-block;
          }
          .landing-text214 {
            display: inline-block;
          }
          .landing-text215 {
            display: inline-block;
          }
          .landing-text216 {
            display: inline-block;
          }
          .landing-text217 {
            display: inline-block;
          }
          .landing-text218 {
            display: inline-block;
          }
          .landing-text219 {
            display: inline-block;
          }
          .landing-text220 {
            display: inline-block;
          }
          .landing-text221 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Landing
