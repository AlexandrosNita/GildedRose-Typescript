import { expect } from 'chai';
import { transformIntoGildedArray, evaluate } from './functionalities';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Common items test', () => {
    it('Quality should decrease', () => {

        // Put new data in the testData array.

        const gildedRose: GildedRose = new GildedRose([
            new Item('Common Football', 3, 13),
            new Item('Magical Wand', 1, 54),
            new Item('Coffee Machine', 4, 100),
            new Item('Sulphurous Oxide', 13, 4),
            new Item('Backstage ticket to Metallica', 40, 100),
            new Item('Sand from the divine beach', 10, 39),
            new Item('Sulfuras, Hand of Ragnaros', 10, 10)
        ]);
        const noDays: number[] = [3, 1, 4, 13, 40, 10, 10];

        let actualTestData: GildedRose[] = transformIntoGildedArray(gildedRose);

        const correctResults: number[] = [10, 53, 96, 0, 60, 29, 10];
        const actualResults: Item[] = evaluate(actualTestData, noDays);

        for (let i: number = 0; i < actualResults.length; i += 1) {
            expect(actualResults[i].quality).to.equal(correctResults[i]);
        }
    }); 
});