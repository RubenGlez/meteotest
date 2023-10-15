const BASE_FONT_SIZE = 16;

interface PxToRemFunction {
  (px: number): string;
  cache?: { [key: string]: string };
}

export const pxToRem: PxToRemFunction = (px: number) => {
  // Unique key
  const cacheKey = px.toString();

  // Return value from cache if exists
  if (pxToRem.cache && pxToRem.cache[cacheKey]) {
    return pxToRem.cache[cacheKey];
  }

  // If the value doesn't exist on cache, we calculate and store it in cache
  const result = px / BASE_FONT_SIZE + "rem";
  pxToRem.cache = pxToRem.cache || {};
  pxToRem.cache[cacheKey] = result;

  return result;
};
