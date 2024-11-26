import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

const FAQ14 = (props) => {
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq5Visible, setFaq5Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  return (
    <>
      <div className="faq14faq8 thq-section-padding">
        <div className="faq14-max-width thq-section-max-width">
          <div className="faq14-container10 thq-flex-column">
            <div className="faq14-section-title thq-flex-column">
              <h2 className="faq14-text10 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="faq14-text31">FAQs</span>
                  </Fragment>
                )}
              </h2>
              <p className="faq14-text11 thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="faq14-text33">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </span>
                  </Fragment>
                )}
              </p>
              <button type="button" className="thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="faq14-text21">Contact</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="faq14-list thq-flex-column">
              <div className="thq-divider-horizontal"></div>
              <div className="faq14-faq1">
                <div
                  onClick={() => setFaq1Visible(!faq1Visible)}
                  className="faq14-trigger1"
                >
                  <p className="faq14-faq1-question1 thq-body-large">
                    {props.faq1Question ?? (
                      <Fragment>
                        <span className="faq14-text32">
                          What payment methods do you accept?
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <div className="faq14-icons-container1">
                    {!faq1Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq14-icon10">
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq1Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq14-icon12">
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq1Visible && (
                  <div className="faq14-container13">
                    <span className="thq-body-small">
                      Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis
                      sunt aut deleniti illum non repudiandae voluptatem. Aut
                      praesentium doloribus qui distinctio neque ut unde
                      temporibus. Cum exercitationem eveniet in omnis animi in
                      corporis nulla. Sed tempora excepturi et voluptatem modi
                      et exercitationem voluptate cum illum quisquam 33 quia
                      blanditiis eos minus consequatur.Ut neque quam qui
                      dignissimos voluptates ut voluptate totam aut consequuntur
                      quod. Ut voluptas incidunt ut fuga nostrum ut quaerat enim
                      eum earum tenetur? Est esse harum et Quis officiis et enim
                      amet.Et minima tempore et neque voluptatem eos amet
                      officiis et temporibus Quis. Et suscipit esse id nemo sunt
                      At nihil earum et consequatur fuga aut sapiente voluptate
                      est cupiditate esse non dolor cumque. Ut obcaecati
                      recusandae et beatae quae qui doloremque eligendi sit
                      eaque labore.
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="faq14-faq2">
                <div
                  onClick={() => setFaq2Visible(!faq2Visible)}
                  className="faq14-trigger2"
                >
                  <p className="faq14-faq2-question1 thq-body-large">
                    {props.faq2Question ?? (
                      <Fragment>
                        <span className="faq14-text27">
                          How can I track my order?
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <div className="faq14-icons-container2">
                    {!faq2Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq14-icon14">
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq2Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq14-icon16">
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq2Visible && (
                  <div className="faq14-container16">
                    <span className="thq-body-small">
                      Et minima tempore et neque voluptatem eos amet officiis et
                      temporibus Quis. Et suscipit esse id nemo sunt At nihil
                      earum et consequatur fuga aut sapiente voluptate est
                      cupiditate esse non dolor cumque. Ut obcaecati recusandae
                      et beatae quae qui doloremque eligendi sit eaque labore.
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="faq14-faq3">
                <div
                  onClick={() => setFaq3Visible(!faq3Visible)}
                  className="faq14-trigger3"
                >
                  <p className="faq14-faq2-question2 thq-body-large">
                    {props.faq3Question ?? (
                      <Fragment>
                        <span className="faq14-text29">
                          What is your return policy?
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <div className="faq14-icons-container3">
                    {!faq3Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq14-icon18">
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq3Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq14-icon20">
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq3Visible && (
                  <div className="faq14-container19">
                    <span className="thq-body-small">
                      A quia temporibus aut ullam assumenda vel eius sapiente ut
                      eligendi molestias. Ex ipsum incidunt ut excepturi eaque
                      sed nulla quia qui exercitationem alias aut consequuntur
                      nihil et animi voluptas.
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="faq14-faq4">
                <div
                  onClick={() => setFaq4Visible(!faq4Visible)}
                  className="faq14-trigger4"
                >
                  <p className="faq14-faq2-question3 thq-body-large">
                    {props.faq4Question ?? (
                      <Fragment>
                        <span className="faq14-text26">
                          Do you offer international shipping?
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <div className="faq14-icons-container4">
                    {!faq4Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq14-icon22">
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq4Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq14-icon24">
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq4Visible && (
                  <div className="faq14-container22">
                    <span className="thq-body-small">
                      A quia temporibus aut ullam assumenda vel eius sapiente ut
                      eligendi molestias. Ex ipsum incidunt ut excepturi eaque
                      sed nulla quia qui exercitationem alias aut consequuntur
                      nihil et animi voluptas.
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="faq14-faq5">
                <div
                  onClick={() => setFaq5Visible(!faq5Visible)}
                  className="faq14-trigger5"
                >
                  <p className="faq14-faq1-question2 thq-body-large">
                    {props.faq5Question ?? (
                      <Fragment>
                        <span className="faq14-text22">
                          How can I contact customer support?
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <div className="faq14-icons-container5">
                    {!faq5Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq14-icon26">
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq5Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq14-icon28">
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq5Visible && (
                  <div className="faq14-container25">
                    <span className="thq-body-small">
                      Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis
                      sunt aut deleniti illum non repudiandae voluptatem. Aut
                      praesentium doloribus qui distinctio neque ut unde
                      temporibus. Cum exercitationem eveniet in omnis animi in
                      corporis nulla. Sed tempora excepturi et voluptatem modi
                      et exercitationem voluptate cum illum quisquam 33 quia
                      blanditiis eos minus consequatur.Ut neque quam qui
                      dignissimos voluptates ut voluptate totam aut consequuntur
                      quod. Ut voluptas incidunt ut fuga nostrum ut quaerat enim
                      eum earum tenetur? Est esse harum et Quis officiis et enim
                      amet.Et minima tempore et neque voluptatem eos amet
                      officiis et temporibus Quis. Et suscipit esse id nemo sunt
                      At nihil earum et consequatur fuga aut sapiente voluptate
                      est cupiditate esse non dolor cumque. Ut obcaecati
                      recusandae et beatae quae qui doloremque eligendi sit
                      eaque labore.
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
            </div>
          </div>
          <div className="faq14-content1 thq-flex-column">
            <div className="faq14-content2">
              <h2 className="faq14-text18 thq-heading-2">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="faq14-text30">Still have a question?</span>
                  </Fragment>
                )}
              </h2>
              <span className="faq14-text19 thq-body-large">
                {props.content2 ?? (
                  <Fragment>
                    <span className="faq14-text23">
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
            <button type="button" className="thq-button-filled">
              <span>
                {props.action2 ?? (
                  <Fragment>
                    <span className="faq14-text28">Email us</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq14faq8 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq14-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .faq14-container10 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq14-section-title {
            width: 100%;
            align-self: center;
            align-items: center;
          }
          .faq14-text10 {
            text-align: center;
          }
          .faq14-text11 {
            text-align: center;
          }
          .faq14-list {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            align-self: center;
            align-items: flex-start;
          }
          .faq14-faq1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq14-trigger1 {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq14-trigger1:hover {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
            background-color: var(--dl-color-theme-primary2);
          }
          .faq14-faq1-question1 {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq14-icons-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq14-icon10 {
            width: 24px;
            height: 24px;
          }
          .faq14-icon12 {
            width: 24px;
            height: 24px;
          }
          .faq14-container13 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .faq14-faq2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq14-trigger2 {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq14-trigger2:hover {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
            background-color: var(--dl-color-theme-primary2);
          }
          .faq14-faq2-question1 {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq14-icons-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq14-icon14 {
            width: 24px;
            height: 24px;
          }
          .faq14-icon16 {
            width: 24px;
            height: 24px;
          }
          .faq14-container16 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .faq14-faq3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq14-trigger3 {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq14-trigger3:hover {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
            background-color: var(--dl-color-theme-primary2);
          }
          .faq14-faq2-question2 {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq14-icons-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq14-icon18 {
            width: 24px;
            height: 24px;
          }
          .faq14-icon20 {
            width: 24px;
            height: 24px;
          }
          .faq14-container19 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .faq14-faq4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq14-trigger4 {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq14-trigger4:hover {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
            background-color: var(--dl-color-theme-primary2);
          }
          .faq14-faq2-question3 {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq14-icons-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq14-icon22 {
            width: 24px;
            height: 24px;
          }
          .faq14-icon24 {
            width: 24px;
            height: 24px;
          }
          .faq14-container22 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .faq14-faq5 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq14-trigger5 {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq14-trigger5:hover {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
            background-color: var(--dl-color-theme-primary2);
          }
          .faq14-faq1-question2 {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq14-icons-container5 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq14-icon26 {
            width: 24px;
            height: 24px;
          }
          .faq14-icon28 {
            width: 24px;
            height: 24px;
          }
          .faq14-container25 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .faq14-content1 {
            align-self: center;
          }
          .faq14-content2 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            flex-direction: column;
          }
          .faq14-text18 {
            text-align: center;
          }
          .faq14-text19 {
            text-align: center;
          }
          .faq14-text21 {
            display: inline-block;
          }
          .faq14-text22 {
            display: inline-block;
          }
          .faq14-text23 {
            display: inline-block;
          }
          .faq14-text26 {
            display: inline-block;
          }
          .faq14-text27 {
            display: inline-block;
          }
          .faq14-text28 {
            display: inline-block;
          }
          .faq14-text29 {
            display: inline-block;
          }
          .faq14-text30 {
            display: inline-block;
          }
          .faq14-text31 {
            display: inline-block;
          }
          .faq14-text32 {
            display: inline-block;
          }
          .faq14-text33 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .faq14-container10 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .faq14-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

FAQ14.defaultProps = {
  action1: undefined,
  faq5Question: undefined,
  content2: undefined,
  faq4Question: undefined,
  faq2Question: undefined,
  action2: undefined,
  faq3Question: undefined,
  heading2: undefined,
  heading1: undefined,
  faq1Question: undefined,
  content1: undefined,
}

FAQ14.propTypes = {
  action1: PropTypes.element,
  faq5Question: PropTypes.element,
  content2: PropTypes.element,
  faq4Question: PropTypes.element,
  faq2Question: PropTypes.element,
  action2: PropTypes.element,
  faq3Question: PropTypes.element,
  heading2: PropTypes.element,
  heading1: PropTypes.element,
  faq1Question: PropTypes.element,
  content1: PropTypes.element,
}

export default FAQ14
