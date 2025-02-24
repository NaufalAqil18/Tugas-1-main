// Kalkulator sederhana
const readline = require("readline");
const {
    tambah,
    kurang,
    kali,
    bagi,
    pangkat,
    faktorial,
    isPrima,
    modulus,
    absolut,
    maksimum,
    minimum,
    bulatkan,
} = require("./solution.js");

// Meminta input dari user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Menampilkan ke-12 opsi Kalkulator
function tampilkanMenu() {
    console.log("\n=== KALKULATOR SEDERHANA ===");
    console.log("1. Penjumlahan");
    console.log("2. Pengurangan");
    console.log("3. Perkalian");
    console.log("4. Pembagian");
    console.log("5. Pangkat");
    console.log("6. Faktorial");
    console.log("7. Cek Bilangan Prima");
    console.log("8. Modulus");
    console.log("9. Nilai Absolut");
    console.log("10. Maksimum");
    console.log("11. Minimum");
    console.log("12. Pembulatan");
    console.log("0. Keluar");
}

// Looping kalkulator functions
function mulaiKalkulator() {
    tampilkanMenu();
    rl.question("Pilih operasi (0-12): ", (pilihan) => {
        pilihan = parseInt(pilihan);
        if (pilihan === 0) {
            console.log("Terima kasih telah menggunakan kalkulator!");
            rl.close();
            return;
        }

        // Binary math operation
        if ([1, 2, 3, 4, 5, 8, 10, 11].includes(pilihan)) {
            rl.question("Masukkan angka pertama: ", (angka1) => {
                rl.question("Masukkan angka kedua: ", (angka2) => {
                    angka1 = parseFloat(angka1);
                    angka2 = parseFloat(angka2);
                    let hasil;
                    switch (pilihan) {
                        case 1:
                            hasil = tambah(angka1, angka2);
                            break;
                        case 2:
                            hasil = kurang(angka1, angka2);
                            break;
                        case 3:
                            hasil = kali(angka1, angka2);
                            break;
                        case 4:
                            hasil = bagi(angka1, angka2);
                            break;
                        case 5:
                            hasil = pangkat(angka1, angka2);
                            break;
                        case 8:
                            hasil = modulus(angka1, angka2);
                            break;
                        case 10:
                            hasil = maksimum(angka1, angka2);
                            break;
                        case 11:
                            hasil = minimum(angka1, angka2);
                            break;
                    }
                    console.log(`Hasil: ${hasil}`);
                    mulaiKalkulator();
                });
            });

            // Unary math operations
        } else if ([6, 7, 9, 12].includes(pilihan)) {
            rl.question("Masukkan angka: ", (angka) => {
                angka = parseFloat(angka);
                let hasil;
                switch (pilihan) {
                    case 6:
                        hasil = faktorial(angka);
                        break;
                    case 7:
                        hasil = isPrima(angka)
                            ? "Bilangan Prima"
                            : "Bukan Bilangan Prima";
                        break;
                    case 9:
                        hasil = absolut(angka);
                        break;
                    case 12:
                        hasil = bulatkan(angka);
                        break;
                }

                // Tampilkan hasil kalkulasi
                console.log(`Hasil: ${hasil}`);
                mulaiKalkulator();
            });

            // Opsi yang di input tidak valid
        } else {
            console.log("Pilihan tidak valid! Coba lagi.");
            mulaiKalkulator();
        }
    });
}

// Start kalkulator
mulaiKalkulator();
