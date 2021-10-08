// import { queries } from "@testing-library/dom"
// import { type } from "os"

import { shuffleArray } from "./utils"
export type Question={
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;


}
export type QuestionState = Question & {answer:string[ ]}
export  enum Difficulty {
    EASY="easy",
    MEDUM="medum",
    HARD="hard",


}

export const fechQuizQuestions=async(amount:number ,difficulty:Difficulty)=>{
    const endpoint = `http://opentdb.com/api.php? amount=${amount}&difficulty=${difficulty}&type=multiple`
    const data =await (await fetch(endpoint)).json()
    return data.results.map((question:Question)=>({
        ...question,
        answers:shuffleArray([...question.incorrect_answers ,question.correct_answer])

    }))
 
    
}
