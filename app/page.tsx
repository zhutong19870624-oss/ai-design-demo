"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const generate = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({ prompt: text }),
    });

    const data = await res.json();
    setImage(data.url);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>AI设计平台 Demo</h1>

      <input
        style={{ padding: 10, width: 300 }}
        placeholder="输入描述"
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={generate} style={{ marginLeft: 10 }}>
        生成
      </button>

      {image && (
        <div>
          <img src={image} width={300} />
        </div>
      )}
    </div>
  );
}
