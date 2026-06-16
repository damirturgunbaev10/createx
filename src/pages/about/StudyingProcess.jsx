import React from "react";
import AboutImg3 from "../../assets/AboutImg3.svg";

function StudyingProcess() {
  const steps = [
    {
      step: "STEP 1",
      title: "Watching online video lectures",
      desc: "Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.",
    },
    {
      step: "STEP 2",
      title: "Passing test",
      desc: "Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, sollicitudin egestas laoreet etiam.",
    },
    {
      step: "STEP 3",
      title: "Curator's feedback",
      desc: "Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis.",
    },
    {
      step: "STEP 4",
      title: "Corrections if needed",
      desc: "Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-[1230px] mx-auto flex flex-col space-y-12">
        <div>
          <span className="text-xs font-bold tracking-widest text-slate-900 uppercase block mb-2">
            Studying Process
          </span>
          <h2 className="text-4xl font-black text-slate-900">
            That’s how we do it
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col relative border-l-2 border-orange-100 pl-6 ml-2 space-y-8">
            {steps.map((item, idx) => (
              <div key={idx} className="relative flex flex-col space-y-1">
                <div className="absolute -left-[31px] top-1 w-2 h-2 rounded-full bg-[#FF5A30]" />

                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[500px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 w-full min-h-[400px] bg-slate-50 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center p-6">
            <img
              src={AboutImg3}
              alt="Studying Process Illustration"
              className="w-full h-auto max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudyingProcess;
