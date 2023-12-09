import { notFound } from "next/navigation"

notFound = () =>{
    return(
        <main>
            <h2>404 ERR</h2>
            <p>The resource you are looking for doesn`&#39`t exist.</p>
        </main>
    )
}

export default notFound;