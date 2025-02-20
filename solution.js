/**
 * Mengembalikan hasil penjumlahan dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function tambah(a, b) {
    return a + b;
}

/**
 * Mengembalikan hasil pengurangan dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function kurang(a, b) {
    return a - b;
}

/**
 * Mengembalikan hasil perkalian dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function kali(a, b) {
    return a * b;
}

/**
 * Mengembalikan hasil pembagian dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number | string}
 */
function bagi(a, b) {
    return a / b;
}

/**
 * Mengembalikan hasil pangkat dari dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function pangkat(a, b) {
    return a ** b;
}

/**
 * Mengembalikan faktorial dari sebuah angka.
 * @param {number} n 
 * @returns {number}
 */
function faktorial(n) {
    if (n === 1 | n === 0) {
        return 1;
    } else {
        return n * faktorial(n - 1);
    }
}

/**
 * Mengembalikan true jika angka adalah bilangan prima, false jika tidak.
 * @param {number} n 
 * @returns {boolean}
 */
function isPrima(n) {
}

/**
 * Mengembalikan hasil dari a modulus b.
 * modulus adalah sisa pembagian a dengan b.
 * contoh 10 mod 3 = 1, karena 10 dibagi 3 adalah 3 sisa 1.
 * 10 / 3 = 3 sisa 1. dan 1 adalah jawabannya
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function modulus(a, b) {
    return a % b;
}

/**
 * Mengembalikan nilai absolut dari sebuah angka.
 * @param {number} a 
 * @returns {number}
 */
function absolut(a) {
    if (a < 0) {
        return a *= -1;
    } else {
        return a;
    }
}


/**
 * Mengembalikan nilai terbesar dari dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function maksimum(a, b) {
    if (a < b) {
        return b
    } else {
        return a
    }
}

/**
 * Mengembalikan nilai terkecil dari dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function minimum(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

/**
 * Mengembalikan hasil dari a dibulatkan ke bilangan bulat terdekat.
 * @param {number} a 
 * @returns {number}
 */
function bulatkan(a) {

}

// Export hasil akhir

module.exports = tambah;