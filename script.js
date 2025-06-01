 let button = document.getElementById("buttondesc")
button.style.backgroundColor = "aqua" 
button.style.border = "none"
button.style.borderRadius = "16px"
  


function btndesc1() {
    let ps = document.getElementById("ada")
    let pr = document.getElementById("print")
    if(!ps){

        let cihuy = document.createElement("p")
        cihuy.innerText = "SPESIFIKASI 512 GB SSD, 16 GB RAM, INTEL i7 GEN 11"
        let nyam =  document.createElement("p")
        nyam.innerText = "HARGA 20.999.000"
        let makin = document.createElement("h1")
        makin.innerText ="LAPTOP TERBARU"
        let dip = document.createElement("div")
        dip.appendChild(makin)
        dip.appendChild(nyam)
        dip.appendChild(cihuy)
        dip.id = "ada"
        pr.appendChild(dip)
    } else{
      let nana = document.getElementById("print")
      let tar = document.getElementById("ada")
      nana.removeChild(tar)
    }

}

function input() {
    let inputdeskripsi = document.getElementById("deskripsi").value
    let inputnama = document.getElementById("nama").value
    let inputharga = document.getElementById("harga").value
    if(!inputnama || !inputdeskripsi || !inputharga){
        Swal.fire({
  title: "admin",
  text: "masih belum lengkap ayo lengkapi lagiiii",
  icon: "question"
});
    } else {

        Swal.fire({
      title: "apakah kamu yakin?",
      text: "akan di tambahkan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ya isi!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "berhasil!",
          text: "kamu berhasil menambahkan",
          icon: "success"
        });
        let inter = document.getElementById("bibi")
        let asikk = document.createElement("p")
            asikk.innerText = inputdeskripsi
            let harga =  document.createElement("p")
            harga.innerText = inputharga
            let kakak = document.createElement("h1")
            kakak.innerText =inputnama
            let btn = document.createElement("button")
            btn.className = "hapus"
            btn.innerText = "hapus aku"
            let dip = document.createElement("div")

                btn.addEventListener("click", function () {
                    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "yaa!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "kamu berhasil menghapus list.",
      icon: "success"
    });
    this.parentElement.remove()
  }
});
        })

            dip.appendChild(kakak)
            dip.appendChild(harga)
            dip.appendChild(asikk)
            dip.appendChild(btn)
            dip.id = "yaa"
            inter.appendChild(dip)
      }
    });
    }
    
    }

