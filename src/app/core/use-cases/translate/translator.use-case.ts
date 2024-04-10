import type { TranslatorResponse } from '@Interfaces/index';
import { environment } from 'environments/environment';

export const translatorUseCase = async(prompt: string, lang: string)=>{
    try {
        const resp = await fetch(`${environment.backendApi}/translator`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({prompt, lang})
        })

        if(!resp.ok) throw new Error('No se pudo realizar la traduccion')

        const { message } = await resp.json() as TranslatorResponse

        return{
            ok: true,
            message: message
        }
    } catch (error) {
        console.error(error);
        return{
            ok: false,
            message: 'No se pudo realizar la traduccion'
        }
    }
}