const Address = () => {
  return (
    <>
      <div className="bg-[#f0efeb]">
        <div>
          <p className="text-xl text-[#800000] sm:text-4xl pb-7 sm:pb-10 font-bold font-[Pacifico] text-center pl-3 pr-3">
            Operating Hours
          </p>
          <p className="text-xl sm:text-3xl pb-7 sm:pb-10 font-bold font-[Pacifico] text-center pl-3 pr-3">
            Everyday <br /> 9am - 10pm
          </p>
          <p className="text-xl sm:text-3xl pb-7 sm:pb-10 font-bold font-[Pacifico] text-center pl-3 pr-3">
            Budhana Rd, near Begum Bridge, Chhipiwara, Meerut, Uttar Pradesh
            250002
          </p>
          <div className="flex gap-8 justify-center text-[#800000] sm:text-3xl pb-8 font-bold font-[Pacifico] text-xl">
            <a
              href="tel:+919634737080"
              className="text-[#800000] text-lg font-bold sm:text-3xl hover:text-2xl sm:hover:text-4xl ease-in-out duration-100"
            >
              Call Us
            </a>
            <a
              href="mailto:khushiagarwal3757@gmail.com"
              className="text-[#800000] text-lg font-bold sm:text-3xl hover:text-2xl sm:hover:text-4xl ease-in-out duration-100"
            >
              Mail Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
