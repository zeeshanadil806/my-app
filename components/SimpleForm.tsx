"use client";
import React from "react";
import { useState } from "react";
import { Button } from "./ui/button";
type DataProps = {
  nameH: string;
  emailH: string;
};

export default function SimpleForm() {
  const [data, setData] = useState<DataProps[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function handleSubmit() {
    setName("");
    setEmail("");
    if(data.length < 1)
    setData([...data, { nameH: name, emailH: email }]);
  }
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border border-black rounded-md"
        placeholder="Enter Your Name..."
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border border-black rounded-md"
        placeholder="Enter Your Email..."
      />
      <Button type="submit" onClick={handleSubmit}>Submit</Button>
      <p>
        {data.map((arg) => (
          <p key={arg.nameH}>
            {arg.nameH} - {arg.emailH}
          </p>
        ))}
      </p>
    </div>
  );
}
