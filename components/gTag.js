import Script from 'next/script';

const GTag = () => {
  return (
    <>
      <Script id="gtag" async src="https://www.googletagmanager.com/gtag/js?id=G-0EV0ZLW32Z" />
      <Script id="gtag-load" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0EV0ZLW32Z');
        `}
      </Script>
    </>
  );
};

export default GTag;