"use client";

import { useChat } from "ai/react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Document } from "langchain/document";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  function aiContent(content: string): JSX.Element {
    const json = JSON.parse(content);
    const sourceDocuments: Document<Record<string, any>>[] =
      json.sourceDocuments;
    const sourceArray = sourceDocuments.map((document) => {
      return document.metadata.source;
    });
    const sources = new Set(sourceArray);

    return (
      <div>
        <div className="ai-message">{json.result}</div>
        <HoverCard>
          <HoverCardTrigger>View source</HoverCardTrigger>
          <HoverCardContent>
            {Array.from(sources).map((source) => (
              <a href={source}>{source}</a>
            ))}
          </HoverCardContent>
        </HoverCard>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl py-24 flex flex-col stretch">
      {messages.length > 0
        ? messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap mb-2">
              {m.role === "user" ? "User" : "AI"}
              {m.role === "user" ? (
                <div>{m.content}</div>
              ) : (
                aiContent(m.content)
              )}
            </div>
          ))
        : null}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed w-full max-w-2xl bottom-0 border border-gray-300 rounded mb-8 shadow-xl p-2"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
