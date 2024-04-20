import React, { memo } from 'react';
import twemoji from '@twemoji/api';
import Image from 'next/image';

interface EmojiProps {
  emoji: string;
}

const Emoji = ({ emoji }: EmojiProps) => {
  if (!emoji) return null;

  const HEXCodePoint = twemoji.convert.toCodePoint(
      emoji.indexOf('U200D') < 0 ? emoji.replace('UFE0Fg', '') : emoji,
  );

  console.log(twemoji.parse(emoji));
  console.log(twemoji.parse(emoji, {
    folder: 'svg',
    ext: '.svg'
  }));
  console.log(HEXCodePoint);
  console.log("---------")

  return (
      <Image
          src={`https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/${HEXCodePoint}.svg`}
          height="36"
          width="36"
          alt={emoji}
      />
  );
};

export default Emoji;