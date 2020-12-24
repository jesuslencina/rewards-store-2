import React, { useState, createContext, useEffect } from 'react';

export const Context = createContext();

export function DataProvider(props) {
  ///FETCH VARS
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Accept', 'application/json');
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYTMxMTI2ZjdkMjAwMjA0MTE0YzMiLCJpYXQiOjE2MDcxODEwNzN9.zn-vgFd1URNcc2iY0N6Zmikp291Fu2NsveJbxWLY_vY'
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
      redeemHistory: [],
      createDate: 'new Date(1510171520852)',
    },
  });

  const [settings, setSettings] = useState({
    filtering: 'default',
    displayOffset: 0,
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

  //!ADD POINTS
  const fetchMorePoints = async (amount) => {
    let resultmsg;
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
    // eslint-disable-next-line
  }, []);

  ///RETURN
  return (
    <Context.Provider
      value={{
        userData,
        setUserData,
        settings,
        setSettings,
        fetchUser,
        fetchMorePoints,
        closeModal,
      }}>
      {props.children}
    </Context.Provider>
  );
}
