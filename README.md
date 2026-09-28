# Nextlevel Agency — Landing Page Jasa Kelola Shopee

Landing page statis untuk layanan Shopee Marketplace Management Nextlevel Agency.

## Menjalankan secara lokal

```bash
python3 -m http.server 8000 --directory dist
```

Buka `http://localhost:8000`. Seluruh aset publik berada di folder `dist/`; tidak diperlukan build atau API key.

## Struktur

- `dist/index.html`: halaman utama.
- `dist/styles.css` dan `dist/script.js`: gaya dan interaksi.
- `dist/layanan/`: halaman rincian layanan.
- `dist/proof/`: tangkapan layar performa yang sudah dioptimalkan untuk web.
- `generate_service_pages.py`: generator halaman rincian layanan.
- `.openai/hosting.json`: konfigurasi hosting Sites.

Nomor WhatsApp layanan berada di `dist/script.js`. ID Meta Pixel dan Google Analytics sengaja kosong sampai ID resmi tersedia. Contoh percakapan pada halaman utama diberi label sebagai ilustrasi, bukan testimoni klien asli.
