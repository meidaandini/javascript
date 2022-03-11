// Manipulasi Array

// 1. Menambah isi Array
	// var arr = ["0", "galih", "false"];
	// console.log(arr);

  // var arr = [];
  // arr[0] = "disamarkan";
  // arr[2] = "galih";
  // arr[6] = "yani";
  // console.log(arr);



 // 2. Menghapus isi Array
 	// var arr = ["disamarkan", "Galih", "Yani"];
	// arr[1] = undefined;
 	// console.log(arr);


//3.Menampilkan isi array
    // var arr = ["sandhika", "galih", "nofa"];

    // for( var i = 0; i < 3; i++ ) {
    //     console.log('Mahasiswa ke-' + (i+1) + ' :' + arr[i]);
    // }





// METHOD PADA ARRAY
    // 1.join
        // console.log(arr.join('-'));

    // 2.push & pop (push=mendorong masuk, pop=menghilangkan)
         // arr.push('Doddy', 'Fitri');
       // arr.pop();
       // arr.pop();
         // console.log(arr.join('-'));

    // 3.unshift & shift (shif=mengeser keluar, unshift=kedalam )
        // arr.unshift('Doddy');
        // arr.shift();
        // console.log(arr.join('-'));

    // 4.silce (untuk mengambil beberapa bagian pada array untuk membuat array yang baru)
        // slice(awal,akhir);
       // var arr2 = ['yuli', 'galih', 'yayuk', 'riski', 'wanto'];
       // var arr2 = arr.slice(1,4);
       // console.log(arr.join('-'));
       // console.log(arr2.join('-'));

    // 5.splice (untuk menyambung atau menambal array)
        // splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...) 
            // arr.splice(1, 2, 'dino', 'ayu');
            // console.log(arr.join('-'));


    // 6.forEach
        // var angka = [1,2,3,4,5,6,7,8];
        // var nama = ['ida', 'yuyu', 'tuing'];
        // for(var i = 0; i < angka.length; i++) { 
        //  console.log(angka[i]);
        // }

        // angka.forEach(function(e) {
        //  console.log(e);
        // }); 


    // 7.map
        // var angka = [1,2,5,3,6,8,4];
        // var angka2 = angka.map(function(e) {
        //     return e * 2;
        // })
        // console.log(angka2.join);

    // 8.sort
        // var angka = [1,2,10,5,20,3,6,8,4];
        // angka.sort(function(a,b) {
        //     return a-b;
        // });
        // console.log(angka.join('-'));

    // 9. filter
        // var angka = [1,2,10,5,20,3,6,8,4];
        // var angka2 = angka.filter(function(x) {
        //     return x > 5;
        // });
        // console.log(angka2.join('-'));

    // 10. find
        var angka = [1,2,10,5,20,3,6,8,4];
        var angka2 = angka.find(function(x) {
            return x > 5;
        });
        console.log(angka2);











