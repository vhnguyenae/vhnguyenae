import { EmojiConverterResponse, EmojiMapping } from '../types/emoji';

// Emoji mapping with commonly used emojis
const emojiMap: EmojiMapping = {
  // Smileys & Emotions
  'smile': '😊',
  'happy': '😊',
  'laugh': '😂',
  'lol': '🤣',
  'rofl': '🤣',
  'sad': '😢',
  'crying': '😭',
  'sob': '😭',
  'tear': '🥲',
  'love': '❤️',
  'kiss': '😘',
  'wink': '😉',
  'cool': '😎',
  'sunglasses': '😎',
  'angry': '😠',
  'mad': '😡',
  'rage': '🤬',
  'surprised': '😮',
  'wow': '😲',
  'shocked': '😱',
  'tired': '😫',
  'sleepy': '😴',
  'sick': '🤒',
  'ill': '🤒',
  'nerd': '🤓',
  'geek': '🤓',
  'silly': '🤪',
  'goofy': '🤪',
  'crazy': '🤪',
  'shush': '🤫',
  'quiet': '🤫',
  'think': '🤔',
  'thinking': '🤔',
  'smart': '🧐',
  'rich': '🤑',
  'hug': '🤗',
  'yum': '😋',
  'delicious': '😋',
  'tongue': '😛',
  'wink-tongue': '😜',
  'zany': '🤪',
  'angel': '😇',
  'devil': '😈',
  'smirk': '😏',
  'relieved': '😌',
  'peaceful': '😌',
  'drool': '🤤',
  'mask': '😷',

  // Gestures & People
  'wave': '👋',
  'hello': '👋',
  'hi': '👋',
  'bye': '👋',
  'clap': '👏',
  'applause': '👏',
  'thumbsup': '👍',
  'yes': '👍',
  'good': '👍',
  'thumbsdown': '👎',
  'no': '👎',
  'bad': '👎',
  'pray': '🙏',
  'please': '🙏',
  'thanks': '🙏',
  'highfive': '🙌',
  'celebration': '🙌',
  'muscle': '💪',
  'strong': '💪',
  'point': '👉',
  'write': '✍️',
  'handshake': '🤝',
  'deal': '🤝',
  'pinch': '🤌',
  'perfect': '👌',
  'ok': '👌',
  'crossed-fingers': '🤞',
  'luck': '🤞',
  'peace': '✌️',
  'victory': '✌️',
  'fist': '✊',
  'power': '✊',

  // Activities & Celebrations
  'party': '🎉',
  'celebrate': '🎊',
  'birthday': '🎂',
  'gift': '🎁',
  'present': '🎁',
  'dance': '💃',
  'dancing': '🕺',
  'sport': '⚽',
  'football': '⚽',
  'basketball': '🏀',
  'baseball': '⚾',
  'tennis': '🎾',
  'volleyball': '🏐',
  'game': '🎮',
  'gaming': '🎮',
  'win': '🏆',
  'trophy': '🏆',
  'medal': '🏅',
  'run': '🏃',
  'running': '🏃',
  'swim': '🏊',
  'swimming': '🏊',
  'cycling': '🚲',

  // Nature & Weather
  'sun': '☀️',
  'sunny': '☀️',
  'moon': '🌙',
  'night': '🌙',
  'sparkle': '✨',
  'rain': '🌧️',
  'rainy': '🌧️',
  'snow': '❄️',
  'snowy': '❄️',
  'cloud': '☁️',
  'cloudy': '☁️',
  'storm': '⛈️',
  'thunder': '⛈️',
  'rainbow': '🌈',
  'fire': '🔥',
  'lit': '🔥',
  'hot': '🔥',
  'water': '💧',
  'drop': '💧',
  'ocean': '🌊',

  // Animals
  'dog': '🐶',
  'puppy': '🐶',
  'cat': '🐱',
  'kitten': '🐱',
  'mouse': '🐭',
  'hamster': '🐹',
  'rabbit': '🐰',
  'bunny': '🐰',
  'fox': '🦊',
  'bear': '🐻',
  'panda': '🐼',
  'koala': '🐨',
  'tiger': '🐯',
  'lion': '🦁',
  'cow': '🐮',
  'pig': '🐷',
  'frog': '🐸',
  'monkey': '🐵',
  'penguin': '🐧',
  'bird': '🐦',
  'duck': '🦆',
  'eagle': '🦅',
  'owl': '🦉',
  'butterfly': '🦋',
  'bee': '🐝',

  // Food & Drink
  'apple': '🍎',
  'banana': '🍌',
  'orange': '🍊',
  'lemon': '🍋',
  'grapes': '🍇',
  'watermelon': '🍉',
  'strawberry': '🍓',
  'peach': '🍑',
  'cherry': '🍒',
  'pineapple': '🍍',
  'pizza': '🍕',
  'burger': '🍔',
  'fries': '🍟',
  'hotdog': '🌭',
  'sandwich': '🥪',
  'taco': '🌮',
  'burrito': '🌯',
  'egg': '🥚',
  'bread': '🍞',
  'cheese': '🧀',
  'meat': '🥩',
  'sushi': '🍣',
  'noodles': '🍜',
  'rice': '🍚',
  'curry': '🍛',
  'icecream': '🍦',
  'cookie': '🍪',
  'chocolate': '🍫',
  'candy': '🍬',
  'coffee': '☕',
  'tea': '🫖',
  'milk': '🥛',
  'beer': '🍺',
  'wine': '🍷',
  'cocktail': '🍸',
  'honey': '🍯',

  // Objects & Tools
  'phone': '📱',
  'mobile': '📱',
  'computer': '💻',
  'laptop': '💻',
  'tv': '📺',
  'camera': '📷',
  'photo': '📸',
  'movie': '🎬',
  'film': '🎬',
  'music': '🎵',
  'note': '🎵',
  'book': '📚',
  'books': '📚',
  'pencil': '✏️',
  'pen': '🖊️',
  'paperclip': '📎',
  'scissors': '✂️',
  'key': '🔑',
  'lock': '🔒',
  'unlock': '🔓',
  'hammer': '🔨',
  'tool': '🔧',
  'wrench': '🔧',
  'gear': '⚙️',
  'battery': '🔋',
  'bulb': '💡',
  'idea': '💡',
  'cash': '💵',
  'card': '💳',
  'mail': '📧',
  'email': '📧',
  'inbox': '📥',
  'outbox': '📤',
  'calendar': '📅',
  'clock': '⏰',
  'time': '⏰',
  'watch': '⌚',

  // Travel & Places
  'home': '🏠',
  'house': '🏠',
  'building': '🏢',
  'office': '🏢',
  'school': '🏫',
  'hospital': '🏥',
  'bank': '🏦',
  'hotel': '🏨',
  'church': '⛪',
  'castle': '🏰',
  'car': '🚗',
  'taxi': '🚕',
  'bus': '🚌',
  'truck': '🚛',
  'bike': '🚲',
  'train': '🚂',
  'airplane': '✈️',
  'flight': '✈️',
  'rocket': '🚀',
  'boat': '⛵',
  'ship': '🚢',
  'anchor': '⚓',
  'earth': '🌍',
  'globe': '🌏',
  'map': '🗺️',
  'beach': '🏖️',
  'mountain': '⛰️',
  'volcano': '🌋',
  'camping': '⛺',
  'tent': '⛺',

  // Common Expressions
  'omg': '😱',
  'wtf': '😱',
  'idk': '🤷',
  'brb': '🏃',
  'afk': '💤',
  'zzz': '💤',
  'asap': '⚡',
  'vip': '👑',
  'top': '🔝',
  'new': '🆕',
  'hmm': '🤔',
  'shh': '🤫',
  'yay': '🎉',
  'oops': '😅',
  'meh': '😕',
  'whatever': '🤷',

  // Country Flags
  'usa': '🇺🇸',
  'us': '🇺🇸',
  'america': '🇺🇸',
  'uk': '🇬🇧',
  'britain': '🇬🇧',
  'england': '🇬🇧',
  'france': '🇫🇷',
  'germany': '🇩🇪',
  'italy': '🇮🇹',
  'spain': '🇪🇸',
  'portugal': '🇵🇹',
  'russia': '🇷🇺',
  'china': '🇨🇳',
  'japan': '🇯🇵',
  'korea': '🇰🇷',
  'vietnam': '🇻🇳',
  'thailand': '🇹🇭',
  'singapore': '🇸🇬',
  'malaysia': '🇲🇾',
  'indonesia': '🇮🇩',
  'australia': '🇦🇺',
  'nz': '🇳🇿',
  'newzealand': '🇳🇿',
  'canada': '🇨🇦',
  'mexico': '🇲🇽',
  'brazil': '🇧🇷',
  'argentina': '🇦🇷',
  'india': '🇮🇳',
  'ireland': '🇮🇪',
  'scotland': '🇬🇧',
  'wales': '🇬🇧',
  'netherlands': '🇳🇱',
  'holland': '🇳🇱',
  'belgium': '🇧🇪',
  'sweden': '🇸🇪',
  'norway': '🇳🇴',
  'denmark': '🇩🇰',
  'finland': '🇫🇮',
  'poland': '🇵🇱',
  'ukraine': '🇺🇦',
  'greece': '🇬🇷',
  'turkey': '🇹🇷',
  'egypt': '🇪🇬',
  'southafrica': '🇿🇦',
  'israel': '🇮🇱',
  'uae': '🇦🇪',
  'saudi': '🇸🇦',
  'philippines': '🇵🇭',
  'switzerland': '🇨🇭',
  'austria': '🇦🇹',

  // Regional Flags
  'eu': '🇪🇺',
  'un': '🇺🇳',

  // General Flag-related
  'flag': '🏁',
  'checkered': '🏁',
  'pride': '🏳️‍🌈',
};

// Cache for storing processed text
const textCache: Map<string, string> = new Map();

export const convertTextToEmoji = async (text: string): Promise<EmojiConverterResponse> => {
  try {
    console.log(`Converting text to emoji: ${text}`);

    // Check cache first
    const cachedResult = textCache.get(text);
    if (cachedResult) {
      console.log('Found in cache:', cachedResult);
      return {
        originalText: text,
        convertedText: cachedResult
      };
    }

    let convertedText = text;
    const words = text.toLowerCase().split(/\b/);
    const uniqueWords = new Set(words);

    // Process each unique word
    for (const word of uniqueWords) {
      if (word.trim()) {  // Skip empty strings and whitespace
        const emoji = emojiMap[word];
        console.log(`Checking word "${word}": ${emoji || 'no emoji found'}`);
        
        if (emoji) {
          // Replace all occurrences of the word with the emoji
          const regex = new RegExp(`\\b${word}\\b`, 'gi');
          convertedText = convertedText.replace(regex, emoji);
        }
      }
    }

    // Cache the result
    textCache.set(text, convertedText);

    return {
      originalText: text,
      convertedText: convertedText
    };
  } catch (error) {
    console.error('Error converting text to emoji:', error);
    return {
      originalText: text,
      convertedText: text
    };
  }
};

// Function to clear text cache if needed
export const clearCache = () => {
  textCache.clear();
}; 