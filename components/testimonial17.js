import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Testimonial17 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="testimonial17-max-width thq-section-max-width">
          <div className="testimonial17-container10">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="testimonial17-text35">
                    What Our Customers Say
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="testimonial17-text11 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="testimonial17-text32">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="thq-grid-2">
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card1"
                >
                  <div className="testimonial17-container12">
                    <img
                      alt={props.author1Alt}
                      src={props.author1Src}
                      className="testimonial17-image1"
                    />
                    <div className="testimonial17-container13">
                      <strong className="thq-body-large">
                        {props.author1Name ?? (
                          <Fragment>
                            <span className="testimonial17-text26">
                              John Doe
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="thq-body-small">
                        {props.author1Position ?? (
                          <Fragment>
                            <span className="testimonial17-text25">
                              CEO, Company ABC
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial17-text14 thq-body-small">
                    {props.review1 ?? (
                      <Fragment>
                        <span className="testimonial17-text34">
                          Great experience with the product! It has helped our
                          team increase productivity and efficiency.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card2"
                >
                  <div className="testimonial17-container14">
                    <img
                      alt={props.author2Alt}
                      src={props.author2Src}
                      className="testimonial17-image2"
                    />
                    <div className="testimonial17-container15">
                      <strong className="thq-body-large">
                        {props.author2Name ?? (
                          <Fragment>
                            <span className="testimonial17-text29">
                              Jane Smith
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="thq-body-small">
                        {props.author2Position ?? (
                          <Fragment>
                            <span className="testimonial17-text24">
                              Marketing Manager, XYZ Inc.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial17-text17 thq-body-small">
                    {props.review2 ?? (
                      <Fragment>
                        <span className="testimonial17-text28">
                          I highly recommend this service to anyone looking to
                          streamline their operations. The support team is also
                          very responsive.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card3"
                >
                  <div className="testimonial17-container16">
                    <img
                      alt={props.author3Alt}
                      src={props.author3Src}
                      className="testimonial17-image3"
                    />
                    <div className="testimonial17-container17">
                      <strong className="thq-body-large">
                        {props.author3Name ?? (
                          <Fragment>
                            <span className="testimonial17-text27">
                              David Johnson
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="thq-body-small">
                        {props.author3Position ?? (
                          <Fragment>
                            <span className="testimonial17-text33">
                              CTO, Tech Solutions Ltd.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial17-text20 thq-body-small">
                    {props.review3 ?? (
                      <Fragment>
                        <span className="testimonial17-text36">
                          The platform is user-friendly and has exceeded our
                          expectations. Our clients are also impressed with the
                          results.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card4"
                >
                  <div className="testimonial17-container18">
                    <img
                      alt={props.author4Alt}
                      src={props.author4Src}
                      className="testimonial17-image4"
                    />
                    <div className="testimonial17-container19">
                      <strong className="thq-body-large">
                        {props.author4Name ?? (
                          <Fragment>
                            <span className="testimonial17-text31">
                              Sarah Brown
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="thq-body-small">
                        {props.author4Position ?? (
                          <Fragment>
                            <span className="testimonial17-text30">
                              COO, Innovation Co.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial17-text23 thq-body-small">
                    {props.review4 ?? (
                      <Fragment>
                        <span className="testimonial17-text37">
                          We have seen a significant improvement in our project
                          management since using this tool. It has been a
                          game-changer for us.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial17-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial17-container10 {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .testimonial17-text11 {
            text-align: center;
          }
          .testimonial17-container12 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial17-container13 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text14 {
            text-align: left;
          }
          .testimonial17-container14 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image2 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial17-container15 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text17 {
            text-align: left;
          }
          .testimonial17-container16 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image3 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial17-container17 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text20 {
            text-align: left;
          }
          .testimonial17-container18 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image4 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial17-container19 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text23 {
            text-align: left;
          }
          .testimonial17-text24 {
            display: inline-block;
          }
          .testimonial17-text25 {
            display: inline-block;
          }
          .testimonial17-text26 {
            display: inline-block;
          }
          .testimonial17-text27 {
            display: inline-block;
          }
          .testimonial17-text28 {
            display: inline-block;
          }
          .testimonial17-text29 {
            display: inline-block;
          }
          .testimonial17-text30 {
            display: inline-block;
          }
          .testimonial17-text31 {
            display: inline-block;
          }
          .testimonial17-text32 {
            display: inline-block;
          }
          .testimonial17-text33 {
            display: inline-block;
          }
          .testimonial17-text34 {
            display: inline-block;
          }
          .testimonial17-text35 {
            display: inline-block;
          }
          .testimonial17-text36 {
            display: inline-block;
          }
          .testimonial17-text37 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .testimonial17-container10 {
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .testimonial17-container10 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .testimonial17-card1 {
              width: 100%;
            }
            .testimonial17-card2 {
              width: 100%;
            }
            .testimonial17-card3 {
              width: 100%;
            }
            .testimonial17-card4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial17.defaultProps = {
  author2Position: undefined,
  author1Position: undefined,
  author3Alt: 'Image of David Johnson',
  author1Name: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGF2YXRhcnxlbnwwfHx8fDE3MTYzODM1NTJ8MA&ixlib=rb-4.0.3&w=200',
  author3Name: undefined,
  review2: undefined,
  author2Name: undefined,
  author4Position: undefined,
  author4Name: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTY2fDA&ixlib=rb-4.0.3&w=200',
  author1Alt: 'Image of John Doe',
  author2Src:
    'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200',
  author3Src:
    'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200',
  author2Alt: 'Image of Jane Smith',
  author4Alt: 'Image of Sarah Brown',
  content1: undefined,
  author3Position: undefined,
  review1: undefined,
  heading1: undefined,
  review3: undefined,
  review4: undefined,
}

Testimonial17.propTypes = {
  author2Position: PropTypes.element,
  author1Position: PropTypes.element,
  author3Alt: PropTypes.string,
  author1Name: PropTypes.element,
  author1Src: PropTypes.string,
  author3Name: PropTypes.element,
  review2: PropTypes.element,
  author2Name: PropTypes.element,
  author4Position: PropTypes.element,
  author4Name: PropTypes.element,
  author4Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author3Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  content1: PropTypes.element,
  author3Position: PropTypes.element,
  review1: PropTypes.element,
  heading1: PropTypes.element,
  review3: PropTypes.element,
  review4: PropTypes.element,
}

export default Testimonial17
