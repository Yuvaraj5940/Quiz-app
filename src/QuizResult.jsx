import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import './web.scss';

export default function QuizResult(props) {
  return (
    <form>

      <div className="resp">
        <div className="resp__close">
          <Link to="/">
            <button
              type="button"
              className="body__header__close bg-purple-300"
            >
              <svg width="20" height="20">
                <path d="M10.9582 8.99996L16.9304 3.04163C17.192 2.7801 17.3389 2.42538 17.3389 2.05552C17.3389 1.68566 17.192 1.33094 16.9304 1.06941C16.6689 0.807877 16.3142 0.66095 15.9443 0.66095C15.5745 0.66095 15.2198 0.807877 14.9582 1.06941L8.99989 7.04163L3.04156 1.06941C2.78003 0.807877 2.42531 0.66095 2.05545 0.66095C1.68559 0.66095 1.33087 0.807877 1.06934 1.06941C0.807806 1.33094 0.660879 1.68566 0.660879 2.05552C0.660879 2.42538 0.807806 2.7801 1.06934 3.04163L7.04156 8.99996L1.06934 14.9583C0.939161 15.0874 0.835836 15.241 0.765324 15.4103C0.694812 15.5795 0.658508 15.7611 0.658508 15.9444C0.658508 16.1278 0.694812 16.3093 0.765324 16.4785C0.835836 16.6478 0.939161 16.8014 1.06934 16.9305C1.19845 17.0607 1.35207 17.164 1.52132 17.2345C1.69056 17.305 1.8721 17.3414 2.05545 17.3414C2.2388 17.3414 2.42034 17.305 2.58958 17.2345C2.75883 17.164 2.91245 17.0607 3.04156 16.9305L8.99989 10.9583L14.9582 16.9305C15.0873 17.0607 15.241 17.164 15.4102 17.2345C15.5795 17.305 15.761 17.3414 15.9443 17.3414C16.1277 17.3414 16.3092 17.305 16.4785 17.2345C16.6477 17.164 16.8013 17.0607 16.9304 16.9305C17.0606 16.8014 17.164 16.6478 17.2345 16.4785C17.305 16.3093 17.3413 16.1278 17.3413 15.9444C17.3413 15.7611 17.305 15.5795 17.2345 15.4103C17.164 15.241 17.0606 15.0874 16.9304 14.9583L10.9582 8.99996Z" fill="black" />
              </svg>
            </button>
          </Link>
        </div>
        <div>
          <svg width="147" height="155" viewBox="0 0 147 155" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M121.743 68.3608H24.938V152.049H121.743V68.3608Z" fill="url(#paint0_linear_14_516)" />
            <path d="M119.689 70.4233V149.986H27.0005V70.4233H119.689ZM123.814 66.2983H22.8755V154.111H123.814V66.2983Z" fill="#F0EBE6" />
            <path d="M27.0005 110.205H99.6005" stroke="#1A1F71" strokeWidth="4.125" strokeMiterlimit="10" />
            <path d="M105.178 3L3 47.8954L13.6066 72.035L115.784 27.1396L105.178 3Z" fill="url(#paint1_linear_14_516)" stroke="#F0EBE6" strokeWidth="4.125" strokeMiterlimit="10" />
            <path d="M119.417 130.03C130.366 130.03 139.242 121.154 139.242 110.205C139.242 99.2559 130.366 90.3801 119.417 90.3801C108.468 90.3801 99.5923 99.2559 99.5923 110.205C99.5923 121.154 108.468 130.03 119.417 130.03Z" fill="#F0EBE6" stroke="url(#paint2_linear_14_516)" strokeWidth="4.125" strokeMiterlimit="10" />
            <path d="M119.417 100.239V120.171" stroke="#25D366" strokeWidth="4.125" strokeMiterlimit="10" />
            <path d="M129.391 110.205H109.451" stroke="#25D366" strokeWidth="4.125" strokeMiterlimit="10" />
            <path d="M53.8048 93.2263C56.2798 95.7013 61.7248 110.205 61.7248 110.205C61.7248 110.205 47.2461 104.785 44.7463 102.285C44.1504 101.689 43.6778 100.982 43.3553 100.203C43.0328 99.4245 42.8668 98.59 42.8668 97.7473C42.8668 96.9046 43.0328 96.0702 43.3553 95.2917C43.6778 94.5131 44.1504 93.8057 44.7463 93.2098C45.9497 92.0064 47.5819 91.3303 49.2838 91.3303C50.1265 91.3303 50.9609 91.4963 51.7395 91.8188C52.518 92.1413 53.2254 92.614 53.8213 93.2098L53.8048 93.2263Z" stroke="#1A1F71" strokeWidth="4.125" strokeMiterlimit="10" />
            <path d="M69.6448 93.2263C67.1698 95.7013 61.7248 110.205 61.7248 110.205C61.7248 110.205 76.2035 104.785 78.7033 102.285C79.2992 101.689 79.7718 100.982 80.0943 100.203C80.4168 99.4245 80.5828 98.59 80.5828 97.7473C80.5828 96.9046 80.4168 96.0702 80.0943 95.2917C79.7718 94.5131 79.2992 93.8057 78.7033 93.2098C78.1074 92.614 77.4 92.1413 76.6215 91.8188C75.8429 91.4963 75.0085 91.3303 74.1658 91.3303C73.3231 91.3303 72.4887 91.4963 71.7101 91.8188C70.9316 92.1413 70.2242 92.614 69.6283 93.2098L69.6448 93.2263Z" stroke="#1A1F71" strokeWidth="4.125" strokeMiterlimit="10" />
            <path d="M53.5573 127.711L61.7248 110.205" stroke="#1A1F71" strokeWidth="4.125" strokeMiterlimit="10" />
            <path d="M69.8923 127.711L61.7248 110.205" stroke="#1A1F71" strokeWidth="4.125" strokeMiterlimit="10" />
            <path d="M131.858 64.4173L130.513 71.9413C130.47 72.1358 130.362 72.3097 130.207 72.4344C130.052 72.5591 129.859 72.627 129.659 72.627C129.46 72.627 129.267 72.5591 129.112 72.4344C128.957 72.3097 128.849 72.1358 128.806 71.9413L127.238 64.4586C126.892 62.5856 126.012 60.8523 124.706 59.4665C123.399 58.0808 121.72 57.1014 119.871 56.6458L112.619 55.0701C112.444 55.0141 112.292 54.904 112.183 54.7558C112.075 54.6075 112.017 54.4287 112.017 54.2451C112.017 54.0615 112.075 53.8827 112.183 53.7344C112.292 53.5861 112.444 53.4761 112.619 53.4201L119.821 51.6298C121.656 51.1164 123.304 50.0844 124.567 48.6576C125.83 47.2308 126.654 45.4698 126.941 43.5861L128.286 36.0703C128.329 35.8759 128.437 35.702 128.592 35.5773C128.747 35.4526 128.941 35.3846 129.14 35.3846C129.339 35.3846 129.532 35.4526 129.687 35.5773C129.842 35.702 129.951 35.8759 129.994 36.0703L131.561 43.5531C131.906 45.4276 132.784 47.1626 134.091 48.55C135.398 49.9373 137.078 50.9179 138.928 51.3741L146.18 52.9416C146.355 52.9976 146.507 53.1076 146.616 53.2559C146.724 53.4042 146.782 53.583 146.782 53.7666C146.782 53.9502 146.724 54.129 146.616 54.2773C146.507 54.4255 146.355 54.5356 146.18 54.5916L138.978 56.3901C137.145 56.9023 135.499 57.9319 134.236 59.3555C132.973 60.7792 132.148 62.5366 131.858 64.4173V64.4173Z" fill="url(#paint3_linear_14_516)" />
            <defs>
              <linearGradient id="paint0_linear_14_516" x1="54.2337" y1="162.708" x2="92.456" y2="57.6936" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1A1F71" />
                <stop offset="0.06" stopColor="#313A85" />
                <stop offset="0.14" stopColor="#51609F" />
                <stop offset="0.24" stopColor="#6D80B7" />
                <stop offset="0.34" stopColor="#839AC9" />
                <stop offset="0.46" stopColor="#95AFD8" />
                <stop offset="0.59" stopColor="#A1BDE2" />
                <stop offset="0.74" stopColor="#A8C5E8" />
                <stop offset="1" stopColor="#AAC8EA" />
              </linearGradient>
              <linearGradient id="paint1_linear_14_516" x1="52.1046" y1="78.8275" x2="66.6741" y2="-3.78799" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1A1F71" />
                <stop offset="0.06" stopColor="#313A85" />
                <stop offset="0.14" stopColor="#51609F" />
                <stop offset="0.24" stopColor="#6D80B7" />
                <stop offset="0.34" stopColor="#839AC9" />
                <stop offset="0.46" stopColor="#95AFD8" />
                <stop offset="0.59" stopColor="#A1BDE2" />
                <stop offset="0.74" stopColor="#A8C5E8" />
                <stop offset="1" stopColor="#AAC8EA" />
              </linearGradient>
              <linearGradient id="paint2_linear_14_516" x1="115.622" y1="131.762" x2="123.22" y2="88.6476" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1F8654" />
                <stop offset="0.02" stopColor="#1F8C55" />
                <stop offset="0.16" stopColor="#21A65B" />
                <stop offset="0.3" stopColor="#23BA60" />
                <stop offset="0.47" stopColor="#24C863" />
                <stop offset="0.67" stopColor="#25D065" />
                <stop offset="1" stopColor="#25D366" />
              </linearGradient>
              <linearGradient id="paint3_linear_14_516" x1="126.199" y1="72.0568" x2="132.576" y2="35.9301" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1F8654" />
                <stop offset="0.02" stopColor="#1F8C55" />
                <stop offset="0.16" stopColor="#21A65B" />
                <stop offset="0.3" stopColor="#23BA60" />
                <stop offset="0.47" stopColor="#24C863" />
                <stop offset="0.67" stopColor="#25D065" />
                <stop offset="1" stopColor="#25D366" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div>
          <h1 className=" headding text-4xl font-bold font-serif py-12 text-center">Results Of Fantasy Quiz</h1>
        </div>

        <div className="ss">
          <div className="ss__score flex bg-slate-100 w-full items-center justify-center py-2 border rounded-md">
            <p className="py-1 px-3">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="#EDE8E3" />
                <path d="M27.34 20.17C17.17 20.17 17.17 22.807 7 22.807V12.637C17.17 12.637 17.17 10 27.34 10V20.17Z" fill="#F0EBE6" stroke="url(#paint0_linear_14_448)" strokeWidth="0.716196" strokeMiterlimit="10" />
                <path d="M29.5516 22.3615C19.3816 22.3615 19.3816 25 9.21161 25V14.83C19.3816 14.83 19.3816 12.1916 29.5516 12.1916V22.3615Z" fill="url(#paint1_linear_14_448)" />
                <path d="M19.3801 20.9363C20.6728 20.9363 21.7207 19.8884 21.7207 18.5958C21.7207 17.3031 20.6728 16.2552 19.3801 16.2552C18.0875 16.2552 17.0396 17.3031 17.0396 18.5958C17.0396 19.8884 18.0875 20.9363 19.3801 20.9363Z" stroke="#F0EBE6" strokeWidth="0.716196" strokeMiterlimit="10" />
                <path d="M9.20874 22.6595C9.51665 22.6587 9.82169 22.7187 10.1064 22.836C10.3911 22.9532 10.6499 23.1255 10.868 23.3429C11.086 23.5603 11.2591 23.8185 11.3772 24.1029C11.4953 24.3872 11.5562 24.6921 11.5564 25" stroke="#F0EBE6" strokeWidth="0.716196" strokeMiterlimit="10" />
                <path d="M27.211 22.3472C27.2133 21.728 27.4609 21.1348 27.8996 20.6978C28.3382 20.2607 28.9323 20.0153 29.5515 20.0153" stroke="#F0EBE6" strokeWidth="0.716196" strokeMiterlimit="10" />
                <path d="M29.5515 14.5307C28.9308 14.5307 28.3355 14.2841 27.8965 13.8451C27.4576 13.4062 27.211 12.8109 27.211 12.1901" stroke="#F0EBE6" strokeWidth="0.716196" strokeMiterlimit="10" />
                <path d="M11.5564 14.883C11.5562 15.1909 11.4953 15.4957 11.3772 15.7799C11.259 16.0642 11.0859 16.3224 10.8679 16.5396C10.6498 16.7569 10.391 16.929 10.1063 17.0462C9.82159 17.1633 9.51658 17.2231 9.20874 17.2221" stroke="#F0EBE6" strokeWidth="0.716196" strokeMiterlimit="10" />
                <defs>
                  <linearGradient id="paint0_linear_14_448" x1="6.63904" y1="16.4028" x2="27.6981" y2="16.4028" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1F8654" />
                    <stop offset="0.02" stopColor="#1F8C55" />
                    <stop offset="0.16" stopColor="#21A65B" />
                    <stop offset="0.3" stopColor="#23BA60" />
                    <stop offset="0.47" stopColor="#24C863" />
                    <stop offset="0.67" stopColor="#25D065" />
                    <stop offset="1" stopColor="#25D366" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_14_448" x1="17.9778" y1="26.5456" x2="20.7825" y2="10.6446" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1F8654" />
                    <stop offset="0.02" stopColor="#1F8C55" />
                    <stop offset="0.16" stopColor="#21A65B" />
                    <stop offset="0.3" stopColor="#23BA60" />
                    <stop offset="0.47" stopColor="#24C863" />
                    <stop offset="0.67" stopColor="#25D065" />
                    <stop offset="1" stopColor="#25D366" />
                  </linearGradient>
                </defs>
              </svg>
            </p>
            <p className="flex flex-1">
              {' '}
              SCORE GAINED

            </p>
            <p className="px-5 font-bold">

              {props.score * (100 / props.Totalsr)}
              %
            </p>

          </div>
          <div className="ss__score flex bg-slate-100 w-full items-center justify-center py-2 border rounded-md">
            <p className="py-1 px-3">
              <svg className="h-9 w-9 fill-green-900 stroke-green-400 stroke-3 bg-gray-300 border rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" /></svg>
            </p>
            <p className="flex flex-1">
              {' '}
              CORRECT PREDICTIONS

            </p>
            <p className="px-5 font-bold">
              {' '}

              {props.score}
            </p>

          </div>
        </div>

        <div className="body__filter px-16 pt-9 pb-1">

          <button
            type="submit"
            className="btn rounded-md flex-1  text-base"
            onClick={() => {
              alert('Thanks For the Participations');
            }}
          >
            OKAY
          </button>

        </div>
      </div>
    </form>
  );
}
