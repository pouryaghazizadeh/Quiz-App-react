

export  enum Difficulty {
    EASY="easy",
    MEDUM="medum",
    HARD="hard",


}

export const fechQuizQuestions=async(amount:number ,difficulty:Difficulty)=>{
    const endpoint = `http://opentdb.com/api.php? amount=${amount}&difficulty=${difficulty}&type=multiple`
    const data =await (await fetch(endpoint)).json()
    console.log(data);
    
}