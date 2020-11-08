import React, {useState} from 'react'
import useScrollPosition from "../hooks/useScrollPosition"


function Spin(props) {
  const [hideOnScroll, setHideOnScroll] = useState(false)

    useScrollPosition(({ prevPos, currPos }) => {
        const isShow = currPos.y > prevPos.y
        if (isShow !== hideOnScroll) setHideOnScroll(isShow)
      }, [hideOnScroll])

    return (
        <div id="Spinners">
          <p>
            {hideOnScroll ? "shown" : "hidden"}
          </p>
          <div className="spinner-container">
              <div className={`spinner ${hideOnScroll ? 'spinning' : ""}`}>
                  <div className={`spinner-inner ${hideOnScroll ? 'spinning-inner' : ''}`}></div>
                  <div className={`spinner-inner-b ${hideOnScroll ? 'spinning-inner' : ''}`}></div>
              </div>
          </div>
        </div>
    )
}
 
export default Spin