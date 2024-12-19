function FollowUp() {
  return (
    <section className="mx-auto flex flex-col items-center justify-center gap-10 bg-white px-3 py-16 sm:px-6 md:px-16">
      <h2 className="text-center font-header text-4xl font-bold tracking-wider text-stone-600">
        Want to be industry leader in digital marketing?
      </h2>
      <a
        className="rounded-lg bg-[#004D40] px-6 py-3 text-lg font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:bg-[#00352d] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#45a049] focus:ring-offset-2 focus:ring-offset-slate-50"
        href="#form"
      >
        Get your E-Book NOW!!!
      </a>
      <img
        src="/assets/followUp.svg"
        alt="Follow up"
        className="mt-2 w-[80%] md:w-[50%]"
      />
    </section>
  );
}

export default FollowUp;
