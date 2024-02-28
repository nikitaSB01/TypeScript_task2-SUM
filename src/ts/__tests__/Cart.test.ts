import Cart from '../service/Cart';
import Book from '../domain/Book';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('add in cart', () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  expect(cart.items.length).toBe(1);
});

test('remote in cart', () => {
  const cart = new Cart();
  cart.add(new Book(1, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.deleteItemCart(1);
  expect(cart.items.length).toBe(0);
});

test('sumPrice cart', () => {
  const cart = new Cart();
  cart.add(new Book(1, "War and Piece", "Leo Tolstoy", 111, 123));
  cart.add(new Book(2, "War and Piece", "Leo Tolstoy", 222, 234));
  cart.add(new Book(3, "War and Piece", "Leo Tolstoy", 333, 345));
  cart.sumPrice();
  expect(cart.items[0].price).toBe(111);
});

test('sumPriceDiscounted cart', () => {
  const cart = new Cart();
  cart.add(new Book(1, "War and Piece", "Leo Tolstoy", 100, 123));
  cart.add(new Book(2, "War and Piece", "Leo Tolstoy", 100, 234));
  cart.add(new Book(3, "War and Piece", "Leo Tolstoy", 100, 345));
  expect(cart.sumPriceDiscounted(10)).toBe(270);
});