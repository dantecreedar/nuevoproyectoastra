// src/LoadingScreen.js
import { useEffect } from 'react';
import '../../public/Css/LoadingScreen.css';

// eslint-disable-next-line react/prop-types
const LoadingScreen = ({ setLoading }) => {
  useEffect(() => {
    const fakeAsyncCall = () => {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    };

    fakeAsyncCall().then(() => {
      setLoading(false);
    });
  }, [setLoading]);

  return (
    <div className="loading-screen text-center">
        <h3 className='p-5 text-2xl '>Enterprise<span className='text-indigo-600 font-extrabold'>Astra Proyect</span></h3><br />
        <span className="loading loading-bars loading-lg"></span>
       {/*  <span>Cargando...</span> */}
    </div>
  );
};

export default LoadingScreen;
