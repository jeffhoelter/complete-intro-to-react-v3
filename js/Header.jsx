// @flow

import React from "react";
import { Link } from "react-router-dom";

const Header = (props: { showSearch?: boolean }) => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = "";
  } else {
    utilSpace = (
      <h2>
        <Link href="/search" to="/search">
          Back
        </Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link href="/" to="/">
          svideo
        </Link>
      </h1>
      {utilSpace}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false
};

export default Header;
