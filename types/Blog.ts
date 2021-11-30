import { isArrayOf, isInstanceOf } from "../lib/utils";

export interface PostMeta {
    title: string;
    description: string;
    publishedDate: string;
    tags: [string];
}

//This can probably be refactored to not be so verbose. Or maybe I don't even need to really do this?
export function isPostMeta(data: any): data is PostMeta {
    if(Object.keys(data).length !== 4){
        return false
    }
    if(!(typeof data.title === 'string')){
        return false
    }
    if(!(typeof data.description === 'string')){
        return false
    }
    if(!(typeof data.publishedDate === 'string')){
        return false
    }
    // Loops through every element of the array. This could go badly if the array is really huge I guess?? Validation of files can be hard.
    if(!(Array.isArray(data.tags) && data.tags.every((cur: any) => typeof cur === 'string'))) {
        return false
    }
    return true;
}