"use client"

import React, { useRef } from 'react';
import { CreatePost } from "@/server-actions/actions";

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    if (formRef.current) {
      // Create a FormData object from the form
      const formData = new FormData(formRef.current);

      // Call the server action and pass the form data
      await CreatePost(formData);

      // Reset the form after the server action completes
      formRef.current.reset();
    }
  };

  return (
    <form 
      ref={formRef} 
      className="flex flex-col max-w-[400px] mx-auto mt-10 my-10 gap-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="border rounded px-3 h-10"
        required
      />
      <textarea
        name="body"
        placeholder="Body"
        className="border rounded px-3 py-3"
        rows={6}
        required
      />
      <button className="h-10 bg-blue-500 px-5 rounded text-white">
        Submit
      </button>
    </form>
  );
}
