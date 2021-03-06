/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
export default function Example() {
  return (
    <div className="bg-bggray">
      <div className=" mx-auto py-16">
        <div className="bg-bgred shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-12 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-32">
            <div className="lg:self-center pl-20">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">
                  WHAT ARE <span className="font-mono">BOXIES</span> ?{" "}
                </span>
              </h2>
              <p className="mt-4 leading-10 text-white font-medium font-mono">
                "Companionship isn’t just for the real world. Despite their cool
                demeanor, Chibis can get lonely, too, which is why we decided to
                introduce Chibi Frens. They are your Chibi’s partner and a
                necessary guide to the Chibiverse. Pair your Chibi with a Fren
                to maximize the Chibi experience."
              </p>
            </div>
          </div>

          <div className="flex flex-col mt-8">
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 flex space-x-5">
              <img
                className="transform w-24 h-24 translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="/example.jpeg"
                alt="App screenshot"
              />
              <img
                className="transform w-24 h-24 translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="/example.jpeg"
                alt="App screenshot"
              />
              <img
                className="transform w-24 h-24 translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="/example.jpeg"
                alt="App screenshot"
              />
              <img
                className="transform w-24 h-24 translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="/example.jpeg"
                alt="App screenshot"
              />
            </div>
            <div className="mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 flex space-x-5">
              <img
                className="transform w-24 h-24 translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="/example.jpeg"
                alt="App screenshot"
              />
              <img
                className="transform w-24 h-24 translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="/example.jpeg"
                alt="App screenshot"
              />
              <img
                className="transform w-24 h-24 translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="/example.jpeg"
                alt="App screenshot"
              />
              <img
                className="transform w-24 h-24 translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="/example.jpeg"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
