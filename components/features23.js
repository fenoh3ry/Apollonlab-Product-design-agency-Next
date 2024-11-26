import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Features23 = (props) => {
  return (
    <>
      <div className="features23-layout349 thq-section-padding">
        <div className="features23-max-width thq-section-max-width">
          <div className="features23-container1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="features23-text35">Discover</span>
                </Fragment>
              )}
            </h2>
            <span className="features23-text11 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="features23-text26">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
            <button className="thq-button-filled features23-button">
              <span className="thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="features23-text31">Main action</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
          <div className="thq-grid-3">
            <div className="features23-container3 thq-card">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="features23-image1 thq-img-round"
              />
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features23-text36">Powerful Tools</span>
                  </Fragment>
                )}
              </h2>
              <span className="features23-text13 thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features23-text34">
                      Access a set of powerful tools to enhance your
                      productivity.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features23-container4 thq-card">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="features23-image2 thq-img-round"
              />
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features23-text27">
                      User-Friendly Interface
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="features23-text15 thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features23-text33">
                      Enjoy a user-friendly interface that makes navigation
                      seamless.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features23-container5 thq-card">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="features23-image3 thq-img-round"
              />
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features23-text24">Real-Time Updates</span>
                  </Fragment>
                )}
              </h2>
              <span className="features23-text17 thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features23-text32">
                      Receive real-time updates and stay informed at all times.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features23-container6 thq-card">
              <img
                alt={props.feature4ImageAlt}
                src={props.feature4ImageSrc}
                className="features23-image4 thq-img-round"
              />
              <h2 className="thq-heading-2">
                {props.feature4Title ?? (
                  <Fragment>
                    <span className="features23-text38">
                      Secure Data Encryption
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="features23-text19 thq-body-small">
                {props.feature4Description ?? (
                  <Fragment>
                    <span className="features23-text25">
                      Rest assured with secure data encryption for your privacy.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features23-container7 thq-card">
              <img
                alt={props.feature5ImageAlt}
                src={props.feature5ImageSrc}
                className="features23-image5 thq-img-round"
              />
              <h2 className="thq-heading-2">
                {props.feature5Title ?? (
                  <Fragment>
                    <span className="features23-text37">
                      24/7 Customer Support
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="features23-text21 thq-body-small">
                {props.feature5Description ?? (
                  <Fragment>
                    <span className="features23-text29">
                      Get assistance whenever you need it with our 24/7 customer
                      support.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features23-container8 thq-card">
              <img
                alt={props.feature6ImageAlt}
                src={props.feature6ImageSrc}
                className="features23-image6 thq-img-round"
              />
              <h2 className="thq-heading-2">
                {props.feature6Title ?? (
                  <Fragment>
                    <span className="features23-text28">
                      Customizable Settings
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="features23-text23 thq-body-small">
                {props.feature6Description ?? (
                  <Fragment>
                    <span className="features23-text30">
                      Tailor the settings to suit your preferences and workflow.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features23-layout349 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .features23-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .features23-container1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .features23-text11 {
            text-align: center;
          }
          .features23-container3 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: flex-start;
            box-shadow: 2px 2px 4px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-accent1);
          }
          .features23-image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .features23-text13 {
            text-align: left;
          }
          .features23-container4 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: flex-start;
            box-shadow: 2px 2px 4px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-accent2);
          }
          .features23-image2 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .features23-text15 {
            text-align: left;
          }
          .features23-container5 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: flex-start;
            box-shadow: 2px 2px 4px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-accent1);
          }
          .features23-image3 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .features23-text17 {
            text-align: left;
          }
          .features23-container6 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: flex-start;
            box-shadow: 2px 2px 4px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-accent2);
          }
          .features23-image4 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .features23-text19 {
            text-align: left;
          }
          .features23-container7 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: flex-start;
            box-shadow: 2px 2px 4px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-accent1);
          }
          .features23-image5 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .features23-text21 {
            text-align: left;
          }
          .features23-container8 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: flex-start;
            box-shadow: 2px 2px 4px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-accent2);
          }
          .features23-image6 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .features23-text23 {
            text-align: left;
          }
          .features23-text24 {
            display: inline-block;
          }
          .features23-text25 {
            display: inline-block;
          }
          .features23-text26 {
            display: inline-block;
          }
          .features23-text27 {
            display: inline-block;
          }
          .features23-text28 {
            display: inline-block;
          }
          .features23-text29 {
            display: inline-block;
          }
          .features23-text30 {
            display: inline-block;
          }
          .features23-text31 {
            display: inline-block;
          }
          .features23-text32 {
            display: inline-block;
          }
          .features23-text33 {
            display: inline-block;
          }
          .features23-text34 {
            display: inline-block;
          }
          .features23-text35 {
            display: inline-block;
          }
          .features23-text36 {
            display: inline-block;
          }
          .features23-text37 {
            display: inline-block;
          }
          .features23-text38 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features23-max-width {
              flex-direction: column;
            }
            .features23-container1 {
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .features23-container1 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .features23-container3 {
              width: 100%;
            }
            .features23-container4 {
              width: 100%;
            }
            .features23-container5 {
              width: 100%;
            }
            .features23-container6 {
              width: 100%;
            }
            .features23-container7 {
              width: 100%;
            }
            .features23-container8 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .features23-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .features23-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features23.defaultProps = {
  feature6ImageAlt: 'Customizable Settings Image',
  feature3Title: undefined,
  feature2ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  feature4Description: undefined,
  content1: undefined,
  feature4ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  feature2Title: undefined,
  feature6Title: undefined,
  feature1ImageAlt: 'Powerful Tools Image',
  feature5Description: undefined,
  feature6Description: undefined,
  action1: undefined,
  feature3Description: undefined,
  feature4ImageAlt: 'Secure Data Encryption Image',
  feature3ImageAlt: 'Real-Time Updates Image',
  feature2Description: undefined,
  feature2ImageAlt: 'User-Friendly Interface Image',
  feature5ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  feature1Description: undefined,
  heading1: undefined,
  feature5ImageAlt: 'Customer Support Image',
  feature1Title: undefined,
  feature1ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  feature6ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  feature5Title: undefined,
  feature3ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  feature4Title: undefined,
}

Features23.propTypes = {
  feature6ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature4Description: PropTypes.element,
  content1: PropTypes.element,
  feature4ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature6Title: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature5Description: PropTypes.element,
  feature6Description: PropTypes.element,
  action1: PropTypes.element,
  feature3Description: PropTypes.element,
  feature4ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  heading1: PropTypes.element,
  feature5ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature6ImageSrc: PropTypes.string,
  feature5Title: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature4Title: PropTypes.element,
}

export default Features23
