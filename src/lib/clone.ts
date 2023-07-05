export const deepClone = (data: any) => {
  return JSON.parse(JSON.stringify(data));
};
