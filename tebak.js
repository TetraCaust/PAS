let konfirmasi = confirm("Mulai Bermain Tebak Angka?");
do {
  let angkaRandom = Math.floor(Math.random() * 11 + 1);
  console.log(angkaRandom);

  let masukanAngka = prompt("Masukan Angka Tebakan 1-10");
  if (konfirmasi == false);

  if (angkaRandom < 1) {
    angkaRandom = "1";
  } else if (angkaRandom < 2) {
    angkaRandom = "2";
  } else if (angkaRandom < 3) {
    angkaRandom = "3";
  } else if (angkaRandom < 5) {
    angkaRandom = "5";
  } else if (angkaRandom < 6) {
    angkaRandom = "6";
  } else if (angkaRandom < 7) {
    angkaRandom = "7";
  } else if (angkaRandom < 8) {
    angkaRandom = "8";
  } else if (angkaRandom < 9) {
    angkaRandom = "9";
  } else if (angkaRandom < 10) {
    angkaRandom = "10";
  } else angkaRandom = "4";
  console.log(angkaRandom);

  if (angkaRandom == masukanAngka) {
    alert("Selamat Anda Benar!");
  } else if (angkaRandom < masukanAngka) {
    alert("Angka Terlalu Besar!");
  } else if (angkaRandom > masukanAngka) {
    alert("Angka Terlalu Kecil!");
  }
  konfirmasi = confirm("Ingin Bermain Lagi?");
} while (konfirmasi == true);
