import React, { useState } from 'react'
import '../../../utils/scss/pages/cookbook/_recipeFilter'
import Banner from '../../banner';
import Header from '../../header';

export default function RecipeFilter(props) {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSubmit = async () => {


        try {
            let res = await fetch(`/api/cookbook/search/${query}`, {
                method: 'GET',
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let searchList = await res.json();
            console.log(searchList)
            setResults(searchList);
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <>
            <Header />
            <main className="recipeFilter">

                <div className="container recipe">
                    <div className="row py-4 justify-content-center">
                        <h2>Browse Our Recipes</h2>
                    </div>
                    <div className="row py-2 justify-content-center">
                        <div id="searchBar" className="input-group mb-3">
                            <input className="form-control" placeholder="Search Recipes Ex. Breakfast, Lunch, Dinner"
                                value={query}
                                aria-label="Recipient's username" onChange={(e) => setQuery(e.target.value)} aria-describedby="basic-addon2" />
                            <div class="input-group-append">
                                <button className="btn btn-outline-secondary" type="button"
                                    onClick={handleSubmit}>Search</button>
                            </div>
                        </div>
                    </div>


                    <div className="row py-4">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <ul>
                                <li onClick={(e) => setQuery('Breakfast')}>
                                    Breakfast
                        </li>
                                <li>
                                    Lunch
                        </li>
                                <li>
                                    Dinner
                        </li>
                                <li>
                                    Desert
                        </li>
                            </ul>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <ul>
                                <li>
                                    Breakfast
                        </li>
                                <li>
                                    Lunch
                        </li>
                                <li>
                                    Dinner
                        </li>
                                <li>
                                    Desert
                        </li>
                            </ul>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <ul>
                                <li>
                                    Breakfast
                        </li>
                                <li>
                                    Lunch
                        </li>
                                <li>
                                    Dinner
                        </li>
                                <li>
                                    Desert
                        </li>
                            </ul>
                        </div>

                    </div>

                    <div className="row justify-content-center py-4">
                        {results.length >= 1 ?
                            <div className="container">
                                <hr />
                                <div className="row">
                                    <h3>Search Results</h3>

                                </div>

                                <div className="row">
                                    <div>
                                        <ol className="">{results.map(resultitem =>



                                            <li className="py-2" key={resultitem.id}><h6>{resultitem.name}</h6></li>

                                        )}
                                        </ol>

                                    </div>
                                </div>


                            </div>

                            : <div className="container">

                                <hr />
                                <div className="row">
                                    <h3>Search Results</h3>

                                </div>
                                <div className="row">
                                    <p className="text-warning">No Items Found</p>
                                </div>

                            </div>}
                    </div>



                </div>
            </main>
        </>
    )
}
