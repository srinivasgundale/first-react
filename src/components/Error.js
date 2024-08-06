import React from "react";
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
            <h1 class="display-1 fw-bold">{err.status}</h1>
            <p class="fs-3"> <span class="text-danger">Opps!</span> {err.statusText}</p>
            { err.status === 404 ? (
            <p class="lead">
                The page you’re looking for doesn’t exist.
            </p>) : <p>Something Went Wring, Please try again</p>
            }
            <Link className="btn btn-primary" to="/">
             Go Home
            </Link>
            
        </div>
    </div>
        
    );
}
export default Error;