import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export default function App() {
  const [memos, setMemos] = useState([]);
  const [text, setText] = useState("");

  // 처음 뜰 때 서버에서 목록을 불러온다
  useEffect(() => {
    loadMemos();
  }, []);

  // 목록 조회 GET
  const loadMemos = async () => {
    const res = await fetch(`${API_URL}/memos`);
    setMemos(await res.json());
  };

  // 방명록 작성 POST
  const addMemo = async () => {
    if (!text.trim()) return;

    await fetch(`${API_URL}/memos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: text }),
    });

    setText("");
    loadMemos();
  };

  // 방명록 삭제 DELETE
  const deleteMemo = async (id) => {
    await fetch(`${API_URL}/memos/${id}`, {
      method: "DELETE",
    });

    loadMemos();
  };

  return (
    <div
      style={{
        maxWidth: 480,
        margin: "40px auto",
        fontFamily: "sans-serif",
      }}
    >
      <h1>✍️ 방명록</h1>

      <div style={{ display: "flex", gap: 8 }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="하고 싶은 말을 남겨보세요"
          style={{
            flex: 1,
            padding: 8,
          }}
        />

        <button onClick={addMemo}>남기기</button>
      </div>

      <div
        style={{
          width: "100%",
          marginTop: 20,
          textAlign: "left",
        }}
      >
        {memos.map((m, index) => (
          <div
            key={m.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 10,
            }}
          >
            <span>{index + 1}.</span>

            <span>{m.content}</span>

            <button onClick={() => deleteMemo(m.id)}>
              삭제
            </button>
          </div>
        ))}
      </div>

      <a
        href="https://my-page-lake-gamma.vercel.app/"
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          padding: "10px 16px",
          backgroundColor: "#2563eb",
          color: "white",
          textDecoration: "none",
          borderRadius: 8,
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        👤 개인 소개 페이지
      </a>
    </div>
  );
}