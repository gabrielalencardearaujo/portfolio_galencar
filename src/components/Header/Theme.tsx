import React from "react";
import IconThemeLight from "../../assets/svg/IconThemeLight";
import IconThemeDark from "../../assets/svg/IconThemeDark";
import styles from "./Header.module.css";
import { getTheme, saveTheme } from "../../store/theme";


function Theme() {
  const [theme, setTheme] = React.useState(getTheme() ?? true); //true= darkTheme, false=lightTheme

  React.useEffect(() => {
    if(theme) {
      document.querySelector('html')?.setAttribute('class', 'dark')
      saveTheme(true)
    } else {
      document.querySelector('html')?.setAttribute('class', 'light')
      saveTheme(false)
    }
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
