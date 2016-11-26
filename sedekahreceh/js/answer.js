var db = {
  "items": {
    "10": {
      "title": "Saya tidak bisa memasukkan Data",
      "content": "<h1>Saya tidak bisa memasukkan Data</h1><div class='cc'><p>Ketika kita hendak mengisi form untuk pengajuan Donasi kita, mungkin Kita akan menjumpai bebrapa Error ataupun Tampilan yang tidak sesuai. Error maupun kesalahan tersebut antara lain adalah <strong>Tidak bisa memasukkan data</strong></p><p>Pada error seperti ini kemungkinan penyebabnya adalah </p><ol dir='ltr'><li>Browser tidak support</li><li>Koneksi / Jaringan lamban yang mengakibatkan beberapa komponen web tidak ter load dengan sempurna</li><li>Kesalahan pada saat mengisi form</li></ol></div><h2>Penyelesaian</h2><div class='cc'><ol dir='ltr'><li>Pastikan kamu mengisikan Form dengan format yang sesuai. Misalnya Email harus memuat minimal 2 character yaitu <i>'@'</i> dan <i>'.'</i></li><li>Pastikan Nominal Donasi yang anda masukkan tanpa character apapun, masukkan Angka anga saja, Misalnya Rp. 100.000,00 yang di tulis adalah 100000 saja</li><li>Pastikan bahwa anda sudah Menyelesaikan <i>Captcha</i> yang ada</li><li>Pastikan Browser milik anda UptoDate</li><li>Pastikan kembali bawha jaringan anda lancar dan tidak lelet.</li></ol></div><h2>Belum terselesaikan?</h2><div class='cc'><p>Email ke <strong>support@sedekahreceh.com</strong> untuk informasi lebih lanjut.</p></div>"
    },
    "11": {
      "title": "Tidak Terjadi apa apa setelah mengisi Form",
      "content": "<h1>Tidak Terjadi apa apa setelah mengisi Form</h1> <div class='cc'> <p>Form tidak bisa di submit atau dikirim setelah pengisisan data Donatur. Secara default setelah kita mengisi data diri kita, kita akan menjumpai informasi bahwa kita harus mentransfer uang donasi kita ke rekening yang telah kita pilih.</p></div><h2>Penyelesaian</h2> <div class='cc'> <p>Hal hal yang harus di periksa</p><ol dir='ltr'> <li>Versi Browser yang kita gunakan. Beberapa browser ada yang belum support dengan fitur fitur yang ada di website ini, segera Update browser anda ke versi yang lebih baru</li><li>Pastikan bahwa anda sudah mengisi data diri anda dengan benar</li><li>Jika muncul popup berisi <i>'Maaf, Masukkan Data yang Tepat. atau mungkin saat ini Server sedang dalam perbaikan'</i>  walaupun anda sudah memeriksa langkah ke 2 maka Server kami mungkin dalam perbaikan atau ada kesalahan</li></ol> </div><h2>Belum terselesaikan?</h2> <div class='cc'> <p>Email ke <strong>support@sedekahreceh.com</strong> untuk informasi lebih lanjut.</p></div>"
    },
    "12": {
      "title": "Saya Tidak mendapatkan notifikasi email",
      "content": "12"
    },
    "20" : {
      "title": "Tidak bisa memasukkan data",
      "content": "12"
    },
    "21" : {
      "title": "Tidak terjadi apa apa setelah mengisi form",
      "content": "12"
    },
    "22" : {
      "title": "Bukti-bukti Foto",
      "content": "12"
    }
  }
};
var $_GET;
var qs = document.location.search;
qs = qs.split('+').join(' ');
var params = {},
    tokens,
    re = /[?&]?([^=]+)=([^&]*)/g;
while (tokens = re.exec(qs)) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
}
var result = params;
$_GET = params;

if ($_GET['ref_topic'] != undefined) {
switch ($_GET['ref_topic']) {
  case "10":
    console.log('10');
    document.querySelector('.article-container').innerHTML = db.items[$_GET['ref_topic']].content;
    break;
  case "11":
    console.log('11');
    document.querySelector('.article-container').innerHTML = db.items[$_GET['ref_topic']].content;
    break;
  case "12":
    console.log('12');
    document.querySelector('.article-container').innerHTML = db.items[$_GET['ref_topic']].content;
    break;
  case "20":
    console.log('10');
    document.querySelector('.article-container').innerHTML = db.items[$_GET['ref_topic']].content;
    break;
  default:
    document.querySelector('.article-container').innerHTML = "<h2>Topik Tidak di Temukan</h2><div class='cc'><p>ID Topik <i>'" + $_GET['ref_topic'] + "'</i></p><p>Kembali ke <a href='/help.html'>Pusat Bantuan</a></p></div>";
    break;
} 
} else {
    document.querySelector('.article-container').innerHTML = "<h2>Topik Tidak di Temukan</h2><div class='cc'><p>Kembali ke <a href='/help.html'>Pusat Bantuan</a></p></div>";
}