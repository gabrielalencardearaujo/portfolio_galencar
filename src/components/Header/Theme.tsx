import React from "react";
import IconThemeLight from "../../assets/svg/IconThemeLight";
import IconThemeDark from "../../assets/svg/IconThemeDark";
import styles from "./Header.module.css";

function Theme() {
  const [theme, setTheme] = React.useState(true); //true= darkTheme, false=lightTheme

  React.useEffect(() => {
    (theme) ? 
      document.querySelector('html')?.setAttribute('class', 'dark')
    :
    document.querySelector('html')?.setAttribute('class', 'light')
  }, [theme])

  return (
    <>
      {theme ? (
        <span className={styles.colorIconTheme} onClick={() => setTheme(!theme)}>
          <IconThemeLight />
        </span>
      ) : (
        <span className={styles.colorIconTheme} onClick={() => setTheme(!theme)}>
          <IconThemeDark />
        </span>
      )}
    </>
  );
}

export default Theme;
