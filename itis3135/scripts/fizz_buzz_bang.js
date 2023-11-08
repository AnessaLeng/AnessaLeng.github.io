const fizzBuzzParagraph = document.getElementById('fizzbuzzcontent');
fizzBuzzParagraph.innerHTML = fizzBuzz().toString();

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        let print = i;
        if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
            print = 'fizzbuzzBANG';
        }
        else if (i % 3 === 0 && i % 5 === 0) {
            print = 'fizzbuzz';
        }
        else if (i % 5 === 0 && i % 7 === 0) {
            print = 'buzzBANG';
        }
        else if (i % 3 === 0 && i % 7 === 0) {
            print = 'fizzBANG';
        }
        else if (i % 3 === 0) {
            print = 'fizz';
        }
        else if (i % 5 === 0) {
            print = 'buzz';
        }
        else if (i % 7 === 0) {
            print = 'BANG';
        }
        else {
            print = i;
        }
        fizzBuzzParagraph.innerHTML += print + ' ';
    }
}
fizzBuzz();