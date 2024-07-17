import Footer from '../components/Footer';
import { useRef } from 'react';

function Plan() {
  const scrollToPlan = useRef();
  const scrollToMap = useRef();

  function scrollDown() {
    scrollToPlan.current.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollUp() {
    scrollToMap.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <>
      <div className="overflow-hidden bg-white">
        <div className="CONTAINER 1">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
              <div>
                <div className="mt-6">
                  <div className="flex gap-1 mb-3">
                    <img
                      src="https://img.icons8.com/?size=100&id=59795&format=png&color=888888"
                      className="w-5"
                    />
                    <p className="text-sm font-bold tracking-tight text-gray-500">
                      This trip is powered by AI
                    </p>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-black">
                    Your family trip to Riyadh for 5 days
                  </h2>
                  <p className="mt-4 text-lg text-black">
                    Riyadh combines ancient history with modern dynamism,
                    offering a glimpse into Arabia’s past and future. Explore
                    the city's rich heritage through souqs, museums, and
                    historical architecture, and experience its modern side with
                    high-rises and a thriving art scene, highlighted by the
                    Riyadh Art initiative that turns the city into an open-air
                    gallery. Don't miss Riyadh Season, featuring themed zones
                    like Boulevard City and the Riyadh Zoo, open year-round. For
                    dining, try local delicacies at Najd Village restaurant.
                  </p>
                  <div className="flex gap-5">
                    <div className="flex flex-wrap gap-10 mt-6">
                      <div className="flex flex-wrap gap-2 ">
                        <button className="btn btn-sm border-0 rounded-lg bg-[#00bbf9] hover:bg-blue-500 font-semibold text-white shadow-sm ">
                          Replan
                        </button>
                        <button className="btn btn-sm border-0 rounded-lg bg-[#00bbf9] hover:bg-blue-500 font-semibold text-white shadow-sm ">
                          Save as PDF
                        </button>
                        <button className="btn btn-sm border-0 rounded-lg bg-[#00bbf9] hover:bg-blue-500font-semibold text-white shadow-sm ">
                          Share
                        </button>
                      </div>
                      {/* =================== */}
                      <div>
                        <button
                          onClick={scrollDown}
                          className="btn btn-sm border-0 rounded-lg bg-[#00bbf9] hover:bg-blue-500 font-semibold text-white shadow-sm "
                        >
                          See plan
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* */}
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
              <div>
                <div className="mt-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463878.29488595825!2d46.82252880000001!3d24.725191849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2z2KfZhNix2YrYp9i2!5e0!3m2!1sar!2ssa!4v1721057627828!5m2!1sar!2ssa"
                    height="400"
                    className="w-full rounded-xl "
                    ref={scrollToMap}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="CONTAINER 2 mt-5 flex flex-wrap justify-between max-sm:justify-center max-md:justify-center">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0 ">
            <img
              src="https://static.euronews.com/articles/stories/08/29/39/78/1200x675_cmsv2_6a68c23b-fd8c-5c02-ab6d-230e49e9c930-8293978.jpg"
              className="h-80 w-auto rounded-lg max-sm:h-auto max-sm:w-auto"
            />
          </div>
          <div className="flex justify-center">
            <details className="">
              <summary className="text-black bg-white p-4 rounded-lg cursor-pointer shadow-md mb-4">
                <span className="font-semibold text-black">
                  High Rated Hotels
                </span>
              </summary>
              <ul className="ml-8 space-y-4">
                <li>
                  <div className="bg-white p-4">
                    <p className="text-gray-800">
                      Content for Nested Dropdown 1
                    </p>
                    <p className="text-gray-800">
                      Content for Nested Dropdown 1
                    </p>
                    <p className="text-gray-800">
                      Content for Nested Dropdown 1
                    </p>
                    <p className="text-gray-800">
                      Content for Nested Dropdown 1
                    </p>
                    <p className="text-gray-800">
                      Content for Nested Dropdown 1
                    </p>
                    <p className="text-gray-800">
                      Content for Nested Dropdown 1
                    </p>
                  </div>
                </li>
              </ul>
            </details>
            <div className="">
              <details className="mb-2">
                <summary className="text-black bg-white p-4 rounded-lg cursor-pointer shadow-md mb-4">
                  <span className="font-semibold text-black">
                    High Rated Resturants
                  </span>
                </summary>
                <ul className="ml-8 space-y-4">
                  <li>
                    <div className="bg-white p-4">
                      <p className="text-gray-800">
                        Content for Nested Dropdown 1
                      </p>
                      <p className="text-gray-800">
                        Content for Nested Dropdown 1
                      </p>
                      <p className="text-gray-800">
                        Content for Nested Dropdown 1
                      </p>
                      <p className="text-gray-800">
                        Content for Nested Dropdown 1
                      </p>
                      <p className="text-gray-800">
                        Content for Nested Dropdown 1
                      </p>
                      <p className="text-gray-800">
                        Content for Nested Dropdown 1
                      </p>
                    </div>
                  </li>
                </ul>
              </details>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
        <div className="CONTAINER 3">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
              <div>
                <div className="mt-6">
                  <h2
                    ref={scrollToPlan}
                    className="text-3xl font-bold tracking-tight text-black"
                  >
                    Day 1: Immerse yourselves in history and culture
                  </h2>
                  <p className="mt-4 text-lg text-black">
                    <h1 className="text-2xl font-semibold">Morning:</h1> Start
                    your day at the National Museum of Saudi Arabia . This
                    impressive museum offers a comprehensive overview of the
                    country's history and culture, from prehistoric times to the
                    present day. The exhibits are well-displayed and
                    informative, and there are plenty of interactive activities
                    to keep kids engaged.
                  </p>
                  <br />
                  <img
                    src="https://scth.scene7.com/is/image/scth/the-national-museum-of-saudi-arabia-desktop-1:crop-1920x1080?defaultImage=the-national-museum-of-saudi-arabia-desktop-1&wid=1920&hei=1080"
                    alt=""
                    className="rounded-lg"
                  />
                  <p className="mt-4 text-lg text-black">
                    <h1 className="text-2xl font-semibold">Afternoon:</h1> After
                    the museum, head to Diriyah, the UNESCO World Heritage Site
                    that was the first capital of the Saudi dynasty. Explore the
                    ruins of the old mudbrick city, including the restored Salwa
                    Palace . You can also visit the At-Turaif district, a
                    traditional Najdi neighborhood with narrow alleys and
                    mudbrick houses.
                  </p>
                  <br />
                  <img
                    src="https://cdn.arabsstock.com/uploads/images/129574/image-129574-ancient-architectural-engineering-art-walls-salwa-palace-preview.jpg"
                    alt=""
                    className="rounded-lg"
                  />
                  <p className="mt-4 text-lg text-black">
                    <h1 className="text-2xl font-semibold">Evening:</h1> In the
                    evening, enjoy a stroll through the vibrant Al Bujairi
                    district, a historic neighborhood with traditional Najdi
                    houses, restaurants, and shops. Here, you can experience the
                    traditional way of life in Riyadh.{' '}
                    <button
                      onClick={scrollUp}
                      className="ml-2 btn btn-sm border-0 rounded-lg bg-[#00bbf9] hover:bg-blue-500 font-semibold text-white shadow-sm "
                    >
                      Back to map
                    </button>
                  </p>
                  <br />
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-black">
                    Day 2: A day of thrills and excitement
                  </h2>
                  <p className="mt-4 text-lg text-black">
                    <h1 className="text-2xl font-semibold">Morning:</h1>Today,
                    visit the thrilling Thumamah National Park, a vast desert
                    park with sand dunes, camel rides, and off-road driving
                    experiences. This is a great place to get your adrenaline
                    pumping and experience the beauty of the Saudi Arabian
                    desert.
                  </p>
                  <br />
                  <img
                    src="https://zamzam-blog.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/07/Thumamah-National-Park-840x450.jpg"
                    alt=""
                    className="rounded-lg"
                  />
                  <p className="mt-4 text-lg text-black">
                    <h1 className="text-2xl font-semibold">Afternoon:</h1> In
                    the afternoon, head to the Sky Bridge at the Kingdom Centre,
                    the highest point in Riyadh. The views from the bridge are
                    simply stunning, and you can also enjoy a meal at the
                    revolving restaurant located there.
                  </p>
                  <br />
                  <img
                    src="https://image-tc.galaxy.tf/wijpeg-r7tugs3d6dd9idclzqspfkw/sky-bridge-at-kingdom-center_standard.jpg?crop=191%2C0%2C1148%2C861&width=1140"
                    alt=""
                    className="rounded-lg"
                  />
                  <p className="mt-4 text-lg text-black">
                    <h1 className="text-2xl font-semibold">Evening:</h1>In the
                    evening, enjoy a fun-filled evening at Fantasttico Park, a
                    large amusement park with rides, games, and shows for all
                    ages.{' '}
                    <button
                      onClick={scrollUp}
                      className="ml-2 btn btn-sm border-0 rounded-lg bg-[#00bbf9] hover:bg-blue-500 font-semibold text-white shadow-sm "
                    >
                      Back to map
                    </button>
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />{' '}
    </>
  );
}
export default Plan;
