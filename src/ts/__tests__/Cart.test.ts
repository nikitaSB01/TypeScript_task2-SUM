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