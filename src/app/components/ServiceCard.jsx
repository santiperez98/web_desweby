// components/ServiceCard.js
export default function ServiceCard({ title, description, icon }) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
        <div className="flex justify-center text-4xl">{icon}</div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
  