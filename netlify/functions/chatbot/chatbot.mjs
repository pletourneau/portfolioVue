exports.handler = async (event) => {
  try {
    // Parse the incoming request body
    const body = JSON.parse(event.body || "{}");
    const userQuestion = body.question || "No question provided";

    // Access your OpenAI API key from environment variables
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

    if (!OPENAI_API_KEY) {
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
        },
        body: JSON.stringify({
          error: "OpenAI API key is missing in environment variables.",
        }),
      };
    }

    // Call the OpenAI API with GPT-4
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // change models here. 4 access not offered with plus
        messages: [{ role: "user", content: userQuestion }],
      }),
    });

    // Parse the response from OpenAI
    const data = await response.json();
    console.log("OpenAI raw data:", data);
    const answer = data?.choices?.[0]?.message?.content || "No response";

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
