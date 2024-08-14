import db from "$lib/db";
import { doc, getDoc } from "firebase/firestore";

export async function load() {
    const allItemDataRef = doc(db, "itemData", "8fh39s");
    const allItemData:any = (await getDoc(allItemDataRef)).data();

    let itemIds:string[] = []
    let itemData:any = {}

    Object.entries(allItemData).forEach(([itemId, item])=>{
        if((item as any).stage!==0) return
        itemIds.push(itemId)
        itemData[itemId] = {...(item as any)}
    })

    return {
        itemIds,
        itemData
    }
}