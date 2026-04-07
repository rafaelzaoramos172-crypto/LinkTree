$(function(){
    
    //ENTRADA

    var botoes = $(".botao");
    var titulo = $("h1");
    var subtitulo = $("#subtitulo");
    var icones = $("svg");
    var fundo = $("body");
    var botao_modoescuro = $("#modoescuro")
    var escrita = $ ("escrita")
    var modoescuro = false

    //PROCESSAMENTO
        botao_modoescuro.click(()=>{
          
            
            if (modoescuro == false){
                 
                botoes.css("background-color" , "black")
                botoes.css ("color" , "white")
                modoescuro = true;
                fundo.css("background-image", "url('../recursos/img/fundoescuro.jpg') ");
                titulo.css("color" , "white")
                subtitulo.css("color", "white")
            }else{
                
                    botoes.css("background-color" , "white")
                    botoes.css ("color" , "black    ")
                    modoescuro = false;
                    fundo.css("background-image", "url('../recursos/img/fundooriginal.jpg')")
                    titulo.css("color" , "black")
                    subtitulo.css("color" , "black")


            }




        });
    

    //SAIDA



});