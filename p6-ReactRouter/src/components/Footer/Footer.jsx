import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white border-y border-black">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-around">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAtFBMVEX///8REREAkswAAAAAiMju9foSlM0AisgODg78/Pz09PTq6ur5+fnJyckKCgrt7e28vLzc3NwAjsrj4+OSkpLFxcWysrKYmJhPT0+IiIjR0dGpqaltbW21tbV/f39oaGh1dXVfX1+goKAfHx83NzdERER9fH1CQkInJycxMTEYGBhXV1ctKyxhYWFLS0ujzObM4vDd6/VCodKFvd9ytNpPpdSw0umZx+PR5fIAgcVqsNm82ezMp2t1AAAP8klEQVR4nO1daWOiSBNup5IJoKAooIIHovGMmclc++7m//+vt6oBr0DTjHFsMj4fdkeDQD9UVdfVDWM33HDDDTfccMMNN9xwwx56x3SHUbc/QvSdyHPNTuPa96Qi7KA/sSDB9Olpmf4bNqPA1699e8rAMPsrJGW97Xt+PaalEQuUXveHzph4m47c5jXvUQ3Y0QK5GAQ+Y03T64a96U6kYPo8cDy3jgd5c/y46vrXvttrotNHqdl4ddYczp8ThqzaDqlaLkI6pDXGP47sa9/zddDwUPlCkxmtAaeE86MdsgWg7UmbIGH+CA+L/j597KBi9VzW7M4g5SSRomXKFoTPexbpr0unw3yUr/HfpY7+BsAxWLA6ECTo2gaZ9yhlJ6QjDduDA7VcRw0W1WBhXvf+/yD8Hqw9ZodHBqoGibx0UrISQppwcBDyNTGZO4OZe737/4PobGDq0ngPSTggi80gtl7JR+P0OJh6zF/A7OMrY2MOtSFr1Y6EKiYhnehiPYRR+gs4PRLFK2DmE0w+uKkPACLmLt9Shex0kmNivdsJGntDFp80PTYE6F5pGH8C9QWMWWeWRRWys5OTBRxoYSZZ9Pe1z/ow/bB+F+qXzwantmpHlkHHUJwTQKKF/BuWeBZvlXFjdFbQv+KALgfjGZ2BVh5VSA8PCz0Wm3RuwTz+w3WmINIvUKW78FS/4qAuBBPQCvVypIQPnR82JmXsgcU/LfhXqzyy8DcrozMF72qDuhAc6BFfucPekRXgfzx0WfF/5pR/9Sj4Fc2Lg9h9/TjY4OjnArHaWfTJjJG3wLVwUONf9UQU12CC3M6M6w3tvWGswE18zVxYsRht+KS44R8g5k9MVg3WTRt2fkfl0QGo20IVJLJW/NhH7jt5NMe15MjCadHVl/BB/HkfnnDgIhXkAvLMD54BkWaQFm4TsrYFZFEMzp6hdb0Rvh98WOAEXzTeGmz40WsrDXswzIm9iUHBj9HHRRO//QiTookiMyrmqoa+PQE0PhEymhITP3VeYLOiFZCZH1SfLR9dhhB48JvvLh2StQt0niGJgPri2XDA8xQomCEMrzbMd4GNcoVcWTAbzZdCu7UjKwmhuRvPnXNH6J0t6RCcA/BCg2rbrTrMSIuSeNcVCRdJSJyPiX3MaEeWyOBp8SHocZBsTao8JzZqa1IiC5K6ckfki8f5q13CgYKcWA0D0a9iWWpaGpfNR6huoLgAI0iDYg6BRkHodsMZDZqyVbGF02A17rZEP0oyhLM0X7iuVbV4HYJtEld7u2uDlmvoOUOxVdMQ8T+sfXkn6ydxpJ3Ml1oNAiNx1yqHALwm2vT46etcutCX3wxWucPX4A3E4WQcEraAc22h3fL9aia4bDTU5C/yR+3juHFkPuUUWD0zgCFqtv3ATxtnGnXf649FhCX1nzo9EXh22RjlthFBFes+0yXNUZZGY28SawePfHzKFlIyHmamiDutMIev9ITUOLLlv0WZXaEbUb0UxAAMPvvzdMASakdkHaeK0TAN0qpp4+X1y/cfP4/NtB9mWDr0djlQ+EZJ+t5A0UJxfrzw0N4dLgR1SKf2LXfhD/vSDmY4C6ZBzM3Lrx+f7x7aiLs3c9rwtM6Yni+C7v7ENpot14fokiN7fzTQVK1T1eOFwNh/iBIRMmE35qfYxrx8/4w8fYrxkHFK//GIrsT/7BwR0+LRUlgxbysEHb3RWFM4MXGUS+aHD9JPa/RTLnr6F2Tq0x5ZZOGPZnvtPZUeTg+ZevLkq6WIPgTorVs8LRyPgPsPwc50xV55UiW9/37EVC5ZPDmfcLU5+r71yFVxyg0buGalQurVjD1ZWmzcybuOHzUXp9iK8SIEPJJh1t9QlU8Wa2y5cCU56AReMo2M0x4vDBKr48h7YAdkavkH4xEsix68wUWMx8sBt/hck768pUpAFqOiPZ5lvvtsdAFiHQ9i3xQvPGpUyDWFLfoG1jL9OIfEC8KxUPGGJq1aXMB5+ZxBlZAs1pxCyjnq+By4u8B4lI4RQNjsUh7Mgao0jXTBoNwoTNNJaackcYDSIBd1RsL2z10WVWKyeD4mNlr2lotZ/FQojHTopBhQ9ljKpurQSQ1it+Ag8jjwHxY8DYwH/nzI5qqALJ6mhp77zM29FgvRBqwg/iv6D2QGqlEcc6AxSE2tk34ZG3c+nBBiLXppZ6qgBFncp03TEfETcab7LGkPYFER0dJhvu9s3E/xKA2xbfGSf3zNUUEZsg6yp7Epbx4klLmH5weV8EwDMA7qMXvDNYyzTxSRbPH/rwKuisnaVTHSlNYORh9iX2XXOqgyYKwft8ymD90m24LGnSdthFxJkJVUE7WTFIM9SDIU0OmC+oukXLBP8sB7w8XIRbXWulgH5chK/NqjCoW52YWPMDYqEE/3Zm9a9aC386cHwOsxL2KupMjS0QGxDoPA1tNhpI2zzDT3t4qgDl7rTR4Uask8Tn49hm33udNgCbL4BAu71QPBScoLIh9UX1rQhayul8Rw4fB4LfVbAVdyZJEDkQSJZNVPsoMYxR8ERWpiPW6+5YoMcZ8HhxpFuD+KBEuSLAzWeaqmE2blncHvKh5O2+TgZJDFDRe1JLQKjXsJsmwKB81JdrUI5nXFaxcOsGV+XTDOBhbKlTRZVDDUcgtrwKbjS471bEzD06U2x/ePhv77O5JliOqKpIcXHeyZqENL2JkwKPYaSpEl7LCBka30fBiAvhHdPrpYPyW4kicrb/kFwVozpXOAg0X2SpuEqwlj/8vLyvwmWULRqo9nFxzsuYC+Kbp5X8LFKklWpqOSXs/zFK5Oo40QdJ5R8/aLlGCVIOttJ8ABWWFTYedhmOm+7+49kPFHy5Ll5l9QA6bwisQ+CE2WwRoyU2E5skQmHoxe72KDPRezcV0gWHjfv+S0sBRZoeCSKntaEAmUgrRQzryXI0swpUBkKmvhm0L7jk6WLqmFpch6u+B8f8mBrWz/sg+d/LmJepBfJbWwFFl8SXU2rCWD4FKjPRNefhQdLwqQnAtLkpXvl9J0qKoP74BgaqJH/FmSq3Jkvc3M7i+q97aXGu2ZEAY76B7ey5qscmQJliJAZ66q7/CYnSVN75u9ymphObJET8jsry802HMx69uC+2bsy4XIEhjKYaSqo1WL8n0eTZNL+/0OWZP8vSICT9U8PET5tpZ6/6RSWb9BVr4PD92Wql4pRF7+bW/l/feyZOUvdaWUkaL9IRDk55SpcUZaC0uSlb/UFfq+on1aOplTEVn/Psji31IXzvdKK0zWvTT0h8+yaN9XkiwGnlgNS0Daff10d19JNWQ0Uefedrl6Zwmyigy8qmRFw/zbLhd2yJPVFroOjqtqj7co97fvipeCPFnfRDULenyK9v+t+r4w3CkBabLaPzDMyg93PGXDnUUoSsGXUgd5sr6IA2lHVbImPV1032VOJU/WKxM9IXt02s2sCoSVsHLb6kiThZ6DqEhiTCaXGu2ZCIBp+ZnSUj2L0mR93u9cnXVRtla1VdKFen4PjVUqCydLFtn3/AyNpjFl+7s74Au2byqVK5GumX0V2veNup2SDfDyvdJaqf2aZMm6ixcv5l3S8VXN0DA0EKLiQZmAR5Ks9n/izYDcQFXPAeOOpUAntDL3LdtA8lWUgUffTuFuNnyOor19S+ihrBoKtbCmcI2V6ve2yMKXcHnkyGr/I9wREDa6yhvbiUoWtVoJYytH1oMubs8KXFUTNITNRtDTUiuhE1Jktb/zdbH517Pn1gUHey66IEgBlMk8SJFF2/vU8i+HM8o0vNxYz4YNvrDX2ik+RQyplQX/UBer4GrjpsomCy2II5qdNOlMnAxZGBbmv4WAyGoFqmb+YoSirqNaTXqRtwRZd1/Fu3Ki0vdUzc/EMIXOQ60mOzsVk0XOe0P4YHCyUbXtLwGIOmnSvWiKISFZTLhggLTQU7VYkWIEyS5WeUOQS5kUkvXwIlwvQFdis03xha4KH0xBMq4mq4hFZD38KlhsiOaxqf6WY09b0SqLWrJdWxEKyCJ3VPjWFHoofXUzDikCMISm5HQHumyIySLjXrAjPxrHCuyvooMj2py7Jhf1CMlqf2PiOIcu4g5VjgtToPQ/FwykeEYXkdX+yYSLUAiWxaaqm3dCnfbqEI5EIrMl2i6KdLDwCp6p7EKUIwxAsEIkGUvRPJVP1h3Zdr/gzTQW+g3V2Ku0A4HQMeVsFWhiLlkPr4x0sOAtPiRYKi+8P8C40GoVWvkcstqf71lBRMgFS6OdUquBJjiC/oOULaH9zSaLq6BoNWZ6brNVDYtF6INe8GYhGtFa8IrQLLIevmGIw5pF9pA3zpXJ918ZDRgLMzUxLMFq77dkPXz6RX/wil7QRmQ1nSr4WCk88EWVi92oVnnCdUrWw6cv9HVd9OrN3VmdpsIVsAwsaoVv2ouFK8zugDgiq3337ZV/25cQK+pAeVQ/KjxEB/rCzNxeDMDJomtPVvvh83eaApkeyVBFEXRQFbchRRdsUTHhiK7RWwNDZLXb7YeH/7688C8MR/xamf3pHKMam98eYqZJvMUxpet5eLLQ7d9P377998/rffLRnUhShWYQw4c/PthzUYetOGd6TBdMvJwJrDkciN7qdAwNdKc6LtYeHnjFrukRX+swMo+y5oYfzJ/kmaKz+L58cVIlDKAj4z/sYcVvvJptxoPBeLOIP8kKZ8xVt1HVl4WtoOCtl5nQEs4sOSN1xNWYzdSuq+bDgJm0kX8P4OUmIIih1IaNIVpxKPduXNGbJ5VubhCjBXP+no8/AQtYpGwjtxQCjNKe/ghbFjS8CtRzhHBwJv8TbAEYrep57qfoI1uzi7MFoA9LLpZVEg5qokwG4iyulqjwH4AriqnDwvfXn8nVM7/Ih0AAPRxMeR9TmquQhdVK94ngwko3y4R4ZWBBgGqueNtaGXQAfGN5EbYAOs2Sy2RVh/EIXdSV91dFjBFa8KTs0q/fxAg29Dbpd6YKPHwEH2IaPIYLQO/FLpVyEUOD54Yt05NTQRgblAFfezfhAoya+zCrUIWwFDwaX/d9dBEwEETm1d2V+2wYE1h06AXJ51M1aeLJHj+qWMUw1xDqzfF5dAE821RxVb4b+WxEqEC6kfkSJmmp6pAyV7IwURa6g3QZerdU2WbPFPSbRNVI0V0i3x0NpGtrM7NXki8LYNFidZTKueILTd4X0RSmgc6CZ2m+qEgWGWw4A+hWtILz+6AXok1arNEaF5YHNTpiM2wydwDwWOGaxBkwIpSSntdknWC8zq6oJjXEbWQzo4XsLp2PFgaWQCciPRwNO0z3PWe7hBNMJ33PbLBmq49srqLKFgXfC4Y7Io4e54GPE5xu1G3fN03Tt+tGg9odvH6P90G0/iqbLkDD7YZTLkrL3mDUd7rdbn802Dzxr7Rxt/W3+AnS0G1z2J1vn59iQ/X0OAm7nmv/dTPfDTfccMMNN9xwww03CPB/HggHF+DBzsgAAAAASUVORK5CYII="
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/hiteshchoudhary"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/github" className="hover:underline">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-black sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2025
                        <a href="https://portfolio-webiste-build.vercel.app/" className="hover:underline">
                            Vinayak-Suryavanshi
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
