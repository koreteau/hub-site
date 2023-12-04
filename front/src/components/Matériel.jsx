import React, { useEffect, useState } from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';




export function Materiel() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    db.collection('stuff')
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
            console.error('Error fetching image URL:', error);
            return null;
          }
        }));
        const filteredData = data.filter((item) => item !== null);
        setItems(filteredData);
      })
      .catch((error) => {
        console.error('Error retrieving events:', error);
      });
  }, []);

  return (
    <>
      {items.map(stuff => (
        <div class="grid grid-cols-3 gap-4">
          <div class="... items-center">
            <div class="w-full flex justify-center">
              <img src={stuff.img} alt={stuff.alt} width={250} height={250} />
            </div>
          </div>
          <div class="col-span-2 ...">
            <h1 class="text-2xl font-bold">{stuff.name}</h1>
            <p class="text-gray-500">{stuff.desc}</p>
          </div>
        </div>
      ))}
    </>
  )
}