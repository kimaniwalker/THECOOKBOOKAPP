import React, { useState, useEffect } from 'react'
import '../../../utils/scss/pages/cookbook/_recipeFilter'
import Banner from '../../banner';
import Footer from '../../footer';
import Header from '../../header';

export default function RecipeFilter(props) {

    const [query, setQuery] = useState('Breakfast');
    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [resultsPerPage, setResultsPerPage] = useState(3);

    const handleSubmit = async () => {


        try {
            let res = await fetch(`/api/cookbook/search/${query}`, {
                method: 'GET',
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let searchList = await res.json();
            console.log(searchList)
            setResults(searchList.slice(currentPage, resultsPerPage));
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        handleSubmit();
    }, [currentPage]);

    /* Helper Functions */
    const nextPage = () => {
        setCurrentPage(currentPage + 3);
        setResultsPerPage(resultsPerPage + 3)


    };

    const prevPage = () => {
        setCurrentPage(currentPage - 3);
        setResultsPerPage(resultsPerPage - 3)

    };


    return (
        <>
            <Header color='header' />
            <main className="recipeFilter">

                <div className="container recipe py-4">
                    <div className="row py-4 justify-content-center">
                        <i className="fas fa-search fa-2x"></i>
                    </div>
                    <div className="row py-4 justify-content-center">
                        <h2>Browse Our Recipes</h2>
                    </div>
                    <div className="row py-2 justify-content-center">
                        <div id="searchBar" className="input-group mb-3">
                            <input className="form-control" placeholder="Search Recipes Ex. Breakfast, Lunch, Dinner"
                                value={query}
                                aria-label="Search Bar" onChange={(e) => setQuery(e.target.value)} aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button"
                                    onClick={handleSubmit}>Search</button>
                            </div>
                        </div>
                    </div>

                    <div className="row py-4 bg-light">
                        <div className="container">

                            <h5 className="text-center">Quick Search</h5>
                            <hr />
                        </div>

                    </div>

                    <div className="row py-4 bg-light justify-content-center text-center">



                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">


                            <div className="row justify-content-center py-2">
                                <span onClick={(e) => setQuery('Breakfast')}><img id="avatar" src='../../../images/home/pancakes.jpg'></img></span>



                            </div>


                            <div className="row justify-content-center py-2">
                                <h5>Breakfast</h5>
                            </div>




                        </div>



                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="row justify-content-center py-2">
                                <span onClick={(e) => setQuery('Drinks')}><img id="avatar" src='../../../images/home/drinks.jpg'></img></span>



                            </div>


                            <div className="row justify-content-center py-2">
                                <h5>Drinks</h5>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="row justify-content-center py-2">
                                <span onClick={(e) => setQuery('Dinner')}><img id="avatar" src='../../../images/home/steak.jpg'></img></span>



                            </div>


                            <div className="row justify-content-center py-2">
                                <h5>Dinner</h5>
                            </div>
                        </div>

                    </div>

                    <div className="row py-4">
                        {results.length >= 1 ?
                            <div className="container">

                                <div className="row justify-content-space-between">
                                    <div className="container">
                                        <span><h3 className="text-center">Search Results</h3></span>
                                        <span><h6 className="text-warning text-center">Showing Result {currentPage} - {resultsPerPage}</h6></span>


                                    </div>


                                </div>
                                <hr />
                                <div className="row justify-content-space-between d-flex">
                                    <div className="col-lg-12">
                                        <div className="container">

                                            <div className="">{results.map(resultitem =>







                                                <div className="p-2 text-center" key={resultitem.id}><div><h6>{resultitem.name}

                                                </h6></div>
                                                    <div className="py-2 text-center">Servings : {resultitem.serving_size}  Calories : {resultitem.calories} </div>
                                                    <div className="py-2 text-center">
                                                        <img id="thumbnail" width="400px" src={`../../../../images/assets/${resultitem.images}`} alt="" />
                                                    </div>


                                                    <div><button onClick={(e) => window.location.href = `/recipe/${resultitem.id}`} className="btn btn-primary text-center">View Recipe</button></div>


                                                    <hr />


                                                </div>






                                            )}
                                            </div>
                                            <div className="row justify-content-center">
                                                <button className="btn btn-primary" disabled={currentPage <= 0} onClick={prevPage}>Previous</button>
                                                <button className="btn btn-secondary" disabled={results.length <= 1} onClick={nextPage}>Next</button>
                                            </div>


                                        </div>



                                    </div>





                                </div>


                            </div>

                            : <div className="container py-4">

                                <hr />
                                <div className="row">
                                    <div className="container">
                                        <h3 className="text-center">Search Results</h3>
                                    </div>


                                </div>
                                <div className="row">
                                    <div className="container">
                                        <p className="text-warning text-center">No Items Found</p>
                                    </div>

                                </div>

                            </div>}
                    </div>



                </div>
            </main>
            <Footer />
        </>
    )
}
