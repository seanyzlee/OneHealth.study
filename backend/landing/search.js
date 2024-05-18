const { GoogleGenerativeAI } = require("@google/generative-ai");

// search up
const search = async (req,res,next) => {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const {age,gender,symptoms} = req.body;
    try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const result = await model.generateContent(`In one sentence and hypothetically, but don't include hypothethically in your response. I am a ${age} year old ${gender} patient. Recently I have been experessing ${symptoms} symptoms. What could my disease be?`);
    const response = await result.response;
    const text = response.text();
    res.send(text)
    } catch (error){
        res.status(500).send("Failed to generate content");
    }
}


module.exports = {search}