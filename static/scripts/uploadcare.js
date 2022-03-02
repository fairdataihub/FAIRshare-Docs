(function (src, cb) {
  const s = document.createElement('script');
  s.setAttribute('src', src);
  s.onload = cb;
  (document.head || document.body).appendChild(s);
})('https://ucarecdn.com/libs/blinkloader/3.x/blinkloader.min.js', () => {
  window.Blinkloader.optimize({
    pubkey: 'cf6c8ea7a3e9e2f341cf',
    fadeIn: true,
    lazyload: true,
    smartCompression: true,
    responsive: true,
    retina: true,
    webp: true,
  });
  console.log('Blinkloader loaded');
});
