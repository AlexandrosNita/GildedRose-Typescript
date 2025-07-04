export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    private static specialItemNames: Set<string> = new Set([
        'Aged Brie',
        'Backstage passes to a TAFKAL80ETC concert'
    ]);
    private static skipItems: Set<string> = new Set([
        'Sulfuras, Hand of Ragnaros'
    ]);

    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    private checkSpecialItem(item: Item): boolean {
        return GildedRose.specialItemNames.has(item.name);
    }

    private updateCommonItem(item: Item): void {
        if (item.quality > 0) {
            item.quality -= 1;
        }
    }

    private processSpecialItems(item: Item): void {
        switch (item.name) {
            case 'Aged Brie':
                item.quality += 1;
                break;
            case 'Backstage passes to a TAFKAL80ETC concert':
                if (0 < item.sellIn && item.sellIn < 6) {
                    item.quality += 3;
                } else if (5 < item.sellIn && item.sellIn < 11) {
                    item.quality += 2;
                } else {
                    item.quality += 1;
                }
                break;
        }
    }

    private updateTime(item: Item): void {
        item.sellIn -= 1;

        if (item.sellIn < 0) {
            switch(item.name) {
                case 'Aged Brie':
                    item.quality = Math.min(item.quality + 1, 50);
                    break;
                case 'Backstage passes to a TAFKAL80ETC concert':
                    item.quality = 0;
                    break;
                default:
                    item.quality = Math.max(item.quality - 1, 0);
            }
        }
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (!GildedRose.skipItems.has(this.items[i].name)) {
                if (!this.checkSpecialItem(this.items[i])) {
                    this.updateCommonItem(this.items[i]);
                } else {
                    this.processSpecialItems(this.items[i]);
                    this.items[i].quality = Math.min(this.items[i].quality, 50);
                }

                this.updateTime(this.items[i]);
            }



            // if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            //     if (this.items[i].quality > 0) {
            //         if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            //             this.items[i].quality = this.items[i].quality - 1
            //         }
            //     }
            // }
            // else {
            //     if (this.items[i].quality < 50) {
            //         this.items[i].quality = this.items[i].quality + 1
            //         if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            //             if (this.items[i].sellIn < 11) {
            //                 if (this.items[i].quality < 50) {
            //                     this.items[i].quality = this.items[i].quality + 1
            //                 }
            //             }
            //             if (this.items[i].sellIn < 6) {
            //                 if (this.items[i].quality < 50) {
            //                     this.items[i].quality = this.items[i].quality + 1
            //                 }
            //             }
            //         }
            //     }
            // }
            // if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            //     this.items[i].sellIn = this.items[i].sellIn - 1;
            // }
            // if (this.items[i].sellIn < 0) {
            //     if (this.items[i].name != 'Aged Brie') {
            //         if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            //             if (this.items[i].quality > 0) {
            //                 if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            //                     this.items[i].quality = this.items[i].quality - 1
            //                 }
            //             }
            //         } else {
            //             this.items[i].quality = this.items[i].quality - this.items[i].quality
            //         }
            //     } else {
            //         if (this.items[i].quality < 50) {
            //             this.items[i].quality = this.items[i].quality + 1
            //         }
            //     }
            // }
        }

        return this.items;
    }
}
