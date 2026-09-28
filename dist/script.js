(() => {
  'use strict';
  const PHONE = '6281391035154';
  const messages = {
    general: 'Halo Nextlevel Agency, saya mendapatkan informasi layanan Shopee Marketplace Management dan ingin konsultasi.',
    starter: 'Halo Nextlevel Agency, saya tertarik Paket Starter Shopee Rp750.000/bulan. Saya ingin konsultasi mengenai toko saya.',
    growth: 'Halo Nextlevel Agency, saya tertarik Paket Growth Shopee Rp1.800.000/bulan. Saya ingin konsultasi mengenai toko saya.',
    scale: 'Halo Nextlevel Agency, saya tertarik Paket Scale Shopee Rp2.500.000/bulan. Saya ingin konsultasi mengenai toko saya.'
  };

  // Isi hanya dengan ID asli setelah akun tracking siap; nilai kosong tidak memuat skrip pihak ketiga.
  const tracking = Object.freeze({ metaPixelId: '', gaMeasurementId: '' });
  window.nextlevelTracking = tracking;
  window.dataLayer = window.dataLayer || [];
  if (tracking.metaPixelId) {
    /* Official Meta Pixel bootstrap; leave the ID empty until the account owner supplies it. */
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=true;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=true;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', tracking.metaPixelId);
  }
  if (tracking.gaMeasurementId) {
    const analytics = document.createElement('script'); analytics.async = true;
    analytics.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(tracking.gaMeasurementId)}`;
    document.head.append(analytics);
    window.gtag = function(){ window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', tracking.gaMeasurementId);
  }
  function track(eventName, detail = {}) {
    window.dataLayer.push({ event: eventName, ...detail });
    if (typeof window.fbq === 'function') window.fbq(['PageView','ViewContent','Lead','Contact'].includes(eventName) ? 'track' : 'trackCustom', eventName, detail);
    if (typeof window.gtag === 'function') window.gtag('event', eventName, detail);
  }
  track('PageView');

  const params = new URLSearchParams(location.search);
  const campaign = Object.fromEntries(['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].filter(k => params.get(k)).map(k => [k, params.get(k).slice(0, 120)]));
  const urlFor = text => `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
  const outgoingText = text => Object.keys(campaign).length ? `${text}\n\nAsal kunjungan: ${Object.entries(campaign).map(([k, v]) => `${k}=${v}`).join(' | ')}` : text;
  document.querySelectorAll('.whatsapp-link').forEach(link => {
    const packageName = link.dataset.message || 'general';
    link.href = urlFor(outgoingText(messages[packageName]));
    link.addEventListener('click', () => {
      track('WhatsAppClick', { package: packageName });
      track('Contact', { method: 'WhatsApp', package: packageName });
      if (packageName !== 'general') track(`Package${packageName[0].toUpperCase()}${packageName.slice(1)}`);
    });
  });

  const services = [
    ['audit-toko','Audit Toko', 'Melihat kondisi toko, katalog, visual, struktur produk dan peluang perbaikan.'],
    ['optimasi-listing','Optimasi Listing', 'Optimasi judul, keyword, deskripsi, atribut dan struktur produk.'],
    ['marketplace-visual','Marketplace Visual', 'Pembuatan materi desain marketplace sesuai paket.'],
    ['voucher-promotion','Voucher & Promotion', 'Menyusun voucher, promo dan penawaran yang sesuai kondisi toko.'],
    ['shopee-ads','Shopee Ads', 'Setup, monitoring dan optimasi iklan sesuai paket yang digunakan.'],
    ['hero-product','Hero Product', 'Mengidentifikasi, mengembangkan dan melakukan scaling terhadap produk potensial.'],
    ['campaign-management','Campaign Management', 'Mengelola campaign marketplace secara terstruktur.'],
    ['competitor-monitoring','Competitor Monitoring', 'Menganalisis kompetitor dan perubahan pasar secara berkala.'],
    ['performance-analysis','Performance Analysis', 'Melihat traffic, CTR, conversion, order, omzet dan performa advertising sebagai bahan evaluasi.'],
    ['marketplace-growth-strategy','Marketplace Growth Strategy', 'Menyusun langkah lanjutan berdasarkan data yang ditemukan.']
  ];
  document.getElementById('service-grid').innerHTML = services.map(([slug,title,body], i) => `<a class="service-card" href="/layanan/${slug}.html"><span class="service-number">${String(i + 1).padStart(2, '0')}</span><div><h3>${title}</h3><p>${body}</p><span class="service-more">Baca layanan</span></div><span class="service-arrow" aria-hidden="true">↗</span></a>`).join('');

  const proofs = [
    {image:'proof-04.webp', width:1139, height:578, title:'Performa iklan, 21 Nov–23 Des', detail:'Tampilan laporan: 819 pesanan, penjualan dari iklan Rp31,5 juta, ROAS 9,38.'},
    {image:'proof-09.webp', width:1471, height:680, title:'Iklan, satu minggu terakhir', detail:'Tampilan laporan: 151 pesanan, penjualan dari iklan Rp5,9 juta, ROAS 10,17.'},
    {image:'proof-10.webp', width:1280, height:716, title:'Performa toko, 30 hari', detail:'Tampilan toko: penjualan Rp28.872.508 dan 270 pesanan pada 19 Mei–17 Juni 2025.'},
    {image:'proof-01.webp', width:1264, height:546, title:'Performa iklan, 1–18 Des', detail:'Tampilan laporan: 498 pesanan, penjualan dari iklan Rp19,1 juta, ROAS 9,17.'},
    {image:'proof-02.webp', width:1262, height:537, title:'Performa iklan, 18 Nov–16 Des', detail:'Tampilan laporan: 648 pesanan, penjualan dari iklan Rp24,9 juta, ROAS 8,95.'},
    {image:'proof-03.webp', width:1149, height:376, title:'Rincian iklan produk', detail:'Tampilan beberapa iklan produk dengan metrik biaya, penjualan dan ROAS per produk.'},
    {image:'proof-05.webp', width:1138, height:384, title:'Rincian iklan produk lain', detail:'Tampilan tiga iklan produk dengan ROAS 10,58, 9,03 dan 7,12.'},
    {image:'proof-06.webp', width:1137, height:574, title:'Performa iklan, 21 Okt–23 Des', detail:'Tampilan laporan: 983 pesanan, penjualan dari iklan Rp39,1 juta, ROAS 8,72.'},
    {image:'proof-07.webp', width:1239, height:590, title:'Performa iklan, satu bulan terakhir', detail:'Tampilan laporan: 753 pesanan, penjualan dari iklan Rp29 juta, ROAS 9,33.'},
    {image:'proof-08.webp', width:1144, height:600, title:'Performa iklan, 20 Nov–11 Des', detail:'Tampilan laporan: 484 pesanan, penjualan dari iklan Rp18,5 juta, ROAS 9,34.'}
  ];
  const gallery = document.getElementById('proof-gallery');
  gallery.innerHTML = proofs.map((p,i) => `<button class="proof-thumb" type="button" data-proof="${i}" aria-label="Perbesar bukti ${i+1}: ${p.title}"><img src="/proof/${p.image}" alt="${p.title}" width="${p.width}" height="${p.height}" loading="lazy" decoding="async"><span><strong>${p.title}</strong><small>${p.detail}</small></span></button>`).join('');
  const toggle = document.getElementById('proof-toggle');
  const stack = document.getElementById('proof-stack');
  function setGallery(open) {
    gallery.hidden = !open;
    stack.hidden = open;
    toggle.setAttribute('aria-expanded', String(open));
    stack.setAttribute('aria-expanded', String(open));
    toggle.innerHTML = open ? 'Tumpuk kembali <span aria-hidden="true">↖</span>' : 'Lihat semua bukti <span aria-hidden="true">↗</span>';
  }
  toggle.addEventListener('click', () => setGallery(gallery.hidden));
  stack.addEventListener('click', () => setGallery(true));
  const proofDialog = document.getElementById('proof-dialog');
  let proofIndex = 0;
  function showProof(index) {
    proofIndex = (index + proofs.length) % proofs.length;
    const p = proofs[proofIndex];
    const img = document.getElementById('proof-dialog-image');
    img.src = `/proof/${p.image}`; img.alt = p.title; img.width = p.width; img.height = p.height;
    document.getElementById('proof-dialog-title').textContent = p.title;
    document.getElementById('proof-dialog-caption').textContent = p.detail;
    document.getElementById('proof-counter').textContent = `${proofIndex+1} / ${proofs.length}`;
  }
  gallery.querySelectorAll('[data-proof]').forEach(button => button.addEventListener('click', () => { showProof(Number(button.dataset.proof)); proofDialog.showModal(); }));
  document.getElementById('proof-prev').addEventListener('click', () => showProof(proofIndex - 1));
  document.getElementById('proof-next').addEventListener('click', () => showProof(proofIndex + 1));
  proofDialog.addEventListener('keydown', e => { if (e.key === 'ArrowRight') showProof(proofIndex + 1); if (e.key === 'ArrowLeft') showProof(proofIndex - 1); });

  const conversations = [
    ['Produk saya banyak, tapi judul dan deskripsinya masih asal.', 'Kami mulai dari cek katalog, lalu rapikan produk yang diprioritaskan.'],
    ['Saya bingung memilih produk mana yang perlu diiklankan.', 'Kami lihat data toko dan bantu tentukan produk yang layak dicoba lebih dulu.'],
    ['Voucher sudah ada, tapi saya tidak tahu kapan dipakai.', 'Kami bantu susun promo sesuai kondisi dan tujuan toko.'],
    ['Iklan jalan, tapi saya tidak paham angka di laporannya.', 'Kami pantau datanya dan jelaskan apa yang perlu diperbaiki.'],
    ['Toko saya baru. Apa bisa mulai dari nol?', 'Bisa. Kita mulai dari audit dan perapian dasar sesuai paket.'],
    ['Saya belum punya orang khusus untuk urus Shopee.', 'Tim kami bantu pekerjaan marketplace sesuai paket yang Anda pilih.']
  ];
  const chatCard = ([question,answer]) => `<div class="marquee-card chat-card"><span>CONTOH PERCAKAPAN</span><p class="chat-bubble chat-in">${question}</p><p class="chat-bubble chat-out">${answer}</p></div>`;
  const topRow = conversations.slice(0,3).map(chatCard).join('');
  const bottomRow = conversations.slice(3).map(chatCard).join('');
  document.getElementById('proof-marquee-one').innerHTML = `<div class="marquee-content"><div class="marquee-group">${topRow}</div><div class="marquee-group" aria-hidden="true">${topRow}</div></div>`;
  document.getElementById('proof-marquee-two').innerHTML = `<div class="marquee-content"><div class="marquee-group">${bottomRow}</div><div class="marquee-group" aria-hidden="true">${bottomRow}</div></div>`;

  const packages = [
    { key:'starter', title:'Starter', price:'Rp750.000', badge:'Cocok Untuk Memulai', lead:'Fondasi toko yang lebih rapi.', features:['Maksimal 10 SKU','Audit toko','Optimasi listing','Optimasi judul','Optimasi keyword','Optimasi deskripsi','Optimasi kategori toko','Voucher & promo dasar','Setup Shopee Ads','Identifikasi hero product','±5 desain marketplace / bulan','Analisis kompetitor dasar','Setup campaign','Rekomendasi Shopee Video','Rekomendasi affiliate','Monitoring berkala','Laporan bulanan','Meeting 1x / bulan'] },
    { key:'growth', title:'Growth', price:'Rp1.800.000', badge:'Most Popular', lead:'Pengelolaan aktif untuk toko yang berkembang.', features:['Maksimal 25 SKU','Audit toko mendalam','Optimasi listing','Optimasi judul','Optimasi keyword','Optimasi deskripsi','Optimasi kategori toko','Voucher & promo aktif','Pengelolaan Shopee Ads','Optimasi hero product','±12 desain marketplace / bulan','A/B testing dasar','Analisis kompetitor berkala','Pengelolaan campaign','Strategi Shopee Video','Setup & strategi affiliate','Monitoring mingguan','Laporan 2 mingguan + bulanan','Meeting 2x / bulan'] },
    { key:'scale', title:'Scale', price:'Rp2.500.000', badge:'Untuk Pertumbuhan Lebih Serius', lead:'Optimasi lebih intensif pada produk potensial.', features:['Maksimal 40 SKU','Audit toko mendalam','Optimasi listing','Optimasi judul','Optimasi keyword','Optimasi deskripsi','Optimasi kategori toko','Pengelolaan voucher & promo aktif','Shopee Ads management + scaling','Hero product scaling','±20 desain marketplace / bulan','A/B testing aktif','Analisis kompetitor berkala','Campaign management aktif','Strategi + kalender Shopee Video','Affiliate management ringan','Monitoring lebih intensif','Laporan mingguan + bulanan','Meeting mingguan / 2 mingguan'] }
  ];
  const highlights = {
    starter:['Maksimal 10 SKU (variasi produk)','Rapikan informasi produk','Setup iklan Shopee','±5 desain toko / bulan','Laporan bulanan'],
    growth:['Maksimal 25 SKU (variasi produk)','Kelola iklan Shopee','±12 desain toko / bulan','Pantau setiap minggu','Laporan 2 mingguan + bulanan'],
    scale:['Maksimal 40 SKU (variasi produk)','Kelola dan tingkatkan iklan','±20 desain toko / bulan','Pantau lebih intensif','Laporan mingguan + bulanan']
  };
  document.getElementById('pricing-grid').innerHTML = packages.map(p => `<article class="pricing-card ${p.key === 'growth' ? 'featured' : ''}"><div class="pricing-top"><span class="package-tag">${p.badge}</span><h3>${p.title}</h3><p>${p.lead}</p><div class="price">${p.price}<span> / bulan</span></div></div><div class="feature-header">YANG PALING PENTING</div><ul class="feature-list">${highlights[p.key].map(f => `<li><span aria-hidden="true">✓</span>${f}</li>`).join('')}</ul><details class="package-more"><summary>Lihat rincian paket ↓</summary><ul class="feature-list">${p.features.map(f => `<li><span aria-hidden="true">✓</span>${f}</li>`).join('')}</ul></details><a class="button ${p.key === 'growth' ? 'button-primary' : 'button-dark'} package-cta whatsapp-link" data-message="${p.key}" href="${urlFor(outgoingText(messages[p.key]))}" target="_blank" rel="noopener">Tanya Paket ${p.title} <span aria-hidden="true">↗</span></a></article>`).join('');
  document.querySelectorAll('.package-cta').forEach(link => link.addEventListener('click', () => {
    const name = link.dataset.message;
    track('WhatsAppClick', { package: name });
    track('Contact', { method: 'WhatsApp', package: name });
    track(`Package${name[0].toUpperCase()}${name.slice(1)}`);
  }));
  const comparison = [
    ['Harga','Rp750.000','Rp1.800.000','Rp2.500.000'],['SKU','10','25','40'],['Audit Toko','Standar','Mendalam','Mendalam'],['Optimasi Listing','✓','✓','✓'],['Keyword & Deskripsi','✓','✓','✓'],['Voucher/Promo','Dasar','Aktif','Aktif'],['Shopee Ads','Setup','Management','Management + Scaling'],['Hero Product','Identifikasi','Optimasi','Scaling'],['Desain Marketplace','±5 / bulan','±12 / bulan','±20 / bulan'],['A/B Testing','—','Dasar','Aktif'],['Kompetitor','Dasar','Berkala','Berkala'],['Campaign','Setup','Kelola','Kelola Aktif'],['Shopee Video','Rekomendasi','Strategi','Strategi + Kalender'],['Affiliate','Rekomendasi','Setup/Strategi','Management Ringan'],['Monitoring','Berkala','Mingguan','Intensif'],['Laporan','Bulanan','2 Mingguan + Bulanan','Mingguan + Bulanan'],['Meeting','1x / bulan','2x / bulan','Mingguan / 2 Mingguan']
  ];
  document.getElementById('comparison-body').innerHTML = comparison.map(row => `<tr><th scope="row">${row[0]}</th>${row.slice(1).map(cell => `<td${cell === '✓' ? ' class="checkmark"' : ''}>${cell}</td>`).join('')}</tr>`).join('');
  const faq = [
    ['Apakah omzet pasti naik?','Tidak ada jaminan omzet atau jumlah pesanan tertentu. Kami mengelola dan mengevaluasi toko sesuai paket; hasilnya juga bergantung pada produk, harga, stok, persaingan, dan budget iklan.'],
    ['Apakah budget iklan termasuk?','Tidak. Budget Shopee Ads disediakan oleh klien.'],
    ['Toko saya baru, bisa dibantu?','Bisa. Paket Starter dapat digunakan untuk toko baru maupun toko yang ingin dibenahi.'],
    ['Apakah chat pelanggan dan pengiriman termasuk?','Tidak termasuk paket standar. Keduanya bisa dibicarakan sebagai layanan tambahan bila dibutuhkan.'],
    ['Apakah akun Shopee tetap milik saya?','Ya. Akun dan aset bisnis tetap milik klien.']
  ];
  document.getElementById('faq-list').innerHTML = faq.map(([q,a],i) => `<details${i===0?' open':''}><summary>${q}<span aria-hidden="true">+</span></summary><p>${a}</p></details>`).join('');

  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const setMenu = open => { menu.hidden = !open; menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu'); };
  menuButton.addEventListener('click', () => setMenu(menu.hidden));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('resize', () => { if (innerWidth > 760) setMenu(false); });

  document.getElementById('lead-form').addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const field = name => String(data.get(name) || '').trim().replace(/[\r\n]+/g, ' ');
    const message = `Halo Nextlevel Agency, saya ingin meminta audit awal toko Shopee.\n\nNama: ${field('nama')}\nBrand/Toko: ${field('brand')}\nNomor WhatsApp: ${field('whatsapp')}\nLink Shopee: ${field('shopee') || 'Belum ada'}\nKategori Produk: ${field('kategori')}\nPaket yang diminati: ${field('paket')}`;
    track('Lead', { method: 'WhatsApp', package: field('paket') });
    const destination = urlFor(outgoingText(message));
    const opened = window.open(destination, '_blank', 'noopener,noreferrer');
    const feedback = document.getElementById('form-feedback');
    feedback.hidden = false;
    feedback.replaceChildren(document.createTextNode('Pesan sudah disiapkan. Jika WhatsApp tidak terbuka, '));
    const fallback = document.createElement('a'); fallback.href = destination; fallback.target = '_blank'; fallback.rel = 'noopener'; fallback.textContent = 'ketuk di sini untuk melanjutkan';
    fallback.addEventListener('click', () => track('WhatsAppClick', { source: 'form_fallback' }));
    feedback.append(fallback, document.createTextNode('.'));
    if (opened) track('WhatsAppClick', { source: 'form' });
  });

  document.querySelectorAll('[data-dialog]').forEach(link => link.addEventListener('click', e => { e.preventDefault(); document.getElementById(link.dataset.dialog).showModal(); }));
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  });
  const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting && entry.target.id === 'paket') { track('ViewContent', { content: 'pricing' }); observer.unobserve(entry.target); } }); }, { threshold: .15 });
  observer.observe(document.getElementById('paket'));
})();
