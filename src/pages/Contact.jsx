// src\pages\Contact.jsx
export function Contact() {
    const handleClick = () => {
      console.log("click contact");
    };
  
    const handleChange = (e) => {
      console.log(e.target.value);
    };
    return (
      <div>
        <div onClick={() => console.log("click contact")}>contact</div>
        <input placeholder="I'm input" onChange={handleChange} />
      </div>
    );
  }