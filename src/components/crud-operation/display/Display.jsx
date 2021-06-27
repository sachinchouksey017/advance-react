import { useEffect } from "react"
import { useSelector } from "react-redux"
const Display = () => {
    const allNotes = useSelector((state) => state.noteReducer.allNotes) ?? []
    useEffect(() => {
        console.log("all notes is ", allNotes);
    }, [])
    return (
        <div className='dispay '>
            {
                allNotes.map((card) => (
                    <div key={card.id} className='card'>
                        {card.title}
                    </div>
                ))
            }


        </div>
    )
}
export default Display