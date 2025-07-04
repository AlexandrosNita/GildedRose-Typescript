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
        const noDays: number[] = [1, 1, 10];

        let testData = transformIntoGildedArray(gildedRose);

        const correctResults: number[] = [10, 1, 50];
        const actualResults: Item[] = evaluate(testData, noDays);

        for (let i: number = 0; i < actualResults.length; i += 1) {
            expect(actualResults[i]).to.equal(correctResults[i]);
        }
    });
});