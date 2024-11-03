import React, { useState } from "react";
import Header from "../components/Header";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Create() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");

  const createItem = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("stock", stock);
      formData.append("price", price);

      await axios.post(`http://localhost:8000/api/item/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      let path = `/management`;
      navigate(path);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  return (
    <>
      <Header />
      <section className="pt-[125px] px-[50px]">
        <div className="flex flex-row gap-2 items-center text-[24px] font-bold pb-5">
          {" "}
          <FaPlusCircle /> Create Item
        </div>

        {/* Edit Form */}
        <form onSubmit={createItem} className="flex flex-col gap-5">
          <div className="flex flex-row gap-5 w-full">
            <section className="w-full">
              {/*Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[16px] text-[#808080] font-[450]">
                  Name
                </label>
                <input
                  className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
                  placeholder={"Name"}
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              {/* Description */}
              <div className="flex flex-col gap-2">
                <label className="text-[16px] text-[#808080] font-[450]">
                  Description
                </label>
                <input
                  className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
                  placeholder={"Description"}
                  type="text"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>
            </section>
            <section className="w-full">
              {/* Stock */}
              <div className="flex flex-col gap-2">
                <label className="text-[16px] text-[#808080] font-[450]">
                  Stock
                </label>
                <input
                  className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
                  placeholder={"Stock"}
                  type="number"
                  value={stock}
                  onChange={(event) => setStock(event.target.value)}
                />
              </div>
              {/* Price */}
              <div className="flex flex-col gap-2">
                <label className="text-[16px] text-[#808080] font-[450]">
                  Price
                </label>
                <input
                  className="h-[50px] bg-[#F5F6F9] rounded-[16px] px-3"
                  placeholder={"Price"}
                  type="number"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </div>
            </section>
          </div>

          <button className="h-[48px] bg-[#85a236] hover:bg-[#9bbc3e] rounded-[16px] text-white text-[16px] font-semibold mt-5">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
