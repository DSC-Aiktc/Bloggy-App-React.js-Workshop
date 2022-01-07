import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <svg className='logo' viewBox="0 0 476 228" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M159.142 72.2554C164.153 73.6538 168.406 75.2562 171.902 77.0625C175.457 78.8688 178.428 80.7625 180.817 82.7437C183.265 84.6665 185.188 86.6476 186.586 88.687C187.984 90.7264 189.062 92.6784 189.82 94.543C190.577 96.4076 191.043 98.1556 191.218 99.7871C191.451 101.36 191.568 102.701 191.568 103.808C191.568 107.886 190.781 111.528 189.208 114.733C187.693 117.938 185.625 120.764 183.002 123.211C180.38 125.658 177.321 127.727 173.825 129.417C170.387 131.106 166.775 132.476 162.987 133.524C159.2 134.632 155.325 135.418 151.363 135.884C147.401 136.409 143.642 136.671 140.088 136.671C134.319 136.671 128.347 136.088 122.17 134.923C116.052 133.757 109.847 131.864 103.554 129.242C102.155 128.659 101.456 127.639 101.456 126.183C101.456 125.192 101.806 124.405 102.505 123.823C103.204 123.182 103.962 122.861 104.777 122.861C105.185 122.861 105.622 122.949 106.088 123.124C111.507 125.396 117.072 127.115 122.782 128.28C128.493 129.446 134.232 130.028 140 130.028C147.867 130.028 154.626 129.271 160.278 127.756C165.93 126.241 170.562 124.26 174.175 121.812C177.846 119.307 180.555 116.51 182.303 113.422C184.051 110.275 184.925 107.1 184.925 103.895C184.925 100.341 183.935 97.0485 181.954 94.0186C180.031 90.9886 177.263 88.2791 173.65 85.8901C170.096 83.5011 165.813 81.4618 160.802 79.772C155.791 78.0822 150.227 76.8294 144.108 76.0137C140.088 76.7129 136.184 77.2082 132.396 77.4995C128.609 77.7909 125.113 77.9365 121.908 77.9365H119.898C119.49 77.9365 119.111 77.9074 118.762 77.8491C114.566 87.9295 109.555 96.6406 103.729 103.982C97.96 111.324 91.7835 117.413 85.1992 122.25C78.6732 127.028 71.9432 130.582 65.0093 132.913C58.1336 135.185 51.5202 136.321 45.1689 136.321C38.5846 136.321 32.5247 135.389 26.9893 133.524C21.512 131.718 16.7923 129.125 12.8301 125.746C8.86784 122.366 5.77962 118.287 3.56543 113.509C1.35124 108.673 0.244141 103.283 0.244141 97.3398C0.244141 91.1634 1.43864 84.783 3.82764 78.1987C6.2749 71.5562 9.88753 64.8262 14.6655 58.0088C19.2104 51.5993 24.2507 45.8599 29.7861 40.7905C35.3216 35.6629 41.1193 31.1763 47.1792 27.3306C53.2974 23.4849 59.5903 20.1927 66.0581 17.4541C72.5259 14.7155 78.9354 12.4722 85.2866 10.7241C91.6961 8.97607 97.9308 7.72331 103.991 6.96582C110.109 6.15007 115.848 5.74219 121.209 5.74219C125.579 5.74219 129.745 5.88786 133.708 6.1792C137.67 6.47054 141.457 6.90755 145.07 7.49023C147.167 5.15951 148.857 3.49886 150.139 2.5083C151.421 1.45947 152.149 0.87679 152.324 0.760254C153.023 0.410645 153.635 0.23584 154.16 0.23584C154.975 0.23584 155.704 0.468913 156.345 0.935059C156.986 1.4012 157.306 2.07129 157.306 2.94531C157.306 4.11068 156.898 5.10124 156.083 5.91699C155.267 6.67448 154.16 7.72331 152.761 9.06348C163.424 11.6855 171.582 15.6478 177.234 20.9502C182.886 26.1943 185.712 32.6912 185.712 40.4409C185.712 44.6945 185.013 48.5111 183.614 51.8906C182.216 55.2702 180.293 58.2419 177.846 60.8057C175.457 63.3695 172.631 65.6128 169.368 67.5356C166.163 69.4002 162.754 70.9735 159.142 72.2554ZM144.196 69.3711C146.76 68.9049 149.382 68.2931 152.062 67.5356C154.801 66.7782 157.452 65.875 160.016 64.8262C162.638 63.7191 165.114 62.4372 167.445 60.9805C169.776 59.4655 171.786 57.7174 173.476 55.7363C175.224 53.6969 176.593 51.4245 177.583 48.9189C178.632 46.4134 179.157 43.5583 179.157 40.3535C179.157 33.8275 176.447 28.4377 171.028 24.1841C165.609 19.9305 157.831 16.784 147.692 14.7446C144.778 18.3573 142.04 22.3486 139.476 26.7188C136.912 31.0889 134.552 35.6338 132.396 40.3535C130.241 45.015 128.289 49.7638 126.541 54.6001C124.851 59.3781 123.452 64.0104 122.345 68.4971C123.511 68.4388 124.589 68.4097 125.579 68.4097C126.57 68.4097 127.415 68.4097 128.114 68.4097C130.386 68.4097 132.863 68.4971 135.543 68.6719C138.223 68.7884 141.108 69.0215 144.196 69.3711ZM140.263 13.521C137.291 13.1131 134.232 12.8218 131.085 12.647C127.939 12.4722 124.647 12.3848 121.209 12.3848C116.081 12.3848 110.633 12.7635 104.865 13.521C99.0962 14.2785 93.182 15.473 87.1221 17.1045C81.0622 18.736 74.944 20.8628 68.7676 23.4849C62.6494 26.0487 56.6769 29.166 50.8501 32.8369C45.0815 36.4495 39.5752 40.674 34.3311 45.5103C29.0869 50.3465 24.3089 55.7946 19.9971 61.8545C15.627 68.0309 12.3348 74.12 10.1206 80.1216C7.90641 86.1232 6.79932 91.8335 6.79932 97.2524C6.79932 102.322 7.70247 106.867 9.50879 110.887C11.3734 114.908 13.9954 118.316 17.375 121.113C20.7546 123.852 24.8042 125.979 29.5239 127.494C34.2437 128.95 39.4587 129.679 45.1689 129.679C50.8792 129.679 56.8226 128.659 62.999 126.62C69.1755 124.522 75.2062 121.346 81.0913 117.093C86.9764 112.781 92.5701 107.362 97.8726 100.836C103.175 94.2516 107.807 86.4437 111.77 77.4121C110.721 77.4121 109.643 77.1208 108.536 76.5381C107.429 75.8971 106.875 74.9066 106.875 73.5664C106.875 72.168 107.545 71.1774 108.885 70.5947C110.225 69.9538 112.323 69.4294 115.178 69.0215C116.751 64.2435 118.354 59.4655 119.985 54.6875C121.617 49.9095 123.423 45.1898 125.404 40.5283C127.385 35.8669 129.57 31.2928 131.959 26.8062C134.348 22.2612 137.116 17.8328 140.263 13.521ZM254.323 108.79C253.682 110.13 252.866 111.732 251.875 113.597C250.943 115.403 249.865 117.297 248.642 119.278C247.418 121.259 246.049 123.24 244.534 125.221C243.019 127.144 241.358 128.892 239.552 130.465C237.804 131.98 235.91 133.204 233.871 134.136C231.889 135.127 229.763 135.622 227.49 135.622C223.994 135.622 220.993 134.544 218.488 132.388C215.982 130.232 213.855 127.406 212.107 123.91C210.359 120.414 208.932 116.452 207.825 112.023C206.776 107.537 205.96 102.992 205.377 98.3887C204.795 93.7272 204.387 89.2114 204.154 84.8413C203.979 80.4712 203.892 76.5964 203.892 73.2168C203.892 68.3223 204.037 63.2529 204.329 58.0088C204.678 52.7646 205.203 47.637 205.902 42.626C206.601 37.6149 207.475 32.866 208.524 28.3794C209.631 23.8927 210.913 19.9596 212.37 16.5801C213.885 13.2005 215.604 10.5202 217.526 8.53906C219.449 6.55794 221.634 5.56738 224.082 5.56738C226.004 5.56738 227.723 6.03353 229.238 6.96582C230.812 7.83984 232.123 9.29655 233.171 11.3359C234.22 13.3753 235.036 16.0265 235.619 19.2896C236.201 22.5526 236.493 26.5439 236.493 31.2637C236.493 37.0905 235.881 43.1213 234.657 49.356C233.434 55.5324 231.773 61.7671 229.675 68.0601C227.578 74.353 225.101 80.646 222.246 86.939C219.391 93.1737 216.332 99.2627 213.069 105.206C214.526 112.606 216.478 118.433 218.925 122.687C221.372 126.882 224.315 128.979 227.752 128.979C230.083 128.979 232.326 128.076 234.482 126.27C236.638 124.405 238.619 122.22 240.426 119.715C242.232 117.209 243.805 114.675 245.146 112.111C246.544 109.489 247.622 107.391 248.379 105.818C248.671 105.235 249.079 104.798 249.603 104.507C250.127 104.157 250.71 103.982 251.351 103.982C252.342 103.982 253.128 104.332 253.711 105.031C254.352 105.73 254.672 106.517 254.672 107.391C254.672 107.741 254.556 108.207 254.323 108.79ZM210.534 73.6538C210.534 77.383 210.622 80.9665 210.796 84.4043C210.971 87.8421 211.204 91.1343 211.496 94.2808C213.943 89.561 216.274 84.55 218.488 79.2476C220.702 73.8869 222.654 68.4971 224.344 63.0781C226.034 57.6009 227.374 52.182 228.364 46.8213C229.413 41.4023 229.938 36.2456 229.938 31.3511C229.938 24.4754 229.384 19.5518 228.277 16.5801C227.17 13.6084 225.684 12.1226 223.819 12.1226C222.596 12.1226 221.401 12.9674 220.236 14.6572C219.129 16.347 218.08 18.6486 217.089 21.562C216.099 24.4754 215.196 27.9132 214.38 31.8755C213.564 35.8377 212.865 40.0913 212.282 44.6362C211.758 49.1812 211.321 53.93 210.971 58.8828C210.68 63.8356 210.534 68.7593 210.534 73.6538ZM288.759 123.386C287.303 123.386 286.021 123.269 284.914 123.036C284.04 124.784 282.991 126.416 281.767 127.931C280.543 129.387 279.116 130.669 277.484 131.776C275.911 132.883 274.134 133.757 272.153 134.398C270.172 135.039 268.016 135.36 265.685 135.36C262.946 135.36 260.441 134.865 258.168 133.874C255.896 132.942 253.915 131.631 252.225 129.941C250.535 128.193 249.224 126.124 248.292 123.735C247.36 121.288 246.894 118.608 246.894 115.694C246.894 111.965 247.564 108.731 248.904 105.993C250.244 103.196 251.788 100.894 253.536 99.0879C255.284 97.2233 257.032 95.854 258.78 94.98C260.528 94.0477 261.839 93.5815 262.713 93.5815C263.704 93.5815 264.432 93.8438 264.898 94.3682C265.423 94.8926 265.685 95.5918 265.685 96.4658C265.685 97.4564 265.365 98.2139 264.724 98.7383C264.141 99.2044 263.383 99.6706 262.451 100.137C261.519 100.603 260.528 101.273 259.479 102.147C258.431 102.963 257.44 104.012 256.508 105.293C255.634 106.575 254.905 108.09 254.323 109.838C253.74 111.586 253.449 113.538 253.449 115.694C253.449 117.617 253.74 119.424 254.323 121.113C254.905 122.745 255.75 124.172 256.857 125.396C257.965 126.561 259.276 127.494 260.791 128.193C262.306 128.834 263.995 129.154 265.86 129.154C269.181 129.154 271.92 128.397 274.076 126.882C276.29 125.309 277.98 123.327 279.145 120.938C275.707 119.132 272.881 116.568 270.667 113.247C268.453 109.926 267.346 106.197 267.346 102.06C267.346 98.7383 268.132 96.0288 269.706 93.9312C271.337 91.8335 273.464 90.7847 276.086 90.7847C277.659 90.7847 279.145 91.1634 280.543 91.9209C281.942 92.6784 283.166 93.8729 284.214 95.5044C285.321 97.1359 286.195 99.2336 286.836 101.797C287.477 104.361 287.798 107.42 287.798 110.975C287.798 112.839 287.565 114.791 287.099 116.831C287.448 116.889 287.798 116.918 288.147 116.918C288.497 116.918 288.876 116.918 289.284 116.918C291.265 116.918 293.042 116.685 294.615 116.219C296.188 115.753 297.616 115.053 298.898 114.121C300.18 113.189 301.316 111.994 302.307 110.538C303.355 109.081 304.346 107.391 305.278 105.468C305.453 105.119 305.832 104.798 306.415 104.507C306.997 104.157 307.58 103.982 308.163 103.982C308.92 103.982 309.619 104.303 310.26 104.944C310.959 105.527 311.309 106.313 311.309 107.304C311.309 107.77 311.193 108.294 310.959 108.877C310.726 109.401 310.493 109.897 310.26 110.363C309.27 112.111 308.104 113.801 306.764 115.432C305.482 117.005 303.938 118.404 302.132 119.627C300.384 120.793 298.403 121.725 296.188 122.424C293.974 123.124 291.498 123.444 288.759 123.386ZM273.813 101.36C273.813 102.467 273.959 103.633 274.25 104.856C274.542 106.08 274.979 107.304 275.562 108.527C276.202 109.693 276.96 110.829 277.834 111.936C278.766 112.985 279.844 113.888 281.068 114.646C281.243 113.422 281.33 112.227 281.33 111.062C281.33 109.489 281.214 107.886 280.98 106.255C280.747 104.623 280.398 103.138 279.932 101.797C279.524 100.399 278.999 99.2918 278.358 98.4761C277.717 97.6021 276.96 97.165 276.086 97.165C275.736 97.165 275.27 97.4272 274.688 97.9517C274.105 98.4761 273.813 99.6123 273.813 101.36ZM336.743 141.565C347.698 127.29 355.302 115.432 359.555 105.993C359.847 105.352 360.225 104.886 360.691 104.594C361.216 104.245 361.799 104.07 362.439 104.07C363.43 104.07 364.246 104.419 364.887 105.119C365.528 105.76 365.848 106.517 365.848 107.391C365.848 107.799 365.761 108.207 365.586 108.615C363.022 114.442 359.38 120.938 354.661 128.105C349.941 135.272 343.968 143.372 336.743 152.403C336.743 156.074 336.772 159.745 336.831 163.416C336.889 167.087 336.918 171.107 336.918 175.478C336.918 179.848 336.801 184.16 336.568 188.413C336.394 192.725 336.044 196.804 335.52 200.649C334.995 204.553 334.267 208.137 333.334 211.4C332.46 214.721 331.295 217.576 329.838 219.965C328.44 222.413 326.721 224.306 324.682 225.646C322.701 227.045 320.341 227.744 317.602 227.744C313.698 227.744 310.697 226.258 308.6 223.287C306.502 220.315 305.453 216.09 305.453 210.613C305.453 207.7 305.715 204.524 306.24 201.086C306.822 197.707 307.638 194.211 308.687 190.598C309.736 186.986 310.989 183.315 312.445 179.585C313.96 175.915 315.621 172.331 317.427 168.835C319.234 165.339 321.186 161.988 323.283 158.784C325.439 155.579 327.712 152.666 330.101 150.043C330.159 145.965 330.188 141.915 330.188 137.895C330.246 133.874 330.334 130.174 330.45 126.794C328.702 129.009 326.604 130.757 324.157 132.039C321.768 133.32 319.379 133.961 316.99 133.961C314.951 133.961 313.086 133.583 311.396 132.825C309.765 132.009 308.367 130.902 307.201 129.504C306.036 128.047 305.133 126.357 304.492 124.435C303.851 122.512 303.53 120.414 303.53 118.142C303.53 113.597 304.288 109.605 305.803 106.167C307.376 102.671 309.357 99.758 311.746 97.4272C314.135 95.0965 316.757 93.3485 319.612 92.1831C322.526 91.0177 325.323 90.4351 328.003 90.4351C329.809 90.4351 331.47 90.6681 332.985 91.1343C334.5 91.6004 335.782 92.1248 336.831 92.7075C337.938 93.2902 338.783 93.8438 339.365 94.3682C339.948 94.8926 340.268 95.1839 340.327 95.2422C340.968 95.9414 341.288 96.728 341.288 97.6021C341.288 98.4761 340.968 99.2627 340.327 99.9619C339.686 100.603 338.928 100.923 338.054 100.923C337.238 100.923 336.452 100.603 335.694 99.9619C335.461 99.7871 335.141 99.554 334.733 99.2627C334.383 98.9131 333.888 98.5635 333.247 98.2139C332.664 97.8643 331.936 97.5729 331.062 97.3398C330.246 97.1068 329.256 96.9902 328.09 96.9902C326.342 96.9902 324.419 97.3981 322.322 98.2139C320.224 98.9714 318.272 100.195 316.466 101.885C314.66 103.575 313.145 105.76 311.921 108.44C310.697 111.062 310.085 114.238 310.085 117.967C310.085 120.764 310.697 123.036 311.921 124.784C313.145 126.474 315.038 127.319 317.602 127.319C318.826 127.319 320.108 126.969 321.448 126.27C322.846 125.571 324.186 124.493 325.468 123.036C326.75 121.579 327.857 119.744 328.79 117.53C329.78 115.316 330.479 112.694 330.887 109.664C331.004 108.848 331.382 108.178 332.023 107.653C332.664 107.071 333.422 106.779 334.296 106.779C335.286 106.779 336.044 107.129 336.568 107.828C337.151 108.527 337.442 109.314 337.442 110.188C337.442 110.246 337.413 111.149 337.355 112.897C337.297 114.587 337.238 116.86 337.18 119.715C337.122 122.57 337.035 125.891 336.918 129.679C336.86 133.408 336.801 137.37 336.743 141.565ZM330.101 160.707C327.362 164.494 324.886 168.602 322.671 173.03C320.457 177.517 318.563 182.033 316.99 186.578C315.417 191.123 314.193 195.522 313.319 199.775C312.504 204.087 312.096 207.933 312.096 211.312C312.096 213.468 312.271 215.187 312.62 216.469C313.028 217.751 313.494 218.742 314.019 219.441C314.601 220.14 315.213 220.606 315.854 220.839C316.553 221.072 317.194 221.189 317.777 221.189C319.583 221.189 321.156 220.461 322.497 219.004C323.837 217.547 324.973 215.595 325.905 213.148C326.838 210.759 327.595 207.991 328.178 204.845C328.76 201.698 329.197 198.435 329.489 195.056C329.78 191.734 329.984 188.413 330.101 185.092C330.217 181.771 330.275 178.711 330.275 175.915C330.275 173.409 330.275 170.903 330.275 168.398C330.275 165.892 330.217 163.329 330.101 160.707ZM391.282 141.565C402.237 127.29 409.841 115.432 414.094 105.993C414.386 105.352 414.764 104.886 415.23 104.594C415.755 104.245 416.338 104.07 416.979 104.07C417.969 104.07 418.785 104.419 419.426 105.119C420.067 105.76 420.387 106.517 420.387 107.391C420.387 107.799 420.3 108.207 420.125 108.615C417.561 114.442 413.919 120.938 409.2 128.105C404.48 135.272 398.507 143.372 391.282 152.403C391.282 156.074 391.311 159.745 391.37 163.416C391.428 167.087 391.457 171.107 391.457 175.478C391.457 179.848 391.34 184.16 391.107 188.413C390.933 192.725 390.583 196.804 390.059 200.649C389.534 204.553 388.806 208.137 387.874 211.4C387 214.721 385.834 217.576 384.377 219.965C382.979 222.413 381.26 224.306 379.221 225.646C377.24 227.045 374.88 227.744 372.141 227.744C368.237 227.744 365.236 226.258 363.139 223.287C361.041 220.315 359.992 216.09 359.992 210.613C359.992 207.7 360.254 204.524 360.779 201.086C361.361 197.707 362.177 194.211 363.226 190.598C364.275 186.986 365.528 183.315 366.984 179.585C368.499 175.915 370.16 172.331 371.966 168.835C373.773 165.339 375.725 161.988 377.822 158.784C379.978 155.579 382.251 152.666 384.64 150.043C384.698 145.965 384.727 141.915 384.727 137.895C384.785 133.874 384.873 130.174 384.989 126.794C383.241 129.009 381.144 130.757 378.696 132.039C376.307 133.32 373.918 133.961 371.529 133.961C369.49 133.961 367.625 133.583 365.936 132.825C364.304 132.009 362.906 130.902 361.74 129.504C360.575 128.047 359.672 126.357 359.031 124.435C358.39 122.512 358.069 120.414 358.069 118.142C358.069 113.597 358.827 109.605 360.342 106.167C361.915 102.671 363.896 99.758 366.285 97.4272C368.674 95.0965 371.296 93.3485 374.151 92.1831C377.065 91.0177 379.862 90.4351 382.542 90.4351C384.348 90.4351 386.009 90.6681 387.524 91.1343C389.039 91.6004 390.321 92.1248 391.37 92.7075C392.477 93.2902 393.322 93.8438 393.904 94.3682C394.487 94.8926 394.807 95.1839 394.866 95.2422C395.507 95.9414 395.827 96.728 395.827 97.6021C395.827 98.4761 395.507 99.2627 394.866 99.9619C394.225 100.603 393.467 100.923 392.593 100.923C391.778 100.923 390.991 100.603 390.233 99.9619C390 99.7871 389.68 99.554 389.272 99.2627C388.922 98.9131 388.427 98.5635 387.786 98.2139C387.203 97.8643 386.475 97.5729 385.601 97.3398C384.785 97.1068 383.795 96.9902 382.629 96.9902C380.881 96.9902 378.958 97.3981 376.861 98.2139C374.763 98.9714 372.811 100.195 371.005 101.885C369.199 103.575 367.684 105.76 366.46 108.44C365.236 111.062 364.625 114.238 364.625 117.967C364.625 120.764 365.236 123.036 366.46 124.784C367.684 126.474 369.577 127.319 372.141 127.319C373.365 127.319 374.647 126.969 375.987 126.27C377.385 125.571 378.725 124.493 380.007 123.036C381.289 121.579 382.396 119.744 383.329 117.53C384.319 115.316 385.018 112.694 385.426 109.664C385.543 108.848 385.922 108.178 386.562 107.653C387.203 107.071 387.961 106.779 388.835 106.779C389.826 106.779 390.583 107.129 391.107 107.828C391.69 108.527 391.981 109.314 391.981 110.188C391.981 110.246 391.952 111.149 391.894 112.897C391.836 114.587 391.778 116.86 391.719 119.715C391.661 122.57 391.574 125.891 391.457 129.679C391.399 133.408 391.34 137.37 391.282 141.565ZM384.64 160.707C381.901 164.494 379.425 168.602 377.21 173.03C374.996 177.517 373.103 182.033 371.529 186.578C369.956 191.123 368.732 195.522 367.858 199.775C367.043 204.087 366.635 207.933 366.635 211.312C366.635 213.468 366.81 215.187 367.159 216.469C367.567 217.751 368.033 218.742 368.558 219.441C369.14 220.14 369.752 220.606 370.393 220.839C371.092 221.072 371.733 221.189 372.316 221.189C374.122 221.189 375.695 220.461 377.036 219.004C378.376 217.547 379.512 215.595 380.444 213.148C381.377 210.759 382.134 207.991 382.717 204.845C383.299 201.698 383.736 198.435 384.028 195.056C384.319 191.734 384.523 188.413 384.64 185.092C384.756 181.771 384.814 178.711 384.814 175.915C384.814 173.409 384.814 170.903 384.814 168.398C384.814 165.892 384.756 163.329 384.64 160.707ZM446.695 134.224C448.735 132.184 450.803 130.116 452.901 128.018C454.999 125.862 457.038 123.619 459.019 121.288C461 118.957 462.836 116.539 464.525 114.034C466.273 111.47 467.818 108.76 469.158 105.905C469.449 105.264 469.857 104.798 470.381 104.507C470.906 104.157 471.488 103.982 472.129 103.982C473.12 103.982 473.907 104.332 474.489 105.031C475.13 105.73 475.451 106.517 475.451 107.391C475.451 107.857 475.363 108.294 475.188 108.702C473.382 112.49 471.314 115.957 468.983 119.103C466.652 122.25 464.205 125.25 461.641 128.105C459.077 130.902 456.484 133.612 453.862 136.234C451.24 138.914 448.735 141.595 446.346 144.275C446.113 148.295 446.113 152.316 446.346 156.336C446.579 160.415 446.695 164.727 446.695 169.272C446.695 173.001 446.579 176.73 446.346 180.459C446.113 184.189 445.734 187.743 445.209 191.123C444.685 194.56 443.957 197.765 443.024 200.737C442.15 203.708 441.014 206.272 439.616 208.428C438.217 210.642 436.586 212.361 434.721 213.585C432.857 214.867 430.672 215.508 428.166 215.508C424.029 215.508 420.853 214.08 418.639 211.225C416.425 208.37 415.318 204.379 415.318 199.251C415.318 196.454 415.609 193.453 416.192 190.249C416.833 187.044 417.707 183.722 418.814 180.285C419.921 176.905 421.232 173.467 422.747 169.971C424.32 166.475 426.01 163.066 427.816 159.745C429.623 156.424 431.546 153.248 433.585 150.218C435.624 147.247 437.693 144.537 439.791 142.09C439.907 139.293 440.024 136.38 440.14 133.35C440.315 130.378 440.49 127.61 440.665 125.046C439.15 127.727 437.256 129.883 434.983 131.514C432.769 133.146 430.322 133.961 427.642 133.961C423.213 133.961 419.746 132.476 417.241 129.504C414.735 126.532 413.482 122.453 413.482 117.268C413.482 113.48 413.832 110.042 414.531 106.954C415.289 103.808 416.075 101.127 416.891 98.9131C417.765 96.6406 418.552 94.9217 419.251 93.7563C419.95 92.5327 420.3 91.95 420.3 92.0083C420.941 91.0177 421.844 90.5225 423.009 90.5225C424 90.5225 424.786 90.8721 425.369 91.5713C426.01 92.2122 426.331 92.9697 426.331 93.8438C426.331 94.4847 426.156 95.0674 425.806 95.5918C425.864 95.5335 425.573 96.0288 424.932 97.0776C424.349 98.0682 423.679 99.5249 422.922 101.448C422.223 103.371 421.553 105.672 420.912 108.353C420.329 111.033 420.038 113.975 420.038 117.18C420.038 120.385 420.62 122.89 421.786 124.697C422.951 126.503 424.845 127.406 427.467 127.406C430.788 127.406 433.789 124.959 436.469 120.064C439.15 115.112 441.422 107.945 443.287 98.5635C443.403 97.806 443.753 97.1942 444.335 96.728C444.918 96.2036 445.617 95.9414 446.433 95.9414C447.365 95.9414 448.152 96.2619 448.793 96.9028C449.434 97.5438 449.754 98.3304 449.754 99.2627C449.754 99.4375 449.638 100.486 449.405 102.409C449.172 104.274 448.88 106.779 448.531 109.926C448.239 113.072 447.919 116.743 447.569 120.938C447.22 125.076 446.928 129.504 446.695 134.224ZM439.703 152.753C437.081 156.54 434.663 160.532 432.449 164.727C430.293 168.922 428.428 173.089 426.855 177.226C425.282 181.363 424.058 185.325 423.184 189.112C422.31 192.9 421.873 196.279 421.873 199.251C421.873 202.281 422.368 204.641 423.359 206.331C424.349 208.079 425.923 208.953 428.079 208.953C430.001 208.953 431.691 207.991 433.148 206.068C434.663 204.204 435.916 201.523 436.906 198.027C437.955 194.531 438.742 190.278 439.266 185.267C439.791 180.314 440.053 174.749 440.053 168.573C440.053 166.067 439.994 163.533 439.878 160.969C439.82 158.405 439.761 155.666 439.703 152.753Z" fill="black"/>
                    </svg>

                </a>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <h6>
                                Home
                            </h6>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <h6>
                                Create
                            </h6>
                        </a>
                    </li>
                </ul>
                
            </div>
        </nav>
    )
}

export default Navbar
