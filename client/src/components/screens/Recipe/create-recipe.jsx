import React, { useState } from 'react'
import Confirmation from './confirmation';
import CreateCookbook from './create-cookbook';
import CreateDirections from './create-directions';
import CreateIngredients from './create-ingredients';

export default function CreateRecipe(props) {

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [_lastModified, setLastModified] = useState(Date.now())
    const [images, setImages] = useState('')
    const [tags, setTags] = useState('')
    const [servingSize, setServingSize] = useState('')
    const [step, setStep] = useState(1);

    const [cookbookId, setCookbookId] = useState(id);
    const [ingredient, setIngredient] = useState('');
    const [ingredientList, setIngredientList] = useState([]);

    const [direction, setDirection] = useState('');
    const [directionsList, setDirectionsList] = useState([]);

    const values = {id , step, name , _lastModified, images, tags, servingSize, cookbookId , ingredient , ingredientList, direction, directionsList};

    /* Create Cookbook */
    const handleNameChange = (name) => {
        setName(name)
        console.log(name);
    }
    const handleTagsChange = (tags) => {
        setTags(tags)
        console.log(tags);
    }

    const handleServingSizeChange = (servingSize) => {
        setServingSize(servingSize)
        console.log(servingSize);
    }

    /* Create Ingredients */
    const handleAddIngredient = (ingredient) => {
        setIngredient(ingredient)
    }

    const handleIngredientPush = (ingredientItem) => {
        ingredientList.push(ingredient)
        setIngredient('');
    }

    /* Create Directions */
    const handleAddDirections = (direction) => {
        setDirection(direction)
    }

    const handleDirectionsPush = (directionItem) => {
        directionsList.push(direction)
        setDirection('');
    }

    /* Helper Functions */
    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };


    

    





    

    switch (step) {
        case 1:
            return (<CreateCookbook
                nextStep={nextStep}
                handleNameChange={handleNameChange}
                handleTagsChange={handleTagsChange}
                handleServingSizeChange={handleServingSizeChange}
                values={values}
                 />);

        case 2:
            return (<CreateIngredients
                nextStep={nextStep}
                prevStep={prevStep}
                handleAddIngredient={handleAddIngredient}
                handleIngredientPush={handleIngredientPush}
                values={values} />);
        
        case 3:
            return (<CreateDirections
                nextStep={nextStep}
                prevStep={prevStep}
                handleAddDirections={handleAddDirections}
                handleDirectionsPush={handleDirectionsPush}
                values={values} />);
        case 4:
            return (<Confirmation 
                prevStep={prevStep}
                values={values}/>)
    }


}
