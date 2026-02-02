import React, { useState } from "react";
import { Link } from "react-router-dom";

function CategoryPage() {
    // usestate for storing the category data
    const [categories, setCategories] = useState([]);
    const fetchCategories = async () => {
        const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();
        setCategories(data.categories);
    };

    return (
			<div className='container'>
				<div className='row pt-3'>
					<div className='col-12'>
						<button className='btn btn-primary' onClick={fetchCategories}>
							View Meal Categories
						</button>
					</div>
				</div>
				<div>
					{/*Example category template-start*/}
					{categories.map((category) => (
						<div
							key={category.idCategory}
							className='row my-4 shadow-sm bg-white py-3'>
							<div className='col-3 margin-bottom-10'>
								<img
									src={category.strCategoryThumb}
									className={'w-100'}
									alt={category.strCategory}
								/>
							</div>
							<div className='col-9 p-2'>
								<h2> {category.strCategory} </h2>
								<p>{category.strCategoryDescription.substring(0, 250)}</p>

								<Link
									to={`/meals/${category.strCategory}`}
									className='text-decoration-none'>
									View Foods
								</Link>
							</div>
						</div>
						// {/*Example category template-end*/}
					))}
				</div>
			</div>
		);
}

export default CategoryPage;
