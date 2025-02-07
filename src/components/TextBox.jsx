// src\components\TextBox.jsx
// text = 'text color = 'color
export function TextBox({ text, color, children }) {
    const style = { color };
    return <div style={style}>{text}</div>;
  }
  