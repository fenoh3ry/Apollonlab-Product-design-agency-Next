import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Footer5 = (props) => {
  return (
    <>
      <footer className="footer5-footer8 thq-section-padding">
        <div className="footer5-max-width thq-section-max-width">
          <div className="footer5-content">
            <div className="footer5-column">
              <div className="footer5-logo1">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="footer5-logo2"
                />
                <div className="footer5-links">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="thq-body-small"
                  >
                    {props.link1 ?? (
                      <Fragment>
                        <span className="footer5-text14">Home</span>
                      </Fragment>
                    )}
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="thq-body-small"
                  >
                    {props.link2 ?? (
                      <Fragment>
                        <span className="footer5-text19">About Us</span>
                      </Fragment>
                    )}
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="thq-body-small"
                  >
                    {props.link3 ?? (
                      <Fragment>
                        <span className="footer5-text17">Services</span>
                      </Fragment>
                    )}
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="thq-body-small"
                  >
                    {props.link4 ?? (
                      <Fragment>
                        <span className="footer5-text18">Contact Us</span>
                      </Fragment>
                    )}
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="thq-body-small"
                  >
                    {props.link5 ?? (
                      <Fragment>
                        <span className="footer5-text10">FAQs</span>
                      </Fragment>
                    )}
                  </a>
                </div>
              </div>
            </div>
            <div className="footer5-actions1">
              <span className="thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <span className="footer5-text12">
                      Stay updated with our latest news and promotions.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="footer5-actions2">
                <div className="footer5-form">
                  <div className="footer5-container">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="footer5-text-input thq-input"
                    />
                  </div>
                  <button className="thq-button-outline footer5-button">
                    <span className="thq-body-small">
                      {props.action1 ?? (
                        <Fragment>
                          <span className="footer5-text11">Subscribe</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <span className="thq-body-small">
                  {props.content2 ?? (
                    <Fragment>
                      <span className="footer5-text21">
                        Connect with us on social media for more updates.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="footer5-credits">
            <div className="thq-divider-horizontal"></div>
            <div className="footer5-row">
              <div className="footer5-footer-links">
                <span className="thq-body-small">
                  {props.privacyLink ?? (
                    <Fragment>
                      <span className="footer5-text15">/privacy-policy</span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.termsLink ?? (
                    <Fragment>
                      <span className="footer5-text20">
                        /terms-and-conditions
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.cookiesLink ?? (
                    <Fragment>
                      <span className="footer5-text16">/cookies-policy</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <span className="thq-body-small">
                {props.content3 ?? (
                  <Fragment>
                    <span className="footer5-text13">
                      © 2022 Company Name. All Rights Reserved.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer5-footer8 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .footer5-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer5-content {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer5-column {
            gap: 32px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer5-logo1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer5-logo2 {
            height: 2rem;
          }
          .footer5-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
          }
          .footer5-actions1 {
            gap: var(--dl-space-space-unit);
            width: 420px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer5-actions2 {
            gap: 16px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer5-form {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-shrink: 0;
          }
          .footer5-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .footer5-text-input {
            width: 100%;
            height: 32px;
            display: flex;
            font-size: 16px;
            box-sizing: content-box;
            text-align: left;
            align-items: center;
            font-family: Roboto;
            font-weight: 400;
            background-color: transparent;
          }
          .footer5-credits {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .footer5-row {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer5-footer-links {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
          }
          .footer5-text10 {
            display: inline-block;
          }
          .footer5-text11 {
            display: inline-block;
          }
          .footer5-text12 {
            display: inline-block;
          }
          .footer5-text13 {
            display: inline-block;
          }
          .footer5-text14 {
            display: inline-block;
          }
          .footer5-text15 {
            display: inline-block;
          }
          .footer5-text16 {
            display: inline-block;
          }
          .footer5-text17 {
            display: inline-block;
          }
          .footer5-text18 {
            display: inline-block;
          }
          .footer5-text19 {
            display: inline-block;
          }
          .footer5-text20 {
            display: inline-block;
          }
          .footer5-text21 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .footer5-content {
              flex-direction: column;
            }
            .footer5-column {
              width: 100%;
            }
            .footer5-logo1 {
              gap: var(--dl-space-space-oneandhalfunits);
              width: 100%;
              align-items: center;
              margin-bottom: var(--dl-space-space-twounits);
              justify-content: center;
            }
            .footer5-actions1 {
              width: 100%;
            }
            .footer5-form {
              width: 100%;
              flex-direction: row;
            }
            .footer5-container {
              width: 100%;
            }
            .footer5-text-input {
              width: 100%;
              padding: var(--dl-space-space-halfunit);
            }
            .footer5-button {
              width: 100%;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 767px) {
            .footer5-content {
              gap: var(--dl-space-space-twounits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .footer5-logo1 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .footer5-actions1 {
              width: 100%;
            }
            .footer5-form {
              width: 100%;
              flex-direction: row;
              justify-content: flex-start;
            }
            .footer5-container {
              width: 100%;
            }
            .footer5-button {
              width: 208px;
            }
            .footer5-row {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .footer5-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .footer5-links {
              flex-direction: column;
            }
            .footer5-actions2 {
              width: 100%;
            }
            .footer5-form {
              width: 100%;
              flex-direction: column;
            }
            .footer5-container {
              width: 100%;
            }
            .footer5-button {
              width: 100%;
            }
            .footer5-footer-links {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer5.defaultProps = {
  link5: undefined,
  action1: undefined,
  content1: undefined,
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  content3: undefined,
  link1: undefined,
  privacyLink: undefined,
  cookiesLink: undefined,
  link3: undefined,
  link4: undefined,
  link2: undefined,
  termsLink: undefined,
  logoAlt: 'Company Logo',
  content2: undefined,
}

Footer5.propTypes = {
  link5: PropTypes.element,
  action1: PropTypes.element,
  content1: PropTypes.element,
  logoSrc: PropTypes.string,
  content3: PropTypes.element,
  link1: PropTypes.element,
  privacyLink: PropTypes.element,
  cookiesLink: PropTypes.element,
  link3: PropTypes.element,
  link4: PropTypes.element,
  link2: PropTypes.element,
  termsLink: PropTypes.element,
  logoAlt: PropTypes.string,
  content2: PropTypes.element,
}

export default Footer5
