"use client"


import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface PlatformData {
  name: string;
  value: number;
  color: string;
  icon: string;
}

export default function CommunityPlatformEngagements() {
  const data: PlatformData[] = [
    { name: 'Discord', value: 10240, color: '#0EA5E9', icon: 'https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg' },
    { name: 'Twitter', value: 50342, color: '#8A2BE2', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAaVBMVEUAAAD////ExMT19fX6+vpfX1/y8vLY2Ng2Njbe3t5/f3/Ly8vv7+/Ozs4iIiLHx8eamprk5OSwsLAUFBRAQEAMDAxQUFCgoKCmpqaRkZG2trZlZWWHh4dsbGxxcXFYWFgbGxsqKipISEhdr8yCAAAHeklEQVR4nO2c6ZqiOhCGW0HAXVRcuxW9/4s80zPmK1ISdkJ8Tr0/UUICldpSydeXIAiCIAiCIAiCIAiCIAiCIAiCIAiCIPTLbL0eF7K+t33EYf5qarnposcFJNNRCXHS7gmRr1oKHt302cx1UTIY/9Kq/Qfe1uLZUZcL2JR9msWsRevRHM1cO+tyAcuy0YTNX+ljq4Qs+N512Gcje69sNNtVw6bTjWrbOzZtoybfZYPxmgraLFBNXHqf/C92F/XIZaiBTxYfGjU8wViWtsbyxxLEr2ceV1GGR8sXG0FRxpZk7C+z10MXkX4dn2z006DVGHfb+y5/SE+vp05N/fGj3BuLIHO876aXVTmErz5v9et7mO953Sbpq9666mVV1PRYsCeTSf2u1yDd2LdHlsPp9Q2WTCZgUv1apvMbn/RixVjq7F+Cxi3kHiopTKu3doMeHFud/Hj+y6oEzEIqTTcanSq3dYXi4B/aFkqjxbo8pVvVMT6fjNzVVx5NW0dDDUnU67zogvZE15bV9HM0VjfE1hUZdcKgS2kyVxK0FT6lV1MDdgo8zlS/rgTwbT7lcob+qz7J+kDpYeYIUIRVIbS5QWG0C1Fb81B+8lm/foN+3qYlTdwxlmVfvawK9DDTQidMmxJBO+CPcX+9rMhDeVRTXXGlayjbQsOxh4GJBzIwWQ7K12Ue5wGCVjQT9hhzbCV9UcZ3kK+4yBEw61t812pqr39SCBqbNrCEXmq6FzPL37TMHHbFUwkacwQe5HEa7jyTcXVkLCRoXJ5I6Z5z77sh/zEewOs3oQQqnmiXE8RbXp7ppDzv0mb6ohQlaGNdP0cI1KbvYoQMT4nyts7V4AhM1MvnqYKsx+OGUs5wVJ3WO5Zgiscs9ZRAKTfOfvaHErSpLv4UqbAIEn513byHDe5K0Jg8TTAzTtlhUipmWK/fAIISJjVnpPUzgpZJxThjYLKsoJ91QUsgaKS0fqCU1/XznlaA5lrr11P0/PQyjZS+CJstFlhAxdA+y0j+YH78s6lkfZxTygTyEjHzOJGv8H8lEPJYPRM1BBOln+ep/gMEbfz1tYNS9vM9NleA5mJO8DMTQzuulAmYdW7vyeMkr3/gVEw5CG2YvV8hOgZjR5Vyhpt68adUu36P2Vim7o+FNJfHBO2sjyVw1sBk2alPsEi16+klOxbfXQOjsc+o4SyHMDMYlw2MBjQXEzRkCkwpARdJ8AlYZA9HYGmh9KorDsp0hrrpfGCUR4eSMSXsoLm4x6kEzf+YOZOJlQOmtFSm4DOszAvEyqGpRsB5X4ZIlMfpM4+TilE+SNBSJWg8j4SlgcUwHWvEE4Km+y2ULhsb7nSRb4Q2qXb9iRzn51jOzOoME7QrBO2DTCc8TuYgp9DPSydTZvkgKbNOtetPpZ/94zAdawTmuqlGwOFM0xu0BYKlno7K2qzdWpgpBKs2xmKUzed4nAlSZKYagWCSf6eDPBGOcUcAqwDhx3icFFq+ucnwOI8fop+17BL3XvDDZ+gAfZcNXxo4QAKH6V0taPIrQWNzHRmBDwhtkFNGBMPqlXewQs6HNjMq0DIZFeyVWTg+bajmeh6hAn2hC9oOCTY3F2kVd4jQb2yG6DI01Ag4Hdrs2aIlPE62vITvF7vrCNCiZfBvbicoxWK5/43SDpfUfjerQUpZiQ+Mis/+Oub/dI28TRqILpkjsFeTa9Fki1r/TDCWzD4t2q/Myn5mSgKdXBWkUkatMBN1QgFLY5jCURdAJmk01Qw+GZU5K61R38xzLoamnTO8SmOvHAGPeZwQyzqbumwQFVSSwKgYtw++VT4OSkrb38/vwT3SGGzhLIHz5pTphA30TzmJihVFl/qvB+VxDr9Ng5iRt5/7O9IYPjMqsEzuhDZ3jCU0eMH4cqyQGbVdzhTSZpSy8T8QtC0TNKUEXdhD84eIziQp6BAGzDQaOQIuhDY7lC0FRV4WZoenj3gHQXPAEUiocrG45ppqtvXrWBpwILSBV1y2/f2BeNq0NDDMPu0MVN63LZN5FKTxI3KUTfVz7K1NaFNm+WuletNQ/+9KabTFoKVoVyiyeYVlSkoQ8AMrMJ0G3Bp0qLn9HWqYH+mEbcHDabQiTzkfaAu+7xke51BRJ21/D6q+0Ag2iZ+WgRxn592sBl5zjbXjH5N+vipVN0xoQ0dQ1Xk+PE4Wj+JontEQMfStxOs3sMPsYLocJ6YMsEHwTntk66lTxGNvxYKqRevJ9IjSF3UNHcSTbUeFTbV9msaqzel9dJ6Jfv2hGrV8Zgv6U3YYQx4rcuf0H66G81/65T0/XgvavGUqRrEYQ9OmnmbFSbSCy9eblaAtrIU2mQPz0mYtYAWAq/WVbUEjIz5vbBF+lDx5m/skwx1ehR2NRp5y2FzprGjWBV4WWC/PhkZ7ICZpdaTqs/yo1M66bIZ2kLUrSLjxzVtv9H+iHrz+1kJN5wYZ8PsWtLZKOcMqLBjIX8zp0U5A+XX5mVLlTIKikfzSa2U6NsGM5l1Et8eigfzSazLdelbrc2pSBUEQBEEQBEEQBEEQBEEQBEEQBEEQ/lf8BxieT7LCF7SmAAAAAElFTkSuQmCC' },
    { name: 'Telegram', value: 10023, color: '#2DB253', icon: 'https://thumbnail.imgbin.com/6/5/25/imgbin-telegram-logo-computer-icons-telegram-logo-6mr1aVwnw6RH8pcuNk48pPZR4_t.jpg' },
  ];

  const maxValue = Math.max(...data.map(d => d.value)) * 1.3;
  const progress = 0.05; // Set a static progress value (e.g., 50%)

  return (
    <div className='flex flex-row items-center w-full justify-between gap-3'>
      <div className='w-1/2 bg-[#181818] rounded-2xl px-5'>
        <h2 className="text-[#969696] mb-5 mt-3">Platform engagements</h2>
        {data.map((item) => (
          <div key={item.name} className="my-5">
            <div className="flex items-center justify-between text-[#969696]">
              <div className="flex items-center">
                <img src={item.icon} alt={item.name} className="w-6 mr-2" />
                <p>{item.name}</p>
              </div>
              <p>{item.value.toLocaleString()}</p>
            </div>
            <div className="h-2 bg-[#3a3a3a] rounded-full overflow-hidden mt-2">
              <div
                className="h-full"
                style={{
                  width: `${(item.value / maxValue) * 100}%`,
                  backgroundColor: item.color,
                  transition: 'width 0.5s ease-in-out',
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-1/2 flex flex-col bg-[#181818] rounded-[20px] pt-4 pl-4">
      <p className='text-[#969696] w-[50%]'>Resolution turn around time</p>
        <div className="w-[140px] h-[140px] relative my-5 mx-auto">
          <CircularProgressbar
            value={progress * 500}
            text={`${progress}%`}
            styles={buildStyles({
              rotation: 0,
              strokeLinecap: 'butt',
              pathColor: '#FFFFFF',
              trailColor: '#333333',
              textColor: '#FFFFFF',
              textSize: '16px',
              pathTransitionDuration: 0.5,
              pathTransition: 'none',
              backgroundColor: '#333333',
            })}
          />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            {Array.from({ length: 60 }).map((_, index) => (
              <div
                key={index}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  transform: `rotate(${index * 6}deg) translate(-50%, -50%)`,
                  top: '50%',
                  left: '50%',
                  marginTop: '-45%',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
