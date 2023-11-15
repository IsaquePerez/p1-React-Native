import React from "react";
import { Text,View,FlatList, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface IImageComponent {
  imageUrl: string
}

const images = [
  { imageUrl: "https://www.animeunited.com.br/oomtumtu/2022/08/portada_hunter-x-hunter-19.jpg", 
    name:"Aventura",
    cor:"#2b662b"
  },
  { imageUrl: "https://modyolo.com/wp-content/uploads/2022/01/2021-the-god-of-highschool-1.jpg",
    name:"Ação",
    cor:"#21615c"
  },
  { imageUrl: "https://www.anroll.net/_next/image?url=https%3A%2F%2Fstatic.anroll.net%2Fimages%2Fanimes%2Fcapas%2Fkono-subarashii-sekai-ni-shukufuku-wo-2.jpg&w=384&q=50",
    name:"Comédia",
    cor:"#1b4377"
  },
  { imageUrl: "https://wallpapercave.com/wp/wp6870321.jpg",
    name:"Drama",
    cor:"#202749"
  },
  { imageUrl: "https://e0.pxfuel.com/wallpapers/799/401/desktop-wallpaper-kaguya-sama-love-is-war-kaguya-shinomiya-miyuki-shirogane.jpg",
    name:"Escolar",
    cor:"#492020"
  },
  { imageUrl: "https://m.media-amazon.com/images/I/714JFlFyBVL.jpg",
    name:"Esporte",
    cor:"#c76000"
  },
  { imageUrl: "https://images6.alphacoders.com/776/776063.png",
    name:"Fantasia",
    cor:"#bb0000"
  },
  { imageUrl: "https://w0.peakpx.com/wallpaper/75/591/HD-wallpaper-anime-my-teen-romantic-comedy-snafu-hachiman-hikigaya.jpg",
    name:"Romance",
    cor:"#9b0081"
  },
  { imageUrl: "https://images3.alphacoders.com/732/thumb-1920-732849.jpg",
    name:"Slice Of Life",
    cor:"#75003b"
  },
  { imageUrl: "https://images.alphacoders.com/132/1328411.png",
    name:"Sobrenatural",
    cor:"#005214"
  },
  { imageUrl: "https://pixelz.cc/wp-content/uploads/2019/05/code-geass-lelouch-vi-britannia-portrait-uhd-4k-wallpaper.jpg",
    name:"Sci-Fi",
    cor:"#9e7f5c"
  },
  { imageUrl: "https://i.pinimg.com/originals/99/77/91/9977919c65ed4376b8ed78f8d10c149d.jpg",
    name:"Shounen",
    cor:"#706e00"
  },
];

const ImageComponent = ({ imageUrl }:IImageComponent) => {
  return (               
      <Image
        source={{ uri: imageUrl }}
        style={styles.cardImage}          
        />       
  );
};

const Categorias = () => {
  return (
    <FlatList
      data={images}
      showsVerticalScrollIndicator={true}
      numColumns={2}
      renderItem={({ item }) => (
        <TouchableOpacity style={{ ...styles.cardCategorias, backgroundColor: item.cor }}>
          <Text style={styles.cardCategoriasText}>{item.name}</Text>
          <ImageComponent imageUrl={item.imageUrl}/>        
        </TouchableOpacity>
      )}
    />
  );
};

export default Categorias;