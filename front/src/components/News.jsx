import React, { useEffect, useState } from "react";

import { NewspaperIcon } from "@heroicons/react/24/outline"
import { Card, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';



export function HorizontalCard() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const db = firebase.firestore();
        db.collection('news')
            .get()
            .then(async (querySnapshot) => {
                const data = await Promise.all(querySnapshot.docs.map(async (doc) => {
                    const event = doc.data();
                    const storageRef = firebase.storage().ref();
                    try {
                        const imgRef = storageRef.child(event.img);
                        const imgUrl = await imgRef.getDownloadURL();
                        return {
                            ...event,
                            img: imgUrl,
                        };
                    } catch (error) {
                        return null;
                    }
                }));
                const filteredData = data.filter((item) => item !== null);
                setNews(filteredData);
            })
            .catch((error) => {
                console.error('Error retrieving events:', error);
            });
    }, []);

    return (
        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3" style={{
            margin: 'auto',
            maxWidth: '1200px',
            padding: '0 15px',
            paddingTop: '30px',
        }}>
            {news.map((data) => (
                <div key={data.id}>
                    <Card className="h-full w-full">
                        <CardBody>
                            <NewspaperIcon className="h-12 w-12 text-gray-900" style={{
                                margin: '3px',
                            }}/>
                            <Typography variant="h6" color="gray" className="mb-4 uppercase">
                                {data.date}
                            </Typography>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                {data.title}
                            </Typography>
                            <Typography>
                                {data.desc}
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0 justify-end">
                            <Link to={data.link} className="inline-block">
                                <Button size="sm" variant="text" className="flex items-center gap-2">
                                    En savoir plus
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            ))}
        </div>
    );
}