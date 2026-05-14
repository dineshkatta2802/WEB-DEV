import React from 'react';

// User data
const user = {
  name: "Dinesh Katta",
  imageUrl: "https://i.pinimg.com/736x/a0/98/f0/a098f01fbde165937ca71e0ff8cfbe27.jpg",
  imageSize: 400,
  imageBorder: "50%", 
  objectFit: "cover"
};

export default function Component() {
  return (
    <>
      {/* Curly braces used to insert JS value */}
      <h1>{user.name}</h1>

      {/* Curly braces used to insert JS in attributes */}
      <img
        src={user.imageUrl} // JS variable inside {}
        alt={`Photo of ${user.name}`} // String + JS inside {}
        style={{
          width: user.imageSize,         // JS values for styles
          height: user.imageSize,
          borderRadius: user.imageBorder,
          objectFit: user.objectFit
        }}
      />
    </>
  );
}
