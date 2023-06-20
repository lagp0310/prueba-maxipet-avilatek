interface ServiceCardProps {
  image: JSX.Element;
  title: string;
  description: string;
}

const ServiceCard = ({ image, title, description }: ServiceCardProps) => {
  return (
    <div className="flex flex-1 flex-col items-start gap-y-2.5">
      {image}
      <h1 className="text-black font-semibold text-base">{title}</h1>
      <p className="text-black text-sm font-sans">{description}</p>
    </div>
  );
};

export default ServiceCard;
