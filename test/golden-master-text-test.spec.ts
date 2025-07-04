import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Some special cases', () => {

    it('Sulfuras stays the same', () => {
        const testingRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 3, 35)]);
        const updatedRose = testingRose.updateQuality();
        expect(updatedRose[0].quality).to.equal(35);
        expect(updatedRose[0].sellIn).to.equal(3);
    });

    it('Aged Brie gets better', () => {
        let testingData = new GildedRose([new Item('Aged Brie', 3, 10)]);
        let updatedData = [] as Item[];
        while (testingData.items[0].sellIn > 0) {
            updatedData = testingData.updateQuality();
        }
        expect(updatedData[0].quality).to.equal(13);
    });

    it('Concert specifications work', () => {
        let testingData1 = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 5)]);
        let testingData2 = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 0)]);
        let testingData3 = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 0)]);
        let testingData4 = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 3, 10)]);

        let expectedResult = [] as Item[];
        for (let i: number = 0; i < 5; i += 1) {
            expectedResult = testingData1.updateQuality();
        }
        expect(expectedResult[0].quality).to.equal(20);

        for (let i: number = 0; i < 10; i += 1) {
            expectedResult = testingData2.updateQuality();
        }
        expect(expectedResult[0].quality).to.equal(25);

        for (let i: number = 0; i < 15; i += 1) {
            expectedResult = testingData3.updateQuality();
        }
        expect(expectedResult[0].quality).to.equal(30);

        for (let i: number = 0; i < 10; i += 1) {
            expectedResult = testingData4.updateQuality();
        }
        expect(expectedResult[0].quality).to.equal(0);
    });

    it('Non-special items are correctly update', () => {
        let testingData = new GildedRose([new Item('Common item', 2, 5)]);

        let updateData = [] as Item[];
        for (let i: number = 0; i < testingData.items[0].sellIn; i += 1) {
            updateData = testingData.updateQuality();
        }

        expect(updateData[0].quality).to.equal(4);
    });
});