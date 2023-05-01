export const cloudinaryLoader = ({ src, width, quality }) => {
  return `https://res.cloudinary.com/duasomtlp/image/upload/w_${width},q_${quality || 75}/${src}`;
};
