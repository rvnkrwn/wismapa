import { useEffect } from "react";
import DwidiyoHanungVideo from "../../assets/videos/pexels-dwidiyo-hanung-15052973-3840x2160-60fps.mp4";
import AOS from "aos"
import "aos/dist/aos.css"
import { Link } from "react-router-dom";

export default function Home() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	},[])
  return (
    <div>
      <div className="card w-full mx-auto rounded-none">
        <figure className="">
          <video autoPlay muted playsInline loop controls={false}>
            <source src={DwidiyoHanungVideo} type="video/mp4" />
          </video>
          <figcaption className="absolute bottom-2 right-2 text-xs text-slate-400">
            Video oleh Dwidiyo Hanung
          </figcaption>
        </figure>
        <div className="hero h-full sm:p-4 absolute bg-base-200/30">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="hidden lg:block">
              <label className="swap swap-flip text-6xl cursor-pointer">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />
                <div className="swap-on">
                  <div className="mockup-phone">
                    <div className="camera"></div>
                    <div className="display">
                      <div className="artboard artboard-demo phone-1 text-sm text-center">
                        Selamat Datang
                        <br />
                        DI
                        <br />
                        WISMAPA
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swap-off">
                  <div className="mockup-phone border-primary">
                    <div className="camera"></div>
                    <div className="display">
                      <div className="artboard artboard-demo phone-1">
                        Hi.<p className="absolute bottom-8 text-sm">Tap Here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </label>
            </div>
            <div>
              <h1 className="text-lg sm:text-5xl font-bold">
                Jelajahi, Rasakan, dan Abadikan Petualanganmu!
              </h1>
              <p className="py-3 sm:py-6 text-xs sm:text-lg">
                Menampilkan tempat-tempat wisata menarik dengan cerita dan fakta
                menarik yang akan membuat perjalanan Anda lebih berarti.
              </p>
              <button className="btn btn-primary hidden sm:block">Get Started</button>
              <Link to="/login" className="bg-primary p-2 block w-28 rounded font-normal text-white text-center text-sm sm:hidden">Get Started</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="h-fit w-screen bg-base-300 py-4">
        <div className="title my-8">
          <h1 className="text-center text-xl font-bold capitalize">
            - Destinasi Populer -
          </h1>
        </div>
        <div className="cards flex flex-row-reverse flex-wrap justify-center">
          <div className="card w-96 bg-base-100 shadow-xl m-2" data-aos="flip-left">
            <figure>
              <img
                src="https://images.pexels.com/photos/12278092/pexels-photo-12278092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Bromo
                <div className="badge badge-primary">Populer</div>
                <div className="badge badge-secondary">New</div>
              </h2>
              <p>Gunung berapi spektakuler dengan pemandangan luar biasa.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Alam</div>
                <div className="badge badge-outline">Wisata</div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl m-2" data-aos="flip-left">
            <figure>
              <img
                src="https://images.pexels.com/photos/12278092/pexels-photo-12278092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Bromo
                <div className="badge badge-primary">Populer</div>
              </h2>
              <p>Gunung berapi spektakuler dengan pemandangan luar biasa.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Alam</div>
                <div className="badge badge-outline">Wisata</div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl m-2" data-aos="flip-left">
            <figure>
              <img
                src="https://images.pexels.com/photos/12278092/pexels-photo-12278092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Bromo
                <div className="badge badge-primary">Populer</div>
              </h2>
              <p>Gunung berapi spektakuler dengan pemandangan luar biasa.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Alam</div>
                <div className="badge badge-outline">Wisata</div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl m-2" data-aos="flip-left">
            <figure>
              <img
                src="https://images.pexels.com/photos/12278092/pexels-photo-12278092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Bromo
                <div className="badge badge-primary">Populer</div>
              </h2>
              <p>Gunung berapi spektakuler dengan pemandangan luar biasa.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Alam</div>
                <div className="badge badge-outline">Wisata</div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl m-2" data-aos="flip-left">
            <figure>
              <img
                src="https://images.pexels.com/photos/12278092/pexels-photo-12278092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Bromo
                <div className="badge badge-primary">Populer</div>
              </h2>
              <p>Gunung berapi spektakuler dengan pemandangan luar biasa.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Alam</div>
                <div className="badge badge-outline">Wisata</div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl m-2" data-aos="flip-left">
            <figure>
              <img
                src="https://images.pexels.com/photos/12278092/pexels-photo-12278092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Bromo
                <div className="badge badge-primary">Populer</div>
              </h2>
              <p>Gunung berapi spektakuler dengan pemandangan luar biasa.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Alam</div>
                <div className="badge badge-outline">Wisata</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
