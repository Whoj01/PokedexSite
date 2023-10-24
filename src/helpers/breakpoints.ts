const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  l: "1440px",
  xl: '2000px',
}

export const devices = {
  phoneSm: `(max-width: ${breakpoints.sm})`,
  phoneMd: `(max-width: ${breakpoints.md})`,
  tablet: `(max-width: ${breakpoints.lg})`,
  monitor: `(max-width: ${breakpoints.l})`,
  monitorLg: `(min-width: ${breakpoints.xl})`,
}