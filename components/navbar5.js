import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

const Navbar5 = (props) => {
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  return (
    <>
      <header className={`navbar5-container1 ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="navbar5-navbar-interactive">
          <img
            alt={props.logoAlt}
            src={props.logoSrc}
            className="navbar5-image1"
          />
          <div data-thq="thq-navbar-nav" className="navbar5-desktop-menu">
            <nav className="navbar5-links1">
              <a href={props.link1Url} className="thq-link thq-body-small">
                {props.link1 ?? (
                  <Fragment>
                    <span className="navbar5-text1">Home</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link2Url} className="thq-link thq-body-small">
                {props.link2 ?? (
                  <Fragment>
                    <span className="navbar5-text2">About Us</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link3Url} className="thq-link thq-body-small">
                {props.link3 ?? (
                  <Fragment>
                    <span className="navbar5-text5">Blog</span>
                  </Fragment>
                )}
              </a>
              <div className="navbar5-container2">
                <div
                  onClick={() => setLink5DropdownVisible(!link5DropdownVisible)}
                  className="navbar5-link4-dropdown-trigger"
                >
                  <span className="thq-link thq-body-small">
                    {props.link4 ?? (
                      <Fragment>
                        <span className="navbar5-text8">Services</span>
                      </Fragment>
                    )}
                  </span>
                  <div className="navbar5-icon-container1">
                    {link5DropdownVisible && (
                      <div className="navbar5-container3">
                        <svg viewBox="0 0 1024 1024" className="navbar5-icon10">
                          <path d="M298 426h428l-214 214z"></path>
                        </svg>
                      </div>
                    )}
                    {!link5DropdownVisible && (
                      <div className="navbar5-container4">
                        <svg viewBox="0 0 1024 1024" className="navbar5-icon12">
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {link5DropdownVisible && (
                  <div className="navbar5-container5 thq-box-shadow">
                    <div className="navbar5-menu-item1">
                      <div className="navbar5-content1">
                        <a
                          href={props.linkUrlPage1}
                          className="navbar5-page11 thq-body-large"
                        >
                          {props.page1 ?? (
                            <Fragment>
                              <span className="navbar5-text7">FAQ</span>
                            </Fragment>
                          )}
                        </a>
                      </div>
                    </div>
                    <div className="navbar5-menu-item2">
                      <div className="navbar5-content2">
                        <a
                          href={props.linkUrlPage2}
                          className="navbar5-page21 thq-body-large"
                        >
                          {props.page2 ?? (
                            <Fragment>
                              <span className="navbar5-text3">Services</span>
                            </Fragment>
                          )}
                        </a>
                      </div>
                    </div>
                    <div className="navbar5-menu-item3">
                      <div className="navbar5-content3">
                        <a
                          href={props.linkUrlPage3}
                          className="navbar5-page31 thq-body-large"
                        >
                          {props.page3 ?? (
                            <Fragment>
                              <span className="navbar5-text6">Portfolio</span>
                            </Fragment>
                          )}
                        </a>
                      </div>
                    </div>
                    <div className="navbar5-menu-item4">
                      <div className="navbar5-content4">
                        <a
                          href={props.linkUrlPage4}
                          className="navbar5-page41 thq-body-large"
                        >
                          {props.page4 ?? (
                            <Fragment>
                              <span className="navbar5-text4">Contact</span>
                            </Fragment>
                          )}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="navbar5-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar5-icon14">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar5-mobile-menu">
            <div className="navbar5-nav">
              <div className="navbar5-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navbar5-logo"
                />
                <div data-thq="thq-close-menu" className="navbar5-close-menu">
                  <svg viewBox="0 0 1024 1024" className="navbar5-icon16">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar5-links2">
                <a href={props.link1Url} className="thq-link thq-body-small">
                  {props.link1 ?? (
                    <Fragment>
                      <span className="navbar5-text1">Home</span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link2Url} className="thq-link thq-body-small">
                  {props.link2 ?? (
                    <Fragment>
                      <span className="navbar5-text2">About Us</span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link3Url} className="thq-link thq-body-small">
                  {props.link3 ?? (
                    <Fragment>
                      <span className="navbar5-text5">Blog</span>
                    </Fragment>
                  )}
                </a>
                <div className="navbar5-link4-accordion">
                  <div
                    onClick={() => setLink5AccordionOpen(!link5AccordionOpen)}
                    className="navbar5-trigger"
                  >
                    <span className="thq-link thq-body-small">
                      {props.link4 ?? (
                        <Fragment>
                          <span className="navbar5-text8">Services</span>
                        </Fragment>
                      )}
                    </span>
                    <div className="navbar5-icon-container2">
                      {link5AccordionOpen && (
                        <div className="navbar5-container6">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="navbar5-icon18"
                          >
                            <path d="M298 426h428l-214 214z"></path>
                          </svg>
                        </div>
                      )}
                      {!link5AccordionOpen && (
                        <div className="navbar5-container7">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="navbar5-icon20"
                          >
                            <path d="M426 726v-428l214 214z"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                  {link5AccordionOpen && (
                    <div className="navbar5-container8">
                      <div className="navbar5-menu-item5">
                        <div className="navbar5-content5">
                          <a
                            href={props.linkUrlPage1}
                            className="navbar5-page12 thq-body-large"
                          >
                            {props.page1 ?? (
                              <Fragment>
                                <span className="navbar5-text7">FAQ</span>
                              </Fragment>
                            )}
                          </a>
                        </div>
                      </div>
                      <div className="navbar5-menu-item6">
                        <div className="navbar5-content6">
                          <a
                            href={props.linkUrlPage2}
                            className="navbar5-page22 thq-body-large"
                          >
                            {props.page2 ?? (
                              <Fragment>
                                <span className="navbar5-text3">Services</span>
                              </Fragment>
                            )}
                          </a>
                        </div>
                      </div>
                      <div className="navbar5-menu-item7">
                        <div className="navbar5-content7">
                          <a
                            href={props.linkUrlPage3}
                            className="navbar5-page32 thq-body-large"
                          >
                            {props.page3 ?? (
                              <Fragment>
                                <span className="navbar5-text6">Portfolio</span>
                              </Fragment>
                            )}
                          </a>
                        </div>
                      </div>
                      <div className="navbar5-menu-item8">
                        <div className="navbar5-content8">
                          <a
                            href={props.linkUrlPage4}
                            className="navbar5-page42 thq-body-large"
                          >
                            {props.page4 ?? (
                              <Fragment>
                                <span className="navbar5-text4">Contact</span>
                              </Fragment>
                            )}
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </nav>
            </div>
            <div className="navbar5-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-x-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="navbar5-icon24 thq-icon-x-small"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="navbar5-icon26 thq-icon-x-small"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        {link5DropdownVisible && (
          <div
            onClick={() => setLink5DropdownVisible(false)}
            className="navbar5-container9"
          ></div>
        )}
      </header>
      <style jsx>
        {`
          .navbar5-container1 {
            width: 100%;
            display: flex;
            z-index: 100;
            position: relative;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar5-navbar-interactive {
            width: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .navbar5-image1 {
            height: 3rem;
          }
          .navbar5-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navbar5-links1 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar5-container2 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar5-link4-dropdown-trigger {
            gap: 4px;
            cursor: pointer;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar5-icon-container1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar5-container3 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar5-icon10 {
            width: 24px;
            height: 24px;
          }
          .navbar5-container4 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar5-icon12 {
            width: 24px;
            height: 24px;
          }
          .navbar5-container5 {
            top: 30px;
            right: 0px;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            z-index: 100;
            position: absolute;
            align-items: flex-start;
            animation-name: fadeInDown;
            flex-direction: column;
            animation-delay: 0s;
            background-color: var(--dl-color-theme-neutral-light);
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .navbar5-menu-item1 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .navbar5-content1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar5-page11 {
            white-space: nowrap;
          }
          .navbar5-menu-item2 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .navbar5-content2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar5-page21 {
            white-space: nowrap;
          }
          .navbar5-menu-item3 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .navbar5-content3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar5-page31 {
            white-space: nowrap;
          }
          .navbar5-menu-item4 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .navbar5-content4 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar5-page41 {
            white-space: nowrap;
          }
          .navbar5-burger-menu {
            display: none;
          }
          .navbar5-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar5-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-twounits);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar5-nav {
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .navbar5-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar5-logo {
            height: 2rem;
          }
          .navbar5-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar5-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar5-links2 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-self: flex-start;
            flex-direction: column;
          }
          .navbar5-link4-accordion {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar5-trigger {
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar5-icon-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar5-container6 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar5-icon18 {
            width: 24px;
            height: 24px;
          }
          .navbar5-container7 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar5-icon20 {
            width: 24px;
            height: 24px;
          }
          .navbar5-container8 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .navbar5-menu-item5 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: stretch;
            flex-shrink: 0;
            flex-direction: column;
          }
          .navbar5-content5 {
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .navbar5-page12 {
            white-space: nowrap;
          }
          .navbar5-menu-item6 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: stretch;
            flex-shrink: 0;
            flex-direction: column;
          }
          .navbar5-content6 {
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .navbar5-page22 {
            white-space: nowrap;
          }
          .navbar5-menu-item7 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: stretch;
            flex-shrink: 0;
            flex-direction: column;
          }
          .navbar5-content7 {
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .navbar5-page32 {
            white-space: nowrap;
          }
          .navbar5-menu-item8 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: stretch;
            flex-shrink: 0;
            flex-direction: column;
          }
          .navbar5-content8 {
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .navbar5-page42 {
            white-space: nowrap;
          }
          .navbar5-icon-group {
            gap: var(--dl-space-space-twounits);
            display: flex;
          }
          .navbar5-icon24 {
            height: var(--dl-size-size-xsmall);
          }
          .navbar5-icon26 {
            height: var(--dl-size-size-xsmall);
          }
          .navbar5-container9 {
            top: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: fixed;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar5-text1 {
            display: inline-block;
          }
          .navbar5-text2 {
            display: inline-block;
          }
          .navbar5-text3 {
            display: inline-block;
          }
          .navbar5-text4 {
            display: inline-block;
          }
          .navbar5-text5 {
            display: inline-block;
          }
          .navbar5-text6 {
            display: inline-block;
          }
          .navbar5-text7 {
            display: inline-block;
          }
          .navbar5-text8 {
            display: inline-block;
          }
          @media (max-width: 1200px) {
            .navbar5-mobile-menu {
              background-color: transparent;
            }
            .navbar5-text1 {
              font-family: PPNeueMontreal-Medium;
            }
            .navbar5-text2 {
              font-family: PPNeueMontreal-Medium;
            }
            .navbar5-text5 {
              font-family: PPNeueMontreal-Medium;
            }
            .navbar5-text8 {
              font-family: PPNeueMontreal-Medium;
            }
          }
          @media (max-width: 767px) {
            .navbar5-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              background-color: #d9d9d9;
            }
            .navbar5-desktop-menu {
              display: none;
            }
            .navbar5-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .navbar5-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .navbar5-mobile-menu {
              padding: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar5.defaultProps = {
  link1: undefined,
  link2Url: 'https://www.teleporthq.io',
  linkUrlPage2: 'https://www.teleporthq.io',
  linkUrlPage3: 'https://www.teleporthq.io',
  linkUrlPage1: 'https://www.teleporthq.io',
  link2: undefined,
  page2: undefined,
  page4: undefined,
  logoSrc: '/apollonlab%20logo-1500h.webp',
  link3: undefined,
  link3Url: 'https://www.teleporthq.io',
  logoAlt: 'Company Logo',
  link1Url: 'https://www.teleporthq.io',
  page3: undefined,
  linkUrlPage4: 'https://www.teleporthq.io',
  page1: undefined,
  link4: undefined,
  rootClassName: '',
}

Navbar5.propTypes = {
  link1: PropTypes.element,
  link2Url: PropTypes.string,
  linkUrlPage2: PropTypes.string,
  linkUrlPage3: PropTypes.string,
  linkUrlPage1: PropTypes.string,
  link2: PropTypes.element,
  page2: PropTypes.element,
  page4: PropTypes.element,
  logoSrc: PropTypes.string,
  link3: PropTypes.element,
  link3Url: PropTypes.string,
  logoAlt: PropTypes.string,
  link1Url: PropTypes.string,
  page3: PropTypes.element,
  linkUrlPage4: PropTypes.string,
  page1: PropTypes.element,
  link4: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Navbar5
