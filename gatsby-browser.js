// FIXME: this is a workaround for this issue: https://github.com/gatsbyjs/gatsby/pull/28555
// The problem seems to have been fixed in recent versions of Gatsby, but Novela is not using
// such recent versions
export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location.hash === '') {
    window.scrollTo(0, 0);
    return false;
  }
  return true;
};
