import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Container } from './styled';
import Loading from '../../components/loading';
import IngredientCheckboxGroup from '../../components/ingredients/IngredientCheckboxGroup';

export default function Design() {
  const isLoading = useSelector(state => state.auth.isLoading);
  const [tacoName, setTacoName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      tacoName,
      imageUrl,
      ingredients: selectedIngredients,
    });
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Design your taco</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="tacoName">
          <input
            type="text"
            id="name"
            placeholder='Taco name'
            value={tacoName}
            onChange={(e) => setTacoName(e.target.value)}
            autoComplete='off'
            required
          />
        </label>
        <label htmlFor="imageUrl">
          <input
            type="text"
            id="imageUrl"
            placeholder='Image URL'
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </label>
        <IngredientCheckboxGroup
          id="ingredients"
          selectedIngredients={selectedIngredients}
          setSelectedIngredients={setSelectedIngredients}
        />
        <button type="submit">Place the order</button>
      </Form>
    </Container>
  )
}
