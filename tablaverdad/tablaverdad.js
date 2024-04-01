$(document).ready(function () {
  p = true
  q = true
    
  //p AND q
  a1 =  p &&  q == true ? a1 = "V" : a1 = "F";
  a2 =  p && !q == true ? a2 = "V" : a2 = "F";
  a3 = !p &&  q == true ? a3 = "V" : a3 = "F";
  a4 = !p && !q == true ? a4 = "V" : a4 = "F";

  b1 =  !(p &&  q) == true ? b1 = "V" : b1 = "F";
  b2 =  !(p && !q) == true ? b2 = "V" : b2 = "F";
  b3 = !(!p &&  q) == true ? b3 = "V" : b3 = "F";
  b4 = !(!p && !q) == true ? b4 = "V" : b4 = "F";

  c1 ="F";   c2 ="F";   c3 ="V";   c4 ="V";
  d1 ="F";   d2 ="V";   d3 ="F";   d4 ="V";
  e1 ="F";   e2 ="F";   e3 ="F";   e4 ="V";
  f1 ="F";   f2 ="F";   f3 ="V";   f4 ="F";
  g1 ="F";   g2 ="V";   g3 ="F";   g4 ="F";

 
  conjuncion = document.querySelector('#pandq')
    conjuncionHTML = `<tr><td style="width:60px">p</td> <td style="width:60px">q</td> <td style="width:150px">p AND q</td>
                          <td style="width:150px">!(p AND q)</td>
                          <td style="width:60px">!p</td>
                          <td style="width:60px">!q</td>    
                          <td style="width:150px">!p AND !q</td>
                          <td style="width:150px">!p AND q</td>
                          <td style="width:150px">p AND !q</td></tr>
                      <tr><td>V</td> <td>V</td> <td>${a1}</td> <td>${b1}</td> <td>${c1}</td> <td>${d1}</td> <td>${e1}</td> <td>${f1}</td> <td>${g1}</td> </tr>  
                      <tr><td>V</td> <td>F</td> <td>${a2}</td> <td>${b2}</td> <td>${c2}</td> <td>${d2}</td> <td>${e2}</td> <td>${f2}</td> <td>${g2}</td> </tr>  
                      <tr><td>F</td> <td>V</td> <td>${a3}</td> <td>${b3}</td> <td>${c3}</td> <td>${d3}</td> <td>${e3}</td> <td>${f3}</td> <td>${g3}</td> </tr>  
                      <tr><td>F</td> <td>F</td> <td>${a4}</td> <td>${b4}</td> <td>${c4}</td> <td>${d4}</td> <td>${e4}</td> <td>${f4}</td> <td>${g4}</td> </tr>`;
    conjuncion.innerHTML = conjuncionHTML;

  //p OR q
  a1 =  p ||  q == true ? a1 = "V" : a1 = "F";
  a2 =  p || !q == true ? a2 = "V" : a2 = "F";
  a3 = !p ||  q == true ? a3 = "V" : a3 = "F";
  a4 = !p || !q == true ? a4 = "V" : a4 = "F";

  b1 =  !(p ||  q) == true ? b1 = "V" : b1 = "F";
  b2 =  !(p || !q) == true ? b2 = "V" : b2 = "F";
  b3 = !(!p ||  q) == true ? b3 = "V" : b3 = "F";
  b4 = !(!p || !q) == true ? b4 = "V" : b4 = "F";

  c1 ="F";   c2 ="F";   c3 ="V";   c4 ="V";
  d1 ="F";   d2 ="V";   d3 ="F";   d4 ="V";
  e1 ="F";   e2 ="V";   e3 ="V";   e4 ="V";
  f1 ="V";   f2 ="F";   f3 ="V";   f4 ="V";
  g1 ="V";   g2 ="V";   g3 ="F";   g4 ="V";

    disyuncion = document.querySelector('#porq')
    disyuncionHTML = `<tr><td style="width:60px">p</td><td style="width:60px">q</td><td style="width:150px">p OR q</td>
                          <td style="width:150px">!(p OR q)</td><td style="width:60px">!p</td><td style="width:60px">!q</td>    
                          <td style="width:150px">!p OR !q</td><td style="width:150px">!p OR q</td><td style="width:150px">p OR !q</td></tr>
                      <tr><td>V</td> <td>V</td> <td>${a1}</td> <td>${b1}</td> <td>${c1}</td> <td>${d1}</td> <td>${e1}</td> <td>${f1}</td> <td>${g1}</td></tr>  
                      <tr><td>V</td> <td>F</td> <td>${a2}</td> <td>${b2}</td> <td>${c2}</td> <td>${d2}</td> <td>${e2}</td> <td>${f2}</td> <td>${g2}</td></tr>  
                      <tr><td>F</td> <td>V</td> <td>${a3}</td> <td>${b3}</td> <td>${c3}</td> <td>${d3}</td> <td>${e3}</td> <td>${f3}</td> <td>${g3}</td></tr>  
                      <tr><td>F</td> <td>F</td> <td>${a4}</td> <td>${b4}</td> <td>${c4}</td> <td>${d4}</td> <td>${e4}</td> <td>${f4}</td> <td>${g4}</td></tr>`;
    disyuncion.innerHTML = disyuncionHTML;


    simple = document.querySelector('#simple')
    simpleHTML = `<tr><td style="width:1250px">1)&nbsp;&nbsp;Leyes conmutativas&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
                      &nbsp; p ∧ q ≡ q ∧ p&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      ---&nbsp;&nbsp; p ∨ q ≡ q ∨ p</td></tr>
                  <tr><td style="width:1250px">2)&nbsp;&nbsp;Leyes asociativas&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                      &nbsp; (p ∧ q) ∧ r ≡ p ∧ (q ∧ r)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      ---&nbsp;&nbsp; (p ∨ q) ∨ r ≡ p ∨ (q ∨ r)</td></tr>
                  <tr><td style="width:1250px">3)&nbsp;&nbsp;Leyes dstributivas&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
                      &nbsp; p ∧ (p ∨ r) ≡ (p ∧ q) ∨ (p ∧ q)&nbsp;&nbsp;&nbsp;
                      ---&nbsp;&nbsp; p ∨ (p ∧ r) ≡ (p ∨ q) ∧ (p ∨ q)</td></tr>        
                  <tr><td style="width:1250px">4)&nbsp;&nbsp;Leyes de la identidad&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
                      &nbsp; p ∧ t ≡ p&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      ---&nbsp;&nbsp; p ∨ c ≡ p</td></tr>                 
                  <tr><td style="width:1250px">5)&nbsp;&nbsp;Leyes de negación&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
                      &nbsp; p ∨ ~p ≡ t &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      ---&nbsp;&nbsp; p ∧ ~p ≡ c</td></tr>
                  <tr><td style="width:1250px">6)&nbsp;&nbsp;Leyes de la doble negación&nbsp;&nbsp;:
                      &nbsp; ~(~p) ≡ p</tr>
                  <tr><td style="width:1250px">7)&nbsp;&nbsp;Leyes de idenpotencia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
                      &nbsp; (p ∧ p) ≡ p &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      ---  (p ∨ p) ≡ p</td></tr>
                  <tr><td style="width:1250px">8)&nbsp;&nbsp;Leyes universales acotadas&nbsp;&nbsp;&nbsp;: 
                      &nbsp; p ∨ t ≡ t &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                      ---&nbsp;&nbsp; p ∧ c ≡ c</td></tr>
                  <tr><td style="width:1250px">9)&nbsp;&nbsp;Leyes de De Morgan&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                      &nbsp; ~q(p ∧ q) ≡ ~p ∨ ~q &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      ---&nbsp;&nbsp; ~q(p ∨ q)≡ ~p ∧ ~q </td></tr>                                                                     
                  <tr><td style="width:1250px">10) Leyes de absorción&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                      &nbsp; p ∨ (p ∧ q) ≡ p &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      ---&nbsp;&nbsp; p ∧ (p ∨ q) ≡ p</td></tr>
                  <tr><td style="width:1250px">11) Negaciones de t y c&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                      &nbsp; ~t ≡ c &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      ---&nbsp;&nbsp; ~c ≡ t</td></tr>`;
    simple.innerHTML = simpleHTML;


 


  });






