import React, { useState } from 'react'
import Confirmation from './confirmation';
import CreateCookbook from './create-cookbook';
import CreateDirections from './create-directions';
import CreateIngredients from './create-ingredients';
import CreateTags from './create-tags';

export default function CreateRecipe(props) {

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [_lastModified, setLastModified] = useState(Date.now())
    const [images, setImages] = useState('')
    const [tags, setTags] = useState('')
    const [tagsList, setTagsList] = useState([]);
    const [servingSize, setServingSize] = useState('')
    const [calories, setCalories] = useState('')
    const [featured, setFeatured] = useState(false);
    const [skillLevel, setSkillLevel] = useState('Beginner');
    const [step, setStep] = useState(1);
    const [approved, setApproved] = useState(false);

    const [cookbookId, setCookbookId] = useState(id);
    const [ingredient, setIngredient] = useState('');
    const [ingredientList, setIngredientList] = useState([]);

    const [direction, setDirection] = useState('');
    const [directionsList, setDirectionsList] = useState([]);

    const values = { id, step, name, _lastModified, images, tags, tagsList, servingSize, cookbookId, ingredient, ingredientList, direction, directionsList, calories, featured, skillLevel, approved };

    /* Create Cookbook */
    const handleNameChange = (name) => {
        setName(name)
        console.log(name);
    }

    const handleServingSizeChange = (servingSize) => {
        setServingSize(servingSize)
        console.log(servingSize);
    }

    const handleImageUpload = (images) => {
        setImages(images)
        console.log(images)
    }
    const handleImageChange = (images) => {
        setImages(images)
        console.log(images)
    }

    const handleApprovedChange = (approved) => {
        setImages(approved)
        console.log(approved)
    }

    const handleCaloriesChange = (calories) => {
        setCalories(calories)
        console.log(calories)
    }

    const handleFeaturedChange = (featured) => {
        setFeatured(featured)
        console.log(featured);
    }

    const handleSkillChange = (skillLevel) => {
        setSkillLevel(skillLevel)
        console.log(skillLevel);
    }

    /* Create Ingredients */
    const handleAddIngredient = (ingredient) => {
        setIngredient(ingredient)
    }

    const handleIngredientPush = (ingredientItem) => {
        ingredientList.push(ingredient)
        setIngredient('');
    }

    const handleIngredientRemove = () => {
        setIngredientList([])
        setIngredient('');
    }

    /* Create Directions */
    const handleAddDirections = (direction) => {
        setDirection(direction)
    }

    const handleAddTags = (tags) => {
        setTags(tags)
    }

    const handleTagsPush = (tagsItem) => {
        tagsList.push(tags)
        setTags('');
    }

    const handleTagsRemove = () => {
        setTagsList([])
        setTags('');
    }

    const handleDirectionsPush = (directionItem) => {
        directionsList.push(direction)
        setDirection('');
    }

    const handleDirectionsRemove = () => {
        setDirectionsList([])
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
                handleServingSizeChange={handleServingSizeChange}
                handleImageChange={handleImageChange}
                handleApprovedChange={handleApprovedChange}
                handleFeaturedChange={handleFeaturedChange}
                handleCaloriesChange={handleCaloriesChange}
                handleTagsPush={handleTagsPush}
                handleSkillChange={handleSkillChange}
                values={values}
            />);

        case 2:
            return (<CreateIngredients
                nextStep={nextStep}
                prevStep={prevStep}
                handleAddIngredient={handleAddIngredient}
                handleIngredientPush={handleIngredientPush}
                handleIngredientRemove={handleIngredientRemove}
                values={values} />);

        case 3:
            return (<CreateDirections
                nextStep={nextStep}
                prevStep={prevStep}
                handleAddDirections={handleAddDirections}
                handleDirectionsPush={handleDirectionsPush}
                handleDirectionsRemove={handleDirectionsRemove}
                values={values} />);
        case 4:
            return (<CreateTags
                prevStep={prevStep}
                nextStep={nextStep}
                handleAddTags={handleAddTags}
                handleTagsPush={handleTagsPush}
                handleTagsRemove={handleTagsRemove}
                values={values} />)

        case 5:
            return (<Confirmation
                prevStep={prevStep}
                values={values} />)
    }


}
