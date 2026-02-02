import React, {useState} from "react";
import {Link} from "react-router-dom";

function CategoryPage() {

    return (
        <div className="container">
            <div className="row pt-3">
                <div className="col-12">
                    <button className="btn btn-primary" >View Meal Categories</button>
                </div>
            </div>
            <div>
                <div>
                    {/*Example category template-start*/}
                    <div className="row my-4 shadow-sm bg-white py-3">
                        <div className="col-3 margin-bottom-10">
                            <img src="https://www.themealdb.com/images/category/beef.png" className={"w-100"}
                                 alt="alt text"/>
                        </div>
                        <div className="col-9 p-2">
                            <h2> Example Meal Category  Template </h2>
                            <p>Dummy food Description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cum quasi reiciendis
                                rerum. Accusamus aliquid aspernatur assumenda cum deleniti distinctio dolore dolores,
                                enim esse eveniet explicabo, fuga fugit illo ipsum iste itaque iure laudantium libero
                                maiores mollitia natus neque nesciunt numquam obcaecati odio quae quam quas recusandae
                                rem repudiandae rerum temporibus ut voluptatibus. Aliquid animi consectetur corporis
                                cumque deleniti, dicta distinctio dolor dolores, </p>

                            <Link className={"bi-arrow-right-circle text-decoration-none"}
                                  to={'/'}> View Foods</Link>
                        </div>
                    </div>
                    {/*Example category template-end*/}
                </div>
            </div>
        </div>
    );
}

export default CategoryPage;
