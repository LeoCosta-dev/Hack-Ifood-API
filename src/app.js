const customExpress = require('./config/customExpress')
const {Translate} = require('@google-cloud/translate').v2;

const app = customExpress();
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Acesso ao servidor pelo endereço http://localhost:${port}`)
})

const translate = new Translate();

async function testeTradutor(){
    let [traduzir] = await translate.translate("sweet", "pt-br")
    let tradutor = Array.isArray(traduzir)?traduzir:[traduzir];
    console.log(tradutor)
    tradutor.forEach((element, i) => {
        console.log(`${text[i]} => (${target}) ${element}`);
    });
}

testeTradutor()