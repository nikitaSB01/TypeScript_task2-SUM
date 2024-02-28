import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
console.log(cart.items);
console.log(cart.sumPrice());
console.log(cart.sumPriceDiscounted(10));

cart.add(new Book(1, 'AAA', 'AAA AAAA', 111, 123));
cart.add(new Book(2, 'BBB', 'BBB BBBB', 222, 456));
cart.add(new Book(3, 'CCC', 'CCC CCCC', 333, 789));

console.log(cart.items);
cart.deleteItemCart(2);
console.log(cart.items);