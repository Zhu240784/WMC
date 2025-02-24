function checkNumber() {
    // Wert aus dem Eingabefeld auslesen
    var userInput = document.getElementById('number').value;

    // Eingabe (Text) in eine Zahl umwandeln
    var num = Number(userInput);

    // Zunächst vermuten wir, dass die Zahl eine Primzahl ist
    var isPrimeNumber = true;

    // Zahlen kleiner oder gleich 1 sind keine Primzahlen
    if (num <= 1) {
        isPrimeNumber = false;
    }

    // Wir prüfen jetzt jede Zahl von 2 bis num-1
    for (var counter = 2; counter < num; counter = counter + 1) {
        // Wenn num durch counter teilbar ist, ist num keine Primzahl
        if (num % counter === 0) {
            isPrimeNumber = false;
        }
    }

    // Ergebnis auf der HTML-Seite anzeigen
    if (isPrimeNumber) {
        document.getElementById('result').textContent = num + ' is a prime number.';
    } else {
        document.getElementById('result').textContent = num + ' is not a prime number.';
    }
}
