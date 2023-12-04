import { Typography } from "@material-tailwind/react";


export function PresentationHUB() {
    return (
        <div>
            <div className="justify-center flex" style={{
                alignItems: "center",
                padding: "10%"
            }}>
                <div style={{ textAlign: "center" }}>
                    <Typography variant="h2">Le High-tech Upbinging Bureau</Typography>
                    <div style={{ paddingTop: "40px" }}>
                        <Typography variant="paragraph">
                            Le High-tech Upbringing Bureau {"("}H.U.B{")"} est une association d&apos;élèves d&apos;Epitech Digital School dédiée au développement d&apos;activités soutenant les industries créatives dans des environnements numériques.
                            Un espace dédié à l'association est meublé et aménagé avec du matériel technologique de qualité permettant de favoriser les échanges et la collaboration dans un objectif de créativité et d'innovation technologique.
                            Les membres de l'association peuvent y travailler sur leurs projets personnels ou sur des projets de groupe et y organiser des événements pour les étudiants de l'école.
                        </Typography>
                    </div>
                </div>

            </div>
        </div>
    )
}