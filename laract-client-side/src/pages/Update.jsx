import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Update() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const { id } = useParams();

  const getItem = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/item/${id}`);
      // Check if response has data
      if (response.data) {
        setName(response.data.name || ""); // Fallback to empty string if null
        setDescription(response.data.description || "");
        setStock(response.data.stock || "");
        setPrice(response.data.price || "");
      }
    } catch (error) {
      console.error("Error fetching item:", error);
      alert(error);
    }
  };

  useEffect(() => {
    getItem();
  }, [id]);

  const UpdateItem = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name,
        description,
        stock,
        price,
      };

      await axios.patch(
        `http://localhost:8000/api/item/update/${id}`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
          <FaRegEdit /> Update Item
        </div>

        {/* Edit Form */}
        <form onSubmit={UpdateItem} className="flex flex-col gap-5">
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
            Update
          </button>
        </form>
      </section>
    </>
  );
}
