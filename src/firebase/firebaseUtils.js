import db from "/config/firebase.js";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

const fetchDocuments = async () => {
  const querySnapshot = await getDocs(collection(db, "goals"));
  const documents = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return documents;
};

const handleAddData = async(data) => {
    try {
        await addDoc(collection(db, "goals"), {data});
        fetchDocuments();
    } catch (error) {
        console.error(`Error adding document: ${error}`);
    }
}

const handleUpdateData = async (id, updateData) => {
    try {
        const docRef = doc(db, "goals", id);
        await updateDoc(docRef, updateData);
        fetchDocuments();
    } catch (error) {
        console.error(`Error updating document: ${error}`);
    }
};

const handleDeleteData = async (id) => {
    try {
        const docRef = doc(db, "goals", id);
        await deleteDoc(docRef);
        fetchDocuments();
    } catch (error) {
        console.error(`Error deleting document: ${error}`);
    }
};


export { fetchDocuments, handleAddData, handleUpdateData, handleDeleteData };
