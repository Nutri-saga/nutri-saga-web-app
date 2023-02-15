export const matchPath = (pathname, key) => {
  const pathArray = pathname.split("/");
  if (pathArray.includes(key)) {
    return true;
  }
  return false;
};
