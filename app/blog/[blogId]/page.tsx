"use client";

import { firebaseApp } from "@/app/firebase";
import { collection, doc, getFirestore } from "firebase/firestore";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";

export default function Home({ params }) {
  const [myCollection, loading, error] = useCollection(
    collection(getFirestore(firebaseApp), `blog/${params.blogId}/comments`),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const [value] = useDocument(
    doc(getFirestore(firebaseApp), "blog", params.blogId),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return (
    <div>
      This is dynamic routing page
      {myCollection?.docs?.map((doc) => {
        return <div key={doc.id}>{JSON.stringify(doc.data())}</div>;
      })}
      {value && JSON.stringify(value?.data())}
    </div>
  );
}
