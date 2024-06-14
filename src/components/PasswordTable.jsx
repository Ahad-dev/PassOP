import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PasswordTable = ({ passwordArray, setPasswordArray, handleEdit,handleDelete }) => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(
      function () {
        toast.success("Copied Successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  };


  return (
    <div className="relative overflow-x-auto  shadow-md sm:rounded-lg w-[60%] m-auto max-md:w-[90%]">

      {passwordArray.length == 0 && (
        <h1 className="text-white text-3xl font-semibold">
          No Password Available
        </h1>
      )}
      {passwordArray.length > 0 && (
        <table className="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg">
          <thead className="text-xs text-white uppercase bg-[#151a31]">
            <tr>
              <th scope="col" className="px-6 py-3">
                Site
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Password
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {passwordArray.map((item,index) => {
              return (
                <tr key={index} className="bg-white border-b dark:bg-gray-800/20 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-4"
                  >
                    {item.site}

                    <div className="cursor-pointer" onClick={handleCopy}>
                      <lord-icon
                        src="https://cdn.lordicon.com/wzwygmng.json"
                        trigger="hover"
                        stroke="bold"
                        colors="primary:#b4b4b4,secondary:#08a88a"
                      ></lord-icon>
                    </div>
                  </td>
                  <td className="px-6 py-4  m-auto">
                    <div className="flex items-center justify-start gap-4">
                      <p>{item.username}</p>

                      <div className="cursor-pointer" onClick={handleCopy}>
                        <lord-icon
                          src="https://cdn.lordicon.com/wzwygmng.json"
                          trigger="hover"
                          stroke="bold"
                          colors="primary:#b4b4b4,secondary:#08a88a"
                        ></lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 ">
                    <div className="flex items-center justify-start text-xl gap-4">
                      {"*".repeat(item.password.length)}

                      <div className="cursor-pointer" onClick={handleCopy}>
                        <lord-icon
                          src="https://cdn.lordicon.com/wzwygmng.json"
                          trigger="hover"
                          stroke="bold"
                          colors="primary:#b4b4b4,secondary:#08a88a"
                        ></lord-icon>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex gap-3 justify-center items-center">
                      <div
                        className="cursor-pointer"
                        onClick={() => handleEdit(item.id)}
                      >
                        <lord-icon
                          src="https://cdn.lordicon.com/oqaajvyl.json"
                          trigger="hover"
                          stroke="bold"
                          state="hover-line"
                        ></lord-icon>
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={() => handleDelete(item.id)}
                      >
                        <lord-icon
                          src="https://cdn.lordicon.com/hjbrplwk.json"
                          trigger="hover"
                        ></lord-icon>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PasswordTable;
