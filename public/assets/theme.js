(() => {
  const root = document.documentElement;
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const valid = ['system', 'light', 'dark'];
  let preference = 'system';
  try {
    const stored = localStorage.getItem('portfolio-theme');
    if (valid.includes(stored)) preference = stored;
  } catch { /* Theme selection still works when storage is unavailable. */ }

  function apply() {
    const dark = preference === 'dark' || (preference === 'system' && system.matches);
    root.dataset.theme = dark ? 'dark' : 'light';
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = dark ? '#151d1a' : '#f5f3ed';
    const select = document.querySelector('#theme');
    if (select) select.value = preference;
  }
  apply();
  system.addEventListener('change', () => {
    if (preference === 'system') apply();
  });
  window.addEventListener('storage', (event) => {
    if (event.key !== 'portfolio-theme' && event.key !== null) return;
    preference = valid.includes(event.newValue) ? event.newValue : 'system';
    apply();
  });
  document.addEventListener('DOMContentLoaded', () => {
    const control = document.querySelector('.theme-control');
    const select = document.querySelector('#theme');
    if (!control || !select) return;
    select.value = preference;
    control.hidden = false;
    select.addEventListener('change', () => {
      preference = valid.includes(select.value) ? select.value : 'system';
      try { localStorage.setItem('portfolio-theme', preference); } catch {}
      apply();
    });
  });
})();
