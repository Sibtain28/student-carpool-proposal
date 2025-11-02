import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://student-carpool-proposal.onrender.com/auth/register", {
        name,
        email,
        password,
      });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <form
        onSubmit={submitHandler}
        className="bg-gray-800 p-8 rounded-xl shadow-xl w-80 flex flex-col gap-4"
      >
        <h1 className="text-white text-2xl font-bold text-center">Register</h1>

        <input
          placeholder="Name"
          className="p-2 rounded bg-gray-700 text-white"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          className="p-2 rounded bg-gray-700 text-white"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          className="p-2 rounded bg-gray-700 text-white"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Create Account
        </button>

        <Link to="/login" className="text-blue-400 text-center mt-2">
          Already have an account?
        </Link>
      </form>
    </div>
  );
}

export default Register;
