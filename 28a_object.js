let rekening = {
    nama: "Ahmad",
    sandi: 123456,
    pin: 546981,
    saldo: 20000000
}

//ambil saldo

   let inputSandi =  prompt("masukan sandi anda!")
   let inputPin = 0


    function ambilSaldo(){
        let ambil = parseInt(prompt("Berapa yang mau anda ambil? "))
        // typeof ambil
        // console.log(typeof ambil)
        let sisa = rekening.saldo - ambil
        alert(`Saldo anda sisa Rp.${sisa}`)
    }
   
    //input sandi
   if(inputSandi == 123456){
    inputPin = prompt("Masukan pin")
   }else{
    alert("Sandi salah")
   }
    //input pin
   if(inputPin == 123){
        ambilSaldo()
   }else{
    alert("pin salah")
   }

   ambilSaldo()
