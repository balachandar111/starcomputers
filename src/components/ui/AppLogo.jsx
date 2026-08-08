import React, { memo, useMemo } from 'react';
import AppIcon from './AppIcon';
import AppImage from './AppImage';

const AppLogo = memo(function AppLogo({
  src = 'https://res.cloudinary.com/ds4i8pujs/image/upload/v1786184621/Gemini_Generated_Image_mch5g7mch5g7mch5-removebg-preview_t7gr0i.png',
  iconName = 'SparklesIcon',
  size = 64,
  className = '',
  onClick,
}) {
  const containerClassName = useMemo(() => {
    const classes = ['flex items-center'];
    if (onClick) classes.push('cursor-pointer hover:opacity-80 transition-opacity');
    if (className) classes.push(className);
    return classes.join(' ');
  }, [onClick, className]);

  return (
    <div className={containerClassName} onClick={onClick}>
      {src ? (
        <AppImage
          src={src}
          alt="Logo"
          width={size}
          height={size}
          className="flex-shrink-0"
          priority={true}
        />
      ) : (
        <AppIcon name={iconName} size={size} className="flex-shrink-0" />
      )}
    </div>
  );
});

export default AppLogo;