import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import axios from "../../services/axios";

import { CheckboxContainer, CheckboxLegend, CheckboxGrid, CheckboxLabel, StyledCheckbox, IngredientName } from "./styled";

export default function IngredientCheckboxGroup({ selectedIngredients, setSelectedIngredients }) {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    async function fetchIngredients() {
      try {
        const response = await axios.get("/design");
        setIngredients(response.data);
      } catch (error) {
        toast.error("An error occurred while fetching ingredients");
      }
    }
    fetchIngredients();
  }, []);

  const handleCheckboxChange = (id) => {
    setSelectedIngredients((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <CheckboxContainer>
      <CheckboxLegend>Choose Ingredients:</CheckboxLegend>
      <CheckboxGrid>
        {ingredients.map((ingredient) => (
          <CheckboxLabel key={ingredient.id}>
            <StyledCheckbox
              type="checkbox"
              value={ingredient.id}
              checked={selectedIngredients.includes(ingredient.id)}
              onChange={() => handleCheckboxChange(ingredient.id)}
            />
            <IngredientName>{ingredient.name}</IngredientName>
          </CheckboxLabel>
        ))}
      </CheckboxGrid>
    </CheckboxContainer>
  );
}

IngredientCheckboxGroup.propTypes = {
  selectedIngredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedIngredients: PropTypes.func.isRequired,
}
