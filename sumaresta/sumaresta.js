$(document).ready(function () {

    document.getElementById("decimal1").value = ""
    document.getElementById("decimal2").value = ""
    document.getElementById("sumad").value = ""    
    document.getElementById("restad").value = ""      
    
    document.getElementById("binario1").value = ""
    document.getElementById("binario2").value = ""
    document.getElementById("sumab").value = ""
    document.getElementById("restab").value = ""

    document.getElementById("ca1").value = ""
    document.getElementById("sca1").value = ""
    document.getElementById("rca1").value = ""
               
    document.getElementById("ca2").value = ""
    document.getElementById("sca2").value = ""
    document.getElementById("rca2").value = ""

    
    function complemento1(numero){
        b = ""
        
        for(i = 0 ; i < numero.length ; i++) 
            if( numero[i] == 0)
                b = b + "1"
            else 
                if( numero[i] == 1)
                    b = b + "0"
    
        return b
    }

    function complemento2(a){
        c = ""
        d = 0

        for(i = a.length-1 ; i >= 0 ; i--){
            if(a[i] != 1 && d == 0 )      
                c = c + "0"
            else if(a[i] == 1 && d == 0 ) {
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
        
        return c
        
    }

    
    function calcular(){

        document.getElementById("sumad").value = parseFloat(document.getElementById("decimal1").value) + parseFloat(document.getElementById("decimal2").value)
        document.getElementById("restad").value = parseFloat(document.getElementById("decimal1").value) - parseFloat(document.getElementById("decimal2").value)

        document.getElementById("binario1").value = parseFloat(Math.abs(document.getElementById("decimal1").value)).toString(2).padStart(8,'0')
        document.getElementById("binario2").value = parseFloat(Math.abs(document.getElementById("decimal2").value)).toString(2).padStart(8,'0')
        document.getElementById("sumab").value = parseFloat(Math.abs(document.getElementById("sumad").value)).toString(2).padStart(8,'0')
        document.getElementById("restab").value = parseFloat(Math.abs(document.getElementById("restad").value)).toString(2).padStart(8,'0')

        document.getElementById("ca1").value = complemento1(document.getElementById("binario2").value)
        document.getElementById("sca1").value = complemento1(document.getElementById("sumab").value)
        document.getElementById("rca1").value = complemento1(document.getElementById("restab").value)
               
        document.getElementById("ca2").value = complemento2(document.getElementById("binario2").value)
        document.getElementById("sca2").value =  complemento2(document.getElementById("sumab").value)
        document.getElementById("rca2").value = complemento2(document.getElementById("restab").value)
    }

    document.getElementById("boton1").addEventListener("click",calcular);

});






