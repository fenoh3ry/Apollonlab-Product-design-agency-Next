import React from 'react'

import Script from 'dangerous-html/react'

const AppComponent = (props) => {
  return (
    <>
      <div className="component-container1">
        <div className="component-container2">
          <div className="component-container3">
            <React.Fragment>
              <iframe
                src="https://unicorn.studio/embed/FKYgw4AICtWF1KhdkVjs"
                width="100%"
                height="110%"
                loading="lazy"
              />
            </React.Fragment>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .component-container1 {
            display: flex;
            position: relative;
          }
          .component-container2 {
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: center;
          }
          .component-container3 {
            display: contents;
          }
          @media (max-width: 1600px) {
            .component-container2 {
              width: 100%;
              height: 100%;
              display: flex;
              align-self: center;
              flex-direction: column;
            }
          }
          @media (max-width: 1200px) {
            .component-container2 {
              top: NaNpx;
              left: NaNpx;
              width: 100%;
              height: 100%;
              display: flex;
              z-index: 1;
              position: absolute;
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .component-container2 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default AppComponent
