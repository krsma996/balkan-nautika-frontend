


export const NauticalCategories = () => {
      const categories = [
    { title: "Gliseri", icon: "🚤" },
    { title: "Jedrilice", icon: "⛵" },
    { title: "Katamarani", icon: "🛥️" },
    { title: "Motori", icon: "⚙️" },
    { title: "Oprema", icon: "🧰" },
    { title: "Marine", icon: "🏝️" },
    { title: "Servisi", icon: "🔧" },
    { title: "Rent a boat", icon: "📅" },
  ];
    return(
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Istraži kategorije
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="bg-white border border-gray-200 rounded-xl p-6 
                       shadow-sm hover:shadow-lg transition cursor-pointer
                       flex flex-col items-center justify-center"
          >
            <div className="text-4xl mb-3">{cat.icon}</div>
            <p className="text-gray-700 font-medium">{cat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};