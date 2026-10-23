// === MASUKKAN DETAIL KONTAK ANDA HANYA DI DALAM SCRIPT JS INI ===
// Kontak tidak akan terlihat langsung oleh pengunjung di tampilan web.
const MY_CONFIG = {
    whatsappNumber: "6289699413547", // Ubah dengan nomor WA Anda (Format: 62...)
    emailAddress: "albadrioioi22@gmail.com"  // Ubah dengan email Anda
};

document.addEventListener('DOMContentLoaded', () => {

    // 1. Fitur Dark / Light Mode Switcher
    const themeToggleBtn = document.getElementById('themeToggle');
    const body = document.body;

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        body.classList.toggle('dark-theme');

        // Ganti ikon matahari/bulan
        const icon = themeToggleBtn.querySelector('i');
        if (body.classList.contains('light-theme')) {
            icon.className = 'fa-solid fa-moon';
            themeToggleBtn.style.color = '#0284c7';
        } else {
            icon.className = 'fa-solid fa-sun';
            themeToggleBtn.style.color = '#f59e0b';
        }
    });

    // 2. Tombol Hubungi WhatsApp Direct
    const btnDirectWa = document.getElementById('btnDirectWa');
    btnDirectWa.addEventListener('click', () => {
        const waUrl = `https://wa.me/${MY_CONFIG.whatsappNumber}?text=Halo,%20saya%20tertarik%20bekerja%20sama.`;
        window.open(waUrl, '_blank');
    });

    // 3. Tombol Hubungi Email Direct
    const btnDirectEmail = document.getElementById('btnDirectEmail');
    btnDirectEmail.addEventListener('click', () => {
        const mailUrl = `mailto:${MY_CONFIG.emailAddress}?subject=Tawaran%20Kerjasama`;
        window.location.href = mailUrl;
    });

    // 4. Form Kirim Pesan Kustom ke WA
    const waForm = document.getElementById('waForm');
    waForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;

        const waText = `Halo! Saya *${name}*%0A` +
                       `Layanan yang dibutuhkan: *${service}*%0A%0A` +
                       `Pesan:%0A${message}`;

        const waUrl = `https://wa.me/${MY_CONFIG.whatsappNumber}?text=${waText}`;
        window.open(waUrl, '_blank');
    });
});
