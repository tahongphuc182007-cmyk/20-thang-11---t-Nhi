(function () {
  var C = window.CAUHINH;
  var $ = function (id) { return document.getElementById(id); };
  var nhac = $('nhac'), nutNhac = $('nutNhac');

  /* ---- nội dung từ cấu hình ---- */
  $('loiMo').innerHTML = C.loiMo.map(function (d, i) {
    return '<span style="animation-delay:' + (0.4 + i * 0.5) + 's">' + d + '</span>';
  }).join('');
  $('nutMo').textContent = C.nutMo;

  /* ---- hiệu ứng nền ---- */
  function rd(a, b) { return a + Math.random() * (b - a); }

  function timBay() {
    var el = document.createElement('div');
    el.className = 'tim';
    el.textContent = ['💗', '💖', '💕', '🌸'][Math.floor(rd(0, 4))];
    el.style.left = rd(0, 100) + 'vw';
    el.style.fontSize = rd(14, 30) + 'px';
    el.style.setProperty('--dx', rd(-80, 80) + 'px');
    el.style.animationDuration = rd(6, 11) + 's';
    $('tim-bay').appendChild(el);
    setTimeout(function () { el.remove(); }, 11500);
  }
  var tTim = setInterval(timBay, 450);

  function taoManh() {
    var el = document.createElement('div');
    el.className = 'manh';
    var s = rd(14, 42);
    el.style.width = s + 'px'; el.style.height = s * 1.3 + 'px';
    el.style.left = rd(0, 100) + 'vw';
    el.style.setProperty('--dx', rd(-120, 120) + 'px');
    el.style.setProperty('--r', rd(-360, 360) + 'deg');
    el.style.animationDuration = rd(7, 14) + 's';
    el.style.animationDelay = -rd(0, 12) + 's';
    $('manh-giay').appendChild(el);
  }
  for (var i = 0; i < 16; i++) taoManh();

  for (var j = 0; j < 70; j++) {
    var s = document.createElement('div');
    s.className = 'sao';
    s.style.left = rd(0, 100) + '%'; s.style.top = rd(0, 60) + '%';
    s.style.animationDelay = rd(0, 3) + 's';
    $('sao').appendChild(s);
  }
  for (var k = 0; k < 16; k++) {
    var f = document.createElement('div');
    f.className = 'sao dom';
    f.style.left = rd(0, 100) + '%'; f.style.top = rd(15, 75) + '%';
    f.style.animationDelay = rd(0, 4) + 's,' + rd(0, 6) + 's';
    $('sao').appendChild(f);
  }

  /* ---- nhạc ---- */
  nhac.src = C.nhac; nhac.volume = C.amLuong;
  function capNhatNut() {
    nutNhac.classList.toggle('chay', !nhac.paused);
    nutNhac.classList.toggle('tat', nhac.paused);
  }
  nutNhac.onclick = function () {
    if (nhac.paused) nhac.play().catch(function () {}); else nhac.pause();
    capNhatNut();
  };
  nhac.addEventListener('play', capNhatNut);
  nhac.addEventListener('pause', capNhatNut);
  capNhatNut();

  /* ---- luồng chính ---- */
  var canh = $('canh'), thu = $('thu'), hoa = $('hoaTulip');

  function hien(el) { el.classList.add('hien'); }
  function an(el) { el.classList.remove('hien'); }

  $('nutMo').onclick = function () {
    clearInterval(tTim);
    nhac.play().catch(function () {});
    an($('intro')); hien(canh);
    setTimeout(function () { hoa.classList.add('len'); }, 1200);
  };

  /* ---- thư: chữ hiện dần như đang gõ ---- */
  var hang = [], qi = 0, ci = 0, gio = null;
  function chuanBiThu() {
    clearInterval(gio);
    $('thuTieuDe').textContent = ''; $('thuKy').textContent = '';
    var nd = $('thuNoiDung'); nd.innerHTML = '';
    hang = [[$('thuTieuDe'), C.thu.tieuDe]];
    C.thu.noiDung.forEach(function (d) { var p = document.createElement('p'); nd.appendChild(p); hang.push([p, d]); });
    hang.push([$('thuKy'), C.thu.kyTen]);
    qi = 0; ci = 0;
  }
  function viet() {
    chuanBiThu();
    gio = setInterval(function () {
      if (qi >= hang.length) { clearInterval(gio); return; }
      var h = hang[qi]; ci++;
      h[0].textContent = h[1].slice(0, ci);
      if (ci >= h[1].length) { qi++; ci = 0; }
      var nc = thu.querySelector('.thu-noidung'); nc.scrollTop = nc.scrollHeight;
    }, 32);
  }
  function hienDu() {
    clearInterval(gio);
    hang.forEach(function (h) { h[0].textContent = h[1]; }); qi = hang.length;
  }
  thu.querySelector('.thu-noidung').onclick = hienDu;

  hoa.onclick = function () {
    if (!hoa.classList.contains('len') || thu.classList.contains('mo')) return;
    if (hoa.classList.contains('da-mo')) {          /* thư đã mở trước đó: mở lại luôn */
      thu.classList.add('mo'); hienDu(); return;
    }
    hoa.classList.add('mo');                       /* phong bì mở nắp */
    setTimeout(function () { thu.classList.add('mo'); viet(); }, 900);
  };

  $('dongThu').onclick = function () {
    hienDu();
    thu.classList.remove('mo');
    hoa.classList.add('da-mo');                    /* phong bì biến mất, hiện nơ */
  };
})();
