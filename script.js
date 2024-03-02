// Función para validar la entrada y convertir a minúsculas
function validarEntrada() {
    var textoEntrada = document.getElementById("inputText").value;
    // Convertir a minúsculas
    textoEntrada = textoEntrada.toLowerCase();
    document.getElementById("inputText").value = textoEntrada;
  }
  
  // Función para encriptar el texto ingresado
function encriptar() {
    var textoEntrada = document.getElementById("inputText").value;
  
    // Utilizar replace con una función para realizar el reemplazo de vocales
    var textoResultado = textoEntrada.replace(/[aeiou]/g, function(match) {
      switch (match) {
        case 'a':
          return 'ai';
        case 'e':
          return 'enter';
        case 'i':
          return 'imes';
        case 'o':
          return 'ober';
        case 'u':
          return 'ufat';
        default:
          return match;
      }
    });
  
    document.getElementById("resultText").value = textoResultado;
  }
  
  
  // Función para desencriptar el texto ingresado
  function desencriptar() {
    var textoEntrada = document.getElementById("inputText").value;
  
    // Utilizar replace para realizar el reemplazo inverso de vocales encriptadas
    var textoResultado = textoEntrada.replace(/ai/g, 'a')
                                    .replace(/enter/g, 'e')
                                    .replace(/imes/g, 'i')
                                    .replace(/ober/g, 'o')
                                    .replace(/ufat/g, 'u');
  
    document.getElementById("resultText").value = textoResultado;
  }
  
  
  // Función para copiar el resultado al portapapeles
  function copiarResultado() {
    var textoResultado = document.getElementById("resultText");
    textoResultado.select();
    document.execCommand("copy");
    alert("¡Texto copiado!");
  }
  
  