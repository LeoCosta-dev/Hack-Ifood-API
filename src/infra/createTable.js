class CreateTable {
    static init(conexao) {
        this.conexao = conexao
        this.CreateTable()
    }
    static CreateTable(){
        const sql
        this.conexao.query(sql, (e) => {
            if(e){
                console.log(e)
            } else {
                console.log("Tabelas criadas com sucesso!")
            }
        })
    }
}

export default CreateTable