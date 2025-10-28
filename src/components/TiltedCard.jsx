import fetchCharacters from "../api.js";
import SagaDock from "./Paginator.jsx";
import { useEffect, useState } from "react";
import { motion as Motion } from "motion/react";

const SkeletonCard = () => (
  <div style={cardStyle} className="animate-pulse">
    <div className="w-40 h-60 bg-gray-600 rounded mb-4"></div>
    <div style={textContainerStyle}>
      <div className="h-6 bg-gray-600 rounded w-3/4 mb-2 mx-auto"></div>
      <div className="h-4 bg-gray-600 rounded w-1/2 mx-auto"></div>
    </div>
  </div>
);

const TiltedCard = ({ saga, type }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await fetchCharacters(saga, type);
        setCharacters(Array.isArray(data) ? data : (data.items ?? []));
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [saga, type]);

  if (loading)
    return (
      <div style={gridStyle}>
        {Array(10)
          .fill()
          .map((_, i) => (
            <SkeletonCard key={i} />
          ))}
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={gridStyle}>
      {characters.map((c) => (
        <Motion.div
          key={c.id}
          style={cardStyle}
          whileHover={{ scale: 1.03, rotate: 0.5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Motion.img
            src={c.image}
            alt={c.name}
            style={imgStyle}
            whileHover={{ scale: 1.06 }}
          />
          <div style={textContainerStyle}>
            <h3 style={titleStyle}>{c.name}</h3>
            <p style={subtitleStyle}>{c.race}</p>
          </div>
        </Motion.div>
      ))}
    </div>
  );
};
const gridStyle = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  gap: 24,
};

const cardStyle = {
  flex: "1 1 200px",
  maxWidth: 300,
  minWidth: 250,
  boxSizing: "border-box",
  background: "#373737",
  borderRadius: 12,
  padding: 12,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const imgStyle = { width: "160px", height: "230px", objectFit: "contain" };

const textContainerStyle = { marginTop: "8px", textAlign: "center" };

const titleStyle = {
  color: "orange",
  fontSize: "20px",
  margin: 0,
  fontFamily: "Sayan Sans",
};

const subtitleStyle = {
  fontFamily: "Sayan Sans",
  color: "#999999",
  fontSize: "14px",
  margin: "4px 0 0",
};

export default TiltedCard;
