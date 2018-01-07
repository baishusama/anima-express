/*export class Animation {
 id = 0;
 name = '';
 description = '';
 }*/

/* Interface */

const today = new Date();

export class Animation {
    id?: number;
    name: string = '';
    cover: string = ''; // TODO: img || url ?
    description: string = '';
    tags: string[];
    seasons: Season[];
}

export class Season {
    id?: number;
    index: number; // 第几季
    name: string = '';
    cover: string = ''; // TODO: img || url ?
    description: string = '';
    date: string = ''; // 首播时间
    /*year: number = today.getFullYear(); // 上映年份
     month: number = today.getMonth(); // 上映月份（几月番）
     day: number = today.getDay(); // e.g. Monday*/
    // animeID: number; // ref // TODO
}

export interface Site {
    id?: number;
    name: string;
    url: string;
    logo: string; // TODO: img || url ?
}


