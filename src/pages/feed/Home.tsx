import * as React from 'react';
import CreatePost from '../../components/post/CreatePost';
import CardPost from '../../components/post/CardPost';


const Home: React.FC = () => {

  const itemsPosts = [
    {
      title: "Netflix",
      time: "20 h",
      url: "/publish/netflix.png",
      following: true,
      text: "hola",
      reactions: 23,
      emojis: [
        "fa-solid fa-heart text-red-500"
      ]
    },
    {
      title: "Disney",
      time: "15 h",
      url: "img.jpg",
      following: false,
      text: "esta publicacion ea para informar de ....",
      reactions: 23,
      emojis: [
        "fa-solid fa-thumbs-up text-blue-500",
        "fa-solid fa-heart text-red-500"
      ]

    },
  ]

  return (
    <div className='w-full'>
      <CreatePost></CreatePost>
      <div className='my-4'></div>

      {itemsPosts.map((item) => {

        return <CardPost key={item.title} following={item.following} url={item.url} time={item.time} title={item.title} emojis={item.emojis} reactions={item.reactions} text={item.text} ></CardPost>
      })}
    </div>
  )
}
export default Home