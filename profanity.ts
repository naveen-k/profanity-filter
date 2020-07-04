import { hindiBadWords } from './data/hindi-bad-words';
import { englishBadWords } from './data/english-bad-words';
import * as _ from 'lodash';
export class Profanity {

  static maskBadWords(message: string, maskWith: string) {
    if (!message || typeof message !== 'string') {
      throw new Error('message passed to the function must be a string');
    }
    const cleanedMessage = message.split(' ').map((word) => {
      if (this.isMessageDirty(word)) {
        if (maskWith && maskWith !== null && typeof maskWith === 'string') {
          return word.replace(/./g, maskWith);
        }
        return word.replace(/./g, '*');
      }
      return word;
    }).join(' ');
    return cleanedMessage;
  }

  static isMessageDirty(message: string) {
    if (!message || typeof message !== 'string') {
      throw new Error('message passed to the function must be a string');
    }
    const badWordsDictionary = _.merge(hindiBadWords, englishBadWords);
    let flag = false;
    message.split(' ').map((word) => {
      flag = badWordsDictionary.hasOwnProperty(word.trim().toLowerCase());
    });
    return flag;
  }
}

