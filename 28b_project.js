let rekening = {
    nama: "Ahmad",
    sandi: 123456,
    pin: 546981,
    saldo: 20000000
}

//ambil saldo

   let inputSandi =  prompt("masukan sandi anda!")
   let inputPin = 0

    function tambahSaldo(){
        let tambah = parseInt(prompt("Berapa yang mau anda tambah? "))
        let total = rekening.saldo + tambah
        alert(`Saldo anda: Rp.${total}`)
    }
   
    //input sandi
   if(inputSandi == 123456){
    inputPin = prompt("Masukan pin")
   }else{
    alert("Sandi salah")
   }
    //input pin
   if(inputPin == 123){
        tambahSaldo()
   }else{
    alert("pin salah")
   }

   tambahSaldo()
