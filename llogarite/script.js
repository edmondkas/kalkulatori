function blloka() {
  let a, b, c, d, f, x, y, z, h, s, q, k;

  a = parseFloat(document.getElementById("gjersia_bllokit").value);

  b = parseFloat(document.getElementById("lartesia_bllokit").value);
  c = parseFloat(document.getElementById("gjatesia_murit").value);
  d = parseFloat(document.getElementById("lartesia_murit").value);
  f = parseFloat(document.getElementById("humbja").value);
  q = parseFloat(document.getElementById("qmimi_bllok").value);

  if (!a || !b || !c || !d || !f || !q) {
    document.getElementById("alertId").classList.remove("hide");
    document.getElementById("alertId").innerHTML =
      "Ju duhet ti mbusheni te gjitha kolonat!";
  } else {
    document.getElementById("alertId").classList.add("hide");

    x = (a / 100) * (b / 100); //metra katrore

    y = c * d; // hapsira

    y = Math.round(y * 100) / 100;

    z = y / x;

    z = Math.round(z);

    h = (f / 100) * z;

    s = z + h;

    s = Math.round(s);

    k = (s * q) / 100;

    // k = Math.round(k * 100) / 100;

    document.getElementById("madhsia_murit").value = y;
    document.getElementById("numri_bllokit").value = z;
    document.getElementById("numri_bllokave_tersi").value = s;
    document.getElementById("kostoja").value = k;
  }
}
function cigare() {
  let a, b, c, d, f;

  a = parseFloat(document.getElementById("numri_cigareve").value);

  b = parseFloat(document.getElementById("madhesia_paketimit").value);
  c = parseFloat(document.getElementById("qmimi_paketimit").value);

  if (!a || !b || !c) {
    document.getElementById("alertId").classList.remove("hide");
    document.getElementById("alertId").innerHTML =
      "Ju duhet ti mbusheni te gjitha kolonat!";
  } else {
    document.getElementById("alertId").classList.add("hide");

    d = (a / b) * 365;

    d = Math.round(d * 100) / 100;

    f = c * d;
    f = Math.round(f * 100) / 100;

    document.getElementById("numri_paketimeve").value = d;
    document.getElementById("shpenzimet").value = f;
  }
}

function karburanti() {
  let a, b, c, d, f, x;

  a = parseFloat(document.getElementById("distanca").value);

  b = parseFloat(document.getElementById("karburanti").value);
  d = parseFloat(document.getElementById("cmimikarburantit").value);

  if (!a || !b || !d) {
    document.getElementById("alertId").classList.remove("hide");
    document.getElementById("alertId").innerHTML =
      "Ju duhet ti mbusheni te gjitha kolonat!";
  } else {
    document.getElementById("alertId").classList.add("hide");

    x = a / 100;

    c = b / x;
    c = Math.round(c * 100) / 100;

    f = d * b;
    f = Math.round(f * 100) / 100;

    document.getElementById("konsumikarburantit").value = c;
    document.getElementById("kostojakarburantit").value = f;
  }
}

function qeramike() {
  let a, b, c, d, f, x, y, z, h, s, q, k;

  a = parseFloat(document.getElementById("gjatesia_qeramikes").value);

  b = parseFloat(document.getElementById("gjeresia_qeramikes").value);
  c = parseFloat(document.getElementById("gjatesia_hapsires").value);
  d = parseFloat(document.getElementById("gjeresia_hapsires").value);
  f = parseFloat(document.getElementById("humbja").value);
  q = parseFloat(document.getElementById("qmimi_qeramike").value);

  if (!a || !b || !c || !d || !f || !q) {
    document.getElementById("alertId").classList.remove("hide");
    document.getElementById("alertId").innerHTML =
      "Ju duhet ti mbusheni te gjitha kolonat!";
  } else {
    document.getElementById("alertId").classList.add("hide");

    x = (a / 100) * (b / 100); //metra katrore

    y = c * d; // hapsira

    y = Math.round(y * 100) / 100;

    z = y / x;

    z = Math.round(z);

    h = (f / 100) * z;

    s = z + h;

    s = Math.round(s);

    k = s * q;
    k = Math.round(k * 100) / 100;

    document.getElementById("Hapsira").value = y;
    document.getElementById("numri_qeramikave").value = z;
    document.getElementById("numri_qeramike_tersi").value = s;
    document.getElementById("kostoja").value = k;
  }
}

function rryma() {
  let tarifa_lart,
    tarifa_ult,
    totali,
    t_lart,
    t_ulte,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    s,
    t_energjis,
    neto,
    t_fikse,
    tvsh,
    shuma_fakture,
    t_gjithsej_lart,
    t_gjithsej_ulte,
    gjithsej_kwh;

  tarifa_lart = parseFloat(document.getElementById("tarifa_lart_").value);

  tarifa_ult = parseFloat(document.getElementById("tarifa_ulte_").value);

  if (!tarifa_lart || !tarifa_ult) {
    document.getElementById("alertId").classList.remove("hide");
    document.getElementById("alertId").innerHTML =
      "Ju duhet ti mbusheni te gjitha kolonat!";
  } else {
    document.getElementById("alertId").classList.add("hide");

    totali = tarifa_lart + tarifa_ult;

    if (totali > 800) {
      t_lart = tarifa_lart / totali;
      t_ulte = 1 - t_lart;
      g = 800 * t_lart;
      g = Math.round(g * 100) / 100;

      h = 800 - g;
      h = Math.round(h * 100) / 100;

      i = g + h;
      j = g * 0.0675;
      j = Math.round(j * 100) / 100;
      k = h * 0.0289;
      k = Math.round(k * 100) / 100;

      l = j + k;
      m = (totali - 800) * t_lart;
      m = Math.round(m * 100) / 100;
      n = (totali - 800) * t_ulte;
      n = Math.round(n * 100) / 100;
      q = m + n;
      o = m * 0.1252;
      o = Math.round(o * 100) / 100;
      p = n * 0.059;
      p = Math.round(p * 100) / 100;
      s = o + p;

      t_gjithsej_lart = g + m;
      t_gjithsej_ulte = h + n;
      t_energjis = l + s;
      t_energjis = Math.round(t_energjis * 100) / 100;

      gjithsej_kwh = t_gjithsej_lart + t_gjithsej_ulte;
      t_fikse = 1.74;
      neto = t_energjis + t_fikse;
      neto = Math.round(neto * 100) / 100;

      tvsh = neto * 0.08;
      tvsh = Math.round(tvsh * 100) / 100;
      shuma_fakture = neto + tvsh;
      shuma_fakture = Math.round(shuma_fakture * 100) / 100;
    } else {
      g = tarifa_lart;
      g = Math.round(g * 100) / 100;

      h = tarifa_ult;
      h = Math.round(h * 100) / 100;

      i = g + h;
      j = g * 0.0675;
      j = Math.round(j * 100) / 100;
      k = h * 0.0289;
      k = Math.round(k * 100) / 100;

      l = j + k;
      m = "/////////";
      n = "/////////";
      q = "/////////";
      o = "/////////";
      p = "/////////";
      s = o + p;

      t_gjithsej_lart = g;
      t_gjithsej_ulte = h;
      t_energjis = l;
      t_energjis = Math.round(t_energjis * 100) / 100;

      gjithsej_kwh = t_gjithsej_lart + t_gjithsej_ulte;
      t_fikse = 1.74;
      neto = t_energjis + t_fikse;
      neto = Math.round(neto * 100) / 100;

      tvsh = neto * 0.08;
      tvsh = Math.round(tvsh * 100) / 100;
      shuma_fakture = neto + tvsh;
      shuma_fakture = Math.round(shuma_fakture * 100) / 100;
    }

    document.getElementById("tarifa_lart_kwh_1").value = g;
    document.getElementById("tarifa_lart_euro_1").value = j;
    document.getElementById("tarifa_ulte_kwh_1").value = h;
    document.getElementById("tarifa_ulte_euro_1").value = k;
    document.getElementById("totali_kwh_1").value = i;
    document.getElementById("totali_euro").value = l;
    document.getElementById("tarifa_lart_kwh_2").value = m;
    document.getElementById("tarifa_lart_euro_2").value = o;
    document.getElementById("tarifa_ulte_kwh_2").value = n;
    document.getElementById("tarifa_ulte_euro_2").value = p;
    document.getElementById("totali_kwh_2").value = q;
    document.getElementById("totali_euro_2").value = s;
    document.getElementById("totali_gjithsej_lart_kwh").value = t_gjithsej_lart;
    document.getElementById("totali_gjithsej_ulte_kwh").value = t_gjithsej_ulte;
    document.getElementById("totali_gjithsej_kwh").value = gjithsej_kwh;
    document.getElementById("tarifa_fikse").value = t_fikse;
    document.getElementById("tarifa_energjise").value = t_energjis;
    document.getElementById("neto").value = neto;
    document.getElementById("tvsh").value = tvsh;
    document.getElementById("shuma_faktures").value = shuma_fakture;
  }
}

function myDel() {
  document.getElementById("tarifa_lart_").value = "";
  document.getElementById("tarifa_ulte_").value = "";

  document.getElementById("gjatesia_qeramikes").value = "";
  document.getElementById("gjeresia_qeramikes").value = "";
  document.getElementById("gjatesia_hapsires").value = "";
  document.getElementById("gjeresia_hapsires").value = "";

  document.getElementById("humbja").value = "";
  document.getElementById("qmimi_qeramike").value = "";

  document.getElementById("distanca").value = "";
  document.getElementById("karburanti").value = "";
  document.getElementById("cmimikarburantit").value = "";

  document.getElementById("numri_cigareve").value = "";
  document.getElementById("madhesia_paketimit").value = "";
  document.getElementById("qmimi_paketimit").value = "";

  document.getElementById("gjersia_bllokit").value = "";
  document.getElementById("lartesia_bllokit").value = "";
  document.getElementById("gjatesia_murit").value = "";
  document.getElementById("lartesia_murit").value = "";

  document.getElementById("humbja").value = "";
  document.getElementById("qmimi_bllok").value = "";
}
