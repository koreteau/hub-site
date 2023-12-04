import { Link } from "react-router-dom";

import { Typography, Button } from "@material-tailwind/react";


const NotFound = () => (
    <div>
        <div className="text-center">
            <h1>404 - Page Not Found</h1>
            <Link to="/">
                <Button color="blue" ripple="light">
                    Retour à l'accueil
                </Button>
            </Link>
        </div>
    </div>
);


export default NotFound;