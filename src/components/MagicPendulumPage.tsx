import React, { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import './MagicPendulumPage.css';

const decisions = [
  { text: "Yesssss 💪 ! Do it! ✨", emoji: "👍" },
  { text: "Nope no no no, bad idea! 🚫", emoji: "👎" },
  { text: "Maybe... try again? 🤔", emoji: "🤷" },
  { text: "Ask your cat! 😺", emoji: "🐱" },
  { text: "The stars say no... but who believes in stars? 🌟", emoji: "⭐" },
  { text: "Do it tomorrow (we all know you won't) 😴", emoji: "📅" },
  { text: "Better flip a coin... oh wait, that's basically me! 🎲", emoji: "🎲" }
];

const MagicPendulumPage: React.FC = () => {
  const [swingDegree, setSwingDegree] = useState(0);
  const [isSwinging, setIsSwinging] = useState(false);
  const [decision, setDecision] = useState<string | null>(null);

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
    <div className="magic-pendulum-page">
      <Paper 
        sx={{ 
          width: '100%',
          maxWidth: { xs: '100%', sm: 800 },
          p: { xs: 2, sm: 3 },
          bgcolor: '#1a1a1a',
          borderRadius: 2,
          mx: 'auto',
          mt: 0
        }}
      >
        <Typography 
          variant="h4" 
          sx={{ 
            color: '#fff', 
            mb: { xs: 2, sm: 4 },
            fontSize: { xs: '1.4rem', sm: '2.5rem' },
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            whiteSpace: 'nowrap'
          }}
        >
          🔮 The Magic Pendulum 🔮
        </Typography>
        
        <Box sx={{ 
          position: 'relative',
          width: '100%',
          height: { xs: '200px', sm: '300px' },
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
              left: { xs: '20px', sm: '60px' },
              height: { xs: '60px', sm: '100px' },
              transform: 'scaleX(-1)',
              filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.5))'
            }}
          />

          {/* Pendulum */}
          <Box sx={{
            width: '3px',
            height: { xs: '180px', sm: '250px' },
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
              width: { xs: '20px', sm: '25px' },
              height: { xs: '20px', sm: '25px' },
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
              right: { xs: '20px', sm: '60px' },
              height: { xs: '60px', sm: '100px' },
              filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.5))'
            }}
          />
        </Box>

        {/* Decision Text */}
        <Box sx={{ 
          mt: { xs: 1, sm: 4 },
          mb: { xs: 2, sm: 8 },
          minHeight: { xs: '50px', sm: '80px' },
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
              fontSize: { xs: '1.3rem', sm: '2rem' },
              textAlign: 'center'
            }}>
              🤔 Thinking...
            </Typography>
          ) : decision ? (
            <Typography sx={{ 
              color: '#fff',
              fontSize: { xs: '1.3rem', sm: '2rem' },
              textAlign: 'center',
              animation: 'fadeIn 0.5s ease-in',
              padding: '0 16px',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
            }}>
              {decision}
            </Typography>
          ) : (
            <Typography sx={{ 
              color: '#fff', 
              fontSize: { xs: '1.3rem', sm: '2rem' },
              textAlign: 'center'
            }}>
              Ask your question...
            </Typography>
          )}
        </Box>

        {/* Ask Again Button */}
        <Box
          onClick={() => !isSwinging && startSwinging()}
          sx={{ 
            padding: { xs: '6px 12px', sm: '12px 24px' },
            borderRadius: '20px',
            backgroundColor: 'rgba(255, 215, 0, 0.1)',
            border: '2px solid gold',
            color: 'gold',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textAlign: 'center',
            width: { xs: '85%', sm: 'auto' },
            minWidth: { xs: 'auto', sm: '300px' },
            margin: '0 auto',
            '&:hover': {
              backgroundColor: 'rgba(255, 215, 0, 0.2)',
              transform: 'scale(1.05)',
              boxShadow: '0 0 15px rgba(255, 215, 0, 0.3)'
            }
          }}
        >
          <Typography sx={{ 
            fontSize: { xs: '0.9rem', sm: '1.2rem' }, 
            fontWeight: 'bold', 
            mb: { xs: 0.5, sm: 1 }
          }}>
            🎲 Ask the Magic Pendulum
          </Typography>
          <Typography sx={{ 
            fontSize: { xs: '0.8rem', sm: '1rem' }
          }}>
            Click to get your answer! ✨
          </Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default MagicPendulumPage; 