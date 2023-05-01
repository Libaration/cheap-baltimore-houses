export const cloudinaryLoader = ({ src, width, quality }) => {
  return `https://res.cloudinary.com/duasomtlp/image/upload/w_${width},q_${quality || 75}/${src}`;
};

export const cloudinaryThumbnailTransform = (props, images) => {
  if (images.length < 3) return cloudinaryLoader(props);
  return `https://res.cloudinary.com/duasomtlp/image/upload/h_229,w_408,c_fill,g_center/l_${images[0].attributes.formats.thumbnail.provider_metadata.public_id}/c_scale,h_80/fl_layer_apply,g_north_east/l_${images[1].attributes.formats.thumbnail.provider_metadata.public_id}/c_scale,h_80/fl_layer_apply,g_east/l_${images[2].attributes.formats.thumbnail.provider_metadata.public_id}/c_scale,h_80/fl_layer_apply,g_south_east/${props.src}`;
};
