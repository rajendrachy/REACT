// import React, { useState } from "react";

// const FeedbackForm = () => {
//   const [form, setForm] = useState({ name: "", dept: "", feedback: "", rating: "" });
//   const [data, setData] = useState([]);
//   const [error, setError] = useState("");

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, dept, feedback, rating } = form;
//     if (!name || !dept || !feedback || !rating) return setError("All fields required!");
//     setData([...data, form]);
//     setForm({ name: "", dept: "", feedback: "", rating: "" });
//     setError("");
//   };

//   return (
//     <div>
//       <h2>Employee Feedback Form</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input name="name" placeholder="Name" value={form.name} onChange={handleChange} /><br />
//         <select name="dept" value={form.dept} onChange={handleChange}>
//           <option value="">Select Department</option>
//           <option>HR</option><option>Engineering</option><option>Marketing</option>
//         </select><br />
//         <textarea name="feedback" placeholder="Feedback" value={form.feedback} onChange={handleChange}></textarea><br />
//         Rating: {[1, 2, 3, 4, 5].map(r => (
//           <label key={r}><input type="radio" name="rating" value={r} checked={form.rating === String(r)} onChange={handleChange} />{r}</label>
//         ))}<br />
//         <button type="submit">Submit</button>
//       </form>

//       {data.length > 0 && (
//         <table border="1" style={{ marginTop: "20px" }}>
//           <thead><tr><th>Name</th><th>Dept</th><th>Feedback</th><th>Rating</th></tr></thead>
//           <tbody>
//             {data.map((d, i) => (
//               <tr key={i}><td>{d.name}</td><td>{d.dept}</td><td>{d.feedback}</td><td>{d.rating}</td></tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default FeedbackForm;
