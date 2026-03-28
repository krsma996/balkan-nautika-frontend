export const HowItWorks = () => {
    
  const steps = [
    {
      title: "Pretraži oglase",
      desc: "Pronađi plovila, opremu ili usluge koristeći jednostavnu pretragu.",
    },
    {
      title: "Kontaktiraj direktno",
      desc: "Javi se prodavcu bez posrednika i dogovori detalje.",
    },
    {
      title: "Kupi ili prodaj",
      desc: "Zaključi dogovor brzo i bez komplikacija.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold text-center mb-12">
        Kako funkcioniše
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl p-8
             text-center flex flex-col items-center">
           <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center
                justify-center text-lg font-semibold text-white mb-4 
                ring-4 ring-blue-100">
                {index + 1}
            </div>
         <h3 className="font-medium text-base mb-2">{step.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
        </div>
        ))}
      </div>
    </div>
  );
};