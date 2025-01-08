export interface EmojiConverterResponse {
  originalText: string;
  convertedText: string;
}

export interface EmojiMapping {
  [key: string]: string;
} 