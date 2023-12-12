import React from 'react';
import IconThemeLight from '../../assets/svg/IconThemeLight';
import IconThemeDark from '../../assets/svg/IconThemeDark';


function Theme() {
  const [dark, setDark] = React.useState(true);


  return <>
    {dark ? (
        <span onClick={() => setDark(!dark)}><IconThemeLight /></span>
      ) : (
        <span onClick={() => setDark(!dark)}><IconThemeDark /></span>
      )
    }
  </>
}

export default Theme