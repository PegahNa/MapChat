const axios = require("axios");
const { Configuration, OpenAIApi } = require("openai");

const ChatController = {
  generateChat: async (req, res) => {

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    if (!configuration.apiKey) {
      res.status(500).json({
        error: {
          message: "OpenAI API key not configured",
        }
      });
      return;
    }

    try {
      const openai = new OpenAIApi(configuration);

      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hello chatgpt, Can you give me an example of a pick up line based on the eiffel tower"}]
        })

      console.log(completion.data.choices);

      const chatResponse = completion.data.choices[0].message.content;
      return res.status(200).json({ pickupline: chatResponse });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Failed to generate pick up line." });
    }
  },
};

module.exports = ChatController;