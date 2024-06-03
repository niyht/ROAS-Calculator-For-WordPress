let ciro = document.getElementById("ciro");
let mal_gider = document.getElementById("mal_gider");
let reklam_gider = document.getElementById("reklam_gider");
let kredikarti_gider = document.getElementById("kredikarti_gider");
let kargo_gider = document.getElementById("kargo_gider");
let reklamyonetim_gider = document.getElementById("reklamyonetim_gider");
let reset_button = document.getElementById("reset_button");
let hesapla_button = document.getElementById("hesapla_button");
let sonuc = document.getElementById("sonucROAS");
let sonucReklamHarcamasi = document.getElementById("sonucReklamHarcamasi");

reset_button.addEventListener("click", () => {
    ciro.value = 0;
    mal_gider.value = 0;
    reklam_gider.value = 0;
    kredikarti_gider.value = 0;
    kargo_gider.value = 0;
    reklamyonetim_gider.value = 0;
    sonuc.innerText = "";
})

let reklamHarcamasi = (giderler) => {
    giderler = Number(mal_gider.value) + Number(reklam_gider.value) + Number(kredikarti_gider.value) + Number(kargo_gider.value) + Number(reklamyonetim_gider.value);
    let reklamHarcamasiHesap = Number(ciro.value) - Number(giderler) ;
    let roas = Number(ciro.value) / Number(reklamHarcamasiHesap);
    return roas;
}

let sonucReklamHarcamasiFonk = (giderler) => {
    giderler = Number(mal_gider.value) + Number(reklam_gider.value) + Number(kredikarti_gider.value) + Number(kargo_gider.value) + Number(reklamyonetim_gider.value);
    let reklamHarcamasiHesap = Number(ciro.value) - Number(giderler) ;
    return reklamHarcamasiHesap;
}

hesapla_button.addEventListener("click", () => {
    sonucReklamHarcamasi.innerText =  sonucReklamHarcamasiFonk();
    sonuc.innerText = "%" + reklamHarcamasi();
})