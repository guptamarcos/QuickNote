import HomeCard from "./HomeCard.jsx";

function Hero() {
  return (
    <main className="h-[80vh] mt-[11vh] px-[5rem] py-[4rem] flex gap-[1rem] bg-amber-50">
      <section className="w-[50%] pl-[2rem] bg-[#d1f1f3] flex flex-col justify-center rounded-3xl hover:scale-102 duration-[0.2s]">
        <h1 className="text-5xl leading-[3.25rem] text-[#0F172A]">
          Write, Save, Organize <br /> Instantly with <br />QuickNote.
        </h1>
        <p className="text-2xl mt-3 text-[#334155]">
          A fast, simple, and secure notes app for everyday <br /> thoughts and tasks.
        </p>
      </section>
      <section className="w-[50%] px-[0.5rem] grid grid-rows-2 grid-cols-2 gap-[0.75rem]">
        <HomeCard feature="⚡ Fast Notes" description="Create and save notes instantly with a smooth, distraction-free writing experience." />
        <HomeCard feature="🔍 Search" description="Quickly find any note using real-time search across titles and content." />
        <HomeCard feature="☁️ Cloud Sync" description="Access your notes anytime, anywhere with automatic syncing across devices." />
        <HomeCard feature="🔒 Secure" description="Keep your notes private and protected with modern security standards." />
      </section>
    </main>
  );
}

export default Hero;
