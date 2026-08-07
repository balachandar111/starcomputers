import React, { memo, useMemo } from 'react';
import AppIcon from './AppIcon';
import AppImage from './AppImage';

const AppLogo = memo(function AppLogo({
  src = 'https://res.cloudinary.com/ds4i8pujs/image/upload/v1786106600/ChatGPT_Image_Aug_7__2026__04_29_56_PM-removebg-preview_amsaqf.png',
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