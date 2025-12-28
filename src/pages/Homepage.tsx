{/* IMPACT Method Section */}
<section className="py-20 bg-gradient-to-br from-[#1A3B5C] via-[#2C5F8D] to-[#1A3B5C] text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        La Méthode <span className="text-[#D4AF37]">IMPACT</span>
      </h2>
      <p className="text-xl text-gray-200 max-w-3xl mx-auto">
        Un framework stratégique en 6 phases pour structurer et optimiser vos négociations
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {impactPhases.map((phase, index) => {
        const Icon = phase.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="p-6 h-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0"
                  style={{ backgroundColor: phase.color }}
                >
                  {phase.letter}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <Icon className="w-5 h-5" />
                    {phase.title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {phase.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="text-center"
    >
      <Link to="/methode">
        <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#1A3B5C]">
          Découvrir la méthode complète
        </Button>
      </Link>
    </motion.div>
  </div>
</section>
