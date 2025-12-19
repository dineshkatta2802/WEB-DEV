import React, { useEffect, useState } from 'react';

export default function ThemeSwitch() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    setIsDark(!(hour >= 6 && hour <= 18));
  }, []);

  return (
    <div
      className="ThemeCon"
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color : isDark ? 'white' : 'black',
        height: '100vh'
      }}
    >
        <h1 style={{textAlign : 'center'}}>{isDark ? 'Dark Mode' : 'Light Mode'}</h1>
    </div>
  );
}
