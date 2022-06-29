import http from 'utilities/httpService';

export class WordleService {
  static async guessRandom(guess, seed, size) {
    return http.get(`/random?guess=${guess}${seed ? `&seed=${seed}` : ''}${size ? `&size=${size}` : `&size=5`}`);
  }
}
