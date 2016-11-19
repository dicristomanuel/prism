export const OnBot = (data) => {
  console.log('OnBot >> ', data);
  return { ...data, state: 'ms' };
};
