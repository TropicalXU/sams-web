'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieBanner = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This will ensure the component renders only on the client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    // While SSR, we won't render the CookieConsent component
    return null;
  }

  return (
    <div className='container cookie-consent'>
      <CookieConsent
        enableDeclineButton   
        location="bottom"
        buttonText="Accept All"
        declineButtonStyle={{background: 'black', color: 'white', borderRadius: 25, fontWeight: 400, fontSize:14, fontFamily: 'Montserrat', border: 1, borderColor: 'darkgrey', paddingLeft: 20, paddingRight: 20, paddingTop: 6, paddingBottom: 6}}
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2F5D62", color: '#fff' }}
        buttonStyle={{background: '#fff ',color:'#2F5D62', borderRadius: 25, paddingLeft: 15, paddingRight: 15, fontWeight: 400, fontSize: 14, fontFamily: 'Montserrat'}}
        expires={150}
      >
        <div className='flex flex-row items-center'><span className='fa fa-info text-black align-self-center fa-lg mr-3'></span><p className='font-style py-6'>We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies. Read more <Link href="/privacy-policy"><u>Privacy Policy</u></Link></p>
        </div>
      </CookieConsent>
  </div>
  );
};

export default CookieBanner;