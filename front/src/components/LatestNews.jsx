import React, { useState, useEffect } from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";



export function LatestNews() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const db = firebase.firestore();
        db.collection('news')
            .limit(1)
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
        <div className="flex flex-col items-center justify-center w-full px-4 py-16 bg-gray-100">
            {news.map((data) => (
                <Link to="/news" className="inline-block">
                <Card className="w-full max-w-[48rem] flex-row">
                    <CardBody>
                        <Typography variant="h6" color="gray" className="mb-4 uppercase">
                            Nouveau !
                        </Typography>
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            {data.title}
                        </Typography>
                        <Typography color="gray" className="mb-8 font-normal">
                            {data.desc}
                        </Typography>
                    </CardBody>
                </Card>
                </Link>
            ))}
        </div>
    );
}