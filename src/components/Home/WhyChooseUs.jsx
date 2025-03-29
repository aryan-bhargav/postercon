const features = [
    {
      icon: "🏅",
      title: "Quality Guaranteed",
      description: "Each poster is meticulously crafted using premium materials.",
    },
    {
      icon: "🖼️",
      title: "Custom Creations",
      description: "Upload your own images or designs to create personalized posters.",
    },
    {
      icon: "🔥",
      title: "Exclusive Offers",
      description: "We’re constantly rolling out exciting offers to help you save.",
    },
    {
      icon: "🚚",
      title: "Free Shipping",
      description: "Enjoy free delivery on prepaid orders with no extra shipping fees.",
    },
  ];
  
  const WhyChooseUs = () => {
    return (
      <div className="py-10 text-center">
        <h2 className="text-3xl font-bold uppercase tracking-wide">
          Why Choose <span className="text-red-500">Us?</span>
        </h2>
        <div className="flex justify-center flex-wrap gap-10 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="w-60 text-center">
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="text-lg font-bold mt-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default WhyChooseUs;
  