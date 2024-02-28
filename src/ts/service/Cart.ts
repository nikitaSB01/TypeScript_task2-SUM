import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sumPrice(): number {
        return this._items.reduce((acc, item) => acc + item.price, 0)
    }

    sumPriceDiscounted(discount: number): number {
        const sum: number = this._items.reduce((acc, item) => acc + item.price, 0);
        return sum - sum / 100 * discount;
    }

    deleteItemCart(id: number): void {
        this._items = this._items.filter(item => item.id !== id);
    }
}