// import "./App.css";
import Directory from "../../components/directory/directory.component";

function Home() {
  const categories = [
    {
      id: 1,
      title: "HATS",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "JACKETS",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "SNEAKERS",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "WOMENS",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "MENS",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
    {
      id: 7,
      title: "DOGS",
      imageUrl:
        "https://www.adobe.com/express/feature/image/media_16ad2258cac6171d66942b13b8cd4839f0b6be6f3.png?width=750&format=png&optimize=medium",
    },
    {
      id: 8,
      title: "LEOPARDS",
      imageUrl:
        "https://freepngimg.com/thumb/leopard/5-2-leopard-download-png.png",
    },
    {
      id: 9,
      title: "SAREES",
      imageUrl:
        "https://files.oyebesmartest.com/uploads/large/indian-girl-png-transpatg6qf.png",
    },
    {
      id: 10,
      title: "FLOWERS",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJBgTPwloSonY7MdOitXhm-Yz95pQ4apqwA&usqp=CAU",
    },
  ];

  return <Directory categories={{ categories }} />;
}

export default Home;
