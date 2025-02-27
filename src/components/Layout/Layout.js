import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import { Provider } from "../context"

const Layout = ({ children }) => {
  return (
    <Provider>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
    </Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
