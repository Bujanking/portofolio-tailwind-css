export default function Home() {
  return (
    <main className="font-poppins">
      {/* Header Start */}
      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a
                href="#home"
                className="font-bold text-lg text-primary block py-6"
              >
                RZY
              </a>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4"
              >
                <span className="w-[30px] h-[2px] my-2 block bg-dark"></span>
                <span className="w-[30px] h-[2px] my-2 block bg-dark"></span>
                <span className="w-[30px] h-[2px] my-2 block bg-dark"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Header End */}

      {/* Hero Section Start */}
      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">
                Halo Semua 👋, saya
                <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">
                  Rizkya Gusnaldy
                </span>
              </h1>
              <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">
                Student & <span className="text-dark">Engeneering</span>
              </h2>
              <p className="font-medium text-secondary mb-20 leading-relaxed">
                Belajar Website programing
              </p>

              <a
                href=""
                className="text-base font-semibold bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
              >
                Hubungi Saya
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="mt-10 relative lg:mt-9 lg:right-0">
                <img
                  src="/avatar.png"
                  alt="Rizkya Gusnaldy"
                  className="max-w-full mx-auto w-80 h-80"
                />
                <span className="absolute -bottom-20 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                  <svg
                    width={400}
                    height={400}
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#14b8a6"
                      d="M49,-55.1C62.5,-47.1,71.7,-30.7,75.1,-13C78.6,4.7,76.3,23.7,66.3,35.7C56.3,47.8,38.7,52.9,22.1,57.7C5.4,62.4,-10.3,66.9,-22.7,62.4C-35.1,57.9,-44.3,44.4,-52.7,30.2C-61.1,16.1,-68.7,1.3,-63.4,-8.1C-58.1,-17.5,-39.8,-21.6,-27.1,-29.7C-14.4,-37.9,-7.2,-50.1,5.3,-56.4C17.8,-62.7,35.5,-63.1,49,-55.1Z"
                      transform="translate(100 100) scale(1.2)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* About Section Start */}
      <section id="about" className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="font-bold uppercase text-primary text-lg mb-3">
                Tentang Saya
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-5 max-w-xl lg:text-4xl">
                Yuk Belajar Ngoding!
              </h2>
              <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                earum labore veritatis aperiam, quae quos magni error,
                voluptatem minima recusandae inventore commodi vel expedita ipsa
                amet quod cupiditate ratione similique magnam. Facere autem
                similique asperiores rerum! Porro praesentium modi ipsa.
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">
                Mari Berteman
              </h3>
              <p className="font-medium text-base text-secondary mb-6 lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, eveniet. Molestias, impedit suscipit. Eligendi,
                deserunt recusandae praesentium odio neque libero temporibus,
                commodi vel sequi tempore fugit consectetur tempora architecto
                aliquam? Ipsam asperiores optio laudantium illo fuga laborum
                inventore tenetur temporibus?
              </p>
              <div className="flex items-center">
                {/* instagram */}
                <a
                  href="https://instagram.com/inihanyamelon_"
                  className="w-9 h-9 mr-3 rounded-full text-slate-300 flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    width={20}
                    className="fill-current"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}

      {/* Portofolio Start */}
      <section id="portofolio" className="pt-36 pb-16 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-primary mb-2">Portofolio</h4>
              <h2 className="font-bold text-dark text-3xl mb-4">
                Projrect terbaru
              </h2>
              <p className="font-medium text-md text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                dolores officiis, accusamus dolorem iusto provident veniam
                pariatur suscipit porro commodi?
              </p>
            </div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img
                  src="/ss2.png"
                  width={600}
                  height={300}
                  alt="landing-page"
                />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Landing Page Z-Index
              </h3>
              <p className="font-medium text-base text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                nam?
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img
                  src="/ss.png"
                  width={600}
                  height={300}
                  alt="landing-page"
                />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Landing Page Z-Index
              </h3>
              <p className="font-medium text-base text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                nam?
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Portofolio End */}

      {/* Footer Start */}
      <footer id="footer" className="bg-dark pt-4 pb-12">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-12 font-medium text-slate-300 md:w-1/3">
              <h2 className="font-bold text-4xl text-white mb-3">Educate</h2>
              <h3 className="font-bold text-2xl mb-2">Hubungi Kami</h3>
              <p>rzkygusnaldy@gmail.com</p>
              <p>Jl. Dr . Setiabudi No. 193</p>
              <p>Bandung</p>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-white text-xl mb-5">
                Kategori Tulisan
              </h3>
              <ul className="text-slate-300">
                <li>
                  <a
                    href=""
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Programing
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Gaya Hidup
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Design
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-white text-xl mb-5">Tautan</h3>
              <ul className="text-slate-300">
                <li>
                  <a
                    href="#home"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="#portofolio"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Portofolio
                  </a>
                </li>
                <li>
                  <a
                    href="#footer"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Footer
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full pt-10 border-t border-slate-700">
            <div className="flex items-center justify-start mb-5">
              {/* instagram */}
              <a
                href="https://instagram.com/inihanyamelon_"
                className="w-9 h-9 mr-3 rounded-full text-slate-300 flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  width={20}
                  className="fill-current"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
            </div>
            <p className="text-medium text-slate-500">&copy; Rizkya Gusnaldy 2023</p>
          </div>
        </div>
      </footer>
      {/* Footer End */}
    </main>
  );
}
