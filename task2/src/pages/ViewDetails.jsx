import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ViewDetails(){
    const { category, id } = useParams();
    const [meal, setMeal] = useState([]);

    useEffect(() => {
			const fetchApi = async () => {
				const response = await fetch(
					`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
				);
				const data = await response.json();
				setMeal(data.meals[0]);
			};
			fetchApi();
		}, [id]);

		const ingredients = [];
		for (let i = 1; i <=10; i++) {
			const item = meal[`strIngredient${i}`];
			if (item && item !== '' && item!=null) {
				ingredients.push(item);
			}
		}
    return (
			<div className='container'>
				<h2 className='my-3'>{meal.strMeal}</h2>

				<div className='row'>
					<div>
						<div className='card'>
							<img
								src={meal.strMealThumb}
								className='card-img-top'
								alt={meal.strMeal}
							/>
							<div className='card-body'>
								<h6>
									{meal.strCategory} and area {meal.strArea}
								</h6>
								<p>{meal.strInstructions}</p>
								<h4>Ingredients:</h4>
								<ul>
									{ingredients.map((item) => (
										<li>{item}</li>
									))}
								</ul>
								<Link to={meal.strSource}> contact source</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);


}