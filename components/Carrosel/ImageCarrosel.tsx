import React from "react";
import { FlatList, Image, TouchableOpacity } from "react-native";

interface IImageComponent {
  imageUrl: string
}
const images = [
  { imageUrl: "https://i.pinimg.com/originals/b3/2a/d4/b32ad4659db81ea162ec567622b72802.png",
    name:"Shakugan no Shana" ,
    descricao:"Ep - 1"
  },
  { imageUrl: "https://wallpapercave.com/wp/wp6870321.jpg" },
  { imageUrl: "https://modyolo.com/wp-content/uploads/2022/01/2021-the-god-of-highschool-1.jpg" },
  { imageUrl: "https://m.media-amazon.com/images/I/714JFlFyBVL.jpg" }
];

const ImageCarrosel = ({ imageUrl }:IImageComponent) => {
  return (
    <TouchableOpacity>
      <Image
        source={{ uri: imageUrl }}
        style={{ width: 125, height: 125, borderRadius: 10, marginRight:5, }}
        />
    </TouchableOpacity>
  );
};

const Carousel = () => {
  return (
    <FlatList
      data={images}
      horizontal={true}
      renderItem={({ item }) => (
        <ImageCarrosel imageUrl={item.imageUrl} />
      )}
    />
  );
};

export default Carousel;