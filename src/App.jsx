import { useState, useEffect } from "react";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export default function App() {
  const [memos, setMemos] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  // 처음 뜰 때 서버에서 목록을 불러온다
  useEffect(() => {
    loadMemos();
  }, []);

  // 목록 조회 GET
  const loadMemos = async () => {
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/memos`);
      const data = await res.json();
      setMemos(data);
    } finally {
      setLoading(false);
    }
  };

  // 방명록 작성 POST
  const addMemo = async () => {
    if (!text.trim()) return;

    await fetch(`${API_URL}/memos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: text,
      }),
    });

    setText("");
    loadMemos();
  };

  // 방명록 삭제 DELETE
  const deleteMemo = async (id) => {
    const confirmed = window.confirm("방명록을 삭제하시겠습니까?");

    if (!confirmed) return;

    await fetch(`${API_URL}/memos/${id}`, {
      method: "DELETE",
    });

    loadMemos();
  };

  return (
    <>
      {/* 메인 방명록 */}
      <div className="guestbook-container">
        <h1>✍️ 방명록</h1>

        <div className="guestbook-form">
          <div className="input-wrap">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addMemo();
                }
              }}
              maxLength={30}
              placeholder="하고 싶은 말을 남겨보세요"
            />

            <span className="char-count">
              {text.length} / 30
            </span>
          </div>

          <button onClick={addMemo}>남기기</button>
        </div>

        {/* 로딩 중일 때만 표시 */}
        {loading && (
          <div className="loading-text">
            방명록을 불러오는 중... 
            30초정도 걸릴 수 있어요. 잠시만 기다려주세요.
          </div>
        )}

        {/* 로딩 완료 후 방명록 표시 */}
        {!loading && (
          <div className="memo-list">
            {memos.map((m, index) => (
              <div key={m.id} className="memo-item">
                <span className="memo-number">{index + 1}.</span>

                <span className="memo-content">{m.content}</span>

                <button
                  className="delete-btn"
                  onClick={() => deleteMemo(m.id)}
                >
                  삭제
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 오른쪽 상단 패널 */}
      <div className="right-panel">
        <a
          href="https://my-page-lake-gamma.vercel.app/"
          className="profile-link"
        >
          👤 개인 소개 페이지 이동
        </a>

        <div className="course-mini">
          <div className="course-mini-title">
            부록 · 수업 산출물
          </div>

          <div className="course-mini-item">
            <div className="course-mini-name">
              1. 자기소개 페이지
            </div>

            <div className="course-mini-stack">
              HTML · CSS · JavaScript · Vercel
            </div>

            <a
              href="https://my-page-lake-gamma.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              자기소개 페이지 보기 ↗
            </a>
          </div>

          <div className="course-mini-item">
            <div className="course-mini-name">
              2. 풀스택 실습 · 방명록
            </div>

            <div className="course-mini-stack">
              React · FastAPI · Vercel · Render
            </div>

            <div className="course-mini-links">
              <a
                href="https://memo-frontend-sand.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                방명록 페이지 보기 ↗
              </a>

              <a
                href="https://memo-backend-yeu0.onrender.com/docs"
                target="_blank"
                rel="noreferrer"
              >
                방명록 Swagger UI ↗
              </a>
            </div>
          </div>

          <div className="course-mini-item">
            <div className="course-mini-name">
              3. 가계부 Backend API
            </div>

            <div className="course-mini-stack">
              FastAPI · Render · Supabase
            </div>

            <a
              href="https://expense-api-wgx5.onrender.com/docs"
              target="_blank"
              rel="noreferrer"
            >
              가계부 Swagger UI ↗
            </a>
          </div>

          <div className="course-mini-item">
            <div className="course-mini-name">
              4. GitHub 저장소
            </div>

            <div className="course-mini-stack">
              Source Code · README
            </div>

            <a
              href="https://github.com/daerogu"
              target="_blank"
              rel="noreferrer"
            >
              GitHub 둘러보기 ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
}