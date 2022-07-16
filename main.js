//SON LAS COLUMNAS DE LA TABLA PERIODICA
const contenedorPrincipal = document.querySelector(".contenedor-principal"),
  contenedorSecundario = document.querySelector(".contenedor-secundario"),
  templateColumnas = document.querySelector(".template-columnas").content,
  fragmento = document.createDocumentFragment(),
  fragmento2 = document.createDocumentFragment();

for(let i = 1; i <= 18; i++) {
  let clone = document.importNode(templateColumnas, true);
  fragmento.appendChild(clone);
};

for(let i = 1; i <= 2; i++) {
  let cloneAbajo = document.importNode(templateColumnas, true);
  fragmento2.appendChild(cloneAbajo);
};

contenedorPrincipal.appendChild(fragmento);
contenedorSecundario.appendChild(fragmento2);

//DIV DE LA INFORMACION
const divInformacion = document.createElement("div"),
  informacion = document.createElement("div"),
  cajaImagen = document.createElement("div"),
  imagenTexto = document.createElement("figcaption"),
  infoImagen = document.createElement("img"),
  cajaInformacion = document.createElement("div"),
  infoSimbolo = document.createElement("span"),
  infoMasaAtomica = document.createElement("span"),
  infoNumeroAtomica = document.createElement("span"),
  infoConfiguracionElectronica = document.createElement("span"),
  datosElementos = [
    "Estructura Molecular",
    "Simbolo:",
    "Masa Atómica:",
    "Número Atómico:",
    "Configuración Electronica:"
  ];

  divInformacion.classList.add("div-informacion");
  informacion.classList.add("informacion");
  cajaImagen.classList.add("caja-imagen");
  infoImagen.classList.add("info-imagen");
  imagenTexto.classList.add("texto-imagen");
  cajaInformacion.classList.add("caja-informacion");
  infoSimbolo.classList.add("info-simbolo");
  infoMasaAtomica.classList.add("info-masa-atomica");
  infoNumeroAtomica.classList.add("info-numero-atomica")
  infoConfiguracionElectronica.classList.add("info-configuracion-electronica");

  //infoImagen.setAttribute("src", "img/1columna-1hidrogeno.png")
  //imagenTexto.textContent = "Atomo";
  //infoSimbolo.textContent = "Simbolo:";
  //infoMasaAtomica.textContent = "Masa Atómica:";
  //infoNumeroAtomica.textContent = "Número Atómico";
  //infoConfiguracionElectronica.textContent = "Configuracion Electronica:";

  cajaImagen.appendChild(infoImagen);
  cajaImagen.appendChild(imagenTexto);
  cajaInformacion.appendChild(infoSimbolo);
  cajaInformacion.appendChild(infoMasaAtomica);
  cajaInformacion.appendChild(infoNumeroAtomica);
  cajaInformacion.appendChild(infoConfiguracionElectronica);
  informacion.appendChild(cajaImagen);
  informacion.appendChild(cajaInformacion);
  divInformacion.appendChild(informacion);

  contenedorPrincipal.appendChild(divInformacion);

//TODAS LAS COLUMNAS EN UNA VARIABLE
let columnasTotales = document.querySelectorAll(".columnas");

//SON LOS ELEMENTOS DE LA PRIMERA COLUMNA
const templateElementos = document.querySelector(".template-elementos").content,
  columna1 = columnasTotales[0],
  infoColumna1 = [
  {
    numero: "1",
    simbolo: "H",
    nombre: "Hidrógeno",
    src: "img/1columna-1hidrogeno.png",
    masaAtomica: "1.00784 u",
    configuracionElectronica: "1s1",
  },
  {
    numero: "3",
    simbolo: "Li",
    nombre: "Litio",
    src: "img/1columna-2litio.png",
    masaAtomica: "6.941 u",
    configuracionElectronica: "1s²2s¹",
  },
  {
    numero: "11",
    simbolo: "Na",
    nombre: "Sodio",
    src: "img/1columna-3sodio.png",
    masaAtomica: "22.989769 u",
    configuracionElectronica: "3s¹",
  },
  {
    numero: "19",
    simbolo: "K",
    nombre: "Potasio",
    src: "img/1columna-4potasio.png",
    masaAtomica: "39.0983 u",
    configuracionElectronica: "4s¹",
  },
  {
    numero: "37",
    simbolo: "Rb",
    nombre: "Rubidio",
    src: "img/1columna-5rubidio.png",
    masaAtomica: "39.0983 u",
    configuracionElectronica: "4s¹",
  },
  {
    numero: "55",
    simbolo: "Cs",
    nombre: "Cesio",
    src: "img/1columna-6cesio.png",
    masaAtomica: "132.90545 u",
    configuracionElectronica: " 6s1",
  },
  {
    numero: "87",
    simbolo: "Fr",
    nombre: "Francio",
    src: "img/1columna-7francio.png",
    masaAtomica: "223 u",
    configuracionElectronica: "7s1",
  },
];

infoColumna1.forEach(el => {
  templateElementos.querySelector(".numero-atomico").textContent = el.numero;
  templateElementos.querySelector(".simbolo-quimico").textContent = el.simbolo;
  templateElementos.querySelector(".nombre").textContent = el.nombre;

  let clone1 = document.importNode(templateElementos, true);
  fragmento.appendChild(clone1);
});

columna1.appendChild(fragmento);

const elementosColumna1 = columnasTotales[0].querySelectorAll(".elementos");
elementosColumna1[0].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna1[0].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna1[0].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna1[0].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna1[0].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna1[0].configuracionElectronica;
});

elementosColumna1[1].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna1[1].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna1[1].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna1[1].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna1[1].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna1[1].configuracionElectronica;
});

elementosColumna1[2].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna1[2].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna1[2].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna1[2].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna1[2].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna1[2].configuracionElectronica;
});

elementosColumna1[3].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna1[3].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna1[3].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna1[3].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna1[3].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna1[3].configuracionElectronica;
});

elementosColumna1[4].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna1[4].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna1[4].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna1[4].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna1[4].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna1[4].configuracionElectronica;
});

elementosColumna1[5].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna1[5].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna1[5].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna1[5].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna1[5].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna1[5].configuracionElectronica;
});

elementosColumna1[6].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna1[6].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna1[6].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna1[6].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna1[6].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna1[6].configuracionElectronica;
});

for(let c1 = 0; c1 <= (infoColumna1.length - 1); c1++) {
  elementosColumna1[c1].addEventListener("mouseleave", quitarInformacion);
  elementosColumna1[c1].addEventListener("mouseover", bordeMovimiento);
}

//SON LOS ELEMENTOS DE LA SEGUNDA COLUMNA
const columna2 = columnasTotales[1],
  infoColumna2 = [
  {
    numero: "4",
    simbolo: "Be",
    nombre: "Berilio",
    src: "img2/2columna-1berilio.png",
    masaAtomica: "9.012182 u",
    configuracionElectronica: "2s²",
  },
  {
    numero: "12",
    simbolo: "Mg",
    nombre: "Magnesio",
    src: "img2/2columna-2magnesio.png",
    masaAtomica: "24.305 u",
    configuracionElectronica: "3s2",
  },
  {
    numero: "20",
    simbolo: "Ca",
    nombre: "Calcio",
    src: "img2/2columna-3calcio.png",
    masaAtomica: "40.078 u",
    configuracionElectronica: "4s²",
  },
  {
    numero: "38",
    simbolo: "Sr",
    nombre: "Estroncio",
    src: "img2/2columna-4estroncio.png",
    masaAtomica: "87.62 u",
    configuracionElectronica: "5s2",
  },
  {
    numero: "56",
    simbolo: "Ba",
    nombre: "Bario",
    src: "img2/2columna-5bario.png",
    masaAtomica: "137.327 u",
    configuracionElectronica: "6s2",
  },
  {
    numero: "88",
    simbolo: "Ra",
    nombre: "Radio",
    src: "img2/2columna-6radio.png",
    masaAtomica: "226 u",
    configuracionElectronica: "7s2",
  },
];

infoColumna2.forEach(el2 => {
  templateElementos.querySelector(".numero-atomico").textContent = el2.numero;
  templateElementos.querySelector(".simbolo-quimico").textContent = el2.simbolo;
  templateElementos.querySelector(".nombre").textContent = el2.nombre;

  let clone2 = document.importNode(templateElementos, true);
  fragmento.appendChild(clone2);
});

columna2.appendChild(fragmento);

const elementosColumna2 = columnasTotales[1].querySelectorAll(".elementos");

for(let c1 = 0; c1 <= (infoColumna2.length - 1); c1++) {
  elementosColumna2[c1].addEventListener("mouseleave", quitarInformacion);
  elementosColumna2[c1].addEventListener("mouseover", bordeMovimiento);
};

elementosColumna2[0].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna2[0].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna2[0].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna2[0].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna2[0].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna2[0].configuracionElectronica;
});

elementosColumna2[1].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna2[1].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna2[1].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna2[1].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna2[1].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna2[1].configuracionElectronica;
});

elementosColumna2[2].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna2[2].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna2[2].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna2[2].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna2[2].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna2[2].configuracionElectronica;
});

elementosColumna2[3].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna2[3].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna2[3].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna2[3].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna2[3].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna2[3].configuracionElectronica;
});

elementosColumna2[4].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna2[4].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna2[4].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna2[4].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna2[4].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna2[4].configuracionElectronica;
});

elementosColumna2[5].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna2[5].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna2[5].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna2[5].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna2[5].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna2[5].configuracionElectronica;
});

//SON LOS ELEMENTOS DE LA TERCERA COLUNNA
const columna3 = columnasTotales[2],
  infoColumna3 = [
  {
    numero: "21",
    simbolo: "Sc",
    nombre: "Escandio",
    src: "img3/1escandio.png",
    masaAtomica: "44.955912 u",
    configuracionElectronica: "3d¹4s²",
  },
  {
    numero: "39",
    simbolo: "Y",
    nombre: "Itrio",
    src: "img3/2itrio.png",
    masaAtomica: "88.90585 u",
    configuracionElectronica: "4d15s2",
  },
  {
    numero: "71",
    simbolo: "Lu",
    nombre: "Lutecio",
    src: "img3/3lutecio.png",
    masaAtomica: "174.967 u",
    configuracionElectronica: "4f145d16s2",
  },
  {
    numero: "103",
    simbolo: "Lr",
    nombre: "Laurencio",
    src: "img3/4laurencio.png",
    masaAtomica: "262 u",
    configuracionElectronica: "5f147s27p1",
  },
];

infoColumna3.forEach(el3 => {
  templateElementos.querySelector(".numero-atomico").textContent = el3.numero;
  templateElementos.querySelector(".simbolo-quimico").textContent = el3.simbolo;
  templateElementos.querySelector(".nombre").textContent = el3.nombre;

  let clone3 = document.importNode(templateElementos, true);
  fragmento.appendChild(clone3);
});

columna3.appendChild(fragmento);

const elementosColumna3 = columnasTotales[2].querySelectorAll(".elementos");

for(let c1 = 0; c1 <= (infoColumna3.length - 1); c1++) {
  elementosColumna3[c1].addEventListener("mouseleave", quitarInformacion);
  elementosColumna3[c1].addEventListener("mouseover", bordeMovimiento);
};

elementosColumna3[0].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna3[0].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna3[0].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna3[0].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna3[0].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna3[0].configuracionElectronica;
});

elementosColumna3[1].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna3[1].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna3[1].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna3[1].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna3[1].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna3[1].configuracionElectronica;
});

elementosColumna3[2].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna3[2].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna3[2].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna3[2].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna3[2].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna3[2].configuracionElectronica;
});

elementosColumna3[3].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna3[3].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna3[3].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna3[3].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna3[3].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna3[3].configuracionElectronica;
});

//SON LOS ELEMENTOS DE LA CUARTA COLUMNA
const columna4 = columnasTotales[3],
  infoColumna4 = [
    {
      numero: "22",
      simbolo: "Ti",
      nombre: "Titanio",
      src: "img4/1titanio.png",
      masaAtomica: "47.867 u",
      configuracionElectronica: "3d²4s²",
    },
    {
      numero: "40",
      simbolo: "Zr",
      nombre: "Circonio",
      src: "img4/2circonio.png",
      masaAtomica: "91.224 u",
      configuracionElectronica: "4d²5s²",
    },
    {
      numero: "72",
      simbolo: "Hf",
      nombre: "Hafnio",
      src: "img4/3hafnio.png",
      masaAtomica: "178.49 u",
      configuracionElectronica: "4f¹⁴5d²6s²",
    },
    {
      numero: "104",
      simbolo: "Rf",
      nombre: "Rutherfordio",
      src: "img4/4rutherfordio.png",
      masaAtomica: "261 u",
      configuracionElectronica: "5f14 6d2 7s212",
    },
  ];

infoColumna4.forEach(el4 => {
  templateElementos.querySelector(".numero-atomico").textContent = el4.numero;
  templateElementos.querySelector(".simbolo-quimico").textContent = el4.simbolo;
  templateElementos.querySelector(".nombre").textContent = el4.nombre;

  let clone4 = document.importNode(templateElementos, true);
  fragmento.appendChild(clone4);
});
  
columna4.appendChild(fragmento);

const elementosColumna4 = columnasTotales[3].querySelectorAll(".elementos");

for(let c1 = 0; c1 <= (infoColumna4.length - 1); c1++) {
  elementosColumna4[c1].addEventListener("mouseleave", quitarInformacion);
  elementosColumna4[c1].addEventListener("mouseover", bordeMovimiento);
};

elementosColumna4[0].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna4[0].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna4[0].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna4[0].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna4[0].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna4[0].configuracionElectronica;
});

elementosColumna4[1].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna4[1].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna4[1].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna4[1].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna4[1].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna4[1].configuracionElectronica;
});

elementosColumna4[2].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna4[2].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna4[2].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna4[2].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna4[2].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna4[2].configuracionElectronica;
});

elementosColumna4[3].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna4[3].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna4[3].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna4[3].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna4[3].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna4[3].configuracionElectronica;
});

//SON LOS ELEMENTOS DE LA QUINTA COLUMNA
const columna5 = columnasTotales[4],
  infoColumna5 = [
    {
      numero: "23",
      simbolo: "V",
      nombre: "Vanadio",
      src: "img5/1vanadio.png",
      masaAtomica: "50.9415 u",
      configuracionElectronica: "3d³4s²",
    },
    {
      numero: "41",
      simbolo: "Nb",
      nombre: "Niobio",
      src: "img5/2niobio.png",
      masaAtomica: "92.90638 u",
      configuracionElectronica: "4d⁴5s¹",
    },
    {
      numero: "73",
      simbolo: "Ta",
      nombre: "Tantalio",
      src: "img5/3tantalo.png",
      masaAtomica: "180.94788 u",
      configuracionElectronica: "4f145d36s2",
    },
    {
      numero: "105",
      simbolo: "Db",
      nombre: "Dubnio",
      src: "img5/4dubnio.png",
      masaAtomica: "262 u",
      configuracionElectronica: "5f146d37s2",
    },
  ];

infoColumna5.forEach(el5 => {
  templateElementos.querySelector(".numero-atomico").textContent = el5.numero;
  templateElementos.querySelector(".simbolo-quimico").textContent = el5.simbolo;
  templateElementos.querySelector(".nombre").textContent = el5.nombre;

  let clone5 = document.importNode(templateElementos, true);
  fragmento.appendChild(clone5);
});
  
columna5.appendChild(fragmento);

const elementosColumna5 = columnasTotales[4].querySelectorAll(".elementos");

for(let c1 = 0; c1 <= (infoColumna5.length - 1); c1++) {
  elementosColumna5[c1].addEventListener("mouseleave", quitarInformacion);
  elementosColumna5[c1].addEventListener("mouseover", bordeMovimiento);
};

elementosColumna5[0].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna5[0].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna5[0].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna5[0].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna5[0].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna5[0].configuracionElectronica;
});

elementosColumna5[1].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna5[1].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna5[1].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna5[1].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna5[1].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna5[1].configuracionElectronica;
});

elementosColumna5[2].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna5[2].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna5[2].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna5[2].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna5[2].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna5[2].configuracionElectronica;
});

elementosColumna5[3].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna5[3].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna5[3].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna5[3].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna5[3].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna5[3].configuracionElectronica;
});

//SON LOS ELEMENTOS DE LA COLUMNA 6
const columna6 = columnasTotales[5],
  infoColumna6 = [
    {
      numero: "24",
      simbolo: "Cr",
      nombre: "Cromo",
      src: "img6/1cromo.png",
      masaAtomica: "51.9961 u",
      configuracionElectronica: "3d⁵4s¹",
    },
    {
      numero: "42",
      simbolo: "Mo",
      nombre: "Molibdeno",
      src: "img6/2molibdeno.png",
      masaAtomica: "95.95 u",
      configuracionElectronica: "4d₅5s₁",
    },
    {
      numero: "74",
      simbolo: "W",
      nombre: "Wolframio",
      src: "img6/3wolframio.png",
      masaAtomica: "183.84 u",
      configuracionElectronica: "6s²4f¹⁴5d⁴",
    },
    {
      numero: "106",
      simbolo: "Sg",
      nombre: "Seaborgio",
      src: "img6/4seaborgio.png",
      masaAtomica: "269 u",
      configuracionElectronica: "5f14 6d4 7s21",
    },
  ];

infoColumna6.forEach(el6 => {
  templateElementos.querySelector(".numero-atomico").textContent = el6.numero;
  templateElementos.querySelector(".simbolo-quimico").textContent = el6.simbolo;
  templateElementos.querySelector(".nombre").textContent = el6.nombre;

  let clone6 = document.importNode(templateElementos, true);
  fragmento.appendChild(clone6);
});
  
columna6.appendChild(fragmento);

const elementosColumna6 = columnasTotales[5].querySelectorAll(".elementos");

for(let c1 = 0; c1 <= (infoColumna6.length - 1); c1++) {
  elementosColumna6[c1].addEventListener("mouseleave", quitarInformacion);
  elementosColumna6[c1].addEventListener("mouseover", bordeMovimiento);
};

elementosColumna6[0].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna6[0].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna6[0].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna6[0].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna6[0].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna6[0].configuracionElectronica;
});

elementosColumna6[1].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna6[1].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna6[1].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna6[1].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna6[1].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna6[1].configuracionElectronica;
});

elementosColumna6[2].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna6[2].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna6[2].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna6[2].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna6[2].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna6[2].configuracionElectronica;
});

elementosColumna6[3].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna6[3].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna6[3].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna6[3].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna6[3].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna6[3].configuracionElectronica;
});

//SON LOS ELEMENTOS DE LA COLUMNA 7
const columna7 = columnasTotales[6],
  infoColumna7 = [
    {
      numero: "25",
      simbolo: "Mg",
      nombre: "Magnesio",
      src: "img7/1magnesio.png",
      masaAtomica: "24.305 u",
      configuracionElectronica: "3s2",
    },
    {
      numero: "43",
      simbolo: "Tc",
      nombre: "Tecnecio",
      src: "img7/2tecnecio.png",
      masaAtomica: "98 u",
      configuracionElectronica: "4d55s2",
    },
    {
      numero: "75",
      simbolo: "Re",
      nombre: "Renio",
      src: "img7/3renio.png",
      masaAtomica: "186.207 u",
      configuracionElectronica: "4f145d56s2",
    },
    {
      numero: "107",
      simbolo: "Bh",
      nombre: "Bohrio",
      src: "img7/4bohrio.png",
      masaAtomica: "264 u",
      configuracionElectronica: "5f14 6d5 7s21​2",
    },
  ];

infoColumna7.forEach(el7 => {
  templateElementos.querySelector(".numero-atomico").textContent = el7.numero;
  templateElementos.querySelector(".simbolo-quimico").textContent = el7.simbolo;
  templateElementos.querySelector(".nombre").textContent = el7.nombre;

  let clone7 = document.importNode(templateElementos, true);
  fragmento.appendChild(clone7);
});

columna7.appendChild(fragmento);

const elementosColumna7 = columnasTotales[6].querySelectorAll(".elementos");

for(let c1 = 0; c1 <= (infoColumna7.length - 1); c1++) {
  elementosColumna7[c1].addEventListener("mouseleave", quitarInformacion);
  elementosColumna7[c1].addEventListener("mouseover", bordeMovimiento);
};

elementosColumna7[0].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna7[0].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna7[0].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna7[0].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna7[0].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna7[0].configuracionElectronica;
});

elementosColumna7[1].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna7[1].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna7[1].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna7[1].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna7[1].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna7[1].configuracionElectronica;
});

elementosColumna7[2].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna7[2].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna7[2].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna7[2].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna7[2].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna7[2].configuracionElectronica;
});

elementosColumna7[3].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna7[3].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna7[3].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna7[3].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna7[3].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna7[3].configuracionElectronica;
});

//SON LOS ELEMENTOS DE LA COLUMNA 8
const columna8 = columnasTotales[7],
  infoColumna8 = [
    {
      numero: "26",
      simbolo: "Fe",
      nombre: "Hierro",
      src: "img8/1hierro.png",
      masaAtomica: "55.845 u",
      configuracionElectronica: "3d64s2",
    },
    {
      numero: "44",
      simbolo: "Ru",
      nombre: "Rutenio",
      src: "img8/2rutenio.png",
      masaAtomica: "101.07 u",
      configuracionElectronica: "4d⁷5s¹",
    },
    {
      numero: "76",
      simbolo: "Os",
      nombre: "Osmio",
      src: "img8/3osmio.png",
      masaAtomica: "190.23 u",
      configuracionElectronica: "4f145d66s2",
    },
    {
      numero: "108",
      simbolo: "Hs",
      nombre: "Hassio",
      src: "img8/4hassio.png",
      masaAtomica: "269 u",
      configuracionElectronica: "5f14 6d6 7s21",
    },
  ];

infoColumna8.forEach(el8 => {
  templateElementos.querySelector(".numero-atomico").textContent = el8.numero;
  templateElementos.querySelector(".simbolo-quimico").textContent = el8.simbolo;
  templateElementos.querySelector(".nombre").textContent = el8.nombre;

  let clone8 = document.importNode(templateElementos, true);
  fragmento.appendChild(clone8);
});
  
columna8.appendChild(fragmento);

const elementosColumna8 = columnasTotales[7].querySelectorAll(".elementos");

for(let c1 = 0; c1 <= (infoColumna8.length - 1); c1++) {
  elementosColumna8[c1].addEventListener("mouseleave", quitarInformacion);
  elementosColumna8[c1].addEventListener("mouseover", bordeMovimiento);
};

elementosColumna8[0].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna8[0].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna8[0].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna8[0].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna8[0].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna8[0].configuracionElectronica;
});

elementosColumna8[1].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna8[1].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna8[1].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna8[1].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna8[1].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna8[1].configuracionElectronica;
});

elementosColumna8[2].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna8[2].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna8[2].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna8[2].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna8[2].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna8[2].configuracionElectronica;
});

elementosColumna8[3].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna8[3].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna8[3].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna8[3].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna8[3].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna8[3].configuracionElectronica;
});

//SON LOS ELEMENTOS DE LA COLUMNA 9
const columna9 = columnasTotales[8],
  infoColumna9 = [
    {
      numero: "27",
      simbolo: "Co",
      nombre: "Cobalto",
      src: "img9/1cobalto.png",
      masaAtomica: "58.933195 u",
      configuracionElectronica: "3d⁷4s²",
    },
    {
      numero: "45",
      simbolo: "Rh",
      nombre: "Rodio",
      src: "img9/2rodio.png",
      masaAtomica: "102.9055 u",
      configuracionElectronica: "4d85s1",
    },
    {
      numero: "77",
      simbolo: "Ir",
      nombre: "Iridio",
      src: "img9/3iridio.png",
      masaAtomica: "102.9055 u",
      configuracionElectronica: "4d85s1",
    },
    {
      numero: "109",
      simbolo: "Mt",
      nombre: "Meitnerio",
      src: "img9/4meitnerio.png",
      masaAtomica: "278 u",
      configuracionElectronica: "5f14 6d7 7s2",
    },
  ];

infoColumna9.forEach(el9 => {
  templateElementos.querySelector(".numero-atomico").textContent = el9.numero;
  templateElementos.querySelector(".simbolo-quimico").textContent = el9.simbolo;
  templateElementos.querySelector(".nombre").textContent = el9.nombre;

  let clone9 = document.importNode(templateElementos, true);
  fragmento.appendChild(clone9);
});
  
columna9.appendChild(fragmento);

const elementosColumna9 = columnasTotales[8].querySelectorAll(".elementos");

for(let c1 = 0; c1 <= (infoColumna9.length - 1); c1++) {
  elementosColumna9[c1].addEventListener("mouseleave", quitarInformacion);
  elementosColumna9[c1].addEventListener("mouseover", bordeMovimiento);
};

elementosColumna9[0].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna9[0].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna9[0].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna9[0].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna9[0].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna9[0].configuracionElectronica;
});

elementosColumna9[1].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna9[1].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna9[1].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna9[1].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna9[1].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna9[1].configuracionElectronica;
});

elementosColumna9[2].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna9[2].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna9[2].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna9[2].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna9[2].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna9[2].configuracionElectronica;
});

elementosColumna9[3].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna9[3].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna9[3].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna9[3].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna9[3].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna9[3].configuracionElectronica;
});

//SON LOS ELEMENTOS DE LA COLUMNA 10
const columna10 = columnasTotales[9],
  infoColumna10 = [
    {
      numero: "28",
      simbolo: "Ni",
      nombre: "Niquel",
      src: "img10/1niquel.png",
      masaAtomica: "58.6934 u",
      configuracionElectronica: "3d⁸4s²",
    },
    {
      numero: "46",
      simbolo: "Pd",
      nombre: "Paladio",
      src: "img10/2paladio.png",
      masaAtomica: "106.42 u",
      configuracionElectronica: "4d¹⁰",
    },
    {
      numero: "78",
      simbolo: "Pt",
      nombre: "Platino",
      src: "img10/3platino.png",
      masaAtomica: "195.084 u",
      configuracionElectronica: "4f¹⁴5d⁹6s¹",
    },
    {
      numero: "110",
      simbolo: "Ds",
      nombre: "Darmstadtio",
      src: "img10/4darmstadtio.png",
      masaAtomica: "281 u",
      configuracionElectronica: "5f14 6d8 7s2",
    },
  ];

infoColumna10.forEach(el10 => {
  templateElementos.querySelector(".numero-atomico").textContent = el10.numero;
  templateElementos.querySelector(".simbolo-quimico").textContent = el10.simbolo;
  templateElementos.querySelector(".nombre").textContent = el10.nombre;

  let clone10 = document.importNode(templateElementos, true);
  fragmento.appendChild(clone10);
});
  
columna10.appendChild(fragmento);

const elementosColumna10 = columnasTotales[9].querySelectorAll(".elementos");

for(let c1 = 0; c1 <= (infoColumna10.length - 1); c1++) {
  elementosColumna10[c1].addEventListener("mouseleave", quitarInformacion);
  elementosColumna10[c1].addEventListener("mouseover", bordeMovimiento);
};

elementosColumna10[0].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna10[0].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna10[0].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna10[0].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna10[0].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna10[0].configuracionElectronica;
});

elementosColumna10[1].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna10[1].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna10[1].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna10[1].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna10[1].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna10[1].configuracionElectronica;
});

elementosColumna10[2].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna10[2].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna10[2].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna10[2].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna10[2].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna10[2].configuracionElectronica;
});

elementosColumna10[3].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna10[3].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna10[3].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna10[3].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna10[3].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna10[3].configuracionElectronica;
});

//SON LOS ELEMENTOS DE LA COLUMNA 11
const columna11 = columnasTotales[10],
  infoColumna11 = [
    {
      numero: "29",
      simbolo: "Cu",
      nombre: "Cobre",
      src: "img11/1cobre.png",
      masaAtomica: "63.546 u",
      configuracionElectronica: "3d¹⁰4s¹",
    },
    {
      numero: "47",
      simbolo: "Ag",
      nombre: "Plata",
      src: "img11/2plata.png",
      masaAtomica: "107.8682 u",
      configuracionElectronica: "4d¹⁰5s¹",
    },
    {
      numero: "u9",
      simbolo: "Au",
      nombre: "Oro",
      src: "img11/3oro.png",
      masaAtomica: "196.96657 u",
      configuracionElectronica: "4f145d106s1",
    },
    {
      numero: "111",
      simbolo: "Rg",
      nombre: "Roentgenio",
      src: "img11/4roentgenio.png",
      masaAtomica: "282 u",
      configuracionElectronica: "5f14 6d9 7s2",
    },
  ];

infoColumna11.forEach(el11 => {
  templateElementos.querySelector(".numero-atomico").textContent = el11.numero;
  templateElementos.querySelector(".simbolo-quimico").textContent = el11.simbolo;
  templateElementos.querySelector(".nombre").textContent = el11.nombre;

  let clone11 = document.importNode(templateElementos, true);
  fragmento.appendChild(clone11);
});
  
columna11.appendChild(fragmento);

const elementosColumna11 = columnasTotales[10].querySelectorAll(".elementos");

for(let c1 = 0; c1 <= (infoColumna11.length - 1); c1++) {
  elementosColumna11[c1].addEventListener("mouseleave", quitarInformacion);
  elementosColumna11[c1].addEventListener("mouseover", bordeMovimiento);
};

elementosColumna11[0].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna11[0].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna11[0].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna11[0].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna11[0].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna11[0].configuracionElectronica;
});

elementosColumna11[1].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna11[1].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna11[1].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna11[1].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna11[1].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna11[1].configuracionElectronica;
});

elementosColumna11[2].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna11[2].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna11[2].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna11[2].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna11[2].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna11[2].configuracionElectronica;
});

elementosColumna11[3].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna11[3].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna11[3].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna11[3].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna11[3].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna11[3].configuracionElectronica;
});

//SON LOS ELEMENTOS DE LA COLUMNA 12
const columna12 = columnasTotales[11],
  infoColumna12 = [
    {
      numero: "30",
      simbolo: "Zn",
      nombre: "Zinc",
      src: "img12/1zinc.png",
      masaAtomica: "65.38 u",
      configuracionElectronica: "3d¹⁰4s²",
    },
    {
      numero: "48",
      simbolo: "Cd",
      nombre: "Cadmio",
      src: "img12/2cadmio.png",
      masaAtomica: "112.411 u",
      configuracionElectronica: "4d¹⁰5s²",
    },
    {
      numero: "80",
      simbolo: "Hg",
      nombre: "Mercurio",
      src: "img12/3mercurio.png",
      masaAtomica: "200.59 u",
      configuracionElectronica: "4f14 5d10 6s2",
    },
    {
      numero: "112",
      simbolo: "Cn",
      nombre: "Copernicio",
      src: "img12/4copernico.png",
      masaAtomica: "285 u",
      configuracionElectronica: "5f14 6d10 7s2",
    },
  ];

infoColumna12.forEach(el12 => {
  templateElementos.querySelector(".numero-atomico").textContent = el12.numero;
  templateElementos.querySelector(".simbolo-quimico").textContent = el12.simbolo;
  templateElementos.querySelector(".nombre").textContent = el12.nombre;

  let clone12 = document.importNode(templateElementos, true);
  fragmento.appendChild(clone12);
});
  
columna12.appendChild(fragmento);

const elementosColumna12 = columnasTotales[11].querySelectorAll(".elementos");

for(let c1 = 0; c1 <= (infoColumna12.length - 1); c1++) {
  elementosColumna12[c1].addEventListener("mouseleave", quitarInformacion);
  elementosColumna12[c1].addEventListener("mouseover", bordeMovimiento);
};

elementosColumna12[0].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna12[0].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna12[0].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna12[0].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna12[0].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna12[0].configuracionElectronica;
});

elementosColumna12[1].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna12[1].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna12[1].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna12[1].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna12[1].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna12[1].configuracionElectronica;
});

elementosColumna12[2].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna12[2].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna12[2].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna12[2].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna12[2].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna12[2].configuracionElectronica;
});

elementosColumna12[3].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna12[3].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna12[3].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna12[3].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna12[3].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna12[3].configuracionElectronica;
});

//SON LOS ELEMENTOS DE LA COLUMNA 13
const columna13 = columnasTotales[12],
  infoColumna13 = [
    {
      numero: "5",
      simbolo: "B",
      nombre: "Boro",
      src: "img13/1boro.png",
      masaAtomica: "0.811 u",
      configuracionElectronica: "2s22p1",
    },
    {
      numero: "13",
      simbolo: "Al",
      nombre: "Aluminio",
      src: "img13/2aluminio.png",
      masaAtomica: "26.981539 u",
      configuracionElectronica: "3s²3p¹",
    },
    {
      numero: "31",
      simbolo: "Ga",
      nombre: "Galio",
      src: "img13/3galio.png",
      masaAtomica: "69.723 u",
      configuracionElectronica: "3d104s24p1",
    },
    {
      numero: "49",
      simbolo: "In",
      nombre: "Indio",
      src: "img13/4indio.png",
      masaAtomica: "114.818 u",
      configuracionElectronica: "4d105s25p1",
    },
    {
      numero: "81",
      simbolo: "Ti",
      nombre: "Talio",
      src: "img13/5talio.png",
      masaAtomica: "204.3833 u",
      configuracionElectronica: "4f145d106s26p1",
    },
    {
      numero: "113",
      simbolo: "Nh",
      nombre: "Nihonio",
      src: "img13/6nihonio.png",
      masaAtomica: "286 u",
      configuracionElectronica: "5f14 6d10 7s2 7p1",
    },
  ];

infoColumna13.forEach(el13 => {
  templateElementos.querySelector(".numero-atomico").textContent = el13.numero;
  templateElementos.querySelector(".simbolo-quimico").textContent = el13.simbolo;
  templateElementos.querySelector(".nombre").textContent = el13.nombre;

  let clone13 = document.importNode(templateElementos, true);
  fragmento.appendChild(clone13);
});
  
columna13.appendChild(fragmento);

const elementosColumna13 = columnasTotales[12].querySelectorAll(".elementos");

for(let c1 = 0; c1 <= (infoColumna13.length - 1); c1++) {
  elementosColumna13[c1].addEventListener("mouseleave", quitarInformacion);
  elementosColumna13[c1].addEventListener("mouseover", bordeMovimiento);
};

elementosColumna13[0].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna13[0].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna13[0].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna13[0].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna13[0].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna13[0].configuracionElectronica;
});

elementosColumna13[1].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna13[1].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna13[1].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna13[1].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna13[1].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna13[1].configuracionElectronica;
});

elementosColumna13[2].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna13[2].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna13[2].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna13[2].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna13[2].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna13[2].configuracionElectronica;
});

elementosColumna13[3].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna13[3].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna13[3].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna13[3].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna13[3].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna13[3].configuracionElectronica;
});

elementosColumna13[4].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna13[4].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna13[4].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna13[4].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna13[4].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna13[4].configuracionElectronica;
});

elementosColumna13[5].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna13[5].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna13[5].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna13[5].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna13[5].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna13[5].configuracionElectronica;
});

//SON LOS ELEMENTOS DE LA COLUMNA 14
const columna14 = columnasTotales[13],
  infoColumna14 = [
    {
      numero: "6",
      simbolo: "C",
      nombre: "Carbono",
      src: "img14/1carbono.png",
      masaAtomica: "12.011 u",
      configuracionElectronica: "2s22p2",
    },
    {
      numero: "14",
      simbolo: "Si",
      nombre: "Silicio",
      src: "img14/2silicio.png",
      masaAtomica: "28.0855 u",
      configuracionElectronica: "3s²3p²",
    },
    {
      numero: "32",
      simbolo: "Ge",
      nombre: "Germanio",
      src: "img14/3germanio.png",
      masaAtomica: "72.64 u",
      configuracionElectronica: "3d¹⁰4s²4p²",
    },
    {
      numero: "50",
      simbolo: "Sn",
      nombre: "Estaño",
      src: "img14/4estaño.png",
      masaAtomica: "118.71 u",
      configuracionElectronica: "4d¹⁰5s²5p²",
    },
    {
      numero: "82",
      simbolo: "Pb",
      nombre: "Plomo",
      src: "img14/5plomo.png",
      masaAtomica: "207.2 u",
      configuracionElectronica: "4f145d106s26p2",
    },
    {
      numero: "114",
      simbolo: "Fl",
      nombre: "Flerovio",
      src: "img14/6flerovio.png",
      masaAtomica: "289 u",
      configuracionElectronica: "5f14 6d10 7s2 7p2",
    },
  ];

infoColumna14.forEach(el14 => {
  templateElementos.querySelector(".numero-atomico").textContent = el14.numero;
  templateElementos.querySelector(".simbolo-quimico").textContent = el14.simbolo;
  templateElementos.querySelector(".nombre").textContent = el14.nombre;

  let clone14 = document.importNode(templateElementos, true);
  fragmento.appendChild(clone14);
});
  
columna14.appendChild(fragmento);

const elementosColumna14 = columnasTotales[13].querySelectorAll(".elementos");

for(let c1 = 0; c1 <= (infoColumna14.length - 1); c1++) {
  elementosColumna14[c1].addEventListener("mouseleave", quitarInformacion);
  elementosColumna14[c1].addEventListener("mouseover", bordeMovimiento);
};

elementosColumna14[0].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna14[0].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna14[0].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna14[0].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna14[0].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna14[0].configuracionElectronica;
});

elementosColumna14[1].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna14[1].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna14[1].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna14[1].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna14[1].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna14[1].configuracionElectronica;
});

elementosColumna14[2].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna14[2].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna14[2].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna14[2].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna14[2].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna14[2].configuracionElectronica;
});

elementosColumna14[3].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna14[3].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna14[3].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna14[3].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna14[3].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna14[3].configuracionElectronica;
});

elementosColumna14[4].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna14[4].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna14[4].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna14[4].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna14[4].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna14[4].configuracionElectronica;
});

elementosColumna14[5].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna14[5].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna14[5].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna14[5].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna14[5].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna14[5].configuracionElectronica;
});

//SON LOS ELEMENTOS DE LA COLUMNA 15
const columna15 = columnasTotales[14],
  infoColumna15 = [
    {
      numero: "7",
      simbolo: "N",
      nombre: "Nitrógeno",
      src: "img15/1nitrogeno.png",
      masaAtomica: "14.0067 u",
      configuracionElectronica: "2s22p3",
    },
    {
      numero: "15",
      simbolo: "P",
      nombre: "Fósforo",
      src: "img15/2fosforo.png",
      masaAtomica: "30.973762 u",
      configuracionElectronica: "3s²3p³",
    },
    {
      numero: "33",
      simbolo: "As",
      nombre: "Arsénico",
      src: "img15/3arsenico.png",
      masaAtomica: "74.9216 u",
      configuracionElectronica: "3d¹⁰4s²4p³",
    },
    {
      numero: "51",
      simbolo: "Sb",
      nombre: "Antimonio",
      src: "img15/4antimonio.png",
      masaAtomica: "121.76 u",
      configuracionElectronica: "4d105s25p3",
    },
    {
      numero: "83",
      simbolo: "Bi",
      nombre: "Bismuto",
      src: "img15/5bismuto.png",
      masaAtomica: "208.9804 u",
      configuracionElectronica: "4f14 5d10 6s2 6p3",
    },
    {
      numero: "115",
      simbolo: "Mc",
      nombre: "Moscovio",
      src: "img15/6moscovio.png",
      masaAtomica: "289 u",
      configuracionElectronica: "5f14 6d10 7s2 7p3",
    },
  ];

infoColumna15.forEach(el15 => {
  templateElementos.querySelector(".numero-atomico").textContent = el15.numero;
  templateElementos.querySelector(".simbolo-quimico").textContent = el15.simbolo;
  templateElementos.querySelector(".nombre").textContent = el15.nombre;

  let clone15 = document.importNode(templateElementos, true);
  fragmento.appendChild(clone15);
});
  
columna15.appendChild(fragmento);

const elementosColumna15 = columnasTotales[14].querySelectorAll(".elementos");

for(let c1 = 0; c1 <= (infoColumna15.length - 1); c1++) {
  elementosColumna15[c1].addEventListener("mouseleave", quitarInformacion);
  elementosColumna15[c1].addEventListener("mouseover", bordeMovimiento);

};

elementosColumna15[0].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna15[0].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna15[0].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna15[0].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna15[0].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna15[0].configuracionElectronica;
});

elementosColumna15[1].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna15[1].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna15[1].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna15[1].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna15[1].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna15[1].configuracionElectronica;
});

elementosColumna15[2].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna15[2].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna15[2].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna15[2].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna15[2].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna15[2].configuracionElectronica;
});

elementosColumna15[3].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna15[3].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna15[3].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna15[3].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna15[3].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna15[3].configuracionElectronica;
});

elementosColumna15[4].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna15[4].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna15[4].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna15[4].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna15[4].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna15[4].configuracionElectronica;
});

elementosColumna15[5].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna15[5].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna15[5].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna15[5].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna15[5].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna15[5].configuracionElectronica;
});

//SON LOS ELEMENTOS DE LA COLUMNA 16
const columna16 = columnasTotales[15],
  infoColumna16 = [
    {
      numero: "8",
      simbolo: "O",
      nombre: "Oxígeno",
      src: "img16/1oxigeno.png",
      masaAtomica: "15.999 u",
      configuracionElectronica: "2s²2p⁴",
    },
    {
      numero: "16",
      simbolo: "S",
      nombre: "Azufre",
      src: "img16/2azufre.png",
      masaAtomica: "32.065 u",
      configuracionElectronica: "3s²3p⁴",
    },
    {
      numero: "34",
      simbolo: "Se",
      nombre: "Selenio",
      src: "img16/3selenio.png",
      masaAtomica: "78.96 u",
      configuracionElectronica: "3d104s24p4",
    },
    {
      numero: "52",
      simbolo: "Te",
      nombre: "Telurio",
      src: "img16/4telurio.png",
      masaAtomica: "127.6 u",
      configuracionElectronica: "4d105s25p4",
    },
    {
      numero: "84",
      simbolo: "Po",
      nombre: "Polonio",
      src: "img16/5polonio.png",
      masaAtomica: "209 u",
      configuracionElectronica: "6s24f145d106p4",
    },
    {
      numero: "116",
      simbolo: "Lv",
      nombre: "Livermorio",
      src: "img16/6livermorio.png",
      masaAtomica: "293 u",
      configuracionElectronica: "5f14 6d10 7s2 7p4",
    },
  ];

infoColumna16.forEach(el16 => {
  templateElementos.querySelector(".numero-atomico").textContent = el16.numero;
  templateElementos.querySelector(".simbolo-quimico").textContent = el16.simbolo;
  templateElementos.querySelector(".nombre").textContent = el16.nombre;

  let clone16 = document.importNode(templateElementos, true);
  fragmento.appendChild(clone16);
});
  
columna16.appendChild(fragmento);

const elementosColumna16 = columnasTotales[15].querySelectorAll(".elementos");

for(let c1 = 0; c1 <= (infoColumna16.length - 1); c1++) {
  elementosColumna16[c1].addEventListener("mouseleave", quitarInformacion);
  elementosColumna16[c1].addEventListener("mouseover", bordeMovimiento);
};

elementosColumna16[0].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna16[0].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna16[0].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna16[0].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna16[0].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna16[0].configuracionElectronica;
});

elementosColumna16[1].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna16[1].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna16[1].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna16[1].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna16[1].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna16[1].configuracionElectronica;
});

elementosColumna16[2].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna16[2].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna16[2].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna16[2].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna16[2].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna16[2].configuracionElectronica;
});

elementosColumna16[3].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna16[3].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna16[3].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna16[3].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna16[3].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna16[3].configuracionElectronica;
});

elementosColumna16[4].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna16[4].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna16[4].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna16[4].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna16[4].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna16[4].configuracionElectronica;
});

elementosColumna16[5].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna16[5].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna16[5].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna16[5].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna16[5].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna16[5].configuracionElectronica;
});

//SON LOS ELEMENTOS DE LA COLUMNA 17
const columna17 = columnasTotales[16],
  infoColumna17 = [
    {
      numero: "9",
      simbolo: "F",
      nombre: "Flúor",
      src: "img17/1fluor.png",
      masaAtomica: "18.998403 u",
      configuracionElectronica: "2s22p5",
    },
    {
      numero: "17",
      simbolo: "Cl",
      nombre: "Cloro",
      src: "img17/2cloro.png",
      masaAtomica: "35.453 u",
      configuracionElectronica: "3s²3p⁵",
    },
    {
      numero: "35",
      simbolo: "Br",
      nombre: "Bromo",
      src: "img17/3bromo.png",
      masaAtomica: "79.904 u",
      configuracionElectronica: "4s²3d¹⁰4p⁵",
    },
    {
      numero: "53",
      simbolo: "I",
      nombre: "Yodo",
      src: "img17/4yodo.png",
      masaAtomica: "126.90447 u",
      configuracionElectronica: "4d105s25p5",
    },
    {
      numero: "85",
      simbolo: "At",
      nombre: "Astato",
      src: "img17/5astato.png",
      masaAtomica: "210 u",
      configuracionElectronica: "4f¹⁴5d¹⁰6s²6p⁵",
    },
    {
      numero: "117",
      simbolo: "Ts",
      nombre: "Teneso",
      src: "img17/6teneso.png",
      masaAtomica: "294 u",
      configuracionElectronica: "5f14 6d10 7s2 7p5",
    },
  ];

infoColumna17.forEach(el17 => {
  templateElementos.querySelector(".numero-atomico").textContent = el17.numero;
  templateElementos.querySelector(".simbolo-quimico").textContent = el17.simbolo;
  templateElementos.querySelector(".nombre").textContent = el17.nombre;

  let clone17 = document.importNode(templateElementos, true);
  fragmento.appendChild(clone17);
});
  
columna17.appendChild(fragmento);

const elementosColumna17 = columnasTotales[16].querySelectorAll(".elementos");

for(let c1 = 0; c1 <= (infoColumna17.length - 1); c1++) {
  elementosColumna17[c1].addEventListener("mouseleave", quitarInformacion);
  elementosColumna17[c1].addEventListener("mouseover", bordeMovimiento);
};

elementosColumna17[0].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna17[0].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna17[0].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna17[0].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna17[0].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna17[0].configuracionElectronica;
});

elementosColumna17[1].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna17[1].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna17[1].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna17[1].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna17[1].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna17[1].configuracionElectronica;
});

elementosColumna17[2].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna17[2].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna17[2].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna17[2].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna17[2].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna17[2].configuracionElectronica;
});

elementosColumna17[3].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna17[3].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna17[3].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna17[3].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna17[3].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna17[3].configuracionElectronica;
});

elementosColumna17[4].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna17[4].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna17[4].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna17[4].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna17[4].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna17[4].configuracionElectronica;
});

elementosColumna17[5].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna17[5].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna17[5].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna17[5].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna17[5].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna17[5].configuracionElectronica;
});

//SON LOS ELEMENTOS DE LA COLUMNA 18
const columna18 = columnasTotales[17],
  infoColumna18 = [
    {
      numero: "2",
      simbolo: "He",
      nombre: "Helio",
      src: "img18/1helio.png",
      masaAtomica: "4.002602 u",
      configuracionElectronica: "1s2",
    },
    {
      numero: "10",
      simbolo: "Ne",
      nombre: "Neón",
      src: "img18/2neon.png",
      masaAtomica: "20.1797 u",
      configuracionElectronica: "2s²2p⁶",
    },
    {
      numero: "18",
      simbolo: "Ar",
      nombre: "Argón",
      src: "img18/3argon.png",
      masaAtomica: "39.948 u",
      configuracionElectronica: "3s²3p⁶",
    },
    {
      numero: "36",
      simbolo: "Kr",
      nombre: "Kripton",
      src: "img18/4kripton.png",
      masaAtomica: "83.798 u",
      configuracionElectronica: "3d¹⁰4s²4p⁶",
    },
    {
      numero: "54",
      simbolo: "Xe",
      nombre: "Xenón",
      src: "img18/5xenon.png",
      masaAtomica: "131.293 u",
      configuracionElectronica: "4d¹⁰5s²5p⁶",
    },
    {
      numero: "86",
      simbolo: "Rn",
      nombre: "Radón",
      src: "img18/6radon.png",
      masaAtomica: "222 u",
      configuracionElectronica: " 4f145d106s26p6",
    },
    {
      numero: "118",
      simbolo: "Og",
      nombre: "Oganesón",
      src: "img18/7organeson.png",
      masaAtomica: "294 u",
      configuracionElectronica: "5f14 6d10 7s2 7p6",
    },
  ];

infoColumna18.forEach(el18 => {
  templateElementos.querySelector(".numero-atomico").textContent = el18.numero;
  templateElementos.querySelector(".simbolo-quimico").textContent = el18.simbolo;
  templateElementos.querySelector(".nombre").textContent = el18.nombre;

  let clone18 = document.importNode(templateElementos, true);
  fragmento.appendChild(clone18);
});
  
columna18.appendChild(fragmento);

const elementosColumna18 = columnasTotales[17].querySelectorAll(".elementos");

for(let c1 = 0; c1 <= (infoColumna18.length - 1); c1++) {
  elementosColumna18[c1].addEventListener("mouseleave", quitarInformacion);
  elementosColumna18[c1].addEventListener("mouseover", bordeMovimiento);
};

elementosColumna18[0].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna18[0].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna18[0].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna18[0].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna18[0].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna18[0].configuracionElectronica;
});

elementosColumna18[1].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna18[1].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna18[1].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna18[1].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna18[1].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna18[1].configuracionElectronica;
});

elementosColumna18[2].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna18[2].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna18[2].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna18[2].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna18[2].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna18[2].configuracionElectronica;
});

elementosColumna18[3].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna18[3].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna18[3].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna18[3].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna18[3].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna18[3].configuracionElectronica;
});

elementosColumna18[4].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna18[4].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna18[4].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna18[4].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna18[4].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna18[4].configuracionElectronica;
});

elementosColumna18[5].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna18[5].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna18[5].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna18[5].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna18[5].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna18[5].configuracionElectronica;
});

elementosColumna18[6].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna18[6].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna18[6].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna18[6].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna18[6].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna18[6].configuracionElectronica;
});

//SON LOS ELEMENTOS DE LA COLUMNA 19
const columna19 = columnasTotales[18],
  infoColumna19 = [
    {
      numero: "57",
      simbolo: " La",
      nombre: "Lantano",
      src: "img19/1lantano.png",
      masaAtomica: "138.90547 u",
      configuracionElectronica: "5d¹6s²",
    },
    {
      numero: "58",
      simbolo: "Ce",
      nombre: "Cerio",
      src: "img19/2cerio.png",
      masaAtomica: "140.116 u",
      configuracionElectronica: "4f¹5d¹6s²",
    },
    {
      numero: "59",
      simbolo: "Pr",
      nombre: "Praseodimio",
      src: "img19/3praseodimio.png",
      masaAtomica: "140,90765 u",
      configuracionElectronica: "4f36s2",
    },
    {
      numero: "60",
      simbolo: "Nd",
      nombre: "Neodimio",
      src: "img19/4neodimio.png",
      masaAtomica: "144.242 u",
      configuracionElectronica: "4f⁴6s²",
    },
    {
      numero: "61",
      simbolo: "Pm",
      nombre: "Prometio",
      src: "img19/5prometio.png",
      masaAtomica: "145 u",
      configuracionElectronica: "4f56s2",
    },
    {
      numero: "62",
      simbolo: "Sm",
      nombre: "Samario",
      src: "img19/6samario.png",
      masaAtomica: "150.36 u",
      configuracionElectronica: "4f⁶6s²",
    },
    {
      numero: "63",
      simbolo: "Eu",
      nombre: "Europio",
      src: "img19/7europio.png",
      masaAtomica: "151.964 u",
      configuracionElectronica: "4f76s2",
    },
    {
      numero: "64",
      simbolo: "Gd",
      nombre: "Gadolinio",
      src: "img19/8gadolinio.png",
      masaAtomica: "157.25 u",
      configuracionElectronica: "4f75d16s2",
    },
    {
      numero: "65",
      simbolo: "Tb",
      nombre: "Terbio",
      src: "img19/9terbio.png",
      masaAtomica: "158,92534 u",
      configuracionElectronica: "4f⁹6s²",
    },
    {
      numero: "66",
      simbolo: "Dy",
      nombre: "Disprosio",
      src: "img19/10disprosio.png",
      masaAtomica: "162.5 u",
      configuracionElectronica: "4f106s2",
    },
    {
      numero: "67",
      simbolo: "Ho",
      nombre: "Holmio",
      src: "img19/11holmio.png",
      masaAtomica: "164.93032 u",
      configuracionElectronica: "4f116s2",
    },
    {
      numero: "68",
      simbolo: "Er",
      nombre: "Erbio",
      src: "img19/12erbio.png",
      masaAtomica: "167.259 u",
      configuracionElectronica: "4f126s2",
    },
    {
      numero: "69",
      simbolo: "Tm",
      nombre: "Tulio",
      src: "img19/13tulio.png",
      masaAtomica: "168,934 u",
      configuracionElectronica: "4f136s2",
    },
    {
      numero: "70",
      simbolo: "Yb",
      nombre: "Iterbio",
      src: "img19/14iterbio.png",
      masaAtomica: "173.04 u",
      configuracionElectronica: "4f146s2",
    },
  ];

infoColumna19.forEach(el19 => {
  templateElementos.querySelector(".numero-atomico").textContent = el19.numero;
  templateElementos.querySelector(".simbolo-quimico").textContent = el19.simbolo;
  templateElementos.querySelector(".nombre").textContent = el19.nombre;

  let clone18 = document.importNode(templateElementos, true);
  fragmento.appendChild(clone18);
});
  
columna19.appendChild(fragmento);

const elementosColumna19 = columnasTotales[18].querySelectorAll(".elementos");

for(let c1 = 0; c1 <= (infoColumna19.length - 1); c1++) {
  elementosColumna19[c1].addEventListener("mouseleave", quitarInformacion);
  elementosColumna19[c1].addEventListener("mouseover", bordeMovimiento);
};

elementosColumna19[0].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna19[0].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna19[0].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna19[0].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna19[0].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna19[0].configuracionElectronica;
});

elementosColumna19[1].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna19[1].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna19[1].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna19[1].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna19[1].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna19[1].configuracionElectronica;
});

elementosColumna19[2].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna19[2].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna19[2].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna19[2].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna19[2].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna19[2].configuracionElectronica;
});

elementosColumna19[3].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna19[3].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna19[3].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna19[3].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna19[3].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna19[3].configuracionElectronica;
});

elementosColumna19[4].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna19[4].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna19[4].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna19[4].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna19[4].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna19[4].configuracionElectronica;
});

elementosColumna19[5].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna19[5].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna19[5].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna19[5].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna19[5].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna19[5].configuracionElectronica;
});

elementosColumna19[6].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna19[6].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna19[6].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna19[6].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna19[6].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna19[6].configuracionElectronica;
});

elementosColumna19[7].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna19[7].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna19[7].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna19[7].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna19[7].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna19[7].configuracionElectronica;
});

elementosColumna19[8].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna19[8].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna19[8].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna19[8].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna19[8].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna19[8].configuracionElectronica;
});

elementosColumna19[9].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna19[9].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna19[9].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna19[9].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna19[9].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna19[9].configuracionElectronica;
});

elementosColumna19[10].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna19[10].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna19[10].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna19[10].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna19[10].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna19[10].configuracionElectronica;
});

elementosColumna19[11].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna19[11].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna19[11].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna19[11].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna19[11].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna19[11].configuracionElectronica;
});

elementosColumna19[12].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna19[12].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna19[12].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna19[12].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna19[12].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna19[12].configuracionElectronica;
});

elementosColumna19[13].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna19[13].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna19[13].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna19[13].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna19[13].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna19[13].configuracionElectronica;
});

//SON LOS ELEMENTOS DE LA COLUMNA 20
const columna20 = columnasTotales[19],
  infoColumna20 = [
    {
      numero: "89",
      simbolo: "Ac",
      nombre: "Actinio",
      src: "img20/1actinio.png",
      masaAtomica: "227 u",
      configuracionElectronica: "6d17s2",
    },
    {
      numero: "90",
      simbolo: "Th",
      nombre: "Torio",
      src: "img20/2torio.png",
      masaAtomica: "232.03806 u",
      configuracionElectronica: "6d27s2",
    },
    {
      numero: "91",
      simbolo: "Pa",
      nombre: "Protactinio",
      src: "img20/3protactinio.png",
      masaAtomica: "231.03588 u",
      configuracionElectronica: "5f26d17s2",
    },
    {
      numero: "92",
      simbolo: "U",
      nombre: "Uranio",
      src: "img20/4uranio.png",
      masaAtomica: "238.02891 u",
      configuracionElectronica: "5f36d17s2",
    },
    {
      numero: "93",
      simbolo: "Np",
      nombre: "Neptunio",
      src: "img20/5neptunio.png",
      masaAtomica: "237.0482 u",
      configuracionElectronica: "5f46d17s2",
    },
    {
      numero: "94",
      simbolo: "Pu",
      nombre: "Plutonio",
      src: "img20/6plutonio.png",
      masaAtomica: "244 u",
      configuracionElectronica: "5f67s2",
    },
    {
      numero: "95",
      simbolo: "Am",
      nombre: "Americio",
      src: "img20/7americio.png",
      masaAtomica: "243 u",
      configuracionElectronica: "5f77s2",
    },
    {
      numero: "96",
      simbolo: "Cm",
      nombre: "Curio",
      src: "img20/8curio.png",
      masaAtomica: "247 u",
      configuracionElectronica: "5f76d17s2",
    },
    {
      numero: "97",
      simbolo: "Bk",
      nombre: "Berkelio",
      src: "img20/9berkelio.png",
      masaAtomica: "247 u",
      configuracionElectronica: "5f97s2",
    },
    {
      numero: "98",
      simbolo: "Cf",
      nombre: "Californio",
      src: "img20/10californio.png",
      masaAtomica: "251 u",
      configuracionElectronica: "5f107s2",
    },
    {
      numero: "99",
      simbolo: "Es",
      nombre: "Einstenio",
      src: "img20/11einstenio.png",
      masaAtomica: "252 u",
      configuracionElectronica: "5f11 7s2",
    },
    {
      numero: "100",
      simbolo: "Fm",
      nombre: "Fermio",
      src: "img20/12fermio.png",
      masaAtomica: "257 u",
      configuracionElectronica: "5f12 7s2",
    },
    {
      numero: "101",
      simbolo: "Md",
      nombre: "Mendelevio",
      src: "img20/13mendelevio.png",
      masaAtomica: "258 u",
      configuracionElectronica: "5f137s2",
    },
    {
      numero: "102",
      simbolo: "No",
      nombre: "Nobelio",
      src: "img20/14nobelio.png",
      masaAtomica: "259 u",
      configuracionElectronica: "5f14 7s2",
    },
  ];

infoColumna20.forEach(el20 => {
  templateElementos.querySelector(".numero-atomico").textContent = el20.numero;
  templateElementos.querySelector(".simbolo-quimico").textContent = el20.simbolo;
  templateElementos.querySelector(".nombre").textContent = el20.nombre;

  let clone18 = document.importNode(templateElementos, true);
  fragmento.appendChild(clone18);
});
  
columna20.appendChild(fragmento);

const elementosColumna20 = columnasTotales[19].querySelectorAll(".elementos");

for(let c1 = 0; c1 <= (infoColumna20.length - 1); c1++) {
  elementosColumna20[c1].addEventListener("mouseleave", quitarInformacion);
  elementosColumna20[c1].addEventListener("mouseover", bordeMovimiento);

};

elementosColumna20[0].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna20[0].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna20[0].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna20[0].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna20[0].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna20[0].configuracionElectronica;
});

elementosColumna20[1].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna20[1].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna20[1].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna20[1].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna20[1].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna20[1].configuracionElectronica;
});

elementosColumna20[2].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna20[2].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna20[2].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna20[2].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna20[2].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna20[2].configuracionElectronica;
});

elementosColumna20[3].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna20[3].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna20[3].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna20[3].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna20[3].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna20[3].configuracionElectronica;
});

elementosColumna20[4].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna20[4].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna20[4].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna20[4].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna20[4].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna20[4].configuracionElectronica;
});

elementosColumna20[5].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna20[5].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna20[5].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna20[5].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna20[5].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna20[5].configuracionElectronica;
});

elementosColumna20[6].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna20[6].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna20[6].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna20[6].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna20[6].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna20[6].configuracionElectronica;
});

elementosColumna20[7].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna20[7].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna20[7].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna20[7].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna20[7].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna20[7].configuracionElectronica;
});

elementosColumna20[8].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna20[8].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna20[8].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna20[8].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna20[8].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna20[8].configuracionElectronica;
});

elementosColumna20[9].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna20[9].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna20[9].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna20[9].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna20[9].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna20[9].configuracionElectronica;
});

elementosColumna20[10].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna20[10].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna20[10].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna20[10].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna20[10].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna20[10].configuracionElectronica;
});

elementosColumna20[11].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna20[11].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna20[11].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna20[11].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna20[11].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna20[11].configuracionElectronica;
});

elementosColumna20[12].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna20[12].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna20[12].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna20[12].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna20[12].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna20[12].configuracionElectronica;
});

elementosColumna20[13].addEventListener("mouseover", function() {
  infoImagen.setAttribute("src", infoColumna20[13].src);
  imagenTexto.textContent = datosElementos[0];
  infoSimbolo.textContent = datosElementos[1] + " " + infoColumna20[13].simbolo;
  infoMasaAtomica.textContent = datosElementos[2] + " " + infoColumna20[13].masaAtomica;
  infoNumeroAtomica.textContent = datosElementos[3] + " " + infoColumna20[13].numero;
  infoConfiguracionElectronica.textContent = datosElementos[4] + " " + infoColumna20[13].configuracionElectronica;
});

//FUNCIONES GENERALES
function quitarInformacion() {
  infoImagen.removeAttribute("src");
  imagenTexto.textContent = "";
  infoSimbolo.textContent = "";
  infoMasaAtomica.textContent = "";
  infoNumeroAtomica.textContent = "";
  infoConfiguracionElectronica.textContent = "";

  informacion.classList.remove("borde-movimiento");
};

function bordeMovimiento() {
  informacion.classList.add("borde-movimiento");
};