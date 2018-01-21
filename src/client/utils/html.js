/* eslint import/prefer-default-export: 0 */

const scriptParams = () => ({
  async: false,
  defer: false,
});

export const injectScript = (src, params = scriptParams()) => {
  const isCreated = document.querySelector(`script[src="${src}"]`);

  if (isCreated) {
    return;
  }

  const script = document.createElement('script');
  script.src = src;
  script.async = params.async;
  script.defer = params.defer;
  document.body.appendChild(script);
};
