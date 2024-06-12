const mongoose = require("mongoose")

mongoose.connect(process.env.DB_URL, {
})
    .then(()=> {
        console.log("Veritabanına başarı ile bağlandı.");
    })
    .catch((err)=>{
        console.log("Veritabanına bağlanılamadı: ", err);
    })