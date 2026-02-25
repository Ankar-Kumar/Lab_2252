import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function ViewFood() {
	const { category } = useParams();
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		const fetchApi = async () => {
			const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
			const data = await response.json();
			setMeals(data.meals);
    	};
	fetchApi();
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
								<Link
									to={`/meals/${category}/${meal.idMeal}`}
									className='text-decoration-none'>
									View Details
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

