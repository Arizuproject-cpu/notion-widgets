# ARIZU Notion Widget Bundle

Kumpulan widget minimalis untuk dashboard Notion. Didesain agar ringan, konsisten, dan mendukung Dark Mode secara otomatis.

## Daftar Widget

1.  **Time Left This Month**
    *   Menghitung sisa hari, jam, dan menit dalam bulan ini.
    *   URL: `/time-left-month/`
2.  **Month Progress Bar**
    *   Progress bar visual persentase bulan yang telah berlalu.
    *   URL: `/month-progress/`
3.  **Focus Countdown**
    *   Hitung mundur ke deadline manual (Default: 31 Jan 2026).
    *   URL: `/focus-countdown/`
4.  **Today Focus**
    *   Widget teks statis pengingat fokus harian.
    *   URL: `/today-focus/`

## Cara Deploy ke GitHub Pages

1.  Buat repository baru di GitHub.
2.  Klik tombol **Add file** lalu pilih **Upload files**.
3.  **Drag & Drop (Tarik & Lepas)** semua file dan folder berikut ke browser:
    *   **PENTING**: Pastikan Anda menarik **FOLDERNYA** (`time-left-month`, dll), bukan cuma isinya.
    *   Folder `time-left-month`
    *   Folder `month-progress`
    *   Folder `focus-countdown`
    *   Folder `today-focus`
    *   File `index.html` (Landing page)
    *   File `README.md` (Dokumentasi)
    *   File `.nojekyll` (File kosong baru, **wajib** diupload agar link folder bekerja)
4.  Tunggu proses upload selesai.
5.  Di bagian bawah "Commit changes", ketik pesan: "Upload widget pertama".
6.  Klik tombol hijau **Commit changes**.

### **Troubleshooting (Jika Link 404)**

*   **Pastikan Folder Terupload**: Buka repository GitHub Anda. Apakah Anda melihat folder berwarna biru (misal `time-left-month`)? Jika tidak (hanya ada file di root), berarti cara upload salah. Hapus dan upload ulang dengan menarik foldernya.
*   **File .nojekyll**: Pastikan file bernama `.nojekyll` ada di halaman utama repository. Ini mencegah GitHub memblokir folder tertentu.
*   **Tunggu Sebentar**: GitHub Pages kadang butuh 1-2 menit untuk update setelah upload.

## Cara Menggunakan di Notion

1.  Copy URL dari widget yang diinginkan (setelah di-deploy ke GitHub Pages).
    *   Contoh: `https://username.github.io/nama-repo/time-left-month/`
2.  Paste di halaman Notion.
3.  Pilih **Create Embed**.
4.  Sesuaikan ukuran sesuai kebutuhan.

## Fitur

*   **Ringan**: Hanya satu file HTML per widget (HTML + CSS + JS).
*   **Auto Dark Mode**: Menyesuaikan tema sistem/Notion.
*   **Font Konsisten**: Menggunakan font system UI (San Francisco, Segoe UI, dll).
*   **Transparan**: Background transparan agar menyatu dengan halaman.
