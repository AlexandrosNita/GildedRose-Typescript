import { Item, GildedRose } from '../app/gilded-rose';

export function transformIntoGildedArray(data: GildedRose): GildedRose[] {
    let result: GildedRose[] = [] as GildedRose[];

    for (const item of data.items) {
        result.push(new GildedRose([item]));
    }

    return result;
}

export function evaluate(testData: GildedRose[], noDays: number[]): Item[] {
    let results: Item[] = [] as Item[];
    for (let i: number = 0; i < testData.length; i += 1) {
        let temporaryResult: Item[] = testData[i].items;
        for (let j: number = 0; j < noDays[i]; j += 1) {
            temporaryResult = testData[i].updateQuality();
        }
        results.push(temporaryResult[0]);
    }
    return results;
}