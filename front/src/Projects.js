import React from "react";
import { CardWithLink } from "./components/Projects";




function Projects() {
    return (
        <div className="justify-center flex" style={{
            alignItems: "center",
            padding: "10%"
        }}>
            <div>
                <CardWithLink />
            </div>
        </div>
    )
}

export default Projects;