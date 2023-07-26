import { Sidebar } from "../components/sidebar"
import { auth } from "../config/firebase";
import { db } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth"
import { collection, query, where, getDocs, doc, Timestamp } from "firebase/firestore";
import 'firebase/firestore';
import { useState, useEffect } from "react";
import { Entry } from "../components/entry";
import "../css/view_entry.css"
import { Link } from "react-router-dom";
import { Header } from "../components/header";

export interface Entry {
    id: string;
    title: string;
    username: string;
    text: string;
    timestamp: Timestamp;
    docID: string;
}

export const ViewEntry = () => {
    const [user, loading] = useAuthState(auth)
    const [entries, setEntries] = useState<Entry[]>([]);
    // Execute the Firestore query here
    useEffect(() => {
        if (!loading && user) {
            // User is signed in and their data is available
            console.log(loading)
            const userID = user.uid
            console.log(`Logged in as ${user.displayName}`)
            console.log('User ID:', userID)

            // Execute the Firestore query here
            const q = query(collection(db, 'entries'), where('id', '==', userID));
            getDocs(q)
                .then((snapshot) => {
                    const entriesData: Entry[] = [];
                    snapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        entriesData.push({ id: doc.id, ...doc.data() } as Entry)
                        console.log("ADDED")
                    });
                    setEntries(entriesData);

                })
                .catch((error) => {
                    console.log('Error fetching entries:', error);
                });
        }
        else {
            // User is not signed in or their data is still loading
            console.log('User not signed in.')
            console.log(loading)
        }
    }, [loading, user]);

    entries.sort( (a,b) => b.timestamp.toMillis() - a.timestamp.toMillis()) //sort from newest to oldest
    console.log(entries)
    return (
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <Header />
            <div className="container-two">
               {entries.map( (entry) => {
                return(
                <div className="entry">
                  <Link to= {`/entry/${entry.id}/${entry.docID}`}>
                    <a className = "btn btn-success" > View "{entry.title}" </a>
                  </Link>
                </div> 
                )
               })}
            </div>
        </div>
    )
}