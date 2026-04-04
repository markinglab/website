const stats = [
  {
    value: "200+",
    label: "Universities",
    description: "Trust MarkingLab",
  },
  {
    value: "2M+",
    label: "Assignments",
    description: "Graded to date",
  },
  {
    value: "80%",
    label: "Time Saved",
    description: "On average",
  },
  {
    value: "4.9/5",
    label: "Rating",
    description: "From educators",
  },
];

const Stats = () => {
  return (
    <section className="py-20 hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-medium text-white/90 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-white/60">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
