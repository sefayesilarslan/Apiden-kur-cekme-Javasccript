document.getElementById("change").addEventListener("click", change);



function change(){

    const xhr=new XMLHttpRequest();

    xhr.open("GET", "https://api.exchangerate.host/latest");

    xhr.onload=function(){
        if(this.status){
            const respons=JSON.parse(this.responseText);
            // console.log(this.responseText); 

            const rate=respons.rates.TRY;
            const rate2=respons.rates.USD;
            const amount = Number(document.getElementById("amount").value);
           // console.log(amount*rate);
            document.getElementById("tl").value=amount*rate;
            document.getElementById("dolar").value=amount*rate2;
        }
    }



    xhr.send();


}