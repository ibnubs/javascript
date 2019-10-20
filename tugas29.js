function regex() {
    let data = "Belajar menimba ilmu programming bersama Niomic";
    let str = RegExp("bersama");

    console.log(str.exec(data));
   }

   regex();