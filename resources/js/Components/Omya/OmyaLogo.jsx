import React from 'react';

/**
 * Logo officiel OMYA INVEST.
 *
 * Les deux fichiers sont dérivés du logo original (public/images/omya-invest.jpeg) :
 * fond détouré en transparence, et déclinaison claire pour les fonds sombres.
 */
const LOGO_DARK = '/images/omya-invest-logo.png';
const LOGO_LIGHT = '/images/omya-invest-logo-light.png';

export default function OmyaLogo({ className = "h-9", light = false, alt = "OMYA INVEST" }) {
  return (
    <span className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src={light ? LOGO_LIGHT : LOGO_DARK}
        alt={alt}
        draggable={false}
        className="h-full w-auto object-contain"
      />
    </span>
  );
}
