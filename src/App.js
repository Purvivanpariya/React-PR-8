import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import { useState } from 'react';

function App() {
  const [movie,setMovie] = useState([
    {
        image : 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/goliyon-ki-raasleela-ram-leela-et00013289-28-10-2020-03-33-11.jpg',
        name : 'Ramleela',
        status : 'Trending',
        category : 'Love'
      },
      {
        image : 'https://rukminim2.flixcart.com/image/416/416/l3bx5e80/poster/w/v/x/small-kgf-poster-kgf-yash-movie-poster-for-room-kgf-chapter-2-original-imageh8s4ydnfddc.jpeg?q=70&crop=false',
        name : 'KGF',
        status : 'Favorite',
        category : 'Action'
      },
      {
        image : 'https://m.media-amazon.com/images/I/51ov9G1JLML._AC_UF894,1000_QL80_.jpg',
        name : 'Pushpa',
        status : 'Trending',
        category : 'Action'
      },
      {
        image : 'https://content.tupaki.com/twdata/2019/0119/reviews/Mr-Majnu-1548407961-1066.jpg',
        name : 'MR Majnu',
        status : 'Upcoming',
        category : 'Love'
      },
      {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWmxgRsokcg_f1JoG6J41_QuKb-zFffNtSJXOp43s04Q&s',
        name : 'Panipat',
        status : 'Favorite',
        category : 'History'
      },
      {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLJiECBU0LEEC7QsH1j8kHRnw6NF_xN9rxXCHF3SVcRE_nh2nTXYdFITtt3M-5Ggf5jfI&usqp=CAU',
        name : 'Nayika Devi',
        status : 'Upcoming',
        category : 'History'
      },
      {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFS7ngY8vUIYfp1EmGeOH5IbLKB_i2Zy5P8mEnPILaIg&s',
        name : 'Rango',
        status : 'Upcoming',
        category : 'Animation'
      },
      {
        image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Sprite_Fright-movie_poster.jpg/424px-Sprite_Fright-movie_poster.jpg',
        name : 'Sprite Fright',
        status : 'Upcoming',
        category : 'Animation'
      },
      {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKz9We1tH4hXF2giUdza7AAgPdKeeiN4dueOtLPvLO_g&s',
        name : 'Soul',
        status : 'Favorite',
        category : 'Animation'
      },
      {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuYyTe4-rXjtQ00ZnOQVyVM3F-eV7e6ENCTbWFYBHiAg&s',
        name : 'Haunted',
        status : 'Trending',
        category : 'Horrer'
      },
      {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQbOtoUQz7AZGMMswPl6JDMlqLP49zBfM0VOlE5TVk_T_OpW1bg7Bl_dzQomDOJUkvPY&usqp=CAU',
        name : 'Vvitch',
        status : 'Favorite',
        category : 'Horrer'
      },
      {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI_eKNmV9yCbBcVQME74Xcq1P4cxU0iaQprc5oo1M7DQ&s',
        name : 'Khichdi 2',
        status : 'Favorite',
        category : 'Drama'
      },
      {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmbfrIyfifBaieMOL2ad_VjX9LrsM1O6gRwL7YlW5oNQ&s',
        name : 'Deni Jigar💗',
        status : 'Trending',
        category : 'Drama'
      },
      {
        image : 'https://i.pinimg.com/1200x/0f/b1/69/0fb169517f06026db75b21eb7fd9e534.jpg',
        name : 'Tom & Jerry',
        status : 'Upcoming',
        category : 'Comedy'
      },
      {
        image : 'https://m.media-amazon.com/images/M/MV5BMTllZDJhMTAtMjhmZi00MzBjLTljMmQtMmNlYTAwYmY0Y2Q0XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
        name : 'Golmaal',
        status : 'Upcoming',
        category : 'Comedy'
      },
      {
        image : 'https://e1.pxfuel.com/desktop-wallpaper/116/448/desktop-wallpaper-poster-of-bollywood-comedy-film-pagalpanti-featuring-anil-kapoor-pagalpanti.jpg',
        name : 'Pagal Panti',
        status : 'Favorite',
        category : 'Comedy'
      },
      {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScwuuh4h8Yyas8B1kqMkb8PzMAboZPXJh_nqWsZvkHcw&s',
        name : 'The Great Indian Family',
        status : 'Trending',
        category : 'Family'
      },
      {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkdNPFa2VckZ5YKvBHNpZMJACRtk6jwegyS_CZHXF8Dw&s',
        name : 'Kahevatlal parivar',
        status : 'Upcoming',
        category : 'Family'
      },
      {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQeLyb4WzE8HkcbQeNUjR4ZuM4uJrnjkOUMEOcsSjsWg&s',
        name : 'Hum sath sath hai',
        status : 'Favorite',
        category : 'Family'
      },
      {
        image : 'https://i.pinimg.com/236x/c9/38/94/c9389494b47b8e5de8e37462cba2d6cc.jpg',
        name : 'Kahani',
        status : '',
        category : 'Thriller'
      },
      {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3prnTf0Fq7krJ3MPGhWyeTwOFvGMsKdF2v_exLrAO3cIZT4lXkRybNEvVWrhUisHCvYI&usqp=CAU',
        name : 'Aakrosh',
        status : 'Trending',
        category : 'Thriller'
      },
      {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS668PllmGRehXtuxam-BGk6jMtUks2BEg6Fi8lOeQM5w&s',
        name : 'Chello Divas',
        status : 'Favorite',
        category : 'Comedy'
      },
])
  return (
    
    <Movie movie={movie} setMovie={setMovie}/>

  );
}

export default App;
