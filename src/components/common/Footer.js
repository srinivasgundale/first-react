import React, { useState, useEffect } from "react";
const Footer = () => {
    const [quote, setQuote] = useState("");
    useEffect(()=> {
        fetchRandomQuote();
      },[]);
      async function fetchRandomQuote() {
        const data = await fetch('https://dummyjson.com/quotes/random')
        const json = await data.json()
        setQuote(json);
        
      }
    return (
        <>
        
        <div className="container">
        <blockquote className="fade-in blockquote text-right">
            <p className="mb-0 ">{quote.quote} </p> 
            <footer className="blockquote-footer mt-2"> <cite title="Source Title">{quote.author}</cite></footer>
        </blockquote>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    
                <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-body-secondary" href="#">Twitter</a></li>
                <li className="ms-3"><a className="text-body-secondary" href="#">Instagram</a></li>
                <li className="ms-3"><a className="text-body-secondary" href="#">Facebook</a></li>
                </ul>
            </footer>
        </div>
        </>
    )
}
export default Footer;