import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Common items test', () => {
    it('Quality should decrease', () => {

        // Put new data in the testData array.

        let testData: GildedRose = new GildedRose([
            new Item('Common Football', 3, 13),
            new Item('Magical Wand', 1, 54),
            new Item('Coffee Machine', 4, 100),
            new Item('Sulphurous Oxide', 13, 4),
            new Item('Backstage ticket to Metallica', 40, 100),
            new Item('Sand from the divine beach', 10, 39)
        ]);

        let actualTestData: GildedRose[] = [] as GildedRose[];
        for (const item of testData.items) {
            actualTestData.push(new GildedRose([item]));
        }

        let correctResults: number[] = [10, 53, 96, 0, 60, 29];
        let actualResults: Item[][] = [] as Item[][];

        for (let gildedRose of actualTestData) {
            let temporaryResult: Item[] = [] as Item[];
            while (gildedRose.items[0].sellIn > 0) {
                temporaryResult = gildedRose.updateQuality();
            }
            actualResults.push(temporaryResult);
        }

        for (let i: number = 0; i < actualResults.length; i += 1) {
            expect(actualResults[i][0].quality).to.equal(correctResults[i]);
        }
    }); 
});