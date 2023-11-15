import React from "react";
import { FlatList, Image, TouchableOpacity, Text, View } from "react-native";
import { styles } from "./styles";

interface IImageComponent {
  imageUrl: string
}
const imagesAlta = [
  { imageUrl: "https://i.pinimg.com/originals/b3/2a/d4/b32ad4659db81ea162ec567622b72802.png" },
  { imageUrl: "https://wallpapercave.com/wp/wp6870321.jpg" },
  { imageUrl: "https://modyolo.com/wp-content/uploads/2022/01/2021-the-god-of-highschool-1.jpg" },
  { imageUrl: "https://m.media-amazon.com/images/I/714JFlFyBVL.jpg" }
];
const imagesEpNovo = [
  { imageUrl: "https://rare-gallery.com/thumbs/345385-Jin-Mori-Jin-Mo-Ri-God-of-High-School-GOH-Anime-God-Form.jpg",
    name:"The god of High School" ,
    descricao:"Ep - 9"
  },
  { imageUrl: "https://animeshelter.com/wp-content/uploads/2020/06/tower-of-god-episode-12-22.png",
    name:"Tower of God" ,
    descricao:"Ep - 12"
  },
  { imageUrl: "https://www.chimichangas.com.br/wp-content/uploads/2019/09/haikyuu-jogo.png",
    name:"Haikyuu" ,
    descricao:"Ep - 16"
  },
  { imageUrl: "https://static.wikia.nocookie.net/shakugan/images/b/bb/Finalep18.jpg/revision/latest/scale-to-width-down/1200?cb=20120611131812",
    name:"Shakugan no Shana" ,
    descricao:"Ep - 18"
  }
];
const imagesAdicionadas = [
  { imageUrl: "https://i.pinimg.com/originals/b3/2a/d4/b32ad4659db81ea162ec567622b72802.png" },
  { imageUrl: "https://wallpapercave.com/wp/wp6870321.jpg" },
  { imageUrl: "https://modyolo.com/wp-content/uploads/2022/01/2021-the-god-of-highschool-1.jpg" },
  { imageUrl: "https://m.media-amazon.com/images/I/714JFlFyBVL.jpg" }
];

const ImageCarroselAlta = ({ imageUrl }:IImageComponent) => {
  return (
    <TouchableOpacity>
      <Image
        source={{ uri: imageUrl }}
        style={styles.cardImageAlta}
        />
    </TouchableOpacity>
  );
};
const ImageCarroselEpNovo = ({ imageUrl }:IImageComponent) => {
  return (
    <TouchableOpacity>
      <Image
        source={{ uri: imageUrl }}
        style={styles.cardImageEpNovo}
        />
    </TouchableOpacity>
  );
};
const ImageCarroselAdicionadas = ({ imageUrl }:IImageComponent) => {
  return (
    <TouchableOpacity>
      <Image
        source={{ uri: imageUrl }}
        style={styles.cardImageAdicionados}
        />
    </TouchableOpacity>
  );
};

export const CarouselAlta = () => {
  return (
    <FlatList
      data={imagesAlta}
      horizontal={true}
      renderItem={({ item }) => (
        <ImageCarroselAlta imageUrl={item.imageUrl} />        
      )}
    />
  );
};
export const CarouselEpNovo = () => {
  return (
    <FlatList
      data={imagesEpNovo}
      horizontal={true}
      renderItem={({ item }) => (
        <View>
          <ImageCarroselEpNovo imageUrl={item.imageUrl} />
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.textDescricao}>{item.descricao}</Text>
        </View>
      )}
    />
  );
};
export const CarouselAdicionados = () => {
  return (
    <FlatList
      data={imagesAdicionadas}
      horizontal={true}
      renderItem={({ item }) => (
        <ImageCarroselAdicionadas imageUrl={item.imageUrl} />
      )}
    />
  );
};

export default [
  CarouselAlta,
  CarouselEpNovo,
  CarouselAdicionados
];