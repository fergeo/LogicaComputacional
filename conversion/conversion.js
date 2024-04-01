$(document).ready(function () {

    function superCalculadora(){

        basedestino = document.getElementById("basedestino").value
        elem = document.getElementById("base"+basedestino);
        elem.style.background = "blue";

        b = ""
        c = ""
        cad = []

        numero = document.getElementById("numero").value
        base = document.getElementById("basenumero").value

        document.getElementById("base2").value = ""
        document.getElementById("base3").value = ""
        document.getElementById("base4").value = ""            
        document.getElementById("base5").value = ""
        document.getElementById("base6").value = ""
        document.getElementById("base7").value = ""
        document.getElementById("base8").value = ""
        document.getElementById("base9").value = ""
        document.getElementById("base10").value = ""
        document.getElementById("base11").value = ""
        document.getElementById("base12").value = ""
        document.getElementById("base13").value = ""
        document.getElementById("base14").value = ""
        document.getElementById("base15").value = ""
        document.getElementById("base16").value = ""

        if(base != "2"){
            a = Math.abs(parseFloat(numero)).toString(2).padStart(document.getElementById("bits").value,"0")
            
            numero = Math.abs(parseFloat(numero))

            document.getElementById("base10").value = numero.toString(10).toUpperCase()

            document.getElementById("base2").value = parseFloat(numero).toString(2).padStart(document.getElementById("bits").value,"0")
            document.getElementById("base3").value = parseFloat(numero).toString(3).toUpperCase()
            document.getElementById("base4").value = parseFloat(numero).toString(4).toUpperCase()            
            document.getElementById("base5").value = parseFloat(numero).toString(5).toUpperCase()
            document.getElementById("base6").value = parseFloat(numero).toString(6).toUpperCase()
            document.getElementById("base7").value = parseFloat(numero).toString(7).toUpperCase()
            document.getElementById("base8").value = parseFloat(numero).toString(8).toUpperCase()
            document.getElementById("base9").value = parseFloat(numero).toString(9).toUpperCase()
            document.getElementById("base11").value = parseFloat(numero).toString(11).toUpperCase()
            document.getElementById("base12").value = parseFloat(numero).toString(12).toUpperCase()
            document.getElementById("base13").value = parseFloat(numero).toString(13).toUpperCase()
            document.getElementById("base14").value = parseFloat(numero).toString(14).toUpperCase()
            document.getElementById("base15").value = parseFloat(numero).toString(15).toUpperCase()
            document.getElementById("base16").value = parseFloat(numero).toString(16).toUpperCase()      
            
            console.log(a)
            
            for(i = 0 ; i < a.length ; i++) 
                if( a[i] == 0)
                    b = b + "1"
                else 
                    if( a[i] == 1)
                        b = b + "0"
            
            document.getElementById("ca1").value = b

            d = 0
    
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
                document.getElementById("ca2").value = c


        }
        else if(base == 2){
            decimal = 0

            for (i = 0; i < numero.length; i++) {
                decimal += numero[i] * 2 ** (numero.length - 1 - i);
            }
    
            document.getElementById("base10").value = decimal

            document.getElementById("base2").value = numero            
            document.getElementById("base3").value = decimal.toString(3).toUpperCase()
            document.getElementById("base4").value = decimal.toString(4).toUpperCase()          
            document.getElementById("base5").value = decimal.toString(5).toUpperCase()
            document.getElementById("base6").value = decimal.toString(6).toUpperCase()
            document.getElementById("base7").value = decimal.toString(7).toUpperCase()
            document.getElementById("base8").value = decimal.toString(8).toUpperCase()
            document.getElementById("base9").value = decimal.toString(9).toUpperCase()
            document.getElementById("base11").value = decimal.toString(11).toUpperCase() 
            document.getElementById("base12").value = decimal.toString(12).toUpperCase() 
            document.getElementById("base13").value = decimal.toString(13).toUpperCase() 
            document.getElementById("base14").value = decimal.toString(14).toUpperCase() 
            document.getElementById("base15").value = decimal.toString(15).toUpperCase() 
            document.getElementById("base16").value = decimal.toString(16).toUpperCase()      
            
            for(i = 0 ; i < numero.length ; i++) 
                if( numero[i] == 0)
                    b = b + "1"
                else 
                    if( numero[i] == 1)
                        b = b + "0"
            
            document.getElementById("ca1").value = b

            d = 0
    
            for(i = numero.length-1 ; i >= 0 ; i--) 
                {
                    if(numero[i] != 1 && d == 0 )      
                        c = c + "0"
                    else if (numero[i] == 1 && d == 0 ) {
                        c = c + "1"
                        d = 1
                    }
                    else if(d == 1){
                        if(numero[i] == 0)
                            c = c + "1"
                        else 
                            if(numero[i] == 1)
                                c = c + "0"
                    }
                }
 
                cad = c.split("")
                cad = cad.reverse()
                c = cad.join("")
                document.getElementById("ca2").value = c

        }
    }

    document.getElementById("boton1").addEventListener("click",superCalculadora);

});






