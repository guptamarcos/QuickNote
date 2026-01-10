function Card({ feature, description }) {
  return (
    <div className="bg-[#FFFFFF] p-[1rem] rounded-3xl border border-[#CBD5F5] hover:cursor-pointer hover:">
      <h6 className="text-3xl font-bold text-[#0F172A]">{feature}</h6>
      <p className="text-lg pt-[0.5rem] text-[#475569]">{description}</p>
    </div>
  );
}

export default Card;
