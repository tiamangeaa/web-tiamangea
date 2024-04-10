<script>
  // Fungsi untuk menampilkan pesan konfirmasi saat pengguna mengklik link WhatsApp
  function confirmWhatsAppLink() {
    return confirm("Apakah Anda yakin ingin membuka WhatsApp?");
  }

  // Memperoleh semua elemen anchor (<a>) dalam dokumen
  const anchorElements = document.getElementsByTagName("a");

  // Melakukan iterasi melalui setiap elemen anchor
  for (let i = 0; i < anchorElements.length; i++) {
    const anchor = anchorElements[i];

    // Memeriksa apakah href dari elemen anchor mengandung "wa.me"
    if (anchor.getAttribute("href").includes("wa.me")) {
      // Menambahkan event listener untuk event klik
      anchor.addEventListener("click", function(event) {
        // Mencegah perilaku bawaan dari event
        event.preventDefault();

        // Memanggil fungsi konfirmasi sebelum membuka link WhatsApp
        const confirmed = confirmWhatsAppLink();

        // Jika pengguna mengonfirmasi, maka buka link WhatsApp
        if (confirmed) {
          window.location.href = anchor.getAttribute("href");
        }
      });
    }
  }
</script>
