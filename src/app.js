const customExpress = require('./config/customExpress')

const app = customExpress();
const port = process.env.PORT || 3000;

app.listen(port, async () => {
    console.log(`Acesso ao servidor pelo endereço http://localhost:${port}`)
<<<<<<< HEAD
})
=======
})

const translate = new Translate();

// async function testeTradutor(){
//     let [traduzir] = await translate.translate("sweet", "pt-br")
//     let tradutor = Array.isArray(traduzir)?traduzir:[traduzir];
//     console.log(tradutor)
//     tradutor.forEach((element, i) => {
//         console.log(`${text[i]} => (${target}) ${element}`);
//     });
// }

// testeTradutor()
>>>>>>> 25ff90e697913a162c802fd7a8a71b16bac7be98
