import React from 'react';

interface TestimonialCardProps {
  image: string;
  text: string;
  customer: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ image, text, customer }) => {
  return (
    // The main container. We keep max-width to constrain the size on large screens.
    <div className="relative w-full max-w-[616px] mx-auto">
      <div className="relative w-full aspect-[616/611] ">

        {/* Background color block - Converted to percentages */}
        <div
          className="absolute"
          style={{
            background: 'rgba(175, 118, 52, 0.37)',
            width: '100%', // 467px / 616px
            height: '100%', // 510px / 611px
            left: '0%', // Start from the left edge for desired visibility
            top: '0%', // Start from the top edge
          }}
        ></div>

        {/* Main content container - Converted to percentages */}
        <div
          className="absolute"
          style={{
            width: '90%', // 461px / 616px
            height: '90%', // 463px / 611px
            right: '-5%', // Aligned to the right
            bottom: '5%', // Aligned to the bottom
          }}
        >
          <img
            src={image}
            alt={customer}
            className="w-full h-full object-cover"
          />

          {/* Text content container - layout adjusted for visibility */}
          <div
            className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 g-3 pt-5"
          >
            {/* Quote Icon SVG - positioned relative to text */}
            <div className="">
                <svg className="w-[53px] h-[53px]" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2007_734)">
                    <path d="M10.1208 38.2506C7.84621 35.8347 6.625 33.1251 6.625 28.7327C6.625 21.0035 12.0509 14.076 19.9413 10.6509L21.9133 13.694C14.5485 17.6778 13.1087 22.8475 12.5345 26.107C13.7204 25.4931 15.2728 25.2789 16.7944 25.4202C20.7782 25.789 23.9185 29.0595 23.9185 33.1251C23.9185 35.175 23.1041 37.1409 21.6546 38.5904C20.2051 40.0399 18.2392 40.8543 16.1893 40.8543C13.8198 40.8543 11.554 39.7722 10.1208 38.2506ZM32.2041 38.2506C29.9295 35.8347 28.7083 33.1251 28.7083 28.7327C28.7083 21.0035 34.1342 14.076 42.0246 10.6509L43.9966 13.694C36.6318 17.6778 35.192 22.8475 34.6178 26.107C35.8037 25.4931 37.3562 25.2789 38.8777 25.4202C42.8615 25.789 46.0018 29.0595 46.0018 33.1251C46.0018 35.175 45.1875 37.1409 43.738 38.5904C42.2885 40.0399 40.3225 40.8543 38.2726 40.8543C35.9031 40.8543 33.6373 39.7722 32.2041 38.2506Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_2007_734">
                      <rect width="53" height="53" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
            </div>
            
            <p
              className="font-inter font-thin tracking-wider text-center"
              style={{
                fontSize: 'clamp(16px, 3vw, 20px)', // Responsive font size
                lineHeight: '1.6',
              }}
            >
              {text}
            </p>
            
            {/* Customer name and divider */}
            <div className="flex items-center gap-3 mt-4">
               <div className="w-7 h-[1px] bg-white"></div>
               <p
                  className="font-inter font-thin tracking-wider"
                  style={{ fontSize: 'clamp(16px, 3vw, 20px)' }}
               >
                 {customer}
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;