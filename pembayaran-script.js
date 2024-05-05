document.addEventListener("DOMContentLoaded", function() {
    // Sembunyikan elemen nota pembayaran secara default
    document.getElementById("invoice-container").style.display = "none";

    // Tangani penyerahan formulir
    document.getElementById("pembayaran-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        var nim = document.getElementById("nim-id").value;
        var nama = document.getElementById("nama").value;
        var fakultas = document.getElementById("fakultas").value;
        var prodi = document.getElementById("prodi").value;
        var sks = parseFloat(document.getElementById("sks").value);
        var dpp = parseFloat(document.getElementById("dpp").value);
        var spp = parseFloat(document.getElementById("spp").value);

        // Menghitung total biaya per semester
        var total = sks + dpp + spp;

        // Mengonversi total menjadi string dengan tanda titik
        var formattedTotal = total.toLocaleString('id-ID'); // 'id-ID' mengacu pada bahasa dan negara Indonesia

        // Menampilkan total biaya per semester di dalam formulir
        document.getElementById("total").value = formattedTotal;

        // Generate kwitansi pembayaran
        // Mengambil karakter pertama dari string dan mengonversinya menjadi huruf besar
        var fakultasCapitalized = fakultas.charAt(0).toUpperCase() + fakultas.slice(1);

        // Mendapatkan tanggal saat ini
        var currentDate = new Date().toLocaleDateString('id-ID'); // 'id-ID' mengacu pada bahasa dan negara Indonesia

        // Gabungkan dengan kode untuk membuat kwitansiHTML
        var kwitansiHTML = `
            <h2>Kwitansi Pembayaran</h2>
            <p><strong>Tanggal:</strong> ${currentDate}</p>
            <p><strong>NIM:</strong> ${nim}</p>
            <p><strong>Nama:</strong> ${nama}</p>
            <p><strong>Fakultas:</strong> ${fakultasCapitalized}</p>
            <p><strong>Prodi:</strong> ${prodi}</p>
            <p><strong>Biaya Per SKS:</strong> ${sks}</p>
            <p><strong>DPP:</strong> ${dpp}</p>
            <p><strong>SPP:</strong> ${spp}</p>
            <p><strong>Total Biaya Per Semester:</strong> ${formattedTotal}</p>
        `;

        // Buka jendela popup dan tulis kwitansi pembayaran
        var popupWindow = window.open("", "Kwitansi Pembayaran", "width=600,height=400");
        popupWindow.document.write(`
            <html>
            <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <title>Kwitansi Pembayaran</title>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,400;0,500;0,600;0,800;1,700&display=swap');
                    *{
                    font-family: 'Exo 2', sans-serif;  
                    }

                    body {
                        background: linear-gradient(315deg, rgb(54, 12, 105) 3%, rgba(60,132,206,1) 38%, rgb(43, 32, 113) 68%);
                        animation: gradient 15s ease infinite;
                        background-size: 400% 400%;
                        background-attachment: fixed;
                        height: 100vh;
                        padding: 20px;
                        color: #fff;
                      }
                      
                      @keyframes gradient {
                        0% {
                            background-position: 0% 0%;
                        }
                        50% {
                            background-position: 100% 100%;
                        }
                        100% {
                            background-position: 0% 0%;
                        }
                </style>
            </head>
            <body>
                <!-- Isi kwitansi HTML akan ditulis di sini -->
            </body>
            </html>
        `);
        
        // Di sini Anda perlu menambahkan isi kwitansi HTML yang akan ditulis di dalam body dokumen HTML
        popupWindow.document.write(kwitansiHTML);
        
    });
});
