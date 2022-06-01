export function copyText(src) {
  const t = document.createElement('textarea');
  document.body.appendChild(t);
  t.value = src.innerHTML
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"');
  t.select();
  document.execCommand('copy');
  document.body.removeChild(t);
}
