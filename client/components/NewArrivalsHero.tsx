export default function NewArrivalsHero() {
  return (
    <section className="bg-brand-cream relative">
      <div className="w-full max-w-[1440px] mx-auto relative h-[1536px]">
        {/* Main title */}
        <div className="absolute left-[456px] top-[60px] w-[528px] h-[61px] flex flex-col justify-end">
          <h1 className="font-inter text-[64px] font-bold leading-[42px] tracking-[2px] text-black text-center">
            NEW ARRIVALS
          </h1>
        </div>

        {/* Background rectangles and images layout */}
        <div className="absolute left-[146px] top-[444px] w-[1150px] h-[542px] bg-[#D9D9D9]"></div>

        {/* Brand gold background rectangles */}
        <div className="absolute left-[146px] top-[201px] w-[239px] h-[415px]" style={{background: 'rgba(175, 118, 52, 0.28)'}}></div>
        <div className="absolute left-[853px] top-[184px] w-[442px] h-[111px]" style={{background: 'rgba(175, 118, 52, 0.28)'}}></div>
        <div className="absolute left-[1077px] top-[569px] w-[202px] h-[317px]" style={{background: 'rgba(175, 118, 52, 0.28)'}}></div>

        {/* Images */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/bfee7133efdefc9f77c1892549ba6876f794f8f8?width=780"
          alt="Model in designer dress"
          className="absolute left-[146px] top-[715px] w-[390px] h-[585px] object-cover"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/35aa9e233f14c4b226c07e2449762905a4b23887?width=1080"
          alt="Model in elegant outfit"
          className="absolute left-[314px] top-[239px] w-[540px] h-[559px] object-cover"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/bf78a8d736563b0d78582c9753b87e43882ff81c?width=728"
          alt="Model in fashionable attire"
          className="absolute left-[902px] top-[492px] w-[364px] h-[331px] object-cover"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/fb27894ef02f16cb5ad586db85bfc6be30c83966?width=904"
          alt="Model in pink outfit"
          className="absolute left-[627px] top-[689px] w-[452px] h-[483px] object-cover"
        />

        {/* Decorative lines */}
        <div className="absolute left-[611px] top-[213px] w-[250px] h-0 bg-black"></div>
        <div className="absolute left-[861px] top-[1201px] w-[250px] h-0 bg-black"></div>
        <div className="absolute left-[352px] top-[1515px] w-[437px] h-0 bg-black"></div>
        <div className="absolute left-[873px] top-[1515px] w-[169px] h-0 bg-black"></div>
        <div className="absolute left-[1107px] top-[408px] w-[166px] h-0 bg-black"></div>
        <div className="absolute left-[861px] top-[212px] w-[291px] h-0 bg-black"></div>
        <div className="absolute left-[1111px] top-[931px] w-[269px] h-0 bg-black"></div>
        <div className="absolute left-[1273px] top-[408px] w-[132px] h-0 bg-black"></div>

        {/* Text overlay */}
        <div className="absolute left-[875px] top-[191px] w-[407px] h-[93px] flex flex-col justify-end">
          <p className="font-inter text-[20px] font-normal leading-[42px] tracking-[2px] text-black text-center">
            A symphony of threads and tales, Unfolding on every silhouette.
          </p>
        </div>

        {/* Bottom quote section */}
        <div className="absolute left-[352px] top-[1408px] w-[690px] h-[107px] border-t border-r border-l border-black bg-transparent"></div>
        <div className="absolute left-[471px] top-[1441px] w-[465px] h-[42px] flex flex-col justify-end">
          <p className="font-inter text-[32px] font-normal leading-[42px] tracking-[2px] text-black text-center">
            a cozy place for socialites
          </p>
        </div>

        {/* Quote mark SVG */}
        <svg
          className="absolute left-[808px] top-[1483px] w-[53px] h-[53px]"
          width="53"
          height="53"
          viewBox="0 0 53 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_218_764)">
            <path
              d="M42.8792 14.7494C45.1538 17.1653 46.375 19.8749 46.375 24.2673C46.375 31.9965 40.9491 38.924 33.0587 42.3491L31.0867 39.306C38.4515 35.3222 39.8913 30.1525 40.4655 26.893C39.2796 27.5069 37.7272 27.7211 36.2056 27.5798C32.2218 27.211 29.0815 23.9405 29.0815 19.8749C29.0815 17.825 29.8959 15.8591 31.3454 14.4096C32.7949 12.9601 34.7608 12.1457 36.8107 12.1457C39.1802 12.1457 41.446 13.2278 42.8792 14.7494ZM20.7959 14.7494C23.0705 17.1653 24.2917 19.8749 24.2917 24.2673C24.2917 31.9965 18.8658 38.924 10.9754 42.3491L9.00337 39.306C16.3682 35.3222 17.808 30.1525 18.3822 26.893C17.1963 27.5069 15.6438 27.7211 14.1223 27.5798C10.1385 27.211 6.99821 23.9405 6.99821 19.8749C6.99821 17.825 7.81253 15.8591 9.26203 14.4096C10.7115 12.9601 12.6775 12.1457 14.7274 12.1457C17.0969 12.1457 19.3627 13.2278 20.7959 14.7494Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_218_764">
              <rect width="53" height="53" fill="white" transform="matrix(-1 0 0 -1 53 53)"/>
            </clipPath>
          </defs>
        </svg>

        {/* Subtle line at top */}
        <div className="absolute left-0 top-0 w-full h-0 bg-black opacity-[0.14]"></div>
      </div>
    </section>
  );
}
