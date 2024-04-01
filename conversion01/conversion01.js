$(document).ready(function () {

    function complemento1(a,bits,numero){
        if(numero > 0)  
            return a

        if(a.length > bits)
            return "NO EXISTE"

        b = ""
        for(i = 0 ; i < a.length ; i++) 
            if( a[i] == 0)
                b = b + "1"
            else 
                if( a[i] == 1)
                    b = b + "0"

        return b
    }


    function complemento2(a,bits){
        d = 0
        c = ""
    
            for(i = a.length-1 ; i >= 0 ; i--) 
                {
                    if(a[i] != 1 && d == 0 )      
                        c = c + "0"
                    else if (a[i] == 1 && d == 0 ) {
                        c = c + "1"
                        d = 1
                    }
                    else if(d == 1){
                        if(a[i] == 0)
                            c = c + "1"
                        else 
                            if(a[i] == 1)
                                c = c + "0"
                    }
                }
 
                cad = c.split("")
                cad = cad.reverse()
                c = cad.join("")

        if(c.length > bits)
            c = "NO EXISTE"

        return c
    }


    function binario(numero){
        decimal = 0
        for (i = 0; i < numero.length; i++) {
            decimal += numero[i] * 2 ** (numero.length - 1 - i);
        }

        return decimal
    }

    function hexa(numero){
        h = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
        decimal = 0
        z = 0
        for (i = 0; i < numero.length; i++) {
            for(j = 0 ; j < h.length; j++){
                if(h[j] == numero[i].toUpperCase())
                    z = j      
            }    
            
            decimal += z * 16 ** (numero.length - 1 - i);
        }

        return decimal
    }    


    function octal(numero){
        octal = ["0","1","2","3","4","5","6","7"]
        decimal = 0
        z = 0
        for (i = 0; i < numero.length; i++) {
            for(j = 0 ; j < h.length; j++){
                if(h[j] == numero[i].toUpperCase())
                    z = j      
            }    
            
            decimal += z * 8 ** (numero.length - 1 - i);
        }

        return decimal
    }        


    function superCalculadora(){

        base = document.getElementById("base").value
        bits = document.getElementById("bits").value

        numero1 = document.getElementById("numero1").value
        numero2 = document.getElementById("numero2").value
        numero3 = document.getElementById("numero3").value
        numero4 = document.getElementById("numero4").value
        numero5 = document.getElementById("numero5").value

        if(base != "2"){

            if (document.getElementById('binario').checked==true){
                salida1 = parseFloat(numero1).toString(2).toUpperCase().padStart(bits,"0")
                salida2 = parseFloat(numero2).toString(2).toUpperCase().padStart(bits,"0")
                salida3 = parseFloat(numero3).toString(2).toUpperCase().padStart(bits,"0")
                salida4 = parseFloat(numero4).toString(2).toUpperCase().padStart(bits,"0")
                salida5 = parseFloat(numero5).toString(2).toUpperCase().padStart(bits,"0")
            }
            else if (document.getElementById('octal').checked==true){
                salida1 = parseFloat(numero1).toString(8).toUpperCase()
                salida2 = parseFloat(numero2).toString(8).toUpperCase()
                salida3 = parseFloat(numero3).toString(8).toUpperCase()
                salida4 = parseFloat(numero4).toString(8).toUpperCase()
                salida5 = parseFloat(numero5).toString(8).toUpperCase()
            }
            else if (document.getElementById('decimal').checked==true){
                if(base == "16"){
                    salida1 = hexa(numero1)
                    salida2 = hexa(numero2)
                    salida3 = hexa(numero3)
                    salida4 = hexa(numero4)
                    salida5 = hexa(numero5)
                }
                else if(base == "8"){
                    salida1 = hexa(numero1)
                    salida2 = hexa(numero2)
                    salida3 = hexa(numero3)
                    salida4 = hexa(numero4)
                    salida5 = hexa(numero5)
                }                
            }
            else if (document.getElementById('hexa').checked==true){
                salida1 = parseFloat(numero1).toString(16).toUpperCase()
                salida2 = parseFloat(numero2).toString(16).toUpperCase()
                salida3 = parseFloat(numero3).toString(16).toUpperCase()
                salida4 = parseFloat(numero4).toString(16).toUpperCase()
                salida5 = parseFloat(numero5).toString(16).toUpperCase()
            }
            else if (document.getElementById('ca1').checked==true){
                salida1 = Math.abs(parseFloat(numero1)).toString(2).padStart(document.getElementById("bits").value,"0")
                salida2 = Math.abs(parseFloat(numero2)).toString(2).padStart(document.getElementById("bits").value,"0")
                salida3 = Math.abs(parseFloat(numero3)).toString(2).padStart(document.getElementById("bits").value,"0")
                salida4 = Math.abs(parseFloat(numero4)).toString(2).padStart(document.getElementById("bits").value,"0")
                salida5 = Math.abs(parseFloat(numero5)).toString(2).padStart(document.getElementById("bits").value,"0")

                salida11 = complemento1(salida1,bits,numero1)
                salida12 = complemento1(salida2,bits,numero2)
                salida13 = complemento1(salida3,bits,numero3)
                salida14 = complemento1(salida4,bits,numero4)
                salida15 = complemento1(salida5,bits,numero5)
            }
            else if (document.getElementById('ca2').checked==true){
                salida1 = Math.abs(parseFloat(numero1)).toString(2).padStart(document.getElementById("bits").value,"0")
                salida2 = Math.abs(parseFloat(numero2)).toString(2).padStart(document.getElementById("bits").value,"0")
                salida3 = Math.abs(parseFloat(numero3)).toString(2).padStart(document.getElementById("bits").value,"0")
                salida4 = Math.abs(parseFloat(numero4)).toString(2).padStart(document.getElementById("bits").value,"0")
                salida5 = Math.abs(parseFloat(numero5)).toString(2).padStart(document.getElementById("bits").value,"0")

                salida11 = complemento2(Math.abs(parseFloat(numero1)).toString(2).padStart(document.getElementById("bits").value,"0"),bits)
                salida12 = complemento2(Math.abs(parseFloat(numero2)).toString(2).padStart(document.getElementById("bits").value,"0"),bits)
                salida13 = complemento2(Math.abs(parseFloat(numero3)).toString(2).padStart(document.getElementById("bits").value,"0"),bits)
                salida14 = complemento2(Math.abs(parseFloat(numero4)).toString(2).padStart(document.getElementById("bits").value,"0"),bits)
                salida15 = complemento2(Math.abs(parseFloat(numero5)).toString(2).padStart(document.getElementById("bits").value,"0"),bits)
            }



        }
        else if(base == 2){
            console.log("sali")
            salida1 = binario(numero1)
            salida2 = binario(numero2)
            salida3 = binario(numero3)
            salida4 = binario(numero4)
            salida5 = binario(numero5)

            if (document.getElementById('ca1').checked==true){
                salida11 = complemento1(numero1)
                salida12 = complemento1(numero2)
                salida13 = complemento1(numero3)
                salida14 = complemento1(numero4)
                salida15 = complemento1(numero5)
            }

            if (document.getElementById('ca2').checked==true){
                salida11 = complemento2(numero1)
                salida12 = complemento2(numero2)
                salida13 = complemento2(numero3)
                salida14 = complemento2(numero4)
                salida15 = complemento2(numero5)
            }            
        }


        conversion = document.querySelector('#conversion')
            conversionHTML = ""
            conversionHTML = `<tr>  <td style="width:100px">Salida:</td>
                                    <td style="width:230px">${salida1}</td>
                                    <td style="width:230px">${salida2}</td>
                                    <td style="width:230px">${salida3}</td>
                                    <td style="width:230px">${salida4}</td>
                                    <td style="width:230px">${salida5}</td>
                                <tr>`;

            if ((document.getElementById('ca1').checked==true) || (document.getElementById('ca2').checked==true))
                conversionHTML = conversionHTML + `<tr>  <td style="width:100px">Salida:</td>
                                                         <td style="width:200px">${salida11}</td>
                                                         <td style="width:200px">${salida12}</td>
                                                         <td style="width:200px">${salida13}</td>
                                                         <td style="width:200px">${salida14}</td>
                                                         <td style="width:200px">${salida15}</td>
                                                    <tr>`;
    
            conversion.innerHTML = conversionHTML;


    }

    document.getElementById("boton1").addEventListener("click",superCalculadora);

});






