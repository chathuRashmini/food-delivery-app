import { setDoc, doc, getDocs, query, collection, orderBy } from "firebase/firestore";
import { firestore } from "../firebase.config";

// to save a new item
export const saveItem = async (data) => {
    await setDoc(doc(firestore, 'foodItems', `${Date.now()}`), data, { merge: true })
}

// to get all food items
export const getAllItems = async () => {
    const items = await getDocs(
      query(collection(firestore, "foodItems"), orderBy("id", "desc"))
    );
  
    return items.docs.map((doc) => doc.data());
};