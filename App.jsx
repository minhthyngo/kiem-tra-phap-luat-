import React, { useState } from 'react';

const questions = [
  // Chèn các câu hỏi tại đây (đã có sẵn trong hệ thống, rút gọn demo)
  {
    id: 1,
    type: "tracnghiem",
    question: "Theo quy định của pháp luật, đối với hoạt động kinh doanh nếu đủ điều kiện mọi công dân đều có quyền",
    options: ["A. lựa chọn việc làm.", "B. quyền làm việc.", "C. tìm kiếm việc làm.", "D. lựa chọn, ngành nghề."],
    answer: "D"
  },
];

function App() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (qid, value) => {
    setAnswers({ ...answers, [qid]: value });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(q => {
      if (q.type === "tracnghiem") {
        if (answers[q.id] === q.answer) score += 0.25;
      }
    });
    return Math.max(0, score);
  };

  return (
    <div className="app">
      {questions.map((q) => (
        <div key={q.id}>
          <p><strong>Câu {q.id}:</strong> {q.question}</p>
          {q.options.map((opt, idx) => (
            <label key={idx}>
              <input
                type="radio"
                name={`q${q.id}`}
                value={opt[0]}
                onChange={() => handleChange(q.id, opt[0])}
                disabled={submitted}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit} disabled={submitted}>Nộp bài</button>
      {submitted && <p>Tổng điểm: {calculateScore().toFixed(2)}</p>}
    </div>
  );
}

export default App;
