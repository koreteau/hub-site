import React from 'react';
import { ProfileTeam } from "./components/Team";
import { ConseilProfileTeam } from "./components/Conseil";
import { Typography } from "@material-tailwind/react";



function Team() {
    return (
        <div>
            <div className="justify-center flex" style={{
                alignItems: "center",
                padding: "10%"
            }}>
                <div style={{ textAlign: "center" }}>
                    <Typography variant="h2">Les membres du High-tech Upbinging Bureau</Typography>
                </div>
            </div>
            <div className="justify-center flex">
                <ConseilProfileTeam />
            </div>
            <div className="justify-center flex">
                <ProfileTeam />
            </div>
        </div>

    )
}

export default Team;