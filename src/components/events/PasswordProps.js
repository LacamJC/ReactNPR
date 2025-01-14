import { useEffect } from "react"

const PasswordProps = () =>{

    // const passInput = document.getElementById('senha').value 
    const reqs = [document.getElementById('minChar'), document.getElementById('maxChar')]
    useEffect(()=>{
        const reqs = [document.getElementById('minChar'), document.getElementById('maxChar')]
        
        for(let i=0; i < reqs.length; i++)
        {
            reqs[i].classList.add('text-danger')
        }

    },[])

   



    return(
        <>
            <div>
                <ul>
                    <li id="minChar">Min 6 Caracteres</li>
                    <li id="maxChar">Max 12 Caracteres</li>
                </ul>
            </div>
        </>
    )
}

export default PasswordProps