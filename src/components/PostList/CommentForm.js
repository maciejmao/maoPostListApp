import React, { useState } from "react";
import "./CommentForm.css";

const CommentForm = ({ addNew, postId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const handleChange = e => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;

      case "email":
        setEmail(e.target.value);
        break;

      case "body":
        setBody(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!name.trim() && !email.trim() && !body.trim()) {
      return;
    }

    const id = parseInt(
      Date.now()
        .toString()
        .substr(-6)
    );
    addNew({ postId, id, name, email, body });

    setName("");
    setEmail("");
    setBody("");
  };

  return (
    <section className="App-commentForm container">
      <div className="column is-6">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <div className="control">
              <input
                type="text"
                className="input"
                name="name"
                placeholder="Your name..."
                required
                onChange={handleChange}
                value={name || ""}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Your e-mail..."
                required
                onChange={handleChange}
                value={email || ""}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <textarea
                className="textarea"
                name="body"
                placeholder="Your message..."
                onChange={handleChange}
                value={body || ""}
              />
            </div>
          </div>
          <button type="submit" className="button is-block is-info is-small">
            Add comment
          </button>
        </form>
      </div>
    </section>
  );
};

export default CommentForm;
