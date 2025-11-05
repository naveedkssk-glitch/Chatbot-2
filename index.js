async function getChatbot() {
    try{
    const inputRef = document.querySelector("#query")
    const query = inputRef.value

    const resultDiv = document.querySelector("#result")

    const res = await axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
        {
            "contents": [
                {
                    "parts": [
                        {
                            "text": "You are a medical chatbot, who answer patient fee query in human manner. Only answer related to queries and refuse other. Normal checkup charges Rs.2000, Emergency checkup charges 4000 and Operation charges 10000",
                        },
                        {
                            "text": query,
                        },
                    ],
                },
            ],
        },
        {
            headers: {
                "Content-Type": "application/json",
                "x-goog-api-key": "AIzaSyAWpIrqnB6kQnt-yqC3yB4fg4fLso_cdLE",
            },
        }
    )
    console.log(res)
    const answer = res.data.candidates[0].content.parts[0].text
    resultDiv.innerHTML = answer
}
catch(err){
    console.log("error:", err)
}
}
