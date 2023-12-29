"use client";
import { app } from "@/app/firebase";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File>();
  const [secondFile, setSecondFile] = useState<File>();
  const storage = getStorage(app);
  const firestore = getFirestore(app);

  const storageRef = ref(storage, file?.name);
  const secondStorageRef = ref(storage, secondFile?.name);

  const handleInputChange = (event: any) => {
    setTitle(event.target.value);
  };

  const handleFileChange = (event: any) => {
    if (event.target.files !== null) {
      setFile(event.target.files[0]);
    }
  };
  const handleSecondFileChange = (event: any) => {
    if (event.target.files !== null) {
      setSecondFile(event.target.files[0]);
    }
  };

  const handleCreateFirestoreDocument = async () => {
    await uploadBytes(storageRef, file as Blob);
    await uploadBytes(secondStorageRef, secondFile as Blob);
    const url = await getDownloadURL(storageRef);
    const secondUrl = await getDownloadURL(secondStorageRef);
    await addDoc(collection(firestore, "blog"), {
      title: title,
      image: url,
      avatarImage: secondUrl,
    });
  };

  return (
    <main>
      <h1>Create firebase document from my website</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          paddingLeft: "10px",
        }}
      >
        <div>
          <h1>Title</h1>
          <input onChange={handleInputChange} />
        </div>
        <input type="file" onChange={handleFileChange} />
        <input type="file" onChange={handleSecondFileChange} />
        <button onClick={handleCreateFirestoreDocument}>
          Create firestore document
        </button>
      </div>
    </main>
  );
}
