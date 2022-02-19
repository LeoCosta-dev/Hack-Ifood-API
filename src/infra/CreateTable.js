class CreateTable {
    static init(connection) {
        this.connection = connection
        //this.CreateTable()
    }
    static CreateTable(){
        const sql = ``
        this.connection.query(sql, (e) => {
            if(e){
                console.log(e)
            } else {
                console.log("Tabelas criadas com sucesso!")
            }
        })
    }
}

module.exports = CreateTable;