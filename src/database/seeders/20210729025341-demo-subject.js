const data = [
  {
    category_id: 5,
    name: "Python",
    description: "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.",
    image: "https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png",
    createdAt: new Date(),
    updatedAt: new Date(),
  }, 
  {
    category_id: 5,
    name: "Node JS",
    description: "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.",
    image: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
    createdAt: new Date(),
    updatedAt: new Date(),
  },  
  {
    category_id: 15,
    name: "HTML",
    description: "HTML abreviação para a expressão inglesa HyperText Markup Language, que significa: Linguagem de Marcação de Hipertexto é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.",
    image: "https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png",
    createdAt: new Date(),
    updatedAt: new Date(),
  }, 
  {
    category_id: 15,
    name: "CSS",
    description: "Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>.",
    image: "https://seeklogo.com/images/C/css-3-logo-AF06D75231-seeklogo.com.png",
    createdAt: new Date(),
    updatedAt: new Date(),
  }, 
  {
    category_id: 25,
    name: "Photoshop",
    description: "Adobe Photoshop é um software caracterizado como editor de imagens bidimensionais do tipo raster desenvolvido pela Adobe Systems.",
    image: "https://seeklogo.com/images/A/adobe-photoshop-logo-7B88D7B5AA-seeklogo.com.png",
    createdAt: new Date(),
    updatedAt: new Date(),
  }, 
  {
    category_id: 25,
    name: "Illustrator",
    description: "Adobe Illustrator é um editor de imagens vetoriais desenvolvido e comercializado pela Adobe Systems.",
    image: "https://seeklogo.com/images/A/adobe-illustrator-logo-775FAF240B-seeklogo.com.png",
    createdAt: new Date(),
    updatedAt: new Date(),
  }, 
  {
    category_id: 35,
    name: "Flutter",
    description: "Flutter é um kit de desenvolvimento de interface de usuário, de código aberto, criado pelo Google, que possibilita a criação de aplicativos compilados nativamente. ",
    image: "https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png",
    createdAt: new Date(),
    updatedAt: new Date(),
  }, 
  {
    category_id: 35,
    name: "React Native",
    description: "React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.",
    image: "https://seeklogo.com/images/R/react-native-logo-221C671C70-seeklogo.com.png",
    createdAt: new Date(),
    updatedAt: new Date(),
  }, 
  {
    category_id: 45,
    name: "AWS",
    description: "Amazon Web Services, também conhecido como AWS, é uma plataforma de serviços de computação em nuvem, que formam uma plataforma de computação na nuvem oferecida pela Amazon.com. Os serviços são oferecidos em várias geográficas distribuídas pelo mundo.",
    image: "https://seeklogo.com/images/A/amazon-web-services-aws-logo-6C2E3DCD3E-seeklogo.com.png",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    category_id: 45,
    name: "Docker",
    description: "Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres.",
    image: "https://seeklogo.com/images/D/docker-logo-CF97D0124B-seeklogo.com.png",
    createdAt: new Date(),
    updatedAt: new Date(),
  }, 
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("subjects", data, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("subjects", null, {});
  },
};
