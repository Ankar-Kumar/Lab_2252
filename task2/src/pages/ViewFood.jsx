import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ViewFood() {
	const { category } = useParams();
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
			.then((res) => res.json())
			.then((data) => setMeals(data.meals));
	}, [category]);

	return (
		<div className='container'>
			<h2 className='my-3'>{category} Meals</h2>

			<div className='row'>
				{meals.map((meal) => (
					<div key={meal.idMeal} className='col-md-3 mb-4'>
						<div className='card'>
							<img
								src={meal.strMealThumb}
								className='card-img-top'
								alt={meal.strMeal}
							/>
							<div className='card-body'>
								<h6>{meal.strMeal}</h6>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

