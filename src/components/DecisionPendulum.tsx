import React, { useState, useEffect } from 'react';
import { Box, Typography, Modal, Paper } from '@mui/material';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const decisions = [
  { text: "Yesssss 💪 ! Do it! ✨", emoji: "👍" },
  { text: "Nope no no no, bad idea! 🚫", emoji: "👎" },
  { text: "Maybe... try again? 🤔", emoji: "🤷" },
  { text: "Ask your cat! 😺", emoji: "🐱" },
  { text: "The stars say no... but who believes in stars? 🌟", emoji: "⭐" },
  { text: "Do it tomorrow (we all know you won't) 😴", emoji: "📅" },
  { text: "Better flip a coin... oh wait, that's basically me! 🎲", emoji: "🎲" }
];

export const DecisionPendulum: React.FC<Props> = ({ isOpen, onClose }) => {
  const [swingDegree, setSwingDegree] = useState(0);
  const [isSwinging, setIsSwinging] = useState(false);
  const [decision, setDecision] = useState<string | null>(null);
  const [bananaPosition, setBananaPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen) {
      startSwinging();
    } else {
      setDecision(null);
      setSwingDegree(0);
      setIsSwinging(false);
    }
  }, [isOpen]);

  const startSwinging = () => {
    setIsSwinging(true);
    setDecision(null);
    let degree = 60;
    let direction = -1;
    let swings = 0;
    let speed = 150;
    const totalSwings = 8 + Math.floor(Math.random() * 6);

    const swing = () => {
      if (swings >= totalSwings) {
        setIsSwinging(false);
        const randomDecision = decisions[Math.floor(Math.random() * decisions.length)];
        setDecision(randomDecision.text);
        return;
      }

      const progress = swings / totalSwings;
      const amplitude = 60 - (progress * 40);
      const randomVariation = (Math.random() - 0.5) * 10;
      degree = direction * (amplitude + randomVariation);
      speed = 150 + (progress * 250);

      direction *= -1;
      swings++;
      setSwingDegree(degree);
      setTimeout(swing, speed);
    };

    swing();
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Paper 
        sx={{ 
          position: 'relative',
          width: '100%',
          maxWidth: 800,
          height: 500,
          p: 3,
          outline: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: '#1a1a1a',
          overflow: 'hidden',
          mx: 2
        }}
      >
        <Typography variant="h4" sx={{ color: '#fff', mb: 4 }}>
          🔮 The Magic Pendulum 🔮
        </Typography>
        
        <Box sx={{ 
          position: 'relative',
          width: '100%',
          height: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* Left Dancing Banana */}
          <Box
            component="img"
            src="https://media.tenor.com/4_E21LSI0ogAAAAj/banana-cheerer.gif"
            sx={{
              position: 'absolute',
              left: '60px',
              height: '100px',
              transform: 'scaleX(-1)',
              filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.5))'
            }}
          />

          {/* Pendulum */}
          <Box sx={{
            width: '3px',
            height: '250px',
            background: 'linear-gradient(to bottom, gold, #FFD700)',
            transformOrigin: 'top',
            transform: `rotate(${swingDegree}deg)`,
            transition: 'transform 0.2s ease-in-out',
            position: 'relative'
          }}>
            <Box sx={{
              position: 'absolute',
              bottom: '-25px',
              left: '-12px',
              width: '25px',
              height: '25px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 30% 30%, #FFD700, #FFA500)',
              boxShadow: '0 0 20px gold, 0 0 40px rgba(255, 215, 0, 0.5)',
              animation: 'pulse 1s infinite'
            }} />
          </Box>

          {/* Right Dancing Banana */}
          <Box
            component="img"
            src="https://media.tenor.com/4_E21LSI0ogAAAAj/banana-cheerer.gif"
            sx={{
              position: 'absolute',
              right: '60px',
              height: '100px',
              filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.5))'
            }}
          />
        </Box>

        {/* Decision Text */}
        <Box sx={{ 
          mt: 4,
          mb: 12,
          minHeight: '80px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          {isSwinging ? (
            <Typography sx={{ 
              color: '#fff', 
              fontSize: '2rem',
              textAlign: 'center'
            }}>
              🤔 Thinking...
            </Typography>
          ) : decision ? (
            <Typography sx={{ 
              color: '#fff',
              fontSize: '2rem',
              textAlign: 'center',
              animation: 'fadeIn 0.5s ease-in',
              padding: '0 20px',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
            }}>
              {decision}
            </Typography>
          ) : (
            <Typography sx={{ 
              color: '#fff', 
              fontSize: '2rem',
              textAlign: 'center'
            }}>
              Ask your question...
            </Typography>
          )}
        </Box>

        {/* Updated Ask Again Button */}
        <Box
          onClick={() => !isSwinging && startSwinging()}
          sx={{ 
            position: 'absolute',
            bottom: -20,
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '12px 24px',
            borderRadius: '25px',
            backgroundColor: 'rgba(255, 215, 0, 0.1)',
            border: '2px solid gold',
            color: 'gold',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            zIndex: 1,
            textAlign: 'center',
            minWidth: '300px',
            marginBottom: '25px',
            '&:hover': {
              backgroundColor: 'rgba(255, 215, 0, 0.2)',
              transform: 'translateX(-50%) scale(1.05)',
              boxShadow: '0 0 15px rgba(255, 215, 0, 0.3)'
            }
          }}
        >
          <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', mb: 1 }}>
            🎲 Not convinced?
          </Typography>
          <Typography sx={{ fontSize: '1rem' }}>
            The banana gods grant you another try!
          </Typography>
        </Box>
      </Paper>
    </Modal>
  );
}; 