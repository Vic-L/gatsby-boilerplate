import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from 'styled-components';

const Wrapper = styled.header`
  background: rebeccapurple;
  margin: 0 auto 1.45rem auto;
  maxWidth: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Linker = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Header = ({ siteTitle }) => (
  <Wrapper>
    <h1 style={{ margin: 0 }}>
      <Linker to="/">
        {siteTitle}
      </Linker>
    </h1>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
