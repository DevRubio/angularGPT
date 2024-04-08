import type { ProsConsResponse } from "@Interfaces/pros-cons.response"
import { environment } from "environments/environment"

export const prosConsDiscusserUseCase = async(prompt: string)=>{
    try{
        const resp = await fetch(`${environment.backendApi}/pros-cons-discusser`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({prompt})
        })
        if(!resp.ok) throw new Error('No Se pudo realizar la comparacion')

        const data = await resp.json() as ProsConsResponse

        return{
            ok:true,
            ...data
        }

    }catch(error){
        console.error(error)
        return{
            ok: false,
            role: '',
            content: 'No se puedo realizar la comparacion'
        }
        
    }
}