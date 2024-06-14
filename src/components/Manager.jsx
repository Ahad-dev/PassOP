import React, { useRef, useState, useEffect } from "react";
import PasswordTable from "./PasswordTable";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Manager = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const ref = useRef();

  useEffect(() => {
    // Fetch data from API
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPasswordArray(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const savePassword = async () => {
    // POST request to the API
    const newPassword = { ...form, id: uuidv4() };

    try {
      const res = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPassword),
      });

      if (!res.ok) {
        throw new Error("Failed to save password");
      }

      const savedPassword = await res.json();

      setPasswordArray((prevPasswordArray) => [
        ...prevPasswordArray,
        savedPassword,
      ]);

      setForm({ site: "", username: "", password: "" });

      toast.success("Saved Successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to save password", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const showPassword = () => {
    const inputField = ref.current.previousSibling;
    if (inputField.type === "password") {
      inputField.type = "text";
      ref.current.src = "icons/eyecross.png";
    } else {
      inputField.type = "password";
      ref.current.src = "icons/eye.png";
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = async(id) => {

    const response = await fetch(`http://localhost:3000/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete user");
    }

    const password = passwordArray.find((item) => item.id === id);
    setForm(password);
    const otherPasswords = passwordArray.filter((item) => item.id !== id);
    setPasswordArray(otherPasswords);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      setPasswordArray((prevPasswordArray) =>
        prevPasswordArray.filter((item) => item.id !== id)
      );

      toast.error("Deleted Successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to delete user", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <div className="flex flex-col gap-10 mt-10 z-50 relative ">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div>
        <div className="logo text-4xl text-gray-100">
          <span className="text-purple font-bold hover:text-purple">&lt;</span>
          Pass{" "}
          <span className="text-purple font-bold hover:text-purple/85">
            OP/&gt;
          </span>
        </div>
        <p className="text-white text-xl ">
          Make your Password into the safe hands
        </p>
      </div>
      <div className="flex flex-col w-[60%] m-auto gap-4 items-center  ">
        <input
          name="site"
          value={form.site}
          type="text"
          onChange={handleChange}
          placeholder="Enter Website URL"
          className="p-2 bg-gray-100 text-black rounded-lg w-[100%]"
        />
        <div className="flex w-[100%] justify-between max-md:flex-col max-md:gap-4">
          <input
            value={form.username}
            name="username"
            type="text"
            onChange={handleChange}
            placeholder="Enter Username"
            className="p-2 bg-gray-100 text-black rounded-lg w-[70%] max-md:w-[100%]"
          />
          <div className="w-[25%] relative max-md:w-[100%]">
            <input
              value={form.password}
              name="password"
              type="password" // Set the input type to "password" initially
              onChange={handleChange}
              placeholder="Enter your password"
              className="p-2 bg-gray-100 text-black rounded-lg w-full "
            />
            <img
              ref={ref}
              src="icons/eye.png"
              className="absolute top-1 right-2 cursor-pointer"
              onClick={showPassword}
              width={30}
              alt="EYE"
            />
          </div>
        </div>
        <button
          onClick={savePassword}
          className="bg-yellow-500 px-4 py-2 text-gray-800 rounded-lg flex items-center justify-center text-xl w-28"
        >
          <lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover"
          ></lord-icon>{" "}
          Save
        </button>
      </div>
      <PasswordTable
        passwordArray={passwordArray}
        setPasswordArray={setPasswordArray}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Manager;
