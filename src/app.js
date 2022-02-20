const customExpress = require('./config/customExpress')

const app = customExpress();
const port = process.env.PORT || 3000;

app.listen(port, async () => {
    console.log(`Acesso ao servidor pelo endereço http://localhost:${port}`)
})
