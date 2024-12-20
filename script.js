// Treść zadania: Przekształć tablicę imion tak, aby każde imię było pisane dużymi literami.
// Użyj metody map().
// Wykorzystaj funkcje strzałkowe
// Wyświetl przekształconą tablicę w konsoli

// const names = ["Anna", "Bartek", "Cezary"];
// const newNames = names.map((name) => name.toUpperCase());
// console.log(newNames);

// Zsumuj wszystkie wartości liczbowe w tablicy.
// Użyj metody forEach().
// Wykorzystaj funkcje strzałkowe.
// Wyświetl wynik w konsoli

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// numbers.forEach((number) => {
//   sum += number;
// });

// console.log(sum);

// Stwórz tablicę, która zawiera długości imion podanych w tablicy wejściowej names.
// Użyj metody map() do przekształcenia tablicy imion na tablicę ich długości.
// Wykorzystaj funkcje strzałkowe.
// Wyświetl nową tablicę w konsoli

// const names = ["Anna", "Bartek", "Cezary"];
// const namesLength = names.map((name) => name.length);
// console.log(namesLength);

// Dla podanej tablicy obiektów reprezentujących osoby, wykorzystaj metodę forEach() do wyświetlenia informacji o każdej osobie w formacie "Imię: [imie], Nazwisko: [nazwisko]".
// Użyj metody forEach() do iteracji przez tablicę obiektów.
// W każdej iteracji wyświetl informacje o osobie.
// Wykorzystaj funkcje strzałkowe.

// const people = [
//   { firstName: "Anna", lastName: "Kowalska" },
//   { firstName: "Bartek", lastName: "Nowak" },
// ];

// people.forEach((element) => {
//   console.log(`Imię: ${element.firstName}, Nazwisko: ${element.lastName}`);
// });

// Napisz funkcję areAllAdults, która przyjmuje tablicę obiektów osób. Funkcja powinna zwrócić true jeżeli wszystkie osoby są pełnoletnie (18 lat lub więcej), a false w przeciwnym wypadku.
// Użyj odpowiedniej metody do iteracji po elementach tablicy
// Wyświetl wynik wywołania funkcji w konsoli

// const people = [
//   { name: "Anna", age: 22 },
//   { name: "Bob", age: 17 },
//   { name: "Carla", age: 20 },
// ];

// function areAllAdults(table) {
//   return table.every((age) => age >= 18);
// }

// console.log(areAllAdults(people));

// const dorosli = (ludzie) => people.every((person) => person.age >= 18);
// console.log(dorosli(people));

// Napisz funkcję existsExpiredProduct, która przyjmuje tablicę produktów . Funkcja powinna zwrócić true jeśli jakikolwiek produkt przekroczył datę ważności.
// Użyj odpowiedniej metody do iteracji po elementach tablicy.
// Wyświetl wynik wywołania funkcji w konsoli.

// const products = [
//   { name: "Milk", expiryDate: "2023-05-01" },
//   { name: "Eggs", expiryDate: "2024-01-15" },
// ];

// const today = new Date();
// const existsExpiredProduct = (product) =>
//   products.some((product) => new Date(product.expiryDate) <= new Date());
// console.log(existsExpiredProduct(products));

// Napisz funkcję checkEvenNumbers, która przyjmuje tablicę liczb i zwraca true tylko wtedy, gdy każda liczba parzysta w tablicy jest większa od 10.
// Użyj odpowiedniej metody do iteracji po elementach tablicy.
// Wyświetl wynik wywołania funkcji w konsoli.

// const numbers = [12, 5, 8, 14, 3, 16];
// const checkEvenNumbers = (numbers) =>
//   numbers.every((number) => number % 2 !== 0 || number > 10);
// console.log(checkEvenNumbers(numbers));

// Napisz funkcję hasPremiumProduct, która przyjmuje tablicę obiektów produktów. Funkcja powinna zwracać true, jeśli przynajmniej jeden produkt w tablicy
// kosztuje więcej niż 50 jednostek i jego nazwa zawiera przynajmniej 5 znaków.
// Użyj odpowiedniej metody do iteracji po elementach tablicy.
// Wyświetl wynik wywołania funkcji w konsoli.

// const products = [
//   { name: "Apple", price: 30 },
//   { name: "Orange", price: 21 },
//   { name: "Banana", price: 15 },
//   { name: "Cherry", price: 22 },
//   { name: "Watermelon", price: 55 },
// ];

// const hasPremiumProduct = (products) =>
//   products.some((product) => product.price > 50 && product.name.length >= 5);

// console.log(hasPremiumProduct(products));

// Napisz funkcję, która filtruje tablicę liczb, zwracając tylko te elementy, które są większe niż 10.
// Użyj metody filter() do przefiltrowania tablicy.
// Wyświetl przefiltrowaną tablicę w konsoli.

// const numbers = [5, 10, 15, 20, 25];
// const filteredNumbers = numbers.filter((number) => number > 10);
// console.log(filteredNumbers);

// Znajdź największy element w tablicy.
// Użyj reduce() do porównania elementów.
// Wyświetl wynik w konsoli

// const numbers = [10, 50, 30, 40, 20];
// const maxElement = numbers.reduce((max, number) =>
//   number > max ? number : max
// );
// console.log(maxElement);

// Oblicz sumę liczb parzystych
// Użyj metody filter i reduce w notacji łańcuchowej
// Wyświetl wynik w konsoli

// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumberSum = numbers
//   .filter((number) => number % 2 === 0)
//   .reduce((number, next) => number + next, 0);
// console.log(evenNumberSum);

// Napisz funkcję, która zwraca tablicę unikalnych liczb, które są większe niż 10.
// Użyj metody filter i reduce w notacji łańcuchowej
// Wyświetl wynik w konsoli

const numbers = [11, 20, 12, 20, 15, 11, 15, 12];
const uniqNumbers = numbers
  .filter((number) => number > 10)
  .reduce((uniq, next) => {
    if (!uniq.includes(next)) {
      uniq.push(next);
    }
    return uniq;
  }, []);
console.log(uniqNumbers);

// Mając tablicę obiektów reprezentujących sprzedaż produktów, napisz funkcję, która obliczy łączny dochód z produktów, których cena jednostkowa przekracza 50 zł, po zastosowaniu 10% zniżki.
// Użyj metody filter map i reduce w notacji łańcuchowej
// Wyświetl wynik w konsoli

// const sales = [
//   { product: "Sok pomarańczowy", units: 30, pricePerUnit: 40 },
//   { product: "Czekolada", units: 20, pricePerUnit: 60 },
//   { product: "Kawa", units: 10, pricePerUnit: 70 },
//   { product: "Herbata", units: 40, pricePerUnit: 30 },
// ];

// const totalIncome = sales
//   .filter((product) => product.pricePerUnit > 50)
//   .map((product) => product.pricePerUnit * 0.9 * product.units)
//   .reduce((acc, next) => acc + next, 0);
// console.log(totalIncome);
