import { StreamingTextResponse } from "ai";
import { ChatOpenAI } from "@langchain/openai";
import { OpenAIEmbeddings } from "@langchain/openai";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { formatDocumentsAsString } from "langchain/util/document";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { VercelPostgres } from "@langchain/community/vectorstores/vercel_postgres";

// https://github.com/langchain-ai/langchainjs/issues/3521
// export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  // const { stream, handlers } = LangChainStream();

  function llm() {
    const model = req.headers.get("model");
    console.log(model);
    switch (model) {
      case "gpt-3.5-turbo":
        return new ChatOpenAI({
          // streaming: true,
          model: "gpt-3.5-turbo",
        });

      case "heurist-mistralai/mixtral-8x7b":
        return new ChatOpenAI(
          {
            // streaming: true,
            model: "mistralai/mixtral-8x7b-instruct-v0.1",
          },
          {
            baseURL: "https://llm-gateway.heurist.xyz",
            apiKey: process.env.HEURIST_API_KEY,
          }
        );

      default:
        return new ChatOpenAI({
          // streaming: true,
          model: "gpt-3.5-turbo",
        });
    }
  }

  const embeddings = new OpenAIEmbeddings({
    apiKey: process.env.OPENAI_API_KEY,
    dimensions: 1536,
    model: "text-embedding-3-small",
  });

  const vectorstore = await VercelPostgres.initialize(embeddings, {
    tableName: "monad",
  });
  const retriever = vectorstore.asRetriever(8);

  // Create a system & human prompt for the chat model
  const qaSystemPrompt = `You are an assistant for question-answering tasks.
Use the following pieces of context to answer the users question.
If you don't know the answer, just say that you don't know, don't try to make up an answer.
----------------
{context}`;

  const qaPrompt = ChatPromptTemplate.fromMessages([
    ["system", qaSystemPrompt],
    // new MessagesPlaceholder("chat_history"),
    ["human", "{question}"],
  ]);

  const chain = RunnableSequence.from([
    {
      // Extract the "question" field from the input object and pass it to the retriever as a string
      sourceDocuments: RunnableSequence.from([
        (input) => input.question,
        retriever,
      ]),
      question: (input) => input.question,
    },
    {
      // Pass the source documents through unchanged so that we can return them directly in the final result
      sourceDocuments: (previousStepResult) =>
        previousStepResult.sourceDocuments,
      question: (previousStepResult) => previousStepResult.question,
      context: (previousStepResult) =>
        formatDocumentsAsString(previousStepResult.sourceDocuments),
    },
    {
      result: qaPrompt
        .pipe(llm())
        .pipe(new StringOutputParser()),
      sourceDocuments: (previousStepResult) =>
        previousStepResult.sourceDocuments,
    },
  ]);

  // TODO: when using chain.stream, it gives bad quality results
  const res = await chain.invoke(
    // use the last message
    { question: messages[messages.length - 1].content }
  );
  const responseStream = new ReadableStream({
    async start(controller) {
      const bytes = new TextEncoder().encode(JSON.stringify(res));
      controller.enqueue(bytes);
      controller.close();
    },
  });

  return new StreamingTextResponse(responseStream);
}
