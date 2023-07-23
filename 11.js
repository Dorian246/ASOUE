const frasesVFD = [
  "El mundo es vasto y complicado, y a veces es necesario ser un poco temerario.",
  "La vida es una serie de eventos desafortunados, así que más vale estar preparado.",
  "Cuando todo parece estar yendo bien, es probable que algo salga mal.",
  "Los secretos pueden tener graves consecuencias, pero a veces son necesarios para proteger a quienes amamos.",
  "La verdad puede ser dolorosa, pero es esencial para enfrentar la realidad.",
  "La esperanza es una luz en la oscuridad, incluso en los peores momentos.",
  "El mal no siempre se presenta obviamente, a veces se oculta detrás de una máscara amable.",
  "En un mundo gobernado por la corrupción y la arrogancia, puede ser difícil mantenerse fiel a sus principios literarios y filosóficos.",
  "Una biblioteca es como una isla en medio de un vasto océano de ignorancia.",
  "No hay personas malvadas ni nobles.",
  "Memento mori",
  "A veces, temos que combatir fuego con fuego.",
  "La vida es un enigma de cosas esotericas",
  "El mundo está en silencio aquí", 
  "La experiencia más hermosa que podemos tener es el misterio.",
  
];

const frasesBaudelaire = [
  "Violet: La solución a este problema requiere de un invento ingenioso.",
  "Klaus: Según mi investigación, esto me recuerda a un libro que leí una vez.",
  "Sunny: ¡Goloso, delicioso y esponjoso!",
  "Los tres hermanos: Estamos juntos en esto, pase lo que pase.",
  "Violet: A veces, la inteligencia puede ser más poderosa que la fuerza física.",
  "Klaus: El conocimiento es una herramienta valiosa para enfrentar cualquier situación.",
  "Sunny: ¡Grrrr! (¡Lo resolveremos de alguna manera!)",
  "Klaus: ¿ESTAMOS LISTOS?; Violet:SI ESPERAMOS A ESTAR LISTOS ESPERAREMOS EL RESTO DE NUESTRAS VIDAS",
  "Klaus:¿Cómo puede una persona tan maravillosa hacer algo tan terrible?",
];


const cartasBeatrice = [
  "Para Beatrice, Querida, encantadora, muerta.",
  "Para Beatrice, Mi amor por ti vivirá para siempre. Tú, sin embargo, no lo hiciste.",
  "Para Beatrice, Mi amor voló como una mariposa Hasta que la muerte cayó como un murciélago Como dijó la poeta Emma Montana McElroy;Ese fue su fin.",
  "Para Beatrice, Siempre estarás en mi corazón, En mi mente, Y en tu tumba.",
  "Para Beatrice, Cuando nos conocimos mi vida comenzó, Pronto después, la tuya terminó.",
  "Para Beatrice, Cuando estábamos juntos me sentía sin aliento. Ahora tu lo estas.",
  "Para Beatrice, El verano sin ti es tan frío como el invierno. El invierno sin ti es aún más frío.",
  "Para Beatrice, Nuestro amor rompió mi corazón, Y detuvó el tuyo.",
  "Para Beatrice, Cuando nos conocimos por primera vez, eras muy bella, y yo estaba solo. Ahora estoy muy solo.",
  "Para Beatrice, Las mujeres muertas no cuentan historias, Los hombres tristes las escriben. Nadie pudo extinguir mi amor, Ni tu casa.",
  "Para Beatrice, Yo quise, tú moriste.El mundo ha sido una pesadilla.",

];


function obtenerFraseAleatoria(lista) {
  const indiceAleatorio = Math.floor(Math.random() * lista.length);
  return lista[indiceAleatorio];
}

document.getElementById("obtenerFrase").addEventListener("click", () => {
  const fraseAleatoria = obtenerFraseAleatoria(frasesVFD);
  document.getElementById("fraseAleatoria").textContent = fraseAleatoria;
});

document.getElementById("Frase2").addEventListener("click", () => {
  const fraseAleatoria = obtenerFraseAleatoria(frasesBaudelaire);
  document.getElementById("frase").textContent = fraseAleatoria;
});

document.getElementById("Cartas").addEventListener("click", () => {
  const cartaAleatoria = obtenerFraseAleatoria(cartasBeatrice);
  document.getElementById("Cartas2").textContent = cartaAleatoria;
})