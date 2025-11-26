import axios from "axios";

export const getAllProducts = async ({ skip = 0, limit = 16 }) => {
  try {
    const { data } = await axios.get("https://dummyjson.com/products", {
      params: {
        skip,
        limit,
        select: "id,title,price,category,thumbnail",
      },
    });

    return data; 
  } catch (error) {
    console.error(error);
  }
};
