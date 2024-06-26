import { orthographyUseCase, prosConsDiscusserUseCase, prosConsStreamUseCase, translatorUseCase } from "@Use-cases/index";
import { Injectable } from "@angular/core";
import { from } from "rxjs";

@Injectable({providedIn: 'root'})
export class OpenAiService{
    
    checkOrthography(prompt: string ){
        return from(orthographyUseCase(prompt))
    }

    prosConsDiscusser(prompt: string){
        return from(prosConsDiscusserUseCase(prompt))
    }

    prosConsStreamDiscusser(prompt:string, abortSignal: AbortSignal){
        return prosConsStreamUseCase(prompt, abortSignal)
    }

    translador(prompt: string, lang: string){
        return from (translatorUseCase(prompt, lang))
    }
}