"""Generate ten lightweight, readable service detail pages from approved scope."""
from html import escape
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).parent / "dist" / "layanan"
ROOT.mkdir(parents=True, exist_ok=True)
PHONE = "6281391035154"

SERVICES = [
    ("audit-toko", "Audit Toko", "Melihat kondisi toko sebelum menentukan prioritas perbaikan.",
     ["Meninjau struktur toko dan katalog produk.", "Memeriksa visual dan informasi produk yang tersedia.", "Mengidentifikasi peluang perbaikan pada keyword, harga dan promo."],
     "Hasil audit dipakai sebagai titik awal pengelolaan. Kedalaman audit mengikuti paket yang dipilih."),
    ("optimasi-listing", "Optimasi Listing", "Merapikan informasi produk agar lebih jelas dan mudah ditemukan calon pembeli.",
     ["Meninjau judul dan keyword produk.", "Merapikan deskripsi, atribut dan kategori.", "Menentukan prioritas listing dalam batas jumlah SKU paket."],
     "Jumlah SKU yang dikelola: Starter maksimal 10, Growth maksimal 25, dan Scale maksimal 40."),
    ("marketplace-visual", "Marketplace Visual", "Materi desain marketplace yang mendukung tampilan katalog dan aktivitas promosi.",
     ["Menentukan kebutuhan visual yang relevan dengan toko.", "Membuat materi desain marketplace sesuai kuota.", "Menyesuaikan materi dengan informasi produk dan persetujuan klien."],
     "Kuota desain per bulan: Starter ±5, Growth ±12, dan Scale ±20. Produksi foto profesional dan video dalam jumlah besar dibahas sebagai layanan tambahan."),
    ("voucher-promotion", "Voucher & Promotion", "Merancang penawaran yang sesuai dengan kondisi toko dan produk.",
     ["Meninjau promo dan voucher yang sudah berjalan.", "Menyusun voucher, promo dan penawaran sesuai kebutuhan.", "Mengevaluasi respons promo dan menyesuaikan langkah berikutnya."],
     "Starter mencakup voucher dan promo dasar; Growth dan Scale mencakup pengelolaan yang lebih aktif."),
    ("shopee-ads", "Shopee Ads", "Mengelola proses periklanan marketplace berdasarkan paket dan data performa.",
     ["Setup iklan dan menentukan produk yang diprioritaskan.", "Memantau metrik iklan sebagai bahan evaluasi.", "Mengoptimasi iklan dan melakukan scaling bila termasuk dalam paket."],
     "Starter mencakup setup, Growth mencakup pengelolaan, dan Scale mencakup pengelolaan serta scaling. Budget Shopee Ads disediakan terpisah oleh klien."),
    ("hero-product", "Hero Product", "Menentukan produk potensial untuk menjadi fokus pengelolaan.",
     ["Meninjau data produk dan respons calon pembeli.", "Mengidentifikasi atau mengoptimasi produk yang potensial.", "Menyusun langkah scaling ketika data dan paket mendukung."],
     "Starter berfokus pada identifikasi, Growth pada optimasi, dan Scale pada scaling hero product."),
    ("campaign-management", "Campaign Management", "Menyusun aktivitas campaign toko secara terstruktur.",
     ["Menentukan campaign yang sesuai dengan kondisi toko.", "Menyiapkan kebutuhan listing, promo dan visual terkait.", "Memantau pelaksanaan dan mengevaluasi hasil campaign."],
     "Starter mencakup setup campaign; Growth pengelolaan campaign; Scale pengelolaan yang lebih aktif."),
    ("competitor-monitoring", "Competitor Monitoring", "Memahami penawaran dan perubahan pasar sebagai bahan strategi.",
     ["Meninjau kompetitor yang relevan dengan kategori produk.", "Membandingkan struktur penawaran, visual dan aktivitas promosi.", "Merangkum temuan untuk keputusan pengelolaan toko."],
     "Analisis dasar termasuk Starter; analisis berkala termasuk Growth dan Scale."),
    ("performance-analysis", "Performance Analysis", "Membaca data toko untuk mengevaluasi pekerjaan yang sudah dilakukan.",
     ["Meninjau traffic, CTR dan conversion.", "Mengevaluasi pesanan, omzet dan performa advertising.", "Menyampaikan temuan serta prioritas perbaikan dalam laporan."],
     "Frekuensi laporan: Starter bulanan; Growth dua mingguan dan bulanan; Scale mingguan dan bulanan. Indikator bukan jaminan hasil penjualan."),
    ("marketplace-growth-strategy", "Marketplace Growth Strategy", "Menyusun langkah lanjutan dari temuan audit dan data toko.",
     ["Menentukan prioritas produk, penawaran dan aktivitas toko.", "Menghubungkan hasil evaluasi dengan rencana optimasi.", "Menyesuaikan intensitas kerja dengan kebutuhan dan paket."],
     "Strategi dibahas berdasarkan kondisi toko. Hasil dipengaruhi produk, harga, stok, ulasan, budget iklan, persaingan dan kebijakan platform."),
]

for slug, title, lead, points, note in SERVICES:
    message = quote(f"Halo Nextlevel Agency, saya ingin konsultasi tentang layanan {title} untuk toko Shopee saya.")
    cta = f"https://wa.me/{PHONE}?text={message}"
    items = "".join(f"<li><span aria-hidden='true'>✓</span>{escape(point)}</li>" for point in points)
    page = f"""<!doctype html>
<html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#25272a"><title>{escape(title)} untuk Shopee | Nextlevel Agency</title>
<meta name="description" content="{escape(lead)} Pelajari cakupan {escape(title)} bersama Nextlevel Agency dan konsultasikan kebutuhan toko Shopee Anda.">
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='13' fill='%2325272a'/%3E%3Cpath d='M13 48V16h9l20 20V16h9v32h-9L22 28v20z' fill='%23a7db2b'/%3E%3C/svg%3E">
<link rel="stylesheet" href="../styles.css"><link rel="stylesheet" href="../service.css"></head>
<body><a class="skip-link" href="#content">Lewati navigasi</a><header class="site-header"><div class="container header-inner">
<a class="brand" href="../index.html" aria-label="Nextlevel Agency, kembali ke beranda"><span class="logo-window"><img src="../brand-header.png" alt="Nextlevel Agency" width="1055" height="300"></span></a>
<nav class="detail-nav" aria-label="Navigasi layanan"><a href="../index.html#layanan">Semua layanan</a><a href="../index.html#paket">Lihat paket</a></nav>
<a class="button button-dark detail-header-cta" href="{cta}" target="_blank" rel="noopener">Konsultasi Gratis ↗</a></div></header>
<main id="content"><section class="service-hero section"><div class="container"><a class="back-link" href="../index.html#layanan">← Kembali ke semua layanan</a>
<span class="eyebrow">LAYANAN NEXTLEVEL AGENCY</span><h1>{escape(title)}</h1><p>{escape(lead)}</p>
<div class="detail-actions"><a class="button button-primary" href="{cta}" target="_blank" rel="noopener">Konsultasikan Layanan Ini ↗</a><a class="button button-outline" href="../index.html#paket">Bandingkan Paket ↓</a></div></div></section>
<section class="section detail-content"><div class="container detail-grid"><div><span class="eyebrow">CAKUPAN KERJA</span><h2>Apa yang dikerjakan?</h2><p>Tim Nextlevel Agency menyesuaikan pelaksanaan dengan kondisi toko, informasi dari klien, dan paket yang disepakati.</p></div><div class="detail-points"><ul>{items}</ul></div></div></section>
<section class="section section-muted"><div class="container detail-grid"><div><span class="eyebrow">SESUAI PAKET</span><h2>Catatan Cakupan</h2></div><div class="detail-note"><p>{escape(note)}</p><p>Aktivitas dan hasil kerja dirinci saat konsultasi dan kesepakatan kerja. Nextlevel Agency tidak menjamin nominal omzet, pesanan, atau ROAS tertentu.</p></div></div></section>
<section class="detail-bottom"><div class="container"><h2>Diskusikan Kondisi Toko Anda</h2><p>Ceritakan kebutuhan toko untuk menentukan langkah awal dan paket yang sesuai.</p><a class="button button-primary" href="{cta}" target="_blank" rel="noopener">Konsultasi Gratis via WhatsApp ↗</a></div></section></main>
<footer class="detail-footer"><div class="container"><span>© 2026 Nextlevel Agency</span><a href="../index.html">Kembali ke halaman utama</a></div></footer></body></html>"""
    (ROOT / f"{slug}.html").write_text(page, encoding="utf-8")
print(f"Generated {len(SERVICES)} service pages")
