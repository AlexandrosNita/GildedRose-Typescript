import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';
import { transformIntoGildedArray, evaluate } from './functionalities';

describe('Testing the mana cake', () => {
    it('Mana Cake Quality', () => {
        const gildedRose: GildedRose = new GildedRose([
            new Item('Conjured Mana Cake', 0, 5),
            new Item('Conjured Mana Cake', 1, 5)
        ]);
        const noDays: number[] = [1, 2];

        let testData: GildedRose[] = transformIntoGildedArray(gildedRose);

        const correctResults: number[] = [1, 0];
        const actualResults: Item[] = evaluate(testData, noDays);

        for (let i: number = 0; i < correctResults.length; i += 1) {
            expect(actualResults[i].quality).to.equal(correctResults[i]);
        }
    });
});