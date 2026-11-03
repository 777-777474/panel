/* 3-nov · PANEL INSTALADO: aquí NO va ninguna dirección ni clave. La tableta recibe la dirección del servidor y su sesión
   la primera vez que se abre desde el panel de Google (botón "📲 Panel rápido"), y las guarda en ella misma. */
(function () {
  var q = new URLSearchParams(location.hash.slice(1)), a = q.get('api'), t = q.get('pase'), api = '';
  try { if (a && /^(https:\/\/script\.google\.com\/macros\/s\/[\w-]+|http:\/\/127\.0\.0\.1:\d+)\/exec$/.test(a)) localStorage.setItem('v03_api', a); api = localStorage.getItem('v03_api') || ''; } catch (e) { }
  window.V03_API = api;
  if (t && api) {
    try { var x = new XMLHttpRequest(); x.open('POST', api, false); x.setRequestHeader('Content-Type', 'text/plain;charset=utf-8'); x.send(JSON.stringify({ accion: 'pase_toma', t: t }));
      var r = JSON.parse(x.responseText); if (r && r.ok) { window.V03_PASE = r.ls || null; if (r.locales) localStorage.setItem('v03_locs', JSON.stringify(r.locales)); } } catch (e) { }
    try { history.replaceState(null, '', location.pathname); } catch (e) { }
  }
  var L = null; try { L = JSON.parse(localStorage.getItem('v03_locs') || 'null'); } catch (e) { }
  window.V03_LOCALES = L && L.length ? L : (api ? [] : [{ id: 'PRUEBA', nombre: 'PRUEBA' }, { id: 'PRUEBA2', nombre: 'PRUEBA 2' }]);
  window.V03_INSTALADO = true;
})();
