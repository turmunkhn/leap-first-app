"use client";
import { collection, getFirestore } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { firebaseApp } from "../firebase";
import { BlogItem } from "./blog-item";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
  const [myCollection, loading, error] = useCollection(
    collection(getFirestore(firebaseApp), "blog"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <main
      style={{
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {loading && <p>Loading...</p>}
      {myCollection &&
        myCollection.docs.map((document) => {
          let object = document.data();
          return (
            <div
              key={document.id}
              style={{ cursor: "pointer" }}
              onClick={() => push(`/blog/${document.id}`)}
            >
              {document.id}
              <BlogItem
                title={object.title}
                description="THIS IS THE DESCRIPTION"
                imageUrl={object.imageUrl}
              />
            </div>
          );
        })}
    </main>
  );
}
