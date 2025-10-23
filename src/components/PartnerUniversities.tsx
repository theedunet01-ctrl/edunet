import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const PartnerUniversities = () => {
  // Mix UK, Sweden, Finland and Denmark universities in the array
  const universities = [
    // Sweden
    {
      name: "Dalarna University",
      logo: "/uploads/3456ddd1-cc2b-4eef-9000-062c47033981.png",
      country: "Sweden",
    },
    // UK
    {
      name: "University of South Wales",
      logo: "/uploads/247cac56-84e1-481a-8c2b-81974a9fcd3d.png",
      country: "UK",
    },
    // Finland
    {
      name: "Vaasa University",
      logo: "/uploads/e24c1a4c-88fe-4cd1-a4af-a78eb74aefdb.png",
      country: "Finland",
    },
    // DENMARK
    {
      name: "Aarhus University",
      logo: "/uploads/6c44f49d-1bc0-4adc-8da3-01fbaca17b66.png",
      country: "Denmark",
    },
    {
      name: "University of Copenhagen",
      logo: "/uploads/d8726199-fecd-420d-a918-45c35205d3f8.png",
      country: "Denmark",
    },
    {
      name: "Niels Brock",
      logo: "/uploads/359c9201-523f-4d7d-aa36-7836e2dd86b8.png",
      country: "Denmark",
    },
    {
      name: "IT University of Copenhagen",
      logo: "/uploads/8005edbb-bec8-493c-82dc-e706363aa188.png",
      country: "Denmark",
    },
    {
      name: "Roskilde University",
      logo: "/uploads/b6eeabdd-a42b-4867-8d00-680c22a1ba41.png",
      country: "Denmark",
    },
    {
      name: "Aalborg University",
      logo: "/uploads/6114280d-1fdb-43b1-8581-ef15e11e7637.png",
      country: "Denmark",
    },
    {
      name: "Denmark Technical College",
      logo: "/uploads/06629f99-a435-48d5-a506-63ffd8f75dff.png",
      country: "Denmark",
    },
    {
      name: "Absalon University College",
      logo: "/uploads/0935f251-4850-403c-a0ba-1d299cf2322f.png",
      country: "Denmark",
    },
    {
      name: "DTU Technical University of Denmark",
      logo: "/uploads/5364ab3a-b776-43db-b290-14ccb7a52d89.png",
      country: "Denmark",
    },
    {
      name: "International Business Academy",
      logo: "/uploads/1ba90b9f-1c7d-4a69-b918-c4b65a081559.png",
      country: "Denmark",
    },
    // Sweden
    {
      name: "Stockholm School of Economics",
      logo: "/uploads/74b76b9e-6dbe-478b-bbbf-cc32f6dd46d8.png",
      country: "Sweden",
    },
    // UK
    {
      name: "Keele University",
      logo: "/uploads/a3e30b3e-c7f6-442b-82b4-ddf2142e4f04.png",
      country: "UK",
    },
    // Finland
    {
      name: "University of Helsinki",
      logo: "/uploads/99fdd036-46bb-4bae-b027-5a162f731106.png",
      country: "Finland",
    },
    // Sweden
    {
      name: "Örebro University",
      logo: "/uploads/5670c754-6f40-4e6f-b47e-2297694b3ae4.png",
      country: "Sweden",
    },
    // UK
    {
      name: "Glasgow Caledonian University",
      logo: "/uploads/31ddf8f5-36fe-4dac-a40f-f44a52df9dc5.png",
      country: "UK",
    },
    // Finland
    {
      name: "HAMK Häme University of Applied Sciences",
      logo: "/uploads/7f15aee5-fabf-4a4e-95f6-46c5d69ecdd9.png",
      country: "Finland",
    },
    // Sweden
    {
      name: "Umeå University",
      logo: "/uploads/663ab48e-8494-43aa-b5bd-ea98baa19748.png",
      country: "Sweden",
    },
    // UK
    {
      name: "University of Northampton",
      logo: "/uploads/e1624d3b-a530-4c50-802a-4690b8b7563c.png",
      country: "UK",
    },
    // Finland
    {
      name: "Turku University of Applied Sciences",
      logo: "/uploads/0ced8074-1c80-4da8-9d80-ca1774965449.png",
      country: "Finland",
    },
    // Sweden
    {
      name: "Linköping University",
      logo: "/uploads/e67f42a2-b734-4ea6-bd54-7c35de5e9a8b.png",
      country: "Sweden",
    },
    // UK
    {
      name: "De Montfort University Leicester",
      logo: "/uploads/7d9a36e9-0ccd-4d7d-928e-7fb05bf8cc98.png",
      country: "UK",
    },
    // Finland
    {
      name: "JAMK University of Applied Sciences",
      logo: "/uploads/7743ebe1-a599-4843-ba01-72e44f0d0938.png",
      country: "Finland",
    },
    // Sweden
    {
      name: "University of Gothenburg",
      logo: "/uploads/82f3606e-d643-4138-90f3-06c0181dc1a8.png",
      country: "Sweden",
    },
    // UK
    {
      name: "University of Kent",
      logo: "/uploads/f55123c1-f18e-45c4-a24f-a96627ec4f69.png",
      country: "UK",
    },
    // Finland
    {
      name: "Tampere University of Applied Sciences",
      logo: "/uploads/8dfdbe1b-a5de-4f9f-a759-b1afb2c961f6.png",
      country: "Finland",
    },
    // Sweden
    {
      name: "Stockholm University",
      logo: "/uploads/93ba8399-aad6-4316-a5bf-45878b88e47e.png",
      country: "Sweden",
    },
    // UK
    {
      name: "London Metropolitan University",
      logo: "/uploads/0f14546f-295f-4d7c-b076-43ea2f8eecf6.png",
      country: "UK",
    },
    // Finland
    {
      name: "Åbo Akademi University",
      logo: "/uploads/83bde704-12c5-4d89-8c5f-29bd70dd41e3.png",
      country: "Finland",
    },
    // Sweden
    {
      name: "Uppsala University",
      logo: "/uploads/3fc5fa3a-1a48-4864-a6a5-62e12fb74198.png",
      country: "Sweden",
    },
    // UK
    {
      name: "University of Bristol",
      logo: "/uploads/9b91cc60-5bca-4bb0-bf6e-bdca181106e6.png",
      country: "UK",
    },
    // Finland
    {
      name: "University of Eastern Finland",
      logo: "/uploads/3a2d66e4-e3d7-402e-aa84-487e42c3254f.png",
      country: "Finland",
    },
    // Sweden
    {
      name: "Lund University",
      logo: "/uploads/7a0da80b-90a7-410b-8f81-795b6317f5fd.png",
      country: "Sweden",
    },
    // UK
    {
      name: "University of Birmingham",
      logo: "/uploads/0a94340e-7e62-463b-a51d-459f3774132e.png",
      country: "UK",
    },
    // Finland
    {
      name: "Centria University of Applied Sciences",
      logo: "/uploads/9cdea373-aca0-4cb2-84f3-eaecde1813a0.png",
      country: "Finland",
    },
    // Sweden
    {
      name: "KTH Royal Institute of Technology",
      logo: "/uploads/aee7ffb9-78e2-434a-84e1-879761da7a90.png",
      country: "Sweden",
    },
    // UK
    {
      name: "University of Lincoln",
      logo: "/uploads/ae46ad6b-a951-4ce3-96de-578528d55f12.png",
      country: "UK",
    },
    // Finland
    {
      name: "Oulu University of Applied Sciences",
      logo: "/uploads/58f3d89d-9051-4a7b-9dba-2f6518d7eb5e.png",
      country: "Finland",
    },
    // ... rest of UK universities ...
    {
      name: "University of Sheffield",
      logo: "/uploads/ff82981b-3cfa-4718-a6a4-5a01c1efe6e3.png",
      country: "UK",
    },
    {
      name: "University of Bedfordshire",
      logo: "/uploads/625ac7d6-155c-414a-b8ca-1dae35b35274.png",
      country: "UK",
    },
    {
      name: "Anglia Ruskin University",
      logo: "/uploads/555a0987-3ae6-4331-9e8f-81064e7a0755.png",
      country: "UK",
    },
    {
      name: "Teesside University",
      logo: "/uploads/fba90eb2-a835-489a-b723-aa00b59c591f.png",
      country: "UK",
    },
    {
      name: "Swansea University",
      logo: "/uploads/a4e69698-1176-4b4b-8a59-1848f5aa0e8a.png",
      country: "UK",
    },
    {
      name: "University of the West of England",
      logo: "/uploads/56cfd1e0-8620-4121-b775-3239dcccff23.png",
      country: "UK",
    },
    {
      name: "Middlesex University",
      logo: "/uploads/ea9c0727-a55d-48eb-a4a1-d8bb5ba984c8.png",
      country: "UK",
    },
    {
      name: "University of Wolverhampton",
      logo: "/uploads/346a9ecb-c699-4df0-a23d-619ebb3b7eba.png",
      country: "UK",
    },
    {
      name: "London South Bank University",
      logo: "/uploads/b676fcc0-375b-4b72-9686-9cee89989212.png",
      country: "UK",
    },
    {
      name: "Ulster University",
      logo: "/uploads/9eff8656-ce8c-4ba1-836a-f64cb5ecccd2.png",
      country: "UK",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false })
  );

  return (
    <section className="py-20 bg-gradient-to-br from-red-600 via-red-500 to-red-700">
      <div className="relative max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 drop-shadow-lg">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-red-800 rounded-full mb-6">
            <span className="text-white font-semibold text-sm uppercase tracking-wide">
              Trusted Partners
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow">
            Our Partner Universities
          </h2>
          <p className="text-red-100 max-w-3xl mx-auto text-lg leading-relaxed">
            We have partnerships with prestigious universities across the UK,
            Sweden, Finland, and Denmark to help you achieve your study abroad
            dreams with confidence and excellence
          </p>
        </div>

        <div className="relative bg-red-800 rounded-2xl shadow-xl p-8 border border-red-700">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {universities.map((university, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="group flex flex-col items-center p-6 bg-gradient-to-b from-red-700 to-red-800 rounded-xl hover:shadow-lg transition-all duration-300 h-full border border-red-600 hover:border-red-400">
                    <div className="w-24 h-24 mb-6 flex items-center justify-center bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      <img
                        src={university.logo}
                        alt={`${university.name} logo`}
                        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80`;
                        }}
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-white text-center mb-2 leading-tight group-hover:text-red-100 transition-colors">
                      {university.name}
                    </h3>
                    <span className="text-xs text-red-200 bg-red-900 px-3 py-1 rounded-full">
                      {university.country}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-800 to-red-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join These Prestigious Institutions?
            </h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Take the first step towards your international education journey
              with our expert guidance
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-red-800 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Application Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerUniversities;
