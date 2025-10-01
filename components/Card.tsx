type CardProps = {
  title: string;
  description: string;
};

export default function Card({ title, description }: CardProps) {
  return (
    <div className="rounded-xl bg-gray-800 p-6 text-left shadow-md">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
    </div>
  );
}