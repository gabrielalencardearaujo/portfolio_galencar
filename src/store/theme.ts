export const saveTheme = (theme: boolean) => {
  sessionStorage.setItem('themeGalencar', JSON.stringify(theme))
}

export const getTheme = () => {
  const themeSaved = sessionStorage.getItem('themeGalencar')
  if(themeSaved) return JSON.parse(themeSaved)
}