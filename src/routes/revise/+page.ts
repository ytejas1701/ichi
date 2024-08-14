import db from "$lib/db";
import { doc, getDoc } from "firebase/firestore";

export async function load() {
    const allItemDataRef = doc(db, "itemData", "8fh39s");
    const allItemData:any = (await getDoc(allItemDataRef)).data();

    let itemIds:string[] = []
    let itemData:any = {}

    Object.entries(allItemData).forEach(([itemId, item])=>{
        if((item as any).dueDate === undefined) return
        let dueDate = (item as any).dueDate.toDate()
        let today = new Date()
        dueDate.setHours(0,0,0,0)
        today.setHours(0,0,0,0)
        if(dueDate.getTime() > today.getTime()) return
        itemIds.push(itemId)
        itemData[itemId] = {...(item as any)}
    })

    return {
        itemIds,
        itemData
    }
}