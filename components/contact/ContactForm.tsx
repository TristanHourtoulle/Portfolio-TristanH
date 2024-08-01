"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoaderCircle, SendHorizontal } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export type ContactFormProps = {};

export const ContactForm = (props: ContactFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);
    console.log("Form submitted");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center w-full mt-[2%] px-[10%] md:px-[25%]"
    >
      {/* Mail */}
      <div className="grid w-full items-center gap-1.5 outfit-regular mb-3 w-full">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          className="border border-[#e43d12]/15"
        />
      </div>

      {/* Title of the mail */}
      <div className="grid w-full items-center gap-1.5 outfit-regular mb-3">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          placeholder="Title"
          className="border border-[#e43d12]/15"
        />
      </div>

      {/* Content of the mail */}
      <div className="grid w-full items-center gap-1.5 outfit-regular mb-3">
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          placeholder="Type your message here..."
          className="border border-[#e43d12]/15 p-2"
        />
      </div>

      <Button
        size={"lg"}
        type="submit"
        disabled={isLoading}
        className="transition-all bg-[#e43d12] hover:bg-[#e43d12]/70 text-lg lg:text-xl outfit-medium w-full"
      >
        {isLoading ? (
          <LoaderCircle className="animate-spin mr-4" />
        ) : (
          <SendHorizontal className="mr-4" />
        )}
        {isLoading ? "Sending..." : "Send"}
      </Button>
    </form>
  );
};
