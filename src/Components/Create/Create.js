import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from '../../store/firebaseContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Create = () => {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory()

  const { user } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState(null)

  const handleSubmit = async () => {
    try {
      const storeageRef = await firebase.storage().ref(`/image/${image.name}`)
      const uploadSnapshot = await storeageRef.put(image)
      const getURL = await uploadSnapshot.ref.getDownloadURL();

      await firebase.firestore().collection('products').add({
        name,
        category,
        price,
        url: getURL,
        userId: user.uid,
        createdAt: new Date().toDateString()
      })
      history.push('/')

    } catch (error) {

    }
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">

          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            value={name}
            onChange={(e) => { setName(e.target.value) }}
          />
          <br /> <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            value={category}
            onChange={(e) => { setCategory(e.target.value) }}
          />
          <br /><br />

          <label htmlFor="fname">Price</label>
          <br />
          <input className="input" type="number" id="fname" name="Price" value={price}
            onChange={(e) => { setPrice(e.target.value) }} />
          <br />

          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''} ></img>


          <br />
          <input type="file" onChange={(e) => {
            setImage(e.target.files[0])
          }} />
          <br />
          <button className="uploadBtn" onClick={handleSubmit}>upload and Submit</button>

        </div>
      </card>
    </Fragment>
  );
};

export default Create;
