export function initialize(instance) {
  if (instance && instance._booted) {
    document.body.classList = 'standard';
  }
}

export default { name: 'hack.css', initialize };
