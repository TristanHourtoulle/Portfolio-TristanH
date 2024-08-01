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
    ></form>
  );
};
