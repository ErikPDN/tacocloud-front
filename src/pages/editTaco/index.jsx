import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import axios from '../../services/axios';
import { Container } from '../../styles/global';
import { Title, Form } from './styled';
import { toast } from 'react-toastify';
import IngredientCheckboxGroup from '../../components/ingredients/IngredientCheckboxGroup';
import * as actions from '../../store/modules/tacos/actions';

export default function TacoEdit() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const dispatch = useDispatch();

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
    let formErrors = false;

    if (name.length < 3 || name.length > 255) {
      toast.error('Taco name must have between 3 and 255 characters');
      formErrors = true;
    }

    if (url.length < 6 || url.length > 300) {
      toast.error('Image URL must have between 6 and 300 characters');
      formErrors = true;
    }

    if (selectedIngredients.length < 1) {
      toast.error('Select at least one ingredient');
      formErrors = true;
    }

    if (formErrors) return;

    dispatch(actions.updateTacoRequest({ id, name, url, ingredients: selectedIngredients }));

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
