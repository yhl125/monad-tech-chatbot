"use client";

import { useChat } from "ai/react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Document } from "langchain/document";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Chat() {
  const [model, setModel] = useState("heurist-mistralai/mixtral-8x7b");
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    headers: { model: model },
  });

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
          <HoverCardContent className="w-auto">
            {Array.from(sources).map((source) => (
              <div>
                <a href={source}>{source}</a>
              </div>
            ))}
          </HoverCardContent>
        </HoverCard>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center mt-5">
        <Select onValueChange={value=> setModel(value)}>
          <SelectTrigger className="w-1/2">
            <SelectValue placeholder="Select a model" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>model</SelectLabel>
              <SelectItem value="gpt-3.5-turbo">gpt-3.5-turbo</SelectItem>
              <SelectItem value="heurist-mistralai/mixtral-8x7b">heurist-mistralai/mixtral-8x7b</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
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
    </>
  );
}
