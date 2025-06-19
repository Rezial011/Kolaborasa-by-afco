import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";
import { useState } from "react";

function CardRotate({ children, onSendToBack, sensitivity, cardData, index, totalCards }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const controls = useAnimation();
  
  // More subtle rotation based on drag
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  function handleDragEnd(_, info) {
    const distance = Math.sqrt(info.offset.x ** 2 + info.offset.y ** 2);
    
    if (distance > sensitivity) {
      // Animate card off screen before sending to back
      controls.start({
        x: info.offset.x > 0 ? 300 : -300,
        y: info.offset.y,
        opacity: 0,
        transition: { duration: 0.3 }
      }).then(() => {
        onSendToBack();
        // Reset position after sending to back
        x.set(0);
        y.set(0);
        controls.start({
          x: 0,
          y: 0,
          opacity: 1,
          transition: { duration: 0 }
        });
      });
    } else {
      // Spring back to center
      controls.start({
        x: 0,
        y: 0,
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 30 
        }
      });
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="card-rotate"
      style={{ 
        x, 
        y, 
        rotateX, 
        rotateY,
        zIndex: totalCards - index
      }}
      animate={controls}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.7}
      whileDrag={{ 
        cursor: "grabbing",
        scale: 1.05,
        zIndex: 999
      }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  randomRotation = false,
  sensitivity = 150,
  cardDimensions = { width: 300, height: 200 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false
}) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
          { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
          { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
          { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
          { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
        ]
  );

  const sendToBack = (id) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      if (index !== -1) {
        const [card] = newCards.splice(index, 1);
        newCards.unshift(card);
      }
      return newCards;
    });
  };

  return (
    <div
      className="stack-container"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 1000,
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation
          ? Math.random() * 8 - 4  // Reduced random rotation
          : 0;
        
        const isTopCard = index === cards.length - 1;
        
        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
            cardData={card}
            index={index}
            totalCards={cards.length}
          >
            <motion.div
              className="card"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 3 + randomRotate,
                scale: 1 - (cards.length - index - 1) * 0.05,
                y: -(cards.length - index - 1) * 4,
                x: (cards.length - index - 1) * 2,
                transformOrigin: "center center",
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
                pointerEvents: isTopCard ? 'auto' : 'none', // Only top card is draggable
              }}
            >
              <img
                src={card.img}
                alt={`Gallery image ${card.id}`}
                className="card-image"
                draggable={false}
              />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}