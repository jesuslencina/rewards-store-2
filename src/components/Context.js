import React, { useState, createContext, useEffect } from 'react';

export const Context = createContext();

export function DataProvider(props) {
  ///FETCH VARS
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Accept', 'application/json');
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmU0MjIyMzI2ZjdkMjAwMjA0MTE0ZDMiLCJpYXQiOjE2MDg3ODY0Njd9.y-gmTy9zJvIdR9OecwmPGOtBXagHyD9sSNiYK0_lNe4'
  );
  myHeaders.append(
    'Cookie',
    '__cfduid=d1c80f21dcaa095448f1cb80cfb82fb1a1607248835'
  );

  var requestOptionsUser = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  var requestOptionsProducts = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  ///

  ///STATE
  const [userData, setUserData] = useState({
    user: {
      id: '0',
      name: 'Loading...',
      points: 0,
      redeemHistory: {},
      createDate: 'new Date(1510171520852)',
    },
  });

  const [products, setProducts] = useState({});

  const [settings, setSettings] = useState({
    filtering: 1,
    displayOffset: 0,
    amountToDisplay: 10,
    amountOfProducts: 0,
    viewingHistory: false,
    modal: {
      class: '',
      title: '',
      msg: '',
    },
  });

  ///FUNCTIONS
  //!GET USER DATA
  const fetchUser = async () => {
    let newUser;
    await fetch(
      'https://coding-challenge-api.aerolab.co/user/me',
      requestOptionsUser
    )
      .then((response) => response.text())
      .then((result) => (newUser = JSON.parse(result)))
      .catch((error) => console.log('error', error));

    setUserData({ user: newUser });
  };

  //!GET PRODUCTS
  const fetchProducts = async () => {
    await fetch(
      'https://coding-challenge-api.aerolab.co/products',
      requestOptionsProducts
    )
      .then((response) => response.text())
      .then((result) => setProducts(JSON.parse(result)))
      .catch((error) => console.log('error', error));
  };

  //!REDEEM PRODUCT
  const redeemProduct = async (id) => {
    let resultmsg;

    let raw = JSON.stringify({ productId: id });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    await fetch(
      'https://coding-challenge-api.aerolab.co/redeem',
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        resultmsg = result;
      })
      .catch((error) => {
        resultmsg = ('error', error);
      });

    fetchUser();

    //MODAL
    let finalmsg;
    if (JSON.stringify(resultmsg).includes('successfully')) {
      finalmsg = 'SUCCESS';
    } else {
      finalmsg = resultmsg.replace('{', ' ').replace('}', ' ').toUpperCase();
    }
    displayModal({
      class: 'is-active',
      title: finalmsg,
      msg: 'Operation: Redeeming a product',
    });
  };

  //!ADD POINTS
  const fetchMorePoints = async (amount) => {
    let resultmsg;

    if (userData.user.points + amount > 10000) {
      resultmsg = 'Error: Too many points. Spend some first';
    } else {
      let raw = JSON.stringify({ amount: amount });
      let requestOptionsPoints = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      await fetch(
        'https://coding-challenge-api.aerolab.co/user/points',
        requestOptionsPoints
      )
        .then((response) => response.text())
        .then((result) => (resultmsg = result))
        .catch((error) => {
          resultmsg = ('Error', error);
        });

      fetchUser();
    }
    //ACTIVATE MODAL
    let finalmsg;
    if (JSON.stringify(resultmsg).includes('Updated')) {
      finalmsg = 'SUCCESS';
    } else {
      finalmsg = resultmsg.replace('{', ' ').replace('}', ' ').toUpperCase();
    }
    displayModal({
      class: 'is-active',
      title: finalmsg,
      msg: 'Operation: Redeeming points',
    });
  };

  //!MODAL
  const displayModal = (object) => {
    setSettings({
      ...settings,
      modal: { class: object.class, title: object.title, msg: object.msg },
    });
  };

  const closeModal = (object) => {
    setSettings({
      ...settings,
      modal: { class: '', title: '', msg: '' },
    });
  };

  ///USEEFFECTS

  useEffect(() => {
    fetchUser();
    fetchProducts();
  }, []);

  ///RETURN
  return (
    <Context.Provider
      value={{
        userData,
        setUserData,
        products,
        settings,
        setSettings,
        fetchUser,
        fetchProducts,
        fetchMorePoints,
        redeemProduct,
        closeModal,
      }}>
      {props.children}
    </Context.Provider>
  );
}
