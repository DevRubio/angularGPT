import type { OrthographyResponse } from "@Interfaces/orthography.response"
import { environment } from "environments/environment"

export const orthographyUseCase = async (prompt: string) =>{
    try{
        const resp = await fetch(`${environment.backendApi}/orthography-check`,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({prompt})
        })

        if(!resp.ok) throw new Error('No se pudo realizar la correción')

        const data = await resp.json() as OrthographyResponse

        return{
            ok: true,
            ...data
        }
        
    }catch(error){
        console.error(error)
        return{
            ok:false,
            userScore: 0,
            errors: [],
            message: 'No se pudo realizar la correción'
        }        
    }

}