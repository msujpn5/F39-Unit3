import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailScreen = () => {  
  const { id } = useParams()
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    return (
      axios
        .get(`https://recipes.devmountain.com/recipes/${id}`)
        .then((res) => {
          setRecipe(res.data)
        })
    )
  }, [])

  return (
    <section>
      
    </section>
  );
};

export default DetailScreen;
