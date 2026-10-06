(function () { var q = U.$('#gq'), items = U.$$('#gl [data-q]'), none = U.$('#gn'); if (!q) return;
  U.on(q, 'input', function () { var t = q.value.trim().toLowerCase(), n = 0; items.forEach(function (el) { var ok = !t || el.getAttribute('data-q').indexOf(t) >= 0; el.hidden = !ok; if (ok) n++; }); none.hidden = n > 0; }); })();
