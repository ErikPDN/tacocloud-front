import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from '../../services/axios';
import { Container } from '../../styles/global';
import { Title, Form } from './styled';
import { toast } from 'react-toastify';
import IngredientCheckboxGroup from '../../components/ingredients/IngredientCheckboxGroup';

export default function TacoEdit() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  useEffect(() => {
    async function getTaco() {
      try {
        const { data } = await axios.get(`designTaco/taco/${id}`);
        setName(data.name);
        setUrl(data.url);
        setSelectedIngredients(data.ingredients);
      } catch (err) {
        toast.error('Error fetching taco data');
      }
    }

    getTaco();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <Container>
      <Title>Edit Taco</Title>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Taco name"
        />

        <input
          type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder="Taco Url"
        />

        <IngredientCheckboxGroup
          id="ingredients"
          selectedIngredients={selectedIngredients}
          setSelectedIngredients={setSelectedIngredients}
        />
        <button type="submit" >Save</button>
      </Form>
    </Container>
  );
}
