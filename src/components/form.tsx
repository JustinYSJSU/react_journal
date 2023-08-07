import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore"
import { auth, db } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import "../css/entry.css"
import { useNavigate } from "react-router-dom"

interface CreateFormData {
    title: string;
    entry: string;
}

export const Form = () => {

    
    const navigate = useNavigate()
    const [user] = useAuthState(auth)

    const schema = yup.object().shape({
        title: yup.string().required("You must have a title"),
        entry: yup.string().required("You must write something")
    })

    const { register, handleSubmit, formState: { errors } } = useForm<CreateFormData>({
        resolver: yupResolver(schema)
    })

    const entryRef = collection(db, "entries")
    const newDocRef = doc(entryRef)
    const onCreateEntry = async (data: CreateFormData) => {
        await addDoc(entryRef, {
            title: data.title,
            text: data.entry,
            username: user?.displayName,
            id: user?.uid,
            timestamp: Timestamp.fromDate(new Date()),
            docID: newDocRef.id
        })

        alert("Entry saved! Returning to home")
        navigate("/home")
    }

    const style = {
        height: '720.5px',
        width: '350px'
    }

    return (
        <form onSubmit={handleSubmit(onCreateEntry)}>
            <div className="container-three">
                <input placeholder="Title"{...register("title")} />
                <p style={{ color: "red" }}>{errors.title?.message}</p>
                <textarea className="text" placeholder="How are you today?" {...register("entry")} style={style} />
                <p style={{ color: "red" }}>{errors.entry?.message}</p>
                <input type="submit" value={"Save"} className="btn btn-success" id="save-button" />
            </div>

        </form>
    )
}