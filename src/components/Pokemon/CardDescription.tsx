import React from "react";

const Card = ({
  imageUrl = "https://cdn.lazyshop.com/files/5359f73f-843b-4698-b32e-a415fd982659/product/77e06153d5df90b1343918fd699c99cd.jpeg?x-oss-process=style%2Fthumb",
  text = "This is a sample description for the card. This is an pokemon pikachu",
}) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex items-center border p-4 rounded-lg shadow-md">
        <div className="mr-4">
          <img
            src={imageUrl}
            alt="Card Thumbnail"
            className="w-16 h-16 object-cover rounded-full"
          />
        </div>
        <div className="max-w-xs">
          {" "}
          {/* max-w-xs sets the max-width to 256px */}
          {text}
        </div>
      </div>
    </div>
  );
};

export default Card;

// Usage example:
// <Card imageUrl="path_to_your_image.jpg" text="Your custom description." />
