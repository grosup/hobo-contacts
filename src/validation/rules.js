export const required = (value, type = null) =>
  !!value || (type === null ? "Required." : `${type} is required`);
  
export const number = (v) => /^[0-9]*$/.test(v) || "Must be a number";

export default {
  required,
};
