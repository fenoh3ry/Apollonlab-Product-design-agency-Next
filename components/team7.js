import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Team7 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="team7-max-width thq-section-max-width">
          <div className="team7-section-title">
            <span className="thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="team7-text37">
                    Join our team and make a difference in your career!
                  </span>
                </Fragment>
              )}
            </span>
            <div className="team7-content10">
              <h2 className="team7-text11 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="team7-text38">Meet our team</span>
                  </Fragment>
                )}
              </h2>
              <p className="team7-text12 thq-body-large">
                {props.content2 ?? (
                  <Fragment>
                    <span className="team7-text51">
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
                )}
              </p>
            </div>
          </div>
          <div className="team7-content11">
            <div className="team7-card1">
              <img
                alt={props.member1Alt}
                src={props.member1Src}
                className="team7-placeholder-image1 thq-img-round thq-img-ratio-1-1"
              />
              <div className="team7-content12">
                <div className="team7-title1">
                  <span className="team7-text13 thq-body-small">
                    {props.member1 ?? (
                      <Fragment>
                        <span className="team7-text44">John Doe</span>
                      </Fragment>
                    )}
                  </span>
                  <span className="team7-text14 thq-body-small">
                    {props.member1Job ?? (
                      <Fragment>
                        <span className="team7-text35">CEO</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <span className="thq-body-small">
                  {props.member1Content ?? (
                    <Fragment>
                      <span className="team7-text45">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="team7-social-icons1">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="thq-icon-small"
                >
                  <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="thq-icon-small"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </div>
            </div>
            <div className="team7-card2">
              <img
                alt={props.member2Alt}
                src={props.member2Src}
                className="team7-placeholder-image2 thq-img-round thq-img-ratio-1-1"
              />
              <div className="team7-content13">
                <div className="team7-title2">
                  <span className="team7-text16 thq-body-small">
                    {props.member2 ?? (
                      <Fragment>
                        <span className="team7-text49">Jane Smith</span>
                      </Fragment>
                    )}
                  </span>
                  <span className="team7-text17 thq-body-small">
                    {props.member2Job ?? (
                      <Fragment>
                        <span className="team7-text39">CTO</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <span className="thq-body-small">
                  {props.member2Content ?? (
                    <Fragment>
                      <span className="team7-text34">
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="team7-social-icons2">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="thq-icon-small"
                >
                  <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="thq-icon-small"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </div>
            </div>
            <div className="team7-card3">
              <img
                alt={props.member3Alt}
                src={props.member3Src}
                className="team7-placeholder-image3 thq-img-round thq-img-ratio-1-1"
              />
              <div className="team7-content14">
                <div className="team7-title3">
                  <span className="team7-text19 thq-body-small">
                    {props.member3 ?? (
                      <Fragment>
                        <span className="team7-text57">Alice Johnson</span>
                      </Fragment>
                    )}
                  </span>
                  <span className="team7-text20 thq-body-small">
                    {props.member3Job ?? (
                      <Fragment>
                        <span className="team7-text54">Lead Developer</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <span className="thq-body-small">
                  {props.member3Content ?? (
                    <Fragment>
                      <span className="team7-text55">
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="team7-social-icons3">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="thq-icon-small"
                >
                  <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="thq-icon-small"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </div>
            </div>
            <div className="team7-card4">
              <img
                alt={props.member4Alt}
                src={props.member4Src}
                className="team7-placeholder-image4 thq-img-round thq-img-ratio-1-1"
              />
              <div className="team7-content15">
                <div className="team7-title4">
                  <span className="team7-text22 thq-body-small">
                    {props.member4 ?? (
                      <Fragment>
                        <span className="team7-text61">Michael Brown</span>
                      </Fragment>
                    )}
                  </span>
                  <span className="team7-text23 thq-body-small">
                    {props.member4Job ?? (
                      <Fragment>
                        <span className="team7-text56">Marketing Manager</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <span className="thq-body-small">
                  {props.member4Content ?? (
                    <Fragment>
                      <span className="team7-text41">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="team7-social-icons4">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="thq-icon-small"
                >
                  <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="thq-icon-small"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </div>
            </div>
            <div className="team7-card5">
              <img
                alt={props.member5Alt}
                src={props.member5Src}
                className="team7-placeholder-image5 thq-img-round thq-img-ratio-1-1"
              />
              <div className="team7-content16">
                <div className="team7-title5">
                  <span className="team7-text25 thq-body-small">
                    {props.member5 ?? (
                      <Fragment>
                        <span className="team7-text40">Emily Davis</span>
                      </Fragment>
                    )}
                  </span>
                  <span className="team7-text26 thq-body-small">
                    {props.member5Job ?? (
                      <Fragment>
                        <span className="team7-text58">Designer</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <span className="thq-body-small">
                  {props.member5Content ?? (
                    <Fragment>
                      <span className="team7-text43">
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="team7-social-icons5">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="thq-icon-small"
                >
                  <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="thq-icon-small"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </div>
            </div>
            <div className="team7-card6">
              <img
                alt={props.member6Alt}
                src={props.member6Src}
                className="team7-placeholder-image6 thq-img-round thq-img-ratio-1-1"
              />
              <div className="team7-content17">
                <div className="team7-title6">
                  <span className="team7-text28 thq-body-small">
                    {props.member6 ?? (
                      <Fragment>
                        <span className="team7-text36">David Wilson</span>
                      </Fragment>
                    )}
                  </span>
                  <span className="team7-text29 thq-body-small">
                    {props.member6Job ?? (
                      <Fragment>
                        <span className="team7-text60">Sales Director</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <span className="thq-body-small">
                  {props.member6Content ?? (
                    <Fragment>
                      <span className="team7-text59">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="team7-social-icons6">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="thq-icon-small"
                >
                  <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="thq-icon-small"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="team7-content18">
            <div className="team7-content19">
              <h2 className="team7-text31 thq-heading-2">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="team7-text42">We’re hiring!</span>
                  </Fragment>
                )}
              </h2>
              <span className="team7-text32 thq-body-small">
                {props.content3 ?? (
                  <Fragment>
                    <span className="team7-text46">
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
                )}
              </span>
            </div>
            <button className="team7-button thq-button-filled">
              <span className="thq-body-small">
                {props.actionContent ?? (
                  <Fragment>
                    <span className="team7-text50">Open positions</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .team7-max-width {
            gap: var(--dl-space-space-fiveunits);
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-section-title {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team7-content10 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team7-text11 {
            align-self: flex-start;
          }
          .team7-text12 {
            align-self: flex-start;
          }
          .team7-content11 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: grid;
            align-items: center;
            justify-content: center;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
          .team7-card1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-placeholder-image1 {
            width: 80px;
            height: 80px;
          }
          .team7-content12 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-title1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-text13 {
            font-style: normal;
            font-weight: 600;
          }
          .team7-text14 {
            text-align: center;
          }
          .team7-social-icons1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team7-card2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-placeholder-image2 {
            width: 80px;
            height: 80px;
          }
          .team7-content13 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team7-title2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-text16 {
            font-style: normal;
            font-weight: 600;
          }
          .team7-text17 {
            text-align: center;
          }
          .team7-social-icons2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team7-card3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-placeholder-image3 {
            width: 80px;
            height: 80px;
          }
          .team7-content14 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team7-title3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-text19 {
            font-style: normal;
            font-weight: 600;
          }
          .team7-text20 {
            text-align: center;
          }
          .team7-social-icons3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team7-card4 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-placeholder-image4 {
            width: 80px;
            height: 80px;
          }
          .team7-content15 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team7-title4 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-text22 {
            font-style: normal;
            font-weight: 600;
          }
          .team7-text23 {
            text-align: center;
          }
          .team7-social-icons4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team7-card5 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-placeholder-image5 {
            width: 80px;
            height: 80px;
          }
          .team7-content16 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team7-title5 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-text25 {
            font-style: normal;
            font-weight: 600;
          }
          .team7-text26 {
            text-align: center;
          }
          .team7-social-icons5 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team7-card6 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-placeholder-image6 {
            width: 80px;
            height: 80px;
          }
          .team7-content17 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team7-title6 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-text28 {
            font-style: normal;
            font-weight: 600;
          }
          .team7-text29 {
            text-align: center;
          }
          .team7-social-icons6 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team7-content18 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-content19 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team7-text31 {
            align-self: flex-start;
            font-stretch: normal;
          }
          .team7-text32 {
            align-self: flex-start;
          }
          .team7-button {
            width: 100%;
            max-width: 300px;
          }
          .team7-text34 {
            display: inline-block;
          }
          .team7-text35 {
            display: inline-block;
          }
          .team7-text36 {
            display: inline-block;
          }
          .team7-text37 {
            display: inline-block;
          }
          .team7-text38 {
            display: inline-block;
          }
          .team7-text39 {
            display: inline-block;
          }
          .team7-text40 {
            display: inline-block;
          }
          .team7-text41 {
            display: inline-block;
          }
          .team7-text42 {
            display: inline-block;
          }
          .team7-text43 {
            display: inline-block;
          }
          .team7-text44 {
            display: inline-block;
          }
          .team7-text45 {
            display: inline-block;
          }
          .team7-text46 {
            display: inline-block;
          }
          .team7-text49 {
            display: inline-block;
          }
          .team7-text50 {
            display: inline-block;
          }
          .team7-text51 {
            display: inline-block;
          }
          .team7-text54 {
            display: inline-block;
          }
          .team7-text55 {
            display: inline-block;
          }
          .team7-text56 {
            display: inline-block;
          }
          .team7-text57 {
            display: inline-block;
          }
          .team7-text58 {
            display: inline-block;
          }
          .team7-text59 {
            display: inline-block;
          }
          .team7-text60 {
            display: inline-block;
          }
          .team7-text61 {
            display: inline-block;
          }
          @media (max-width: 479px) {
            .team7-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Team7.defaultProps = {
  member4Src:
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=1400',
  member2Content: undefined,
  member6Alt: 'Image of David Wilson',
  member3Src:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=1400',
  member1Job: undefined,
  member1Alt: 'Image of John Doe',
  member5Alt: 'Image of Emily Davis',
  member6: undefined,
  content1: undefined,
  member5Src:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=1400',
  heading1: undefined,
  member3Alt: 'Image of Alice Johnson',
  member2Job: undefined,
  member5: undefined,
  member4Content: undefined,
  member2Src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=1400',
  heading2: undefined,
  member5Content: undefined,
  member1: undefined,
  member1Content: undefined,
  content3: undefined,
  member2: undefined,
  actionContent: undefined,
  member6Src:
    'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx1c2VyfGVufDB8fHx8MTcxMDk0MjYxMnww&ixlib=rb-4.0.3&w=1400',
  member1Src:
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=1400',
  content2: undefined,
  member3Job: undefined,
  member3Content: undefined,
  member4Job: undefined,
  member3: undefined,
  member5Job: undefined,
  member6Content: undefined,
  member2Alt: 'Image of Jane Smith',
  member4Alt: 'Image of Michael Brown',
  member6Job: undefined,
  member4: undefined,
}

Team7.propTypes = {
  member4Src: PropTypes.string,
  member2Content: PropTypes.element,
  member6Alt: PropTypes.string,
  member3Src: PropTypes.string,
  member1Job: PropTypes.element,
  member1Alt: PropTypes.string,
  member5Alt: PropTypes.string,
  member6: PropTypes.element,
  content1: PropTypes.element,
  member5Src: PropTypes.string,
  heading1: PropTypes.element,
  member3Alt: PropTypes.string,
  member2Job: PropTypes.element,
  member5: PropTypes.element,
  member4Content: PropTypes.element,
  member2Src: PropTypes.string,
  heading2: PropTypes.element,
  member5Content: PropTypes.element,
  member1: PropTypes.element,
  member1Content: PropTypes.element,
  content3: PropTypes.element,
  member2: PropTypes.element,
  actionContent: PropTypes.element,
  member6Src: PropTypes.string,
  member1Src: PropTypes.string,
  content2: PropTypes.element,
  member3Job: PropTypes.element,
  member3Content: PropTypes.element,
  member4Job: PropTypes.element,
  member3: PropTypes.element,
  member5Job: PropTypes.element,
  member6Content: PropTypes.element,
  member2Alt: PropTypes.string,
  member4Alt: PropTypes.string,
  member6Job: PropTypes.element,
  member4: PropTypes.element,
}

export default Team7
