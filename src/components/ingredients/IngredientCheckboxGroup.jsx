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
        const response = await axios.get("/designTaco");
        setIngredients(response.data);
      } catch (error) {
        toast.error("An error occurred while fetching ingredients");
      }
    }
    fetchIngredients();
  }, []);

  const handleCheckboxChange = (ingredient) => {
    setSelectedIngredients((prev) => {
      // Verifica se o ingrediente já está selecionado (pelo id)
      const isSelected = prev.some(item => item.id === ingredient.id);

      // Se estiver selecionado, remove; caso contrário, adiciona
      if (isSelected) {
        return prev.filter(item => item.id !== ingredient.id);
      } else {
        return [...prev, ingredient];
      }
    });
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
              checked={selectedIngredients.some(item => item.id === ingredient.id)}
              onChange={() => handleCheckboxChange(ingredient)}
            />
            <IngredientName>{ingredient.name}</IngredientName>
          </CheckboxLabel>
        ))}
      </CheckboxGrid>
    </CheckboxContainer>
  );
}

IngredientCheckboxGroup.propTypes = {
  selectedIngredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired
    })
  ).isRequired,
  setSelectedIngredients: PropTypes.func.isRequired,
}
