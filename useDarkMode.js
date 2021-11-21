// Turn on the dark mode
const updateModeToDark = () => {
  localStorage.theme = 'dark'
  document.documentElement.classList.add('dark')
}

// Turn off the dark mode
const updateModeToLight = () => {
  localStorage.theme = 'light'
  document.documentElement.classList.remove('dark')
}

/**
 * Manage Dark theme based on User choice or default OS theme.
 * @param {object} props - Props for the Hook
 * @param {string} props.mode Theme mode with auto, dark, and light as possible values.
 * @returns {string} Returns the mode for the applied theme.
 */
export default function useDarkMode({mode}) {
  // If the user did not request a change, then pick
  // their saved choice if available, otherwise choose
  // a theme based on the users default OS theme.
  !(mode === 'dark' || mode === 'light') && (mode = localStorage.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches && 'dark' || 'light'))

  mode === 'dark' && updateModeToDark()
  mode === 'light' && updateModeToLight()

  return mode
}
