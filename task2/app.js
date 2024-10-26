const alphabet = 'абвгдаовыттвыьлс'

function randomeIndex(){
    return Math.floor(Math.random()* alphabet.length)
}
const randomWord = alphabet[randomeIndex(alphabet.length)] + alphabet[randomeIndex(alphabet.length)] + alphabet[randomeIndex(alphabet.length)] + alphabet[randomeIndex(alphabet.length)]

console.log("Случайное слово из массива: " + randomWord);
