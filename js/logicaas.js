

    $(document).ready(function() 
  {

    $("#infoCap").hide();  //OCULTA INFO

            // FUNCION DE MOSTRAR Y OCULTAR TARJETAS DE ACUERDO AL DATA-TARJETAS AGREGADO A CADA CARD
            
    $(".url").on("click", function() {   
      


      $("#infoCap").fadeIn();  // mustra info

      $("#portada").hide();  // oculta portada


      var pl = $(this).data("url");        //OBENTER TITULO E IMPRIMRILO EN UN PARRAFO

      $('#pl').html(pl);

    
      $(".alertaf").hide(100);
    

      var url = $(this).data("url");

      $(".tarjetasd").each(function() {

              if ($(this).data("tarjetas") == url ) {

                  $(this).fadeIn(300);    
                            
              } 
              else 
              {
                            
                $(this).fadeOut(150);
                        
              }

          }); 
      }); 
 

      $(".urld").on("click", function() {

    
        var url = $(this).data("urld");
  
        $(".tarjetasd").each(function() {
  
                if ($(this).data("tarjetasd") == url ) {
  
                    $(this).fadeIn(300);    
                              
                } 
                else 
                {
                              
                  $(this).fadeOut(150);
                          
                }
  
            }); 
        }); 

 

       //mostrar las opciones de cada liga 
      
      $(".botonesdp").hover(function() {
        
        
        var url = $(this).data("dp");

        $(".itemsdp").each(function() {
        

                if ($(this).data("itemdp") == url ) {

                  $(this).fadeIn();   

                      if($(this).fadeIn())
                      {
                              $(".botonesdp").click(function()
                                          { 
                                            $(".itemsdp").fadeOut();        
                                          });    
                      }
                      else
                      {
                        $(".itemsdp").fadeOut();
                      } 
                        
                } 
                else
                {
                  $(this).fadeOut();  
                }
             

            }); 

        }); 


             // PREVENIR QUE SE ENVIE EL FORMULARIO 
            document.getElementById("formbd").addEventListener("submit", function(event){
            event.preventDefault()
             });



            // buscar al interactuar con el input #buscar 
          $("#buscar").on("keyup", function() {

      
               
                 $(".alertaf").fadeIn();


                  var input = $(this).val().toUpperCase();  // obtenemos valor ingresado del input 

                 //cargar elementos de las cajas tarjetasd funcion
                  $(".tarjetasd").each(function() {

                    // si el valor data busqueda es igual o coincide con el valor del input muestra si no oculta

                  if ($(this).data("busqueda").toUpperCase().indexOf(input) < 0 ) 
                  {
                    $(this).fadeOut();
                  } 
                  else
                  {
                    $(this).fadeIn();
                
                
                  }

                  $('#pl').html("");
                  

                  })
          });

            
  


          document.oncontextmenu = function() 
          {
              return false
          }
          function right(e) 
          {
             
              
              if (navigator.appName == 'Netscape' && e.which == 3) 
              {
               
                  return false;
              }
              else if (navigator.appName == 'Microsoft Internet Explorer' && event.button==2) 
              {
             
                  return false;
              }
              return true;
          }
          document.onmousedown = right;
          

    });

   