import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Animation } from '../animations/shared/animation.model';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
    sakuraAnimation: Animation = {
        id: 0,
        name: 'Card Captor Sakura',
        cover: 'https://b-ssl.duitang.com/uploads/item/201504/29/20150429140555_3faHu.jpeg',
        description: '名为小樱的少女与魔卡的故事。',
        tags: ['少女', '魔法'],
        seasons: [
            {
                id: 0,
                index: 1, // stands for S1
                name: 'Card Captor Sakura',
                cover: 'https://b-ssl.duitang.com/uploads/item/201506/13/20150613222508_CfiB8.jpeg',
                description: '小樱和封印兽小可一起收集可能会带来灾难的库洛牌的故事……',
                date: '1998-04-07', // 时间这样写可能存在冗余，但首播时间和后续播出的时间不一定一致……
                /*year: 1998,
                 month: 4,
                 day: 2 // Tuesday*/
            },
            {
                id: 1,
                index: 2,
                name: 'Card Captor Sakura - Clear Card',
                cover: '',
                description: '小樱升入初中，小狼也归来了。但是魔卡全都透明化了！究竟是谁在搞事情？小樱能化险为夷么？',
                date: '2018-01-07', // 但是简单起见，暂时先这么写
                /*year: 2018,
                 month: 1,
                 day: 7 // Sunday*/
            }
        ]
    };

    xxxHolicAnimation: Animation = {
        id: 1,
        name: 'xxxHolic',
        cover: 'http://img2.imgtn.bdimg.com/it/u=3050525329,83010247&fm=27&gp=0.jpg',
        description: '能看见灵异之物的少年与侑子小姐的故事。',
        tags: ['灵异', '妖怪'],
        seasons: [{
            id: 2,
            index: 1,
            name: '四月一日灵异事件簿',
            cover: 'http://img0.imgtn.bdimg.com/it/u=1751620650,1267900548&fm=214&gp=0.jpg',
            description: '少年与迷之大姐姐的相遇是偶然还是必然呢？……',
            date: '2006-04-06'
        }]
    };

    createDb() {
        /* Test Data */
        const animations: Animation[] = [this.sakuraAnimation, this.xxxHolicAnimation];
        return {animations};
    }

    /*constructor() { }*/
}
