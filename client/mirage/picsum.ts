interface PicsumOptions {
  blur?: boolean
  random?: boolean
  grayscale?: boolean
  gravity?: string
}

export default function picsum(
  w: number,
  h: number,
  options: PicsumOptions = {
    blur: false,
    random: true,
    grayscale: false,
    gravity: 'center'
  }
) {
  const host = 'https://picsum.photos';
  const grayScale = options.grayscale ? 'g' : '';
  const params = buildQueryParams(options);
  return `${host}/${grayScale}/${w}/${h}${params ? '?' + params : ''}`;
}

function buildQueryParams(options: PicsumOptions) {
  const params = [];
  if (options.blur) params.push('blur');
  if (options.random) params.push('random');
  if (options.gravity) params.push(`gravity=${options.gravity}`);
  return params.length ? params.join('&') : false;
}
