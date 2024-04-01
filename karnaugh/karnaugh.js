$(document).ready(function () {

 
    tabla018 = document.querySelector('#tabla018')
    tabla018HTML = `<tr>
          <td style="width:80px">Nro.</td>
          <td style="width:60px">A</td><td style="width:60px">B</td><td style="width:60px">C</td><td style="width:60px">S</td><tr>
  
        <td style="width:80px">1</td>
        <td style="width:60px">0</td><td style="width:60px">0</td><td style="width:60px">0</td>
              <td style="width:60px"><select name="valor0" id="valor0">
                  <option value="X">X</option><option value="0">0</option><option value="1">1</option></select></td><tr>
          
        <td style="width:80px">2</td>
        <td style="width:60px">0</td><td style="width:60px">0</td><td style="width:60px">1</td>
              <td style="width:60px"><select name="valor1" id="valor1">
                  <option value="X">X</option><option value="0">0</option><option value="1">1</option></select></td><tr>
        
        <td style="width:80px">3</td>
        <td style="width:60px">0</td><td style="width:60px">1</td><td style="width:60px">0</td>
              <td style="width:60px"><select name="valor2" id="valor2">
                  <option value="X">X</option><option value="0">0</option><option value="1">1</option></select></td><tr>
          
        <td style="width:80px">4</td>
        <td style="width:60px">0</td><td style="width:60px">1</td><td style="width:60px">1</td>
              <td style="width:60px"><select name="valor3" id="valor3">
                  <option value="X">X</option><option value="0">0</option><option value="1">1</option></select></td><tr>
          
        <td style="width:80px">5</td>        
        <td style="width:60px">1</td><td style="width:60px">0</td><td style="width:60px">0</td>
              <td style="width:60px"><select name="valor4" id="valor4">
                  <option value="X">X</option><option value="0">0</option><option value="1">1</option></select></td><tr>
          
        <td style="width:80px">6</td>
        <td style="width:60px">1</td><td style="width:60px">0</td><td style="width:60px">1</td>
              <td style="width:60px"><select name="valor5" id="valor5">
                  <option value="X">X</option><option value="0">0</option><option value="1">1</option></select></td><tr>
          
        <td style="width:80px">7</td>
        <td style="width:60px">1</td><td style="width:60px">1</td><td style="width:60px">0</td> 
              <td style="width:60px"><select name="valor6" id="valor6">
                  <option value="X">X</option><option value="0">0</option><option value="1">1</option></select></td><tr>
          
        <td style="width:80px">8</td>    
        <td style="width:60px">1</td><td style="width:60px">1</td><td style="width:60px">1</td>
              <td style="width:60px"><select name="valor7" id="valor7">
                  <option value="X">X</option><option value="0">0</option><option value="1">1</option></select></td><tr><tr>`;
    
    tabla018.innerHTML = tabla018HTML;

    tabla0181 = document.querySelector('#tabla0181')
    tabla0181HTML = `<tr>
                        <td style="width:80px">A B C</td>
                        <td style="width:60px">&nbsp;&nbsp0 0</td>
                        <td style="width:60px">&nbsp;&nbsp0 1</td>
                        <td style="width:60px">&nbsp;&nbsp1 1</td>
                        <td style="width:60px">&nbsp;&nbsp1 0</td><tr>
    
                    <td style="width:60px;text-align:center">&nbsp;&nbsp0&nbsp</td>
                        <td style="width:60px;text-align:center" id="000"></td>
                            <td style="width:60px;text-align:center" id="001"></td>
                                <td style="width:60px;text-align:center" id="011"></td>
                                    <td style="width:60px;text-align:center" id="010"></td><tr>

                    <td style="width:60px;text-align:center">&nbsp;&nbsp1&nbsp</td>
                        <td style="width:60px;text-align:center" id="100"></td>
                            <td style="width:60px;text-align:center" id="101"></td>
                                <td style="width:60px;text-align:center" id="111"></td>
                                    <td style="width:60px;text-align:center" id="110"></td><tr>`;
    tabla0181.innerHTML = tabla0181HTML;
  
  
    tabla0116 = document.querySelector('#tabla0116')
    tabla0116HTML = `<tr>
                        <td style="width:80px">Nro.</td>    
                            <td style="width:60px">A</td>
                                <td style="width:60px">B</td>
                                    <td style="width:60px">C</td>
                                        <td style="width:60px">D</td>
                                            <td style="width:60px">S</td><tr>
          
                    <td style="width:80px">1</td>
                    <td style="width:60px">0</td><td style="width:60px">0</td><td style="width:60px">0</td><td style="width:60px">0</td>
                    <td style="width:60px"><select name="valor160" id="valor160">
                        <option value="X">X</option><option value="0">0</option><option value="1">1</option></select></td><tr>
  
                    <td style="width:80px">2</td>
                    <td style="width:60px">0</td><td style="width:60px">0</td><td style="width:60px">0</td><td style="width:60px">1</td>
                    <td style="width:60px"><select name="valor161" id="valor161">
                        <option value="X">X</option><option value="0">0</option><option value="1">1</option></select></td><tr>

                    <td style="width:80px">3</td>
                    <td style="width:60px">0</td><td style="width:60px">0</td><td style="width:60px">1</td><td style="width:60px">0</td>
                    <td style="width:60px"><select name="valor162" id="valor162">
                        <option value="X">X</option><option value="0">0</option><option value="1">1</option></select></td><tr>
   
                    <td style="width:80px">4</td>    
                    <td style="width:60px">0</td><td style="width:60px">0</td><td style="width:60px">1</td><td style="width:60px">1</td>
                    <td style="width:60px"><select name="valor163" id="valor163">
                        <option value="X">X</option><option value="0">0</option><option value="1">1</option></select></td><tr>
  
                    <td style="width:80px">5</td>
                    <td style="width:60px">0</td><td style="width:60px">1</td><td style="width:60px">0</td><td style="width:60px">0</td>
                    <td style="width:60px"><select name="valor164" id="valor164">
                        <option value="X">X</option><option value="0">0</option><option value="1">1</option></select></td><tr>
  
                    <td style="width:80px">6</td>
                    <td style="width:60px">0</td><td style="width:60px">1</td><td style="width:60px">0</td><td style="width:60px">1</td>
                    <td style="width:60px"><select name="valor165" id="valor165">
                        <option value="X">X</option><option value="0">0</option><option value="1">1</option></select></td><tr>
  
                    <td style="width:80px">7</td>
                    <td style="width:60px">0</td><td style="width:60px">1</td><td style="width:60px">1</td><td style="width:60px">0</td>
                    <td style="width:60px"><select name="valor166" id="valor166">
                        <option value="X">X</option><option value="0">0</option><option value="1">1</option></select></td><tr>
  
                    <td style="width:80px">8</td>
                    <td style="width:60px">0</td><td style="width:60px">1</td><td style="width:60px">1</td><td style="width:60px">1</td>
                    <td style="width:60px"><select name="valor167" id="valor167">
                        <option value="X">X</option><option value="0">0</option><option value="1">1</option></select></td><tr>
          
                    <td style="width:80px">9</td>
                    <td style="width:60px">1</td><td style="width:60px">0</td><td style="width:60px">0</td><td style="width:60px">0</td>
                    <td style="width:60px"><select name="valor168" id="valor168">
                        <option value="X">X</option><option value="0">0</option><option value="1">1</option></select></td><tr>
   
                    <td style="width:80px">10</td>
                    <td style="width:60px">1</td><td style="width:60px">0</td><td style="width:60px">0</td><td style="width:60px">1</td>
                    <td style="width:60px"><select name="valor169" id="valor169">
                        <option value="X">X</option><option value="0">0</option><option value="1">1</option></select></td><tr>
   
                    <td style="width:80px">11</td>
                    <td style="width:60px">1</td><td style="width:60px">0</td><td style="width:60px">1</td><td style="width:60px">0</td>
                    <td style="width:60px"><select name="valor1610" id="valor1610">
                        <option value="X">X</option><option value="0">0</option><option value="1">1</option></select></td><tr>
   
                    <td style="width:80px">12</td>
                    <td style="width:60px">1</td><td style="width:60px">0</td><td style="width:60px">1</td><td style="width:60px">1</td>
                    <td style="width:60px"><select name="valor1611" id="valor1611">
                        <option value="X">X</option><option value="0">0</option><option value="1">1</option></select></td><tr>
  
                    <td style="width:80px">13</td>
                    <td style="width:60px">1</td><td style="width:60px">1</td><td style="width:60px">0</td><td style="width:60px">0</td>
                    <td style="width:60px"><select name="valor1612" id="valor1612">
                        <option value="X">X</option><option value="0">0</option><option value="1">1</option></select></td><tr>
  
                    <td style="width:80px">14</td>
                    <td style="width:60px">1</td><td style="width:60px">1</td><td style="width:60px">0</td><td style="width:60px">1</td>
                    <td style="width:60px"><select name="valor1613" id="valor1613">
                        <option value="X">X</option><option value="0">0</option><option value="1">1</option></select></td><tr>
  
                    <td style="width:80px">15</td>
                    <td style="width:60px">1</td><td style="width:60px">1</td><td style="width:60px">1</td><td style="width:60px">0</td>
                    <td style="width:60px"><select name="valor1614" id="valor1614">
                        <option value="X">x</option><option value="0">0</option><option value="1">1</option></select></td><tr>
  
                    <td style="width:80px">16</td>
                    <td style="width:60px">1</td><td style="width:60px">1</td><td style="width:60px">1</td><td style="width:60px">1</td>
                    <td style="width:60px"><select name="valor1615" id="valor1615">
                        <option value="X">x</option><option value="0">0</option><option value="1">1</option></select></td><tr>
                <tr>`;
    tabla0116.innerHTML = tabla0116HTML;

    tabla01161 = document.querySelector('#tabla01161')
    tabla01161HTML = `<tr>
                    <td style="width:120px">A B C D</td>
                        <td style="width:60px">&nbsp;&nbsp0 0</td>
                        <td style="width:60px">&nbsp;&nbsp0 1</td>
                        <td style="width:60px">&nbsp;&nbsp1 1</td>
                        <td style="width:60px">&nbsp;&nbsp1 0</td><tr>
    
                    <td style="width:60px;text-align:center">0 0</td>
                        <td style="width:60px;text-align:center" id="0000"></td>
                            <td style="width:60px;text-align:center" id="0001"></td>
                                <td style="width:60px;text-align:center" id="0011"></td>
                                    <td style="width:60px;text-align:center" id="0010"></td><tr>

                    <td style="width:60px;text-align:center">0 1</td>
                        <td style="width:60px;text-align:center" id="0100"></td>
                            <td style="width:60px;text-align:center" id="0101"></td>
                                <td style="width:60px;text-align:center" id="0111"></td>
                                    <td style="width:60px;text-align:center" id="0110"></td><tr>
                                    
                    <td style="width:60px;text-align:center">1 1</td>
                        <td style="width:60px;text-align:center" id="1100"></td>
                            <td style="width:60px;text-align:center" id="1101"></td>
                                <td style="width:60px;text-align:center" id="1111"></td>
                                    <td style="width:60px;text-align:center" id="1110"></td><tr>

                    <td style="width:60px;text-align:center">1 0</td>
                        <td style="width:60px;text-align:center" id="1000"></td>
                            <td style="width:60px;text-align:center" id="1001"></td>
                                <td style="width:60px;text-align:center" id="1011"></td>
                                    <td style="width:60px;text-align:center" id="1010"></td><tr>`;
    tabla01161.innerHTML = tabla01161HTML;

    
    function calcular8(){
        salida = ""
        salida1 = ""
        vec = []

        salida = "MINITERMINO: "
        salida1 = "MAXITERMINO: "
        mini = [ "!A !B !C + ",
                 "!A !B C + ",
                 "!A B !C + ",
                 "!A B C + ",
                 " A !B !C + ",
                 " A !B C + ",
                 " A B !C + ",
                 " A B C"]
  
        maxi = [ "( A +  B +  C) . ",
                 "( A +  B + !C) . ",
                 "( A + !B +  C) . ",
                 "( A + !B + !C) . ",
                 "(!A +  B +  C) . ",
                 "(!A +  B + !C) . ",
                 "(!A + !B +  C) . ",
                 "(!A + !B + !C)"]    
                   
        for(i = 0 ; i <= 7 ; i++)
            if(document.getElementById('valor'+i).value == "X")
                vec[i] = "X"
  
        for(i = 0 ; i <= 7 ; i++)
            if(document.getElementById('valor'+i).value == 1){
                salida = salida + mini[i]        
                vec[i] = "1" 
            }
                    
        salida18 = document.querySelector('#salida11')
        salida18HTML = salida;
        salida18.innerHTML = salida18HTML;
  
        for(i = 0 ; i <= 7 ; i++)
        if(document.getElementById('valor'+i).value == 0){
            salida1 = salida1 + maxi[i] 
            vec[i] = "0"
        }
                    
        salida18 = document.querySelector('#salida13')
        salida18HTML = salida1;
        salida18.innerHTML = salida18HTML; 
            
        for(i = 0 ; i <= 7 ; i++){
            if(i == 0){
                s000 = document.getElementById('000')
                s000HTML = vec[i];
                s000.innerHTML = s000HTML; 
            }
            else if(i == 1){
                s001 = document.getElementById('001')
                s001HTML = vec[i];
                s001.innerHTML = s001HTML; 
            }
            else if(i == 2){
                s010 = document.getElementById('010')
                s010HTML = vec[i];
                s010.innerHTML = s010HTML; 
            }
            else if(i == 3){
                s011 = document.getElementById('011')
                s011HTML = vec[i];
                s011.innerHTML = s011HTML; 
            }
            else if(i == 4){
                s100 = document.getElementById('100')
                s100HTML = vec[i];
                s100.innerHTML = s100HTML; 
            }
            else if(i == 5){
                s101 = document.getElementById('101')
                s101HTML = vec[i];
                s101.innerHTML = s101HTML; 
            }
            else if(i == 6){
                s110 = document.getElementById('110')
                s110HTML = vec[i];
                s110.innerHTML = s110HTML; 
            }   
            else if(i == 7){
                s111 = document.getElementById('111')
                s111HTML = vec[i];
                s111.innerHTML = s111HTML; 
            }
        }
    }      
  
    function calcular16(){
        vec = []   
        salida = ""
        salida1 = ""
        salida = "MINITERMINO: "
        salida1 = "MAXITERMINO: "
        mini = [ "!A!B!C!D + ",
                 "!A!B!C D + ",
                 "!A!B C!D + ",
                 "!A!B C D + ",
                 "!A B!C!D + ",
                 "!A B!C D + ",
                 "!A B C!D + ",
                 "!A B C D + ",
                 " A!B!C!D + ",
                 " A!B!C D + ",
                 " A!B C!D + ",
                 " A!B C D + ",
                 " A B!C!D + ",
                 " A B!C D + ",
                 " A B C!D + ",
                 " A B C D"]
  
        maxi = [ "(A + B +  C +  D) . ",
                 "(A + B +  C + !D) . ",
                 "(A + B + !C +  D) . ",
                 "(A + B + C + D) . ",
                 "(A + B + C + D) . ",
                 "(A + B + C + D) . ",
                 "(A + B + C + D) . ",
                 "(A + B + C + D) . ",
                 "(A + B + C + D) . ",
                 "(A + B + C + D) . ",
                 "(A + B + C + D) . ",
                 "(A + B + C + D) . ",
                 "(A + B + C + D) . ",
                 "(A + B + C + D) . ",
                 "(A + B + C + D) . ",
                 "(A + B + C + D)"]    
                 
    
        for(i = 0 ; i <= 15 ; i++)
            if(document.getElementById('valor16'+i).value == "X")
                vec[i] = "X"

        for(i = 0 ; i <= 15 ; i++)
            if(document.getElementById('valor16'+i).value == 1){
                salida = salida + mini[i]        
                vec[i] = "1" 
            }
                  
        salida116 = document.querySelector('#salida12')
        salida116HTML = salida;
        salida116.innerHTML = salida116HTML;
  
        for(i = 0 ; i <= 15 ; i++)
            if(document.getElementById('valor16'+i).value == "0"){
                salida1 = salida1 + maxi[i] 
                vec[i] = "0"
            }
                
        salida116 = document.querySelector('#salida14')
        salida116HTML = salida1;
        salida116.innerHTML = salida116HTML;        

        for(i = 0 ; i <= 15 ; i++){
            if(i == 0){
                s0000 = document.getElementById('0000')
                s0000HTML = vec[i];
                s0000.innerHTML = s0000HTML; 
            }
            else if(i == 1){
                s001 = document.getElementById('0001')
                s001HTML = vec[i];
                s001.innerHTML = s001HTML; 
            }
            else if(i == 2){
                s0010 = document.getElementById('0010')
                s0010HTML = vec[i];
                s0010.innerHTML = s0010HTML; 
            }
            else if(i == 3){
                s0011 = document.getElementById('0011')
                s0011HTML = vec[i];
                s0011.innerHTML = s0011HTML; 
            }
            else if(i == 4){
                s0100 = document.getElementById('0100')
                s0100HTML = vec[i];
                s0100.innerHTML = s0100HTML; 
            }
            else if(i == 5){
                s0101 = document.getElementById('0101')
                s0101HTML = vec[i];
                s0101.innerHTML = s0101HTML; 
            }
            else if(i == 6){
                s0110 = document.getElementById('0110')
                s0110HTML = vec[i];
                s0110.innerHTML = s0110HTML; 
            }   
            else if(i == 7){
                s0111 = document.getElementById('0111')
                s0111HTML = vec[i];
                s0111.innerHTML = s0111HTML; 
            }
            if(i == 8){
                s1000 = document.getElementById('1000')
                s1000HTML = vec[i];
                s1000.innerHTML = s1000HTML; 
            }
            else if(i == 9){
                s1001 = document.getElementById('1001')
                s1001HTML = vec[i];
                s1001.innerHTML = s1001HTML; 
            }
            else if(i == 10){
                s1010 = document.getElementById('1010')
                s1010HTML = vec[i];
                s1010.innerHTML = s1010HTML; 
            }
            else if(i == 11){
                s1011 = document.getElementById('1011')
                s1011HTML = vec[i];
                s1011.innerHTML = s1011HTML; 
            }
            else if(i == 12){
                s1100 = document.getElementById('1100')
                s1100HTML = vec[i];
                s1100.innerHTML = s1100HTML; 
            }
            else if(i == 13){
                s1101 = document.getElementById('1101')
                s1101HTML = vec[i];
                s1101.innerHTML = s1101HTML; 
            }
            else if(i == 14){
                s1110 = document.getElementById('1110')
                s1110HTML = vec[i];
                s1110.innerHTML = s1110HTML; 
            }   
            else if(i == 15){
                s1111 = document.getElementById('1111')
                s1111HTML = vec[i];
                s1111.innerHTML = s1111HTML; 
            }
        }
    }      
  
    document.getElementById("boton1").addEventListener("click",calcular8);
    document.getElementById("boton2").addEventListener("click",calcular16);
});
  
  
  
  
  
  
  