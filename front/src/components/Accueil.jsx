import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";



export function Welcome() {
  return (
    <div className="justify-center flex" style={{
        alignItems: "center",
        padding: "10%"
    }}>
        <div style={{ textAlign: "center"}}>
            <Typography variant="h2">Le High-tech Upbinging Bureau</Typography>
            <div style={{paddingTop: "40px"}}>
                <Typography variant="paragraph">
                    Le H.U.B, une association d&apos;élèves tournée vers l&apos;avenir et le numérique.
                </Typography>
            </div>
            <div class="justify-center flex" style={{paddingTop: "40px"}}>
                <Link to="/le-hub">
                    <Button variant="text" className="flex items-center gap-2">
                        En savoir plus
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                        </svg>
                    </Button>
                </Link>
            </div>
        </div>
    </div>
  );
}