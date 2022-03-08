var item = prompt('masukkan nama makanan / minuman kesukaanmu :\n (nasi, mie, sayur, softdrink, susu, bir)');

switch (item) {
    case 'nasi':
    case 'sayur':
    case 'susu':
        alert('makanan/minuman SEHAT!');
        break;
    case 'mie':    
    case 'softdrink':
    case 'bir' :
        alert('makanan/minuman TIDAK SEHAT!'); 
        break;


    default:
        alert('anda memasukkan nama makanan/minuman yang salah!');
        break;
}