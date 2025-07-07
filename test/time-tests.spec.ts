import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';
import { transformIntoGildedArray, evaluate } from './functionalities';

describe('Testing the time', () => {
    const gildedRose: GildedRose = new GildedRose([
        new Item('Thingy', 0, 15),
        new Item('Another thingy', 1, 1),
        new Item('Sulfuras, Hand of Ragnaros', 5, 1)
    ])
    const noDays: number[] = [3, 1, 20];

    let testData = transformIntoGildedArray(gildedRose);
    const actualResult = evaluate(testData, noDays);

    it('Check if the days are computed correctly', () => {
        let correctResult: number[] = [-3, 0, 5];
        for (let i: number = 0; i < correctResult.length; i += 1) {
            expect(actualResult[i].sellIn).to.equal(correctResult[i]);
        }
    });

    it('Check if the quality is correct', () => {
        let correctResult: number[] = [9, 0, 1];
        for (let i: number = 0; i < correctResult.length; i += 1) {
            expect(actualResult[i].quality).to.equal(correctResult[i]);
        }
    })
});