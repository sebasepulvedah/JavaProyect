            
            $(document).ready(function(){

            $('a').click( function(e) {
            // asociamos la animacion al click en un elemento <a>
            $('html, body').animate({
            scrollTop: $("#seccionContacto").offset().top
            }, 2000);
            } );
            
            // etiqueta, clase, id
            //on -> event listener
            $("button").on("click", function() {
                $("h1").hide();
            });
            //De efecto 
            //$().click(function(){});
            $('#btn1').click(function(){
                $('#parrafo1').hide();
            });
            $('#btn2').click(function(){
                $('#parrafo1').show();
                $('h1').show();
            });
            $('#btn3').click(function(){
                $('#parrafo1').toggle();
                $('h1').toggle();
            });
            //FadeIn y FadeOut
            $('#btn4').click(function(){
                //$('#parrafo2').fadeIn();
                $('#parrafo2').fadeIn(5000);
            });
            $('#btn5').click(function(){
                $('#parrafo2').fadeOut("slow");//fast
            });
            $('#btn6').click(function(){
                $('#parrafo2').fadeToggle(3000);
            });
            //slide
            $('#btn7').click(function(){
                $('#parrafo3').slideDown();
            });
            $('#btn8').click(function(){
                $('#parrafo3').slideUp();
            });
            $('#btn9').click(function(){
                $('#parrafo3').slideToggle();
            });

            /*css - addClass(), removeClass(), css() , toggleClass()*/
            $('#btn10').click(function(){
                $('p').addClass("color_text");
                $('#parrafo4').addClass("color_fondo"); 
            });

            $('#btn11').click(function(){
                $('#parrafo4').removeClass("color_text"); 
            });
            
            $('#btn12').click(function(){
                $('#parrafo4').css("color","red"); //solo 1 style
                $('#parrafo4').css({"font-size":"50px","margin":"15px","border":"1px solid"});// mas de 1 style
            });
            /** Manipulacion del html after, before , append, BUSCAR text, attr , prepend this, remove*/
            let cont_parrafos=5;
            $('#btn13').click(function(){
                cont_parrafos++; //se incrementa en 1
                $('#parrafo5').after('<p id="parrafo'+ cont_parrafos+'">Parrafo con after</p>');
            });
            $('#btn14').click(function(){
                cont_parrafos++;
                $('#parrafo5').before('<p id="parrafo'+ cont_parrafos+'">Parrafo con before</p>');
            });

            $('#btn15').click(function(){
                $('#parrafo5').append('<b><i><u> texto con Append</u></i></b>'); //adiciona a posterior dentro del elemento pivote, parrafo 5 texto
            });

            $('#btn16').click(function(){ //ELIMINA  Y  LO REEMPLAZA TODO!!!!
                $('#seccionContacto').html('<h2>NUEVO TITULO CON HTML</h2>'); // USO: REEMPLAZA CONTENIDO. LIMPIAR PAGINA DESDE 0, LUEGO DEL HTML A CONTINUACION DEL H2 ADICIONALE MAS INFO
                $('#seccionContacto').append('<p id="parrafo'+ cont_parrafos+'">Parrafo con Append</p>'); //adiciona texto post boton html
            });

            $('#btn17').click(function(){
                const nombre = $('#nombre').val(); //capturar elemento
                $('#seccionContacto').append('Nombre: '+nombre);
            });

            $('tr').click(function(){
                $(this).remove();
        });
            //fin document ready
            });