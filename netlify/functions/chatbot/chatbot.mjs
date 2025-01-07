// chatbot.mjs

exports.handler = async (event) => {
  try {
    // Parse the incoming request body
    const body = JSON.parse(event.body || "{}");
    const userQuestion = body.question || "No question provided";

    // Access your Hugging Face API key from environment variables
    const HF_API_KEY = process.env.HUGGINGFACE_API_KEY;
    console.log("ENV HUGGINGFACE_API_KEY: ", process.env.HUGGINGFACE_API_KEY);

    if (!HF_API_KEY) {
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
        },
        body: JSON.stringify({
          error: "Hugging Face API key is missing in environment variables.",
        }),
      };
    }

    // Call the Hugging Face Inference API
    // Using microsoft/DialoGPT-small as an example:
    const response = await fetch(
      "https://api-inference.huggingface.co/models/microsoft/DialoGPT-small",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: userQuestion,
          options: { wait_for_model: true },
        }),
      }
    );

    // Parse the response from Hugging Face
    const data = await response.json();
    console.log("Hugging Face raw data:", data);
    console.log("HTTP Status:", response.status);

    // For DialoGPT, the response typically looks like: [{ "generated_text": "..." }]
    // So let's safely extract generated_text:
    let answer = "No response";
    if (Array.isArray(data) && data.length > 0 && data[0].generated_text) {
      answer = data[0].generated_text;
    }

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ answer }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({
        error: "Internal Server Error",
        details: error.toString(),
      }),
    };
  }
};
