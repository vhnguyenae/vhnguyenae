import React, { useState } from 'react';
import { Box, TextField, Container, CircularProgress, Paper, Typography, Button } from '@mui/material';
import { convertTextToEmoji } from './services/emojiService';
import { DecisionPendulum } from './components/DecisionPendulum';
import { HashRouter } from 'react-router-dom';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [convertedText, setConvertedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPendulumOpen, setIsPendulumOpen] = useState(false);

  const handleConvert = async () => {
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    try {
      const result = await convertTextToEmoji(inputText);
      setConvertedText(result.convertedText);
    } catch (err) {
      console.error('Error converting text:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(convertedText);
  };

  return (
    <HashRouter>
      <Container maxWidth="md" sx={{ pt: 4, pb: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h3" sx={{ color: '#1F2937', mb: 2, fontWeight: 'bold' }}>
            Emoji Text Converter ✨
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#6B7280' }}>
            Type your text below and watch the magic happen! ✨🎉
          </Typography>
        </Box>

        <Paper elevation={3} sx={{ p: 3, borderRadius: 2, bgcolor: '#F8FAFC', mb: 4 }}>
          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="Type something like: I love to smile and laugh when I'm happy!"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            sx={{ mb: 3 }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <Button 
              variant="contained" 
              onClick={handleConvert}
              disabled={isLoading || !inputText.trim()}
              sx={{ 
                bgcolor: '#3B82F6',
                '&:hover': { bgcolor: '#2563EB' },
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontSize: '1.1rem'
              }}
            >
              {isLoading ? 'Converting...' : 'Emojify! ✨'}
            </Button>
          </Box>

          {isLoading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
              <CircularProgress sx={{ color: '#3B82F6' }} />
            </Box>
          )}

          {convertedText && (
            <Paper elevation={2} sx={{ p: 3, bgcolor: '#FFFFFF', borderRadius: 2 }}>
              <Typography variant="h6" sx={{ color: '#1F2937', mb: 2 }}>
                Here's your text emojified! ✨
              </Typography>
              <Typography sx={{ mb: 2, fontSize: '1.1rem', whiteSpace: 'pre-wrap' }}>
                {convertedText}
              </Typography>
              <Button 
                variant="outlined" 
                onClick={handleCopy}
                sx={{ 
                  color: '#3B82F6',
                  borderColor: '#3B82F6',
                  '&:hover': { borderColor: '#2563EB', bgcolor: '#EFF6FF' }
                }}
              >
                Copy to Clipboard 📋
              </Button>
            </Paper>
          )}
        </Paper>

        <Paper 
          elevation={4} 
          sx={{ 
            p: 3, 
            borderRadius: 2, 
            bgcolor: '#FDF4FF',
            border: '2px dashed #9333EA',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.02)',
              boxShadow: '0 8px 16px rgba(147, 51, 234, 0.2)'
            }
          }}
        >
          <Button
            fullWidth
            variant="contained"
            onClick={() => setIsPendulumOpen(true)}
            sx={{
              py: 3,
              bgcolor: '#9333EA',
              background: 'linear-gradient(45deg, #9333EA 30%, #C084FC 90%)',
              color: 'white',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              '&:hover': {
                bgcolor: '#7E22CE',
                background: 'linear-gradient(45deg, #7E22CE 30%, #A855F7 90%)',
              }
            }}
          >
            🎯 Need Help Making a Decision? 🤔
            <br />
            Try the Magic Pendulum! ✨🔮
          </Button>
        </Paper>

        <DecisionPendulum 
          isOpen={isPendulumOpen}
          onClose={() => setIsPendulumOpen(false)}
        />
      </Container>
    </HashRouter>
  );
};

export default App; 