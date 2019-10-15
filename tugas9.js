function nilaiMahasiswa(){
    var mahasiswa = {
        nama: "budi",
        jurusan: "manajemen",
        ipk: {
            semester1: 3.89,
            semester2: 3.70,
            semester3: 3.90,
            semester4: 3.65,
        }
    }
    console.log(mahasiswa);
    console.log("---------menambahkan property baru pada ipk-----------");
    mahasiswa.ipk.semester5 = 3.75;
    for (var a in mahasiswa){
        console.log(mahasiswa[a]);
    }

}
nilaiMahasiswa();


/*
Tugas 9 JS


1. Pastikan Teman Teman Sudah Menginstall Node JS

2. Teman - Teman Buatlah File di Folder javascript teman teman sebuah file dengan nama file tugas9.js

3. Buatlah Program Dengan Spesifikasi dibawah ini :

Buatlah sebuah variabel object versi teman teman.
Tampilkan berikan nilai pada masing masing properti objek yang teman teman buat
Setelah itu tampilkan objectnya dengan perulangan for in.
Hint : -

4. Happy Codding :)

*/
