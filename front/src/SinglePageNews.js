import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import { Avatar, Card, List, Button, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";



const NewsPage = () => {
  const { customLink } = useParams();
  const [news, setNews] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const firestore = firebase.firestore();

    const newsRef = firestore.collection('news');
    newsRef
      .where('link', '==', customLink)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const newsData = querySnapshot.docs[0].data();
          setNews(newsData);
          const authorId = newsData.authorId;
          const authorRef = firestore.collection('staff');
          authorRef
            .where(firebase.firestore.FieldPath.documentId(), '==', authorId)
            .get()
            .then((authorQuerySnapshot) => {
              if (!authorQuerySnapshot.empty) {
                const authorData = authorQuerySnapshot.docs[0].data();
                setAuthor(authorData);
              } else {
                console.log('No matching documents found in staff collection.');
              }
            })
            .catch((error) => {
              console.error('Error fetching author:', error);
            });
        } else {
          console.log('No matching documents found in news collection.');
        }
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  }, [customLink]);


  return (
    <div>
      {news ? (
        <div style={{
          paddingLeft: "20%",
          paddingRight: "20%",
          paddingTop: "100px"
        }}>
          <div style={{ textAlign: "center" }}>
            <Typography variant="h2">{news.title}</Typography>
          </div>
          <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
            <div className="max-w-fit">
              <Typography style={{ paddingTop: "50px" }} variant="body1">Le {news.date} par </Typography>
              {author ? (
                <Card className="">
                  <List>
                    <ListItem>
                      <ListItemPrefix>
                        <Avatar variant="circular" alt="candice" src={author.img} />
                      </ListItemPrefix>
                      <div>
                        <Typography variant="h6" color="blue-gray">
                          {author.fullName}
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                          {author.title}
                        </Typography>
                      </div>
                    </ListItem>
                  </List>
                </Card>
              ) : (<p></p>)}
            </div>
            <div className="col-span-3">
              <div style={{ paddingTop: "50px" }}>
                <Typography variant="body1">{news.desc}</Typography>
              </div>
              <div style={{ paddingTop: "50px" }}>
                <Typography variant="body1">{news.content}</Typography>
              </div>
              {news.link_subject ? (
                <div style={{
                  paddingTop: "50px"
                }} className="flex w-max gap-4">
                  <Link to={news.link_subject}>
                    <Button variant="outlined">{news.link_subject_title}</Button>
                  </Link>
                </div>
              ) : (<p></p>)}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading or not found</p>
      )}
    </div>
  );
};


export default NewsPage;