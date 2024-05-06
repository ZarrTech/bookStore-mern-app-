import { useState, useEffect } from "react";

const Editbook = () => {
  const [title, setTitle] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [author, setAuthor] = useState("");
   const data = { title, author, publishedYear };
  return (
    <div>Editbook</div>
  )
}
export default Editbook