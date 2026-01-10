function Footer() {
  return (
    <footer className="h-[20vh] bg-[#1E1B4B] flex flex-col justify-center items-center gap-y-[0.5rem]">
      <h5 className="text-lg text-[#E0E7FF]">© 2026 QuickNote</h5>
      <ul className="flex">
        <li className="text-lg text-[#A5B4FC]">About&nbsp;</li>
        <li className="text-[#A5B4FC] text-lg">| Privacy |</li>
        <li className="text-[#A5B4FC] text-lg">&nbsp; GitHub</li>
      </ul>
      <p className="text-[#C7D2FE] text-lg">Notes without friction</p>
    </footer>
  );
}

export default Footer;
