import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';
import { transformIntoGildedArray, evaluate } from './functionalities';

describe('Special Cases', () => {
    it('Check Brie', () => {
        const gildedRose: GildedRose = new GildedRose([
            new Item('Aged Brie', 10, 0),
            new Item('Aged Brie', 0, 0),
            new Item('Aged Brie', 10, 50)
        ]);

        const noDays: number[] = [10, 1, 10];

        let testData = transformIntoGildedArray(gildedRose);

        const correctResults: number[] = [10, 2, 50];
        const actualResults: Item[] = evaluate(testData, noDays);

        for (let i: number = 0; i < actualResults.length; i += 1) {
            expect(actualResults[i].quality).to.equal(correctResults[i]);
        }
    });

    it('Check Concert', () => {
        const gildedRose: GildedRose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 15, 0),
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 0),
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 0),
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 15),
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 0),
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 50)
        ]);

        const noDays: number[] = [3, 4, 5, 1, 1, 1];

        let testData = transformIntoGildedArray(gildedRose);

        const correctResults: number[] = [3, 8, 15, 0, 0, 50];
        const actualResults: Item[] = evaluate(testData, noDays);

        for (let i: number = 0; i < actualResults.length; i += 1) {
            expect(actualResults[i].quality).to.equal(correctResults[i]);
        }
    });
});