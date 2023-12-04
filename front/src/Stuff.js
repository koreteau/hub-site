import React from 'react';
import { Materiel } from "./components/Matériel";
import { Typography } from "@material-tailwind/react";



function Stuff() {
    return (
        <div>
            <div className="justify-center flex" style={{
                alignItems: "center",
                padding: "10%"
            }}>
                <div style={{ textAlign: "center" }}>
                    <Typography variant="h2">Le matériel utilisable au H.U.B</Typography>
                </div>
            </div>
            <div className="justify-center flex">
                <Materiel />
            </div>
        </div>

    )
}

export default Stuff;