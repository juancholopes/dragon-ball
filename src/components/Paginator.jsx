import { motion } from "framer-motion";

const sagas = [
  {name: "Dragon Ball", key: "", type: "dragonball" },
  { name: "Dragon Ball Z", key: "z", type: "dragonball" },
  { name: "Dragon Ball Super", key: "super", type: "dragonball" },
  { name: "Dragon Ball GT", key: "gt", type: "dragonball" },
  { name: "Dragones", key: "", type: "dragons" },
];

function SagaDock({ onSagaChange, currentSaga, onTypeChange, currentType }) {
  return (
    <div className="flex justify-center items-center py-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="flex gap-2 bg-gradient-to-br backdrop-blur-lg rounded-2xl px-3 py-2 shadow-2xl border border-orange-500/30">
          {sagas.map((saga) => (
            <motion.button
              key={saga.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                onSagaChange(saga.key);
                onTypeChange(saga.type);
              }}
              className={`
                relative overflow-hidden
                bg-gradient-to-r from-orange-600 to-red-600
                hover:from-orange-500 hover:to-red-500
                text-white font-semibold
                rounded-xl px-4 py-2
                transition-all duration-300
                shadow-lg hover:shadow-orange-500/50
                border border-orange-400/30
                ${currentSaga === saga.key && currentType === saga.type ? "ring-2 ring-orange-300 opacity-100" : "opacity-60"}
              `}
            >
              <span className="relative z-10">{saga.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Partículas decorativas */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500/20 rounded-full blur-sm -z-10"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-500/20 rounded-full blur-sm -z-10"
        />
      </motion.div>
    </div>
  );
}

export default SagaDock;
