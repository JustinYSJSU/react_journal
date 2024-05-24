import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "../config/firebase"
import { collection, query, where, getDocs, doc, Timestamp, deleteDoc } from "firebase/firestore";
import { Entry } from "./view_entry"
import "../css/review_entry.css"
import { useNavigate } from "react-router-dom"
import { Header } from "../components/header"

export const ReviewEntry = () => {
    const { id } = useParams()
    const { docID } = useParams()
    const [realID, setRealID] = useState<string>("")

    console.log({ id })
    console.log({ docID })

    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth)
    const [entries, setEntries] = useState<Entry[]>([]);

    const onDeleteEntry = async (docID: string) => {

        const docRef = doc(db, "entries", realID) //HOW TO GET DOCUMENT ID
        await deleteDoc(docRef)
        alert("Entry deleted. Returning to home.")
        navigate("/home")
    }

    useEffect(() => {
        if (!loading && user) {
            // User is signed in and their data is available
            console.log(loading)
            // Execute the Firestore query here
            const q = query(collection(db, 'entries'), where('docID', '==', docID))
            getDocs(q)
                .then((snapshot) => {
                    const entry: Entry[] = [];
                    snapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots    
                        entry.push({ id: doc.id, ...doc.data() } as Entry)
                        setRealID(doc.id)
                        console.log("ADDED")
                    });
                    setEntries(entry);
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
    console.log(entries)
    return (
        <div>
            <Header />
            {entries.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <div> {/* Added center-content class */}
                    <div>
                        <h1> Viewing Entry </h1>
                    </div>

                    <div>
                        <div>
                            {entries[0].title}
                            <p></p>
                            ({entries[0].timestamp.toDate().toDateString()})
                        </div>
                        <div>
                            <blockquote>
                                {entries[0].text}
                            </blockquote>
                        </div>
                    </div>

                    <button onClick={() => { onDeleteEntry(entries[0].docID) }}>Delete Entry</button>
                </div>
            )}
        </div>

    )
}