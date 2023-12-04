import { Link } from "react-router-dom"

import { Typography } from "@material-tailwind/react"



export function FooterWithLogo() {
  return (
    <footer className="w-full bg-white p-8" style={{ paddingTop: "100px"}}>
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <h2>HIGH-TECH UPBRINGING BUREAU</h2>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as={Link}
              to="/mentions-legales"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Mentions Légales
            </Typography>
          </li>
          <li>
            <Typography
              as={Link}
              to="/reglement-interieur"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Règlement Intérieur
            </Typography>
          </li>
          <li>
            <Typography
              as={Link}
              to="/contact"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contactez-nous
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
      {`© 2022 - ${new Date().getFullYear()} High-tech Upbinging Bureau.`}
      </Typography>
    </footer>
  );
}